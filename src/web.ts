import * as process from 'process'

import {ThrallTiers} from './thrall'
import {
  findItemsRequired,
  flattenRequirements,
  parseGoals,
  ItemGoal,
} from './requirements'

const displayResults = (
  goals: ItemGoal[],
  searchOutput: HTMLOutputElement,
): void => {
  const thrallTiers: ThrallTiers = {
    cauldron: 4,
    blacksmithBench: 4,
    armorersBench: 4,
    carpentersBench: 4,
    stove: 4,
    tannery: 4,
    furnace: 4,
  }
  const tree = findItemsRequired(goals, thrallTiers)

  const {descriptions, totalDescriptions} = flattenRequirements(tree)

  let text = ''

  descriptions.forEach((description, index) => {
    const {level, count, item, duration} = description

    for (let i = level; i > 0; --i) {
      text += '--'
    }

    if (index > 0 && level === 0) {
      text += '\n'
    }

    text += `${level ? ' ' : ''}${count} ${item.name} (${duration})\n`
  })

  text += '\n'
  text += '## Item List ##\n'
  text += '\n'

  totalDescriptions.forEach(description => {
    const {count, item, duration} = description

    text += `${count} ${item.name} (${duration})\n`
  })

  searchOutput.textContent = text
}

const main = (): void => {
  const searchBox = document.getElementById('searchBox') as HTMLInputElement
  const searchOutput = document.getElementById('searchOutput') as HTMLOutputElement
  let searchTimer: NodeJS.Timeout | undefined

  if (searchBox == null) {
    throw new Error("Search box not found!")
  }

  if (searchOutput == null) {
    throw new Error("Search output not found!")
  }

  searchBox.addEventListener('keyup', (event) => {
    if (searchTimer) {
      clearTimeout(searchTimer)
    }


    searchTimer = setTimeout(() => {
      const goals = parseGoals(searchBox.value.trim().split(/ +/g))
      displayResults(goals, searchOutput)
    }, 100)
  })
}

main()
