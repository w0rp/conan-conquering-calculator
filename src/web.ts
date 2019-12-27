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
  thrallTiers: ThrallTiers,
): void => {
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

const findSelectedThrallLevel = (inputName: string) => {
  const radios = Array.from(document.getElementsByName(inputName)) as HTMLInputElement[]
  const checkedRadio = radios.find(x => x.checked)

  return Number(checkedRadio?.value) || 0
}

const main = (): void => {
  const searchBox = document.getElementById('searchBox') as HTMLInputElement
  const searchOutput = document.getElementById('searchOutput') as HTMLOutputElement
  const form = document.getElementsByTagName('form')[0] as HTMLFormElement

  let searchTimer: NodeJS.Timeout | undefined

  if (searchBox == null) {
    throw new Error("Search box not found!")
  }

  if (searchOutput == null) {
    throw new Error("Search output not found!")
  }

  if (form == null) {
    throw new Error("Form not found!")
  }

  const updateResults = () => {
    const goals = parseGoals(searchBox.value.trim().split(/ +/g))
    const thrallTiers: ThrallTiers = {
      cauldron: findSelectedThrallLevel('cauldronThrall'),
      blacksmithBench: findSelectedThrallLevel('blacksmithThrall'),
      armorersBench: findSelectedThrallLevel('armorerThrall'),
      carpentersBench: findSelectedThrallLevel('carpenterThrall'),
      stove: findSelectedThrallLevel('stoveThrall'),
      tannery: findSelectedThrallLevel('tannerThrall'),
      furnace: findSelectedThrallLevel('furnaceThrall'),
    }

    displayResults(goals, searchOutput, thrallTiers)
  }

  const updateResultsWithDebounce = () => {
    if (searchTimer) {
      clearTimeout(searchTimer)
    }

    searchTimer = setTimeout(updateResults, 100)
  }

  searchBox.addEventListener('keyup', (event) => {
    updateResultsWithDebounce()
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()
  })

  form.addEventListener('change', (event) => {
    updateResults()
  })
}

main()
