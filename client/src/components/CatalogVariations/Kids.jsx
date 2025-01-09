import React from 'react'
import Card from '../Card'

function KidsMenu() {
  return (
    <>
      <Card
        image={'Images/KidsMenu/kidspizza.png'}
        name={'Kids Pizza'}
        price={'$ 8'}
      />
      <Card
        image={'Images/KidsMenu/kidsmeal.png'}
        name={'Kids Meal'}
        price={'$ 9'}
      />
      <Card
        image={'Images/KidsMenu/icecream.png'}
        name={'Cone Ice Cream'}
        price={'$ 3'}
      />
      <Card
        image={'Images/KidsMenu/toy.png'}
        name={'Pizza man toy'}
        price={'$ 7'}
      />
    </>
  )
}

export default KidsMenu
