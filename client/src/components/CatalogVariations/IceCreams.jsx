import React from 'react'
import Card from '../Card'

function IceCreams() {
  return (
    <>
      <Card
        image={'Images/IceCream/chocolate.png'}
        name={'Chocolate Ice Cream'}
        price={'3'}
      />
      <Card
        image={'Images/IceCream/vanilla.png'}
        name={'Vanilla Ice Cream'}
        price={'3'}
      />
      <Card
        image={'Images/IceCream/strawberry.png'}
        name={'Strawberry Ice Cream'}
        price={'3'}
      />
      <Card
        image={'Images/IceCream/cookies.png'}
        name={'Cookies and Cream'}
        price={'4'}
      />
    </>
  )
}

export default IceCreams
