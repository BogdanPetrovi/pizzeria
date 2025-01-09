import React from 'react'
import Card from '../Card'

function Salads() {
  return (
    <>
      <Card
        image={'Images/Salad/caesar.png'}
        name={'Ceasar Salad'}
        price={'$ 10'}
      />
      <Card
        image={'Images/Salad/greek.png'}
        name={'Greek Salad'}
        price={'$ 11'}
      />
      <Card
        image={'Images/Salad/caprese.png'}
        name={'Caprese Salad'}
        price={'$ 12'}
      />
      <Card
        image={'Images/Salad/cobb.png'}
        name={'Cobb Salad'}
        price={'$ 14'}
      />
    </>
  )
}

export default Salads
