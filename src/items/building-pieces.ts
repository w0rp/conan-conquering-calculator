import {Item} from '../recipe-type'

export const buildingPieceList: Item[] = [
  // Black Ice
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
