import {Item} from '../recipe-type'

export const hideItemList: Item[] = [
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
]
