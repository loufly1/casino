import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          BIRDIES GAME
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          decentralized casino built on Gamba
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            as="a"
            color="white"
            href="https://xbirdies.com"
            target="_blank"
            icon={<Icon.ExternalLink />}
          >
            Learn more
          </Button>
        </div>
      </Section>
    </div>
  )
}
