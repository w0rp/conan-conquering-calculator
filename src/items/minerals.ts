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
]
