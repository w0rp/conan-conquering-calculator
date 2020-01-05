import {Item} from '../../recipe-type'

export const heavyArmorItemList: Item[] = [
  // Materials for constructing armor pieces.
  {
    id: 'perfectedHeavyHelmetPadding',
    name: 'Perfected Heavy Helmet Padding',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 30,
        requires: [
          {itemId: 'hardenedLeather', count: 23},
          {itemId: 'elephantHide', count: 8},
          {itemId: 'twine', count: 5},
        ],
      },
    ],
  },
  {
    id: 'perfectedHeavyChestPadding',
    name: 'Perfected Heavy Chest Padding',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 30,
        requires: [
          {itemId: 'hardenedLeather', count: 23},
          {itemId: 'elephantHide', count: 15},
          {itemId: 'twine', count: 5},
        ],
      },
    ],
  },
  {
    id: 'perfectedHeavyGauntletLining',
    name: 'Perfected Heavy Gauntlet Lining',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 30,
        requires: [
          {itemId: 'hardenedLeather', count: 23},
          {itemId: 'elephantHide', count: 8},
          {itemId: 'twine', count: 5},
        ],
      },
    ],
  },
  {
    id: 'perfectedHeavyLeggingLining',
    name: 'Perfected Heavy Legging Lining',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 30,
        requires: [
          {itemId: 'hardenedLeather', count: 23},
          {itemId: 'elephantHide', count: 12},
          {itemId: 'twine', count: 5},
        ],
      },
    ],
  },
  {
    id: 'perfectedHeavyBootLining',
    name: 'Perfected Heavy Boot Lining',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 30,
        requires: [
          {itemId: 'hardenedLeather', count: 23},
          {itemId: 'elephantHide', count: 8},
          {itemId: 'twine', count: 5},
        ],
      },
    ],
  },
  // Seekers of the Dawn Pack items.
  {
    id: 'flawlessYamataiWarlordHelmetEpic',
    name: 'Flawless Yamatai Warlord Helmet (Epic)',
    dlc: 'seekers',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 60,
        requires: [
          {itemId: 'perfectedHeavyHelmetPadding', count: 1},
          {itemId: 'hardenedSteelBar', count: 23},
          {itemId: 'steelReinforcement', count: 5},
          {itemId: 'horn', count: 2},
        ],
      },
    ],
  },
  {
    id: 'flawlessYamataiWarlordChestpieceEpic',
    name: 'Flawless Yamatai Warlord Chestpiece (Epic)',
    dlc: 'seekers',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 60,
        requires: [
          {itemId: 'perfectedHeavyChestPadding', count: 1},
          {itemId: 'hardenedSteelBar', count: 23},
          {itemId: 'steelReinforcement', count: 5},
        ],
      },
    ],
  },
  {
    id: 'flawlessYamataiWarlordGlovesEpic',
    name: 'Flawless Yamatai Warlord Gloves (Epic)',
    dlc: 'seekers',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 60,
        requires: [
          {itemId: 'perfectedHeavyGauntletLining', count: 2},
          {itemId: 'hardenedSteelBar', count: 23},
          {itemId: 'steelReinforcement', count: 5},
        ],
      },
    ],
  },
  {
    id: 'flawlessYamataiWarlordLeggingsEpic',
    name: 'Flawless Yamatai Warlord Leggings (Epic)',
    dlc: 'seekers',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 60,
        requires: [
          {itemId: 'perfectedHeavyLeggingLining', count: 1},
          {itemId: 'hardenedSteelBar', count: 23},
          {itemId: 'steelReinforcement', count: 5},
        ],
      },
    ],
  },
  {
    id: 'flawlessYamataiWarlordSabatonsEpic',
    name: 'Flawless Yamatai Warlord Sabatons (Epic)',
    dlc: 'seekers',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 60,
        requires: [
          {itemId: 'perfectedHeavyBootLining', count: 2},
          {itemId: 'hardenedSteelBar', count: 23},
          {itemId: 'steelReinforcement', count: 5},
        ],
      },
    ],
  },
  {
    id: 'flawlessYamataiWarlordSetEpic',
    name: 'Flawless Yamatai Warlord Set (Epic)',
    aliases: [
      'yamatai warlord set',
    ],
    dlc: 'seekers',
    recipes: [
      {
        craftStation: 'armorersBench',
        craftTime: 0,
        requires: [
          {itemId: 'flawlessYamataiWarlordHelmetEpic', count: 1},
          {itemId: 'flawlessYamataiWarlordChestpieceEpic', count: 1},
          {itemId: 'flawlessYamataiWarlordGlovesEpic', count: 1},
          {itemId: 'flawlessYamataiWarlordLeggingsEpic', count: 1},
          {itemId: 'flawlessYamataiWarlordSabatonsEpic', count: 1},
        ],
      },
    ],
  },
]
