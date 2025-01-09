import React from 'react'
import Card from '../Card'

function Pizzas() {
  return (
    <>
      <Card
        image={'Images/Pizza/pepperoni.png'}
        name={'Pepperoni pizza'}
        price={['14', '16', '18']}
        isPizza
      />
      <Card
        image={'Images/Pizza/cheese.png'}
        name={'Cheese Pizza'}
        price={['12', '15', '18']}
        isPizza
      />
      <Card
        image={'Images/Pizza/sweet.png'}
        name={'Sweet Pizza'}
        price={['16', '20', '23']}
        isPizza
      />
      <Card
        image={'Images/Pizza/meat.png'}
        name={'Meat Pizza'}
        price={['16', '20', '24']}
        isPizza
      />
    </>
  )
}

export default Pizzas
