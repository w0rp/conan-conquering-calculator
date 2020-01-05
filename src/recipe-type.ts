export type CraftStation = 'gather'
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
  | 'grinder'
  | 'fluidPress'
  | 'volcanicForge'

/**
 * An identifier for a type of DLC required for some items.
 */
export type DLC = 'imperialEast'
  | 'jewel'
  | 'savageFrontier'
  | 'seekers'
  | 'treasures'
  | 'riddle'
  | 'blood'
  | 'riders'
  | 'derketo'

export const dlcDescriptions: {[key in DLC]: string} = {
  imperialEast: 'The Imperial East Pack',
  jewel: 'Jewel of the West Pack',
  savageFrontier: 'The Savage Frontier Pack',
  seekers: 'Seekers of the Dawn Pack',
  treasures: 'Treasures of Turan Pack',
  riddle: 'Riddle of Steel',
  blood: 'Blood and Sand Pack',
  riders: 'Riders of Hyboria Pack',
  derketo: 'Debaucheries of Derketo Pack',
}

export interface Ingredient {
  itemId: string
  count: number
  /**
   * An optional number indicating the number of items yield given the
   * `count` of the ingredients, say for when 2 rhino hides strip into 3
   * thick hides.
   */
  for?: number
}

export interface Recipe {
  craftStation: CraftStation
  craftTime: number
  requires?: Ingredient[]
}

export interface Item {
  id: string
  name: string
  aliases?: string[]
  recipes: Recipe[]
  /** DLC required for the item. */
  dlc?: DLC
}
