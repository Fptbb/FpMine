import React from 'react'
import styles from './CraftingTable.module.css'
function Item(id) {
  if (!id || id === '') {
    return (
      <div className={styles.gridElement}>
      </div>
      );
  }else{
    let itemUrl = 'https://minecraftitemids.com/item/32/' + id + '.png';
    return (
      <div className={styles.gridElement}>
          <img className={styles.displayed} src={itemUrl} />
      </div>
    )
  }
  
}

export default ({Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8, Item9}) => {
  return (
  <div className={styles.grid}>
      {Item(Item1)}
      {Item(Item2)}
      {Item(Item3)}
      {Item(Item4)}
      {Item(Item5)}
      {Item(Item6)}
      {Item(Item7)}
      {Item(Item8)}
      {Item(Item9)}
  </div>
  )
}
