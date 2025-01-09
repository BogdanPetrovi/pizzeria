import React from 'react'
import Pizzas from './CatalogVariations/Pizzas'
import Salads from './CatalogVariations/Salads'
import IceCreams from './CatalogVariations/IceCreams'
import KidsMenu from './CatalogVariations/Kids'

function Catalog({choice}) {
  return (
    <div className='flex gap-5 justify-center mt-16'>
      {
        choice === 'Pizza' ? <Pizzas />
        : choice === 'Salad' ? <Salads />
        : choice === 'Ice cream' ? <IceCreams />
        : choice === 'Kids' ? <KidsMenu /> : null
      }
    </div>
  )
}

export default Catalog
