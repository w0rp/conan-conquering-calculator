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
}
