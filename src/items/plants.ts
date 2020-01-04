import {Item} from '../recipe-type'

export const plantPartList: Item[] = [
  {
    id: 'plantFiber',
    name: 'Plant Fiber',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
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
]
