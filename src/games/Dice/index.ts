import React from 'react'
import image from './dice3.png'

export default {
  name: 'Dice',
  short_name: 'dice',
  description: `
    Use the slider to pick a number, then roll below that number to win. Lower numbers will increase your potential payout, while higher ones are safer.
  `,
  image,
  theme_color: '#E4E2E9',
  app: React.lazy(() => import('./App')),
}
