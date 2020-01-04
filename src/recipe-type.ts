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

export interface Ingredient {
  itemId: string
  count: number
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
