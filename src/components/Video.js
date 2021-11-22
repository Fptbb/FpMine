import React from 'react'
import styles from './Video.module.css'

export default ({ src }) => {
  return <iframe className={styles.video} src={src}></iframe>
}
