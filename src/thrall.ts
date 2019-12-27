import {CraftStation} from './recipe-type'

/**
 * A thrall for crafting, which adjusts the speed of crafting and the cost
 * for crafting an item.
 */
export interface Thrall {
  tier: number
  speed: number
  cost: number
}

/**
 * A map containing thralls for each type of craft station.
 */
export const thrallMap: {[craftStation in CraftStation]?: Thrall[]} = {
  cauldron: [
    {tier: 1, speed: 0.50, cost: 0.00},
    {tier: 2, speed: 1.00, cost: 0.25},
    {tier: 3, speed: 1.50, cost: 0.25},
    {tier: 4, speed: 2.00, cost: 0.50},
    {tier: 5, speed: 3.00, cost: 0.50},
  ],
  blacksmithBench: [
    {tier: 1, speed: 0.50, cost: 0.00},
    {tier: 2, speed: 1.00, cost: 0.25},
    {tier: 3, speed: 1.50, cost: 0.25},
    {tier: 4, speed: 2.00, cost: 0.50},
    {tier: 5, speed: 2.00, cost: 0.50},
  ],
  armorersBench: [
    {tier: 1, speed: 0.50, cost: 0.00},
    {tier: 2, speed: 1.00, cost: 0.25},
    {tier: 3, speed: 1.50, cost: 0.25},
    {tier: 4, speed: 2.00, cost: 0.50},
    {tier: 5, speed: 3.00, cost: 0.50},
  ],
  carpentersBench: [
    {tier: 1, speed: 0.50, cost: 0.00},
    {tier: 2, speed: 1.00, cost: 0.25},
    {tier: 3, speed: 1.50, cost: 0.25},
    {tier: 4, speed: 2.00, cost: 0.50},
    {tier: 5, speed: 2.00, cost: 0.50},
  ],
  stove: [
    {tier: 1, speed: 0.50, cost: 0.00},
    {tier: 2, speed: 1.00, cost: 0.00},
    {tier: 3, speed: 1.50, cost: 0.00},
    {tier: 4, speed: 2.00, cost: 0.00},
    {tier: 5, speed: 2.00, cost: 0.00},
  ],
  tannery: [
    {tier: 1, speed: 0.50, cost: 0.00},
    {tier: 2, speed: 1.00, cost: 0.00},
    {tier: 3, speed: 1.50, cost: 0.00},
    {tier: 4, speed: 2.00, cost: 0.00},
    {tier: 5, speed: 3.00, cost: 0.00},
  ],
  furnace: [
    {tier: 1, speed: 0.50, cost: 0.00},
    {tier: 2, speed: 1.00, cost: 0.00},
    {tier: 3, speed: 1.50, cost: 0.00},
    {tier: 4, speed: 2.00, cost: 0.00},
    {tier: 5, speed: 3.00, cost: 0.00},
  ],
}

Object.freeze(thrallMap)
Object.values(thrallMap).forEach(x => { Object.freeze(x) })

export type ThrallTiers = {[craftStation in CraftStation]?: number}

/**
 * Given a craft station and a thrall tier, find that thrall.
 */
export const findThrall = ({craftStation, tier}: {
  craftStation: CraftStation
  tier: number
}): Thrall | undefined =>
  (thrallMap[craftStation] || []).find(thrall => thrall.tier === tier)
