import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: 'Ver os Tutoriais',
    // Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: <>Como sempre, leia as docs</>,
    url: '/docs/intro',
  },
  {
    title: 'Veja as ultimas atualizações',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: <>Aqui eu mando as ultimas coisas que adicionei no servidor</>,
    url: '/blog',
  },
]

function Feature({ title, description, url }) {
  return (
    <div className={clsx('col col--6')}>
      <div className='text--center padding-horiz--md'>
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
