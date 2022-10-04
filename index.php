<?php

/** 
 * Plugin Name: my test plugin
 * plugin URI:
 * Description: test plugin with wp-scripts
 * Version: 1.0
 * Author: OH
 * Autor URI: oswaldohuillca.vercel.app
 * Licence:MIT
 * 
 */


if (!defined('ABSPATH')) exit;

define('OH_EDITOR_SCRIPTS', 'oh_editor_scripts');
define('OH_EDITOR_STYLES', 'oh_editor_styles');
define('OH_FRONTEND_STYLES', 'oh_frontend_styles');


// // REGISTER BLOCK AND CSS

// function enqueue_block_editor_assets()
// {
//   wp_enqueue_script(
//     'oh-custom-plugin',
//     plugins_url('build/index.js', __FILE__),
//     ['wp-blocks', 'wp-element', 'wp-block-editor', 'wp-i18n', 'wp-editor']
//   );
// }
// add_action('enqueue_block_editor_assets', 'enqueue_block_editor_assets');


add_action('init', 'custom_blocks');


function custom_blocks()
{

  // if gutenberg is active
  if (!function_exists('register_block_type')) {
    return;
  }

  // editor scripts register
  wp_register_script(
    OH_EDITOR_SCRIPTS,    // name
    plugins_url('build/index.js', __FILE__),    // file
    array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),  // dependencies
    filemtime(plugin_dir_path(__FILE__) . 'build/index.js') // version
  );

  // editor styles register
  wp_register_style(
    OH_EDITOR_STYLES,                // name
    plugins_url('build/editor.css', __FILE__),  // file
    array('wp-edit-blocks'),            // dependencies
    filemtime(plugin_dir_path(__FILE__) . 'build/editor.css')  //version
  );

  // frontend styles register
  wp_register_style(
    OH_FRONTEND_STYLES,  // name
    plugins_url('build/index.css', __FILE__),  // CSS 
    array(), // dependencias
    filemtime(plugin_dir_path(__FILE__) . 'build/index.css') // version
  );

  // array blocks
  $blocks = ['my-collection/block-name'];


  foreach ($blocks as $block) {
    register_block_type($block, array(
      'editor_script' => OH_EDITOR_SCRIPTS,  // agregar script de editor
      'editor_style' => OH_EDITOR_STYLES,  // agregar estilos de editor
      'style' => OH_FRONTEND_STYLES,  // agregar estilos frontend
    ));
  }
}
