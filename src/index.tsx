import React from 'react'

import { __ } from '@wordpress/i18n'
import { registerBlockCollection, registerBlockType } from '@wordpress/blocks'
import { Button } from '@wordpress/components'
import './assets/index.scss'
// Register the collection.
// registerBlockCollection( 'my-collection', {
//     title: __( 'Custom Collection' ),
// } );

// Register a block in the same namespace to add it to the collection.

registerBlockType('my-collection/block-name', {
  title: __('My First Block'),
  edit: edit,
  save: props => {

    return (
      <div id='custom-type'>
        <h1>asdasdas</h1>

        <Foo />

      </div>
    )
  },
})


function edit() {
  return (
    <button className='bg-amber-600'>
      {__('Clickeame')}
    </button>
  )
}

function Foo() {
  const handleClick = () => {
    alert('click')
  }

  return (
    <button className='bg-amber-600' onClick={handleClick}>Iniciar sesion</button>
  )
}

