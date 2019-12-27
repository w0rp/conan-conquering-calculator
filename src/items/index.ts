import {Item} from '../recipe-type'

import {buildingPieceList} from './building-pieces'
import {creaturePartList} from './creature-parts'
import {hideItemList} from './hide'
import {mineralList} from './minerals'
import {plantPartList} from './plants'
import {siegeItemList} from './siege-items'
import {woodItemList} from './wood'

export const itemList = ([] as Item[]).concat(
  plantPartList,
  hideItemList,
  creaturePartList,
  woodItemList,
  mineralList,
  buildingPieceList,
  siegeItemList,
)
export const itemMap: {[key: string]: Item} = {}

itemList.forEach(item => {
  if (itemMap[item.id] != null) {
    throw new Error("Duplicate item ID: " + item.id)
  }

  // Put each item in a map.
  itemMap[item.id] = item

  // Deep-freeze every item.
  Object.freeze(item)
  Object.freeze(item.recipes)
  Object.values(item.recipes).forEach(recipe => {
    Object.freeze(recipe)
    Object.freeze(recipe.requires)
    Object.values(recipe.requires).forEach(req => {
      Object.freeze(req)
    })
  })
})

Object.freeze(itemList)
Object.freeze(itemMap)

// Complain if any items are missing.
itemList.forEach(item => {
  item.recipes.forEach(recipe => {
    recipe.requires.forEach(req => {
      if (itemMap[req.itemId] == null) {
        throw new Error('Required ID missing: ' + req.itemId + '\n')
      }
    })
  })
})
