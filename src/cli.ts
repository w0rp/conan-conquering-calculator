import * as process from 'process'

import {ThrallTiers} from './thrall'
import {
  findItemsRequired,
  flattenRequirements,
  parseGoals,
} from './requirements'

const main = (): void => {
  const goals = parseGoals(process.argv.slice(2))

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

  descriptions.forEach((description, index) => {
    const {level, count, item, duration} = description

    for (let i = level; i > 0; --i) {
      process.stdout.write('--')
    }

    if (index > 0 && level === 0) {
      process.stdout.write('\n')
    }

    process.stdout.write(
      `${level ? ' ' : ''}${count} ${item.name} (${duration})\n`
    )
  })

  process.stdout.write('\n')
  process.stdout.write('## Item List ##\n')
  process.stdout.write('\n')

  totalDescriptions.forEach(description => {
    const {count, item, duration} = description

    process.stdout.write(`${count} ${item.name} (${duration})\n`)
  })
}

main()
