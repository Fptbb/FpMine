import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import FpMineLogo from '@site/static/img/icon-transparent.svg';
import styles from './regras.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <div className="container text-white">
      <br />
      <p className={styles.intro}>
        <FpMineLogo alt="Site Logo" width={100} height={100} />
        <h1 className="hero__title center">{siteConfig.title} - Termos de uso e políticas de privacidade.</h1>
        <p className="hero__subtitle">
          Ao continuar jogando no servidor e utilizando os serviços, você aceita que as conversas no chat do servidor, todas as ações no servidor e afins, são publicos e estão abertos para todos no discord.
        </p>
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Termos e Políticas`}
      description='Termos de uso e políticas de privacidade.'
    >
      <main>
        <HomepageHeader />
      </main>
    </Layout>
  )
}
