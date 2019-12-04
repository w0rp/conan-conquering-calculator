import * as process from 'process'

type CraftStation = 'gather'
  | 'byHand'
  | 'furnace'
  | 'cauldron'
  | 'tannery'
  | 'blacksmithBench'
  | 'carpentersBench'
  | 'artisansWorktable'
  | 'armorersBench'
  | 'stove'
  | 'dryer'

interface Ingredient {
  itemId: string
  count: number
}

interface Recipe {
  craftStation: CraftStation
  craftTime: number
  requires: Ingredient[]
}

interface Item {
  id: string
  name: string
  aliases?: string[]
  recipes: Recipe[]
}

const itemList: Item[] = [
  // Mining
  {
    id: 'stone',
    name: 'Stone',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
        requires: [],
      },
    ],
  },
  {
    id: 'ironOre',
    name: 'Iron Ore',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
        requires: [],
      },
    ],
  },
  {
    id: 'brimstone',
    name: 'Brimstone',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
        requires: [],
      },
    ],
  },
  {
    id: 'crystal',
    name: 'Crystal',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
        requires: [],
      },
    ],
  },
  {
    id: 'blackIce',
    name: 'Black Ice',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
        requires: [],
      },
    ],
  },
  {
    id: 'wood',
    name: 'Wood',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
        requires: [],
      },
    ],
  },
  // Hides
  {
    id: 'hide',
    name: 'Hide',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
        requires: [],
      },
    ],
  },
  // Things from creatures
  {
    id: 'demonBlood',
    name: 'Demon Blood',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
        requires: [],
      },
    ],
  },
  // Wood
  {
    id: 'dryWood',
    name: 'Dry Wood',
    recipes: [
      {
        craftStation: 'dryer',
        craftTime: 40,
        requires: [
          {itemId: 'wood', count: 0.5},
        ],
      },
    ],
  },
  {
    id: 'resin',
    name: 'Resin',
    recipes: [
      {
        craftStation: 'dryer',
        craftTime: 40,
        requires: [
          {itemId: 'wood', count: 1},
        ],
      },
    ],
  },
  {
    id: 'insulatedWood',
    name: 'Insulated Wood',
    recipes: [
      {
        craftStation: 'carpentersBench',
        craftTime: 10,
        requires: [
          {itemId: 'dryWood', count: 1},
          {itemId: 'resin', count: 2},
        ],
      },
    ],
  },
  // Other Materials
  {
    id: 'tar',
    name: 'Tar',
    recipes: [
      {
        craftStation: 'tannery',
        craftTime: 10,
        requires: [
          {itemId: 'hide', count: 3},
        ],
      },
    ],
  },
  {
    id: 'steelFire',
    name: 'Steel Fire',
    recipes: [
      {
        craftStation: 'cauldron',
        craftTime: 20,
        requires: [
          {itemId: 'tar', count: 2},
          {itemId: 'brimstone', count: 1},
        ],
      },
    ],
  },
  // Metal bars
  {
    id: 'ironBar',
    name: 'Iron Bar',
    recipes: [
      {
        craftStation: 'furnace',
        craftTime: 10,
        requires: [
          {itemId: 'ironOre', count: 2},
        ],
      },
    ],
  },
  {
    id: 'steelBar',
    name: 'Steel Bar',
    recipes: [
      {
        craftStation: 'furnace',
        craftTime: 15,
        requires: [
          {itemId: 'ironBar', count: 5},
          {itemId: 'steelFire', count: 1},
        ],
      },
    ],
  },
  {
    id: 'steelReinforcement',
    name: 'Steel Reinforcement',
    recipes: [
      {
        craftStation: 'furnace',
        craftTime: 15,
        requires: [
          {itemId: 'ironBar', count: 5},
          {itemId: 'steelFire', count: 1},
        ],
      },
    ],
  },
  // Building pieces
  {
    id: 'blackIceReinforcedWoodenCeiling',
    name: 'Black Ice-Reinforced Wooden Ceiling',
    recipes: [
      {
        craftStation: 'byHand',
        craftTime: 5,
        requires: [
          {itemId: 'insulatedWood', count: 3},
          {itemId: 'steelReinforcement', count: 2},
          {itemId: 'blackIce', count: 9},
        ],
      },
    ],
  },
  {
    id: 'blackIceReinforcedWoodenFoundation',
    name: 'Black Ice-Reinforced Wooden Foundation',
    recipes: [
      {
        craftStation: 'byHand',
        craftTime: 5,
        requires: [
          {itemId: 'insulatedWood', count: 4},
          {itemId: 'steelReinforcement', count: 3},
          {itemId: 'blackIce', count: 15},
        ],
      },
    ],
  },
  {
    id: 'blackIceReinforcedWoodenWall',
    name: 'Black Ice-Reinforced Wooden Wall',
    aliases: ['black ice wall'],
    recipes: [
      {
        craftStation: 'byHand',
        craftTime: 5,
        requires: [
          {itemId: 'insulatedWood', count: 2},
          {itemId: 'steelReinforcement', count: 2},
          {itemId: 'blackIce', count: 8},
        ],
      },
    ],
  },
  {
    id: 'blackIceReinforcedWoodenWedgeFoundation',
    name: 'Black Ice-Reinforced Wooden Wedge Foundation',
    recipes: [
      {
        craftStation: 'byHand',
        craftTime: 5,
        requires: [
          {itemId: 'insulatedWood', count: 4},
          {itemId: 'steelReinforcement', count: 3},
          {itemId: 'blackIce', count: 14},
        ],
      },
    ],
  },
  {
    id: 'blackIceReinforcedWoodenWedge',
    name: 'Black Ice-Reinforced Wooden Wedge',
    recipes: [
      {
        craftStation: 'byHand',
        craftTime: 5,
        requires: [
          {itemId: 'insulatedWood', count: 2},
          {itemId: 'steelReinforcement', count: 2},
          {itemId: 'blackIce', count: 8},
        ],
      },
    ],
  },
  {
    id: 'blackIceReinforcedWoodenWedgeFoundation',
    name: 'Black Ice-Reinforced Wooden Wedge Foundation',
    recipes: [
      {
        craftStation: 'byHand',
        craftTime: 5,
        requires: [
          {itemId: 'insulatedWood', count: 4},
          {itemId: 'steelReinforcement', count: 3},
          {itemId: 'blackIce', count: 14},
        ],
      },
    ],
  },
  {
    id: 'blackIceReinforcedWoodenDoorframe',
    name: 'Black Ice-Reinforced Wooden Doorframe',
    recipes: [
      {
        craftStation: 'byHand',
        craftTime: 5,
        requires: [
          {itemId: 'insulatedWood', count: 2},
          {itemId: 'steelReinforcement', count: 2},
          {itemId: 'blackIce', count: 8},
        ],
      },
    ],
  },
  {
    id: 'blackIceReinforcedWoodenPillar',
    name: 'Black Ice-Reinforced Wooden Pillar',
    recipes: [
      {
        craftStation: 'byHand',
        craftTime: 5,
        requires: [
          {itemId: 'insulatedWood', count: 2},
          {itemId: 'steelReinforcement', count: 2},
          {itemId: 'blackIce', count: 8},
        ],
      },
    ],
  },
  // Siege
  {
    id: 'dragonPowder',
    name: 'Dragonpowder',
    recipes: [
      {
        craftStation: 'cauldron',
        craftTime: 60,
        requires: [
          {itemId: 'demonBlood', count: 2},
          {itemId: 'brimstone', count: 10},
          {itemId: 'crystal', count: 50},
          {itemId: 'steelFire', count: 100},
        ],
      },
    ],
  },
  {
    id: 'earthenwareJug',
    name: 'Earthenware Jug',
    recipes: [
      {
        craftStation: 'artisansWorktable',
        craftTime: 5,
        requires: [
          {itemId: 'stone', count: 50},
        ],
      },
    ],
  },
  {
    id: 'explosiveJar',
    name: 'Explosive Jar',
    recipes: [
      {
        craftStation: 'byHand',
        craftTime: 10,
        requires: [
          {itemId: 'earthenwareJug', count: 1},
          {itemId: 'tar', count: 5},
          {itemId: 'dragonPowder', count: 1},
        ],
      },
    ],
  },
]

const itemMap: {[key: string]: Item} = {}

itemList.forEach(item => { itemMap[item.id] = item })

let hasMissingId = false

// Complain if any items are missing.
itemList.forEach(item => {
  item.recipes.forEach(recipe => {
    recipe.requires.forEach(req => {
      if (itemMap[req.itemId] == null) {
        process.stderr.write('Required ID missing: ' + req.itemId + '\n')
        hasMissingId = true
      }
    })
  })
})

if (hasMissingId) {
  process.exit(1)
}

interface Thrall {
  tier: number
  speedMultiplier: number
  costMulitplier: number
}

// FIXME: The speed multipliers are wrong here.
const thrallMap: {[craftStation in CraftStation]?: Thrall[]} = {
  cauldron: [
    {tier: 1, speedMultiplier: 1.50, costMulitplier: 1.00},
    {tier: 2, speedMultiplier: 2.00, costMulitplier: 0.75},
    {tier: 3, speedMultiplier: 2.50, costMulitplier: 0.75},
    {tier: 4, speedMultiplier: 3.00, costMulitplier: 0.50},
    {tier: 5, speedMultiplier: 3.00, costMulitplier: 0.50},
  ],
  blacksmithBench: [
    {tier: 1, speedMultiplier: 1.50, costMulitplier: 1.00},
    {tier: 2, speedMultiplier: 2.00, costMulitplier: 0.75},
    {tier: 3, speedMultiplier: 2.50, costMulitplier: 0.75},
    {tier: 4, speedMultiplier: 3.00, costMulitplier: 0.50},
    {tier: 5, speedMultiplier: 3.00, costMulitplier: 0.50},
  ],
  armorersBench: [
    {tier: 1, speedMultiplier: 1.50, costMulitplier: 1.00},
    {tier: 2, speedMultiplier: 2.00, costMulitplier: 0.75},
    {tier: 3, speedMultiplier: 2.50, costMulitplier: 0.75},
    {tier: 4, speedMultiplier: 3.00, costMulitplier: 0.50},
    {tier: 5, speedMultiplier: 4.00, costMulitplier: 0.50},
  ],
  carpentersBench: [
    {tier: 1, speedMultiplier: 1.50, costMulitplier: 1.00},
    {tier: 2, speedMultiplier: 2.00, costMulitplier: 0.75},
    {tier: 3, speedMultiplier: 2.50, costMulitplier: 0.75},
    {tier: 4, speedMultiplier: 3.00, costMulitplier: 0.50},
    {tier: 5, speedMultiplier: 3.00, costMulitplier: 0.50},
  ],
  stove: [
    {tier: 1, speedMultiplier: 1.50, costMulitplier: 1.00},
    {tier: 2, speedMultiplier: 2.00, costMulitplier: 1.00},
    {tier: 3, speedMultiplier: 2.50, costMulitplier: 1.00},
    {tier: 4, speedMultiplier: 3.00, costMulitplier: 1.00},
    {tier: 5, speedMultiplier: 3.00, costMulitplier: 1.00},
  ],
  tannery: [
    {tier: 1, speedMultiplier: 1.50, costMulitplier: 1.00},
    {tier: 2, speedMultiplier: 2.00, costMulitplier: 1.00},
    {tier: 3, speedMultiplier: 2.50, costMulitplier: 1.00},
    {tier: 4, speedMultiplier: 3.00, costMulitplier: 1.00},
    {tier: 5, speedMultiplier: 4.00, costMulitplier: 1.00},
  ],
  furnace: [
    {tier: 1, speedMultiplier: 1.50, costMulitplier: 1.00},
    {tier: 2, speedMultiplier: 2.00, costMulitplier: 1.00},
    {tier: 3, speedMultiplier: 2.50, costMulitplier: 1.00},
    {tier: 4, speedMultiplier: 3.00, costMulitplier: 1.00},
    {tier: 5, speedMultiplier: 4.00, costMulitplier: 1.00},
  ],
}

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

const findItemsRequired = (items: ItemGoal[]): ItemRequirement[] => {
  return items
    .map(({item, count}) => {
      // TODO: Use a better selection strategy for recipes.
      const recipe = item.recipes[0]
      const {craftStation, craftTime} = recipe

      const thrall = findThrall({craftStation, tier: 4})

      const requirement: ItemRequirement = {
        item,
        count,
        craftStation: craftStation,
        craftTime: craftTime,
        requires: findItemsRequired(
          recipe.requires.map(ingredient => ({
            item: itemMap[ingredient.itemId],
            // TODO: Double-check this, and make this configurable.
            count: count * (
              thrall
                ? Math.ceil(ingredient.count * thrall.costMulitplier)
                : ingredient.count
            ),
          })),
        ),
      }

      return requirement
    })
}

const getDuration = ({craftTime, count}: {
  craftTime: number
  count: number
}): string => {
  const seconds = craftTime % 60
  const minutes = Math.floor((craftTime / 60) % 60)
  const hours = Math.floor((craftTime / 60 / 60) % 24)
  const days = Math.floor(craftTime / 60 / 60 / 24)

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
  tier = 4,
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

    process.stdout.write(`${level ? ' ' : ''}${count} ${item.name} (${duration})\n`)

    if (totalsData[item.id] == null) {
      totalsData[item.id] = {
        item: item,
        craftStation,
        craftTime,
        count: 0,
      }
    }

    totalsData[item.id].count += count

    printTree(requirement.requires, level + 1, tier, totalsData)
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
  const tree = findItemsRequired(goals)

  printTree(tree)
}

main()
