import React, { Component } from 'react'
import styles from './CraftingTable.module.css'

const matches = [
  { match: 'player_head', index: 'head' },
  { match: 'img' },
  { index: 'name', pattern: 'name:"(.+)"' },
  { match: 'height' },
  { match: 'width' },
]

const heights = {
  chest: '28px',
}

const widths = { ...heights }

const Tooltip = ({ position, hovering, info: { name } }) => {
  return (
    <div
      className={styles.tooltip}
      style={{
        left: `${position.x + 4}px`,
        top: `${position.y - 28}px`,
        visibility: hovering ? 'visible' : 'hidden',
      }}
    >
      {name}
    </div>
  )
}

class Item extends Component {
  constructor(props) {
    super(props)

    const id = props.id

    matches.map(
      ({ pattern, match, index }) =>
        (this[index || match] = new RegExp(pattern || `${match}:(\\S+)`, 'g')
          .exec(id)
          ?.splice(1, 1))
    )

    this.img =
      this.img ||
      (this.head
        ? `https://mc-heads.net/head/${this.head}/32`
        : `https://rawcdn.githack.com/FptbbSystems/MinecraftItensData/9317e8539606a2a598e59329edce1d26d3db67bc/i/${id.toLowerCase()}.png`)

    this.height = this.height || heights[id] || (this.head ? '23px' : '32px')
    this.width = this.width || widths[id] || (this.head ? '23px' : '32px')

    this.state = {
      name: 'Loading...',
    }
  }

  componentDidMount() {
    const { id } = this.props

    if (this.name) {
      this.setState({ name: this.name })
    } else if (this.head) {
      fetch(`https://crafthead.net/profile/${id.split(':').pop()}`)
        .then((result) => result.json())
        .then(({ name }) => this.setState({ name }))
    } else {
      this.setState({
        name: id
          .toLowerCase()
          .split('_')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
      })
    }
  }

  render() {
    const {
      // State Setters
      setInfo,
      setHovering,
      setPosition,

      // Properties
      id,
      column,
      index,
      amount,
    } = this.props

    const { head, type } = this

    return id && id.length > 0 ? (
      <div
        className={styles.gridElement}
        style={{
          left: `${2 + 34 * index + 2 * (index - 1)}px`,
          top: `${2 + 34 * column + 2 * (column - 1)}px`,
        }}
        onMouseMove={({ clientX, clientY }) =>
          setPosition({ x: clientX, y: clientY })
        }
        onMouseEnter={() => {
          setInfo({ id, type, name: this.state.name })
          setHovering(true)
        }}
        onMouseLeave={() => setHovering(false)}
      >
        <p className={styles.amount}>{amount > 0 ? amount : ''}</p>

        <img
          className={styles.center}
          width={this.width}
          height={this.height}
          src={this.img}
        />
      </div>
    ) : (
      <div key={index} />
    )
  }
}

export default class CraftingTable extends Component {
  constructor(props) {
    super(props)

    const { Output } = props

    this.Output = /(\d+)x /g.exec(Output)
    this.OutputId = Output?.replace(/\d+x /g, '')

    this.state = {
      position: { x: 0, y: 0 },
      hovering: false,
      info: {
        name: undefined,
        id: undefined,
      },
    }
  }

  render() {
    const { position, hovering, info } = this.state

    return (
      <div className={styles.crafting}>
        {/* Tooltip */}
        <Tooltip position={position} hovering={hovering} info={info} />

        {/* Elements */}
        <div className={styles.container}>
          <Item
            id={this.OutputId}
            amount={parseInt(this.Output && this.Output[1])}
            column={1}
            index={5.225}
            key={10}
            setPosition={(position) => this.setState({ position })}
            setHovering={(hovering) => this.setState({ hovering })}
            setInfo={(info) => this.setState({ info: info })}
          />

          {this.props.Items.map((list, column) =>
            list.map((id, index) => (
              <Item
                id={id}
                column={column}
                index={index}
                key={index}
                setPosition={(position) => this.setState({ position })}
                setHovering={(hovering) => this.setState({ hovering })}
                setInfo={(info) => this.setState({ info: info })}
              />
            ))
          )}
        </div>
      </div>
    )
  }
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