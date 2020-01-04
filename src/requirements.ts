import {CraftStation, Item} from './recipe-type'
import {ThrallTiers, findThrall} from './thrall'
import {itemList, itemMap} from './items'

/**
 * An item paired with a desired count for that item.
 */
export interface ItemGoal {
  item: Item
  count: number
}

/**
 * A number of required items for making a number of items.
 *
 * Each requirement in turn has further requirements.
 */
export interface ItemRequirement extends ItemGoal {
  craftStation: CraftStation
  craftTime: number
  requires: ItemRequirement[]
}

/** Floor an adjusted cost, to a minimum of 1. */
const floorCost = (x: number) => Math.max(Math.floor(x), 1)

/**
 * Given some desired items and the available thralls for crafting items,
 * return a list of required items for getting those items.
 */
export const findItemsRequired = (
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
          (recipe.requires || []).map(ing => ({
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

/**
 * Given the time it takes to craft an item and the total number of items,
 * return a human-redable description of how long it will take to craft the
 * items.
 */
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

/**
 * Given a list of words with numbers for items, convert those words into
 * item goals.
 */
export const parseGoals = (words: string[]): ItemGoal[] => {
  const searchTerms: [number, string][] = []
  let count = 1
  let wordBuffer: string[] = []

  words.forEach(word => {
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

/**
 * An object with human-readable data for item requirements.
 */
interface ItemRequirementDescription {
  /** How deep down the tree the requirement is. */
  level: number
  /** The required item. */
  item: Item
  /** The number if items required. */
  count: number
  /** The time it will take to gather/craft the items. */
  duration: string
  /** The craft station where the item is crafted. */
  craftStation: CraftStation
  /** The time needed to craft one of the items. */
  craftTime: number
}

const describeRequirements = (
  requirementList: ItemRequirement[],
  memo: ItemRequirementDescription[] = [],
  level = 0,
): void => {
  requirementList.forEach((requirement, index) => {
    const {count, item, craftTime, craftStation} = requirement
    const duration = getDuration({craftTime, count})

    memo.push({level, count, item, duration, craftStation, craftTime})
    describeRequirements(requirement.requires, memo, level + 1)
  })
}

/**
 * Given a list of item requirements that form a tree, flatten
 * those requirements into human readable requirements.
 *
 * Two Arrays will be returned. The `descriptions` Array maintains a position
 * the level a requirement is down a tree for printing a tree of
 * requirements, and the `totalDescriptions` Array collects the total
 * required items from all nodes in the tree. Items may be repeated several
 * times in the tree.
 */
export const flattenRequirements = (requirementList: ItemRequirement[]): {
  descriptions: ItemRequirementDescription[]
  totalDescriptions: ItemRequirementDescription[]
} => {
  const descriptions: ItemRequirementDescription[] = []
  describeRequirements(requirementList, descriptions)

  const totals: {[key: string]: ItemRequirementDescription} = {}

  descriptions.forEach(description => {
    const {item} = description

    if (totals[item.id] == null) {
      totals[item.id] = {...description, count: 0, level: 0}
    }

    totals[item.id].count += description.count
  })

  const totalDescriptions = Object.values(totals)
    .sort((a, b) => a.count - b.count)
    .map(description => {
      const {craftTime, count} = description
      description.duration = getDuration({craftTime, count})

      return description
    })

  return {descriptions, totalDescriptions}
}
