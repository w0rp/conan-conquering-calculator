import {Item} from '../recipe-type'

export const woodItemList: Item[] = [
  {
    id: 'wood',
    name: 'Wood',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 0.5,
      },
    ],
  },
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
]
