import {Item} from '../recipe-type'

export const mineralList: Item[] = [
  // Mining
  {
    id: 'stone',
    name: 'Stone',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
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
    id: 'stoneConsolidant',
    name: 'Stone Consolidant',
    recipes: [
      {
        craftStation: 'cauldron',
        craftTime: 10,
        requires: [
          {itemId: 'ichor', count: 2},
          {itemId: 'twine', count: 2},
        ],
      },
    ],
  },
  {
    id: 'hardenedBrick',
    name: 'Hardended Brick',
    recipes: [
      {
        craftStation: 'furnace',
        craftTime: 15,
        requires: [
          {itemId: 'brick', count: 1},
          {itemId: 'stoneConsolidant', count: 1},
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
  // Precious metals
  {
    id: 'silverStone',
    name: 'Silver Stone',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  {
    id: 'silverBar',
    name: 'Silver Bar',
    recipes: [
      {
        craftStation: 'furnace',
        craftTime: 10,
        requires: [
          {itemId: 'silverStone', count: 3},
        ],
      },
    ],
  },
  {
    id: 'silverCoin',
    name: 'Silver Coin',
    recipes: [
      {
        craftStation: 'furnace',
        craftTime: 10,
        requires: [
          {itemId: 'silverBar', count: 1 / 30},
        ],
      },
    ],
  },
  {
    id: 'silverDust',
    name: 'Silver Dust',
    recipes: [
      {
        craftStation: 'grinder',
        craftTime: 10,
        requires: [
          {itemId: 'silverBar', count: 0.1},
        ],
      },
      {
        craftStation: 'grinder',
        craftTime: 10,
        requires: [
          {itemId: 'silverCoin', count: 0.5},
        ],
      },
    ],
  },
  {
    id: 'goldStone',
    name: 'Gold Stone',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  {
    id: 'goldBar',
    name: 'Gold Bar',
    recipes: [
      {
        craftStation: 'furnace',
        craftTime: 10,
        requires: [
          {itemId: 'goldStone', count: 3},
        ],
      },
    ],
  },
  {
    id: 'goldCoin',
    name: 'Gold Coin',
    recipes: [
      {
        craftStation: 'furnace',
        craftTime: 10,
        requires: [
          {itemId: 'goldBar', count: 1 / 30},
        ],
      },
    ],
  },
  {
    id: 'goldDust',
    name: 'Gold Dust',
    recipes: [
      {
        craftStation: 'grinder',
        craftTime: 10,
        requires: [
          {itemId: 'goldBar', count: 0.1},
        ],
      },
      {
        craftStation: 'grinder',
        craftTime: 10,
        requires: [
          {itemId: 'goldCoin', count: 0.5},
        ],
      },
    ],
  },
  {
    id: 'alchemicalBase',
    name: 'Alchemical Base',
    recipes: [
      {
        craftStation: 'cauldron',
        craftTime: 20,
        requires: [
          {itemId: 'silverDust', count: 2},
          {itemId: 'goldDust', count: 1},
          {itemId: 'ichor', count: 2},
        ],
      },
    ],
  },
]
