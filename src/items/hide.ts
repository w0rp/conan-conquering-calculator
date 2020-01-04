import {Item} from '../recipe-type'

export const hideItemList: Item[] = [
  // Various pelts, hides, etc.
  {
    id: 'batSkin',
    name: 'Bat Skin',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  {
    id: 'felinePelt',
    name: 'Feline Pelt',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  {
    id: 'fur',
    name: 'Fur',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  {
    id: 'layeredFur',
    name: 'Layered Fur',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 1,
        requires: [
          {itemId: 'fur', count: 2},
          {itemId: 'alchemicalBase', count: 2},
        ],
      },
    ],
  },
  {
    id: 'gossamer',
    name: 'Gossamer',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  {
    id: 'silk',
    name: 'Silk',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 1,
        requires: [
          {itemId: 'gossamer', count: 2},
        ],
      },
    ],
  },
  {
    id: 'layeredSilk',
    name: 'Layered Silk',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 8,
        requires: [
          {itemId: 'silk', count: 4},
          {itemId: 'alchemicalBase', count: 2},
        ],
      },
    ],
  },
  {
    id: 'chitin',
    name: 'Chitin',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  {
    id: 'hyenaPelt',
    name: 'Hyena Pelt',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  {
    id: 'reptileHide',
    name: 'Reptile Hide',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  {
    id: 'wolfPelt',
    name: 'Wolf Pelt',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  {
    id: 'hide',
    name: 'Hide',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  // Thick hide materials.
  {
    id: 'rhinoHide',
    name: 'Rhino Hide',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  {
    id: 'elephantHide',
    name: 'Elephant Hide',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  {
    id: 'bearPelt',
    name: 'Bear Pelt',
    recipes: [
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  {
    id: 'thickHide',
    name: 'Thick Hide',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 1,
        requires: [
          {itemId: 'rhinoHide', count: 2, for: 3},
        ],
      },
      {
        craftStation: 'armorersBench',
        craftTime: 1,
        requires: [
          {itemId: 'rhinoHide', count: 2, for: 3},
        ],
      },
      {
        craftStation: 'armorersBench',
        craftTime: 1,
        requires: [
          {itemId: 'bearPelt', count: 2, for: 3},
        ],
      },
      {
        craftStation: 'gather',
        craftTime: 1,
      },
    ],
  },
  // Leather and Tar from tanning.
  {
    id: 'leather',
    name: 'Leather',
    recipes: [
      {
        craftStation: 'tannery',
        craftTime: 10,
        requires: [
          {itemId: 'hide', count: 3},
        ],
      },
      {
        craftStation: 'tannery',
        craftTime: 10,
        requires: [
          {itemId: 'wolfPelt', count: 1},
        ],
      },
      {
        craftStation: 'tannery',
        craftTime: 10,
        requires: [
          {itemId: 'reptileHide', count: 0.5},
        ],
      },
      {
        craftStation: 'tannery',
        craftTime: 10,
        requires: [
          {itemId: 'hyenaPelt', count: 1},
        ],
      },
      {
        craftStation: 'tannery',
        craftTime: 10,
        requires: [
          {itemId: 'fur', count: 3},
        ],
      },
      {
        craftStation: 'tannery',
        craftTime: 10,
        requires: [
          {itemId: 'felinePelt', count: 1},
        ],
      },
      {
        craftStation: 'tannery',
        craftTime: 10,
        requires: [
          {itemId: 'batSkin', count: 1},
        ],
      },
    ],
  },
  {
    id: 'thickLeather',
    name: 'Thick Leather',
    recipes: [
      {
        craftStation: 'tannery',
        craftTime: 20,
        requires: [
          {itemId: 'thickHide', count: 1},
        ],
      },
      // NOTE: Sources from Elepehant, Rhinho, and Bear hides are excluded
      // here. It's a complete waste to directly turn them into tar or thick
      // leather, they should be stripped first.
    ],
  },
  {
    id: 'tar',
    name: 'Tar',
    recipes: [
      {
        craftStation: 'tannery',
        craftTime: 20,
        requires: [
          {itemId: 'thickHide', count: 1},
        ],
      },
      // Tar from hide sources.
      {
        craftStation: 'tannery',
        craftTime: 10,
        requires: [
          {itemId: 'hide', count: 3},
        ],
      },
      {
        craftStation: 'tannery',
        craftTime: 10,
        requires: [
          {itemId: 'wolfPelt', count: 1},
        ],
      },
      {
        craftStation: 'tannery',
        craftTime: 10,
        requires: [
          {itemId: 'reptileHide', count: 1},
        ],
      },
      {
        craftStation: 'tannery',
        craftTime: 10,
        requires: [
          {itemId: 'hyenaPelt', count: 1},
        ],
      },
      {
        craftStation: 'tannery',
        craftTime: 10,
        requires: [
          {itemId: 'fur', count: 3},
        ],
      },
      {
        craftStation: 'tannery',
        craftTime: 10,
        requires: [
          {itemId: 'felinePelt', count: 1},
        ],
      },
      {
        craftStation: 'tannery',
        craftTime: 10,
        requires: [
          {itemId: 'batSkin', count: 1},
        ],
      },
    ],
  },
  {
    id: 'hardenedLeather',
    name: 'Hardended Leather',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 8,
        requires: [
          {itemId: 'leather', count: 5},
          {itemId: 'thickLeather', count: 2},
          {itemId: 'alchemicalBase', count: 2},
          {itemId: 'oil', count: 5},
        ],
      },
    ],
  },
]
