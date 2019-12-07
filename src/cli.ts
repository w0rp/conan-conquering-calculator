import * as process from 'process'

type CraftStation = 'gather'
  | 'byHand'
  | 'furnace'
  | 'cauldron'
  | 'tannery'
  | 'blacksmithBench'
  | 'carpentersBench'
  | 'trebuchet'
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
  // Food
  {
    id: 'unappetizingFish',
    name: 'Unappetizing Fish',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
        requires: [],
      },
    ],
  },
  // Animal Parts
  {
    id: 'volatileGland',
    name: 'Volatile Gland',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 60,
        requires: [],
      },
    ],
  },
  // Plants
  {
    id: 'plantFiber',
    name: 'Plant Fiber',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
        requires: [],
      },
    ],
  },
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
        craftTime: 0.5,
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
    id: 'shapedWood',
    name: 'Shaped Wood',
    recipes: [
      {
        craftStation: 'carpentersBench',
        craftTime: 10,
        requires: [
          {itemId: 'wood', count: 10},
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
    id: 'ichor',
    name: 'Ichor',
    recipes: [
      {
        craftStation: 'stove',
        craftTime: 5,
        requires: [
          {itemId: 'unappetizingFish', count: 3},
        ],
      },
    ],
  },
  {
    id: 'twine',
    name: 'Twine',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 3,
        requires: [
          {itemId: 'plantFiber', count: 3},
        ],
      },
    ],
  },
  {
    id: 'brick',
    name: 'Brick',
    recipes: [
      {
        craftStation: 'furnace',
        craftTime: 10,
        requires: [
          {itemId: 'stone', count: 10},
        ],
      },
    ],
  },
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
    id: 'glass',
    name: 'Glass',
    recipes: [
      {
        craftStation: 'furnace',
        craftTime: 10,
        requires: [
          {itemId: 'crystal', count: 2},
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
    id: 'ironReinforcement',
    name: 'Iron Reinforcement',
    recipes: [
      {
        craftStation: 'blacksmithBench',
        craftTime: 30,
        requires: [
          {itemId: 'ironBar', count: 2},
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
        craftStation: 'blacksmithBench',
        craftTime: 60,
        requires: [
          {itemId: 'steelBar', count: 2},
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
    id: 'siegeFoundation',
    name: 'Siege Foundation',
    recipes: [
      {
        craftStation: 'carpentersBench',
        craftTime: 30,
        requires: [
          {itemId: 'shapedWood', count: 30},
          {itemId: 'brick', count: 25},
          {itemId: 'ironReinforcement', count: 15},
        ],
      },
    ],
  },
  {
    id: 'trebuchetBase',
    name: 'Trebuchet Base',
    recipes: [
      {
        craftStation: 'carpentersBench',
        craftTime: 30,
        requires: [
          {itemId: 'wood', count: 500},
          {itemId: 'stone', count: 150},
        ],
      },
    ],
  },
  {
    id: 'trebuchetFrame',
    name: 'Trebuchet Frame',
    recipes: [
      {
        craftStation: 'trebuchet',
        craftTime: 30,
        requires: [
          {itemId: 'wood', count: 500},
          {itemId: 'stone', count: 150},
        ],
      },
    ],
  },
  {
    id: 'trebuchetArm',
    name: 'Trebuchet Arm',
    recipes: [
      {
        craftStation: 'trebuchet',
        craftTime: 30,
        requires: [
          {itemId: 'wood', count: 300},
          {itemId: 'ironReinforcement', count: 13},
          {itemId: 'twine', count: 20},
        ],
      },
    ],
  },
  {
    id: 'trebuchet',
    name: 'Trebuchet',
    recipes: [
      {
        craftStation: 'byHand',
        craftTime: 30,
        requires: [
          {itemId: 'siegeFoundation', count: 1},
          {itemId: 'trebuchetBase', count: 1},
          {itemId: 'trebuchetFrame', count: 1},
          {itemId: 'trebuchetArm', count: 1},
        ],
      },
    ],
  },
  {
    id: 'siegeBoulder',
    name: 'Siege Boulder',
    recipes: [
      {
        craftStation: 'trebuchet',
        craftTime: 10,
        requires: [
          {itemId: 'stone', count: 250},
        ],
      },
    ],
  },
  {
    id: 'demonFireBarrage',
    name: 'Demon-fire Barrage',
    recipes: [
      {
        craftStation: 'trebuchet',
        craftTime: 20,
        requires: [
          {itemId: 'explosiveJar', count: 2},
          {itemId: 'twine', count: 10},
        ],
      },
    ],
  },
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
  {
    id: 'glassFlask',
    name: 'Glass Flask',
    recipes: [
      {
        craftStation: 'furnace',
        craftTime: 10,
        requires: [
          {itemId: 'glass', count: 3},
        ],
      },
    ],
  },
  {
    id: 'waterFilledGlassFlask',
    name: 'Water-filled Glass Flask',
    recipes: [
      {
        craftStation: 'cauldron',
        craftTime: 2,
        requires: [
          {itemId: 'glassFlask', count: 1},
        ],
      },
    ],
  },
  {
    id: 'waterOrb',
    name: 'Water Orb',
    recipes: [
      {
        craftStation: 'cauldron',
        craftTime: 30,
        requires: [
          {itemId: 'waterFilledGlassFlask', count: 1},
          {itemId: 'ichor', count: 1},
        ],
      },
    ],
  },
  {
    id: 'demonFireOrb',
    name: 'Demon-fire Orb',
    recipes: [
      {
        craftStation: 'cauldron',
        craftTime: 60,
        requires: [
          {itemId: 'waterOrb', count: 1},
          {itemId: 'volatileGland', count: 5},
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
          ? Math.max(Math.floor(craftTime - craftTime / (thrall.speed + 1)), 1)
          : craftTime,
        requires: findItemsRequired(
          recipe.requires.map(ingredient => ({
            item: itemMap[ingredient.itemId],
            count: count * (
              thrall
                ? Math.max(Math.floor(ingredient.count - ingredient.count * thrall.cost), 1)
                : ingredient.count
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
