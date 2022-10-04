import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import './assets/index.scss';
// MY BLOCK
import MyBlockEditor from "./blocks/myBlock/MyBlockEditor";
import MyBlockFront from "./blocks/myBlock/MyBlockFront";


// Register the collection.
// registerBlockCollection( 'my-collection', {
//     title: __( 'Custom Collection' ),
// } );

// Register a block in the same namespace to add it to the collection.

registerBlockType('my-collection/block-name', {
  title: __('My First Block'),
  attributes: {
    text: {
      type: 'string',
      default: ""
    },
    bgColor: {
      type: 'string',
      default: "green"
    }
  },
  edit: MyBlockEditor,
  save: MyBlockFront
})

