import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
import FpMineLogo from '@site/static/img/icon-transparent.svg';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container text-white'>
        <h1 className='hero__title'><FpMineLogo alt="Site Logo" width={100} height={100} /><br />{siteConfig.title}</h1>
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
        <p className='hero__subtitle'>
          <code>É obrigatório estar no servidor do discord para jogar.</code>
          <br />
          <code>Ao entrar pela primeira vez, você precisara verificar-se no discord.</code>
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Pagina Inicial`}
      description='Foxes Rule The World.'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <iframe style={{ width: '728px', height: '90px', maxWidth: '100%', border: 'none', display: 'block', margin: 'auto' }} src="https://pt.namemc.com/server/m.fpt.icu/embed" width="728" height="90"></iframe>
      </main>
    </Layout>
  )
}
