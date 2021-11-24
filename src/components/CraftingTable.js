import React from 'react'
import styles from './CraftingTable.module.css'

const CDN =
  'https://rawcdn.githack.com/FptbbSystems/MinecraftItensData/9317e8539606a2a598e59329edce1d26d3db67bc/i/'

const Tooltip = ({ id, hovering, position }) => {
  return (
    <div
      className={styles.tooltip}
      style={{
        left: `${position.x + 4}px`,
        top: `${position.y - 28}px`,
        visibility: hovering ? 'visible' : 'hidden',
      }}
    >
      {id
        .toLowerCase()
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')}
    </div>
  )
}

const Item = ({ setHovering, setId, id, amount, column, index }) => {
  return id && id.length > 0 ? (
    <div
      className={styles.gridElement}
      style={{
        left: `${2 + 34 * index + 2 * (index - 1)}px`,
        top: `${2 + 34 * column + 2 * (column - 1)}px`,
      }}
      onMouseEnter={() => setHovering(true) || setId(id)}
      onMouseLeave={() => setHovering(false) || setId(id)}
    >
      <p className={styles.amount}>{amount}</p>

      <img
        width={'32px'}
        height={'32px'}
        src={`${CDN}/${id.toLowerCase()}.png`}
      />
    </div>
  ) : (
    <div key={index} />
  )
}

export default ({ Items, Output }) => {
  const [hovering, setHovering] = React.useState(false)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [id, setId] = React.useState('')

  React.useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) =>
      setPosition({ x: clientX, y: clientY })

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const outputAmount = /(\d+)x /g.exec(Output)

  return (
    <div className={styles.crafting}>
      {/* Tooltip */}
      <Tooltip id={id} hovering={hovering} position={position} />

      {/* Elements */}
      <div className={styles.container}>
        <Item
          setHovering={setHovering}
          setId={setId}
          id={Output.replace(/\d+x /g, () => '')}
          amount={outputAmount && parseInt(outputAmount[1])}
          column={1}
          index={5.225}
          key={10}
        />

        {Items.map((list, column) =>
          list.map((id, index) => (
            <Item
              setHovering={setHovering}
              setId={setId}
              id={id}
              column={column}
              index={index}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  )
}

/* 
---
sidebar_position: 99
title: Temporario
---

import CraftingTable from "../src/components/CraftingTable.js";

<CraftingTable
  Items={[
    ["ender_pearl", "gold_ingot", "ender_pearl"],
    ["iron_ingot", "nether_star", "iron_ingot"],
    ["ender_pearl", "gold_ingot", "ender_pearl"],
  ]}
  Output="8x dragon_head"
/>
<center>
  <CraftingTable
    Items={[
      ["", "gold_ingot", ""],
      ["diamond", "gold_ingot", "diamond"],
      ["", "iron_ingot", ""],
    ]}
    Output="5x diamond"
  />
</center>
-- Crafting de Itens Aleatorios

*/