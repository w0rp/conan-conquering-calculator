import {Item} from '../recipe-type'

export const creaturePartList: Item[] = [
  // Fish
  {
    id: 'unappetizingFish',
    name: 'Unappetizing Fish',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  {
    id: 'volatileGland',
    name: 'Volatile Gland',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 60,
      },
    ],
  },
  {
    id: 'demonBlood',
    name: 'Demon Blood',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
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
]
