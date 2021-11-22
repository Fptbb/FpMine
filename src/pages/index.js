import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container text-white'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>
          IP: <code>m.fpt.icu</code>
        </p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='https://fpt.icu/discordMine'
          >
            Entre no Discord
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <Layout
      title={`Pagina Inicial`}
      description='Tutoriais e Documentação do servidor.'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
