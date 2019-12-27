import * as process from 'process'

import {CraftStation, Ingredient, Item, Recipe} from './recipe-type'
import {itemList, itemMap} from './items'

interface Thrall {
  tier: number
  speed: number
  cost: number
}

const thrallMap: {[craftStation in CraftStation]?: Thrall[]} = {
  cauldron: [
    {tier: 1, speed: 0.50, cost: 0.00},
    {tier: 2, speed: 1.00, cost: 0.25},
    {tier: 3, speed: 1.50, cost: 0.25},
    {tier: 4, speed: 2.00, cost: 0.50},
    {tier: 5, speed: 3.00, cost: 0.50},
  ],
  blacksmithBench: [
    {tier: 1, speed: 0.50, cost: 0.00},
    {tier: 2, speed: 1.00, cost: 0.25},
    {tier: 3, speed: 1.50, cost: 0.25},
    {tier: 4, speed: 2.00, cost: 0.50},
    {tier: 5, speed: 2.00, cost: 0.50},
  ],
  armorersBench: [
    {tier: 1, speed: 0.50, cost: 0.00},
    {tier: 2, speed: 1.00, cost: 0.25},
    {tier: 3, speed: 1.50, cost: 0.25},
    {tier: 4, speed: 2.00, cost: 0.50},
    {tier: 5, speed: 3.00, cost: 0.50},
  ],
  carpentersBench: [
    {tier: 1, speed: 0.50, cost: 0.00},
    {tier: 2, speed: 1.00, cost: 0.25},
    {tier: 3, speed: 1.50, cost: 0.25},
    {tier: 4, speed: 2.00, cost: 0.50},
    {tier: 5, speed: 2.00, cost: 0.50},
  ],
  stove: [
    {tier: 1, speed: 0.50, cost: 0.00},
    {tier: 2, speed: 1.00, cost: 0.00},
    {tier: 3, speed: 1.50, cost: 0.00},
    {tier: 4, speed: 2.00, cost: 0.00},
    {tier: 5, speed: 2.00, cost: 0.00},
  ],
  tannery: [
    {tier: 1, speed: 0.50, cost: 0.00},
    {tier: 2, speed: 1.00, cost: 0.00},
    {tier: 3, speed: 1.50, cost: 0.00},
    {tier: 4, speed: 2.00, cost: 0.00},
    {tier: 5, speed: 3.00, cost: 0.00},
  ],
  furnace: [
    {tier: 1, speed: 0.50, cost: 0.00},
    {tier: 2, speed: 1.00, cost: 0.00},
    {tier: 3, speed: 1.50, cost: 0.00},
    {tier: 4, speed: 2.00, cost: 0.00},
    {tier: 5, speed: 3.00, cost: 0.00},
  ],
}

type ThrallTiers = {[craftStation in CraftStation]?: number}

interface ItemGoal {
  item: Item
  count: number
}

interface ItemRequirement extends ItemGoal {
  craftStation: CraftStation
  craftTime: number
  requires: ItemRequirement[]
}

const findThrall = ({craftStation, tier}: {
  craftStation: CraftStation
  tier: number
}): Thrall | undefined =>
  (thrallMap[craftStation] || []).find(thrall => thrall.tier === tier)

/** Floor an adjusted cost, to a minimum of 1. */
const floorCost = (x: number) => Math.max(Math.floor(x), 1)

const findItemsRequired = (
  items: ItemGoal[],
  thrallTiers: ThrallTiers,
): ItemRequirement[] => {
  return items
    .map(({item, count}) => {
      // TODO: Use a better selection strategy for recipes.
      const recipe = item.recipes[0]
      const {craftStation, craftTime} = recipe

      const tier = thrallTiers[craftStation] || 0
      const thrall = findThrall({craftStation, tier})

      const requirement: ItemRequirement = {
        item,
        count,
        craftStation: craftStation,
        craftTime: thrall
          ? floorCost(craftTime - craftTime / (thrall.speed + 1))
          : craftTime,
        requires: findItemsRequired(
          recipe.requires.map(ing => ({
            item: itemMap[ing.itemId],
            count: count * (
              thrall
                ? floorCost(ing.count - ing.count * thrall.cost)
                : ing.count
            ),
          })),
          thrallTiers,
        ),
      }

      return requirement
    })
}

const getDuration = ({craftTime, count}: {
  craftTime: number
  count: number
}): string => {
  const totalCraftTime = craftTime * count
  const seconds = totalCraftTime % 60
  const minutes = Math.floor((totalCraftTime / 60) % 60)
  const hours = Math.floor((totalCraftTime / 60 / 60) % 24)
  const days = Math.floor(totalCraftTime / 60 / 60 / 24)

  const parts = []

  if (days) {
    parts.push(String(days), 'days')
  }

  if (hours) {
    parts.push(String(hours), 'hours')
  }

  if (minutes) {
    parts.push(String(minutes), 'minutes')
  }

  if (seconds) {
    parts.push(String(seconds), 'seconds')
  }

  return parts.join(' ')
}

interface ItemRequirementTotal {
  item: Item
  count: number
  craftTime: number
  craftStation: CraftStation
}

const printTree = (
  requirementList: ItemRequirement[],
  level = 0,
  totalsData: {[key: string]: ItemRequirementTotal} = {},
): void => {
  requirementList.forEach((requirement, index) => {
    for (let i = level; i > 0; --i) {
      process.stdout.write('--')
    }

    const {count, item, craftTime, craftStation} = requirement

    const duration = getDuration({craftTime, count})

    if (index > 0 && level === 0) {
      process.stdout.write('\n')
    }

    process.stdout.write(
      `${level ? ' ' : ''}${count} ${item.name} (${duration})\n`
    )

    if (totalsData[item.id] == null) {
      totalsData[item.id] = {
        item: item,
        craftStation,
        craftTime,
        count: 0,
      }
    }

    totalsData[item.id].count += count

    printTree(requirement.requires, level + 1, totalsData)
  })

  if (level === 0) {
    process.stdout.write('\n')
    process.stdout.write('## Item List ##\n')
    process.stdout.write('\n')

    Object.keys(totalsData)
      .map(key => totalsData[key])
      .sort((a, b) => a.count - b.count)
      .forEach(({item, count, craftTime, craftStation}) => {
        const duration = getDuration({craftTime, count})

        process.stdout.write(`${count} ${item.name} (${duration})\n`)
      })
  }
}

const parseGoals = (): ItemGoal[] => {
  process.argv.slice(2).join(' ')

  const searchTerms: [number, string][] = []
  let count = 0
  let wordBuffer: string[] = []

  process.argv.slice(2).forEach(word => {
    if (/^\d+$/.test(word)) {
      if (wordBuffer.length > 0) {
        searchTerms.push([count, wordBuffer.join(' ')])
        wordBuffer = []
      }

      count = parseInt(word)
    } else {
      wordBuffer.push(word)
    }
  })

  if (wordBuffer.length > 0) {
    searchTerms.push([count, wordBuffer.join(' ')])
  }

  const goals: ItemGoal[] = []

  searchTerms.forEach(term => {
    const lowerCaseTerm = term[1].toLowerCase()
    const characters = term[1].replace(/ /g, '').split('')

    const item = itemList.find(
      item => item.name.toLowerCase() === term[1]
        || (item.aliases && item.aliases.includes(term[1]))
    )
      || itemList.find(item => {
        const itemCharacters = item.name.toLowerCase().split('')

        return itemCharacters.length >= characters.length
          && characters.every(c => itemCharacters.includes(c))
      })

    if (item) {
      goals.push({count: term[0], item})
    }
  })

  return goals
}

const main = (): void => {
  const goals = parseGoals()
  const thrallTiers: ThrallTiers = {
    cauldron: 4,
    blacksmithBench: 4,
    armorersBench: 4,
    carpentersBench: 4,
    stove: 4,
    tannery: 4,
    furnace: 4,
  }
  const tree = findItemsRequired(goals, thrallTiers)

  printTree(tree)
}

main()
