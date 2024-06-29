/* eslint-disable import/no-extraneous-dependencies */
import transformerCompileClass from '@unocss/transformer-compile-class'
import transformerDirective from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  transformers: [
    transformerDirective(),
    transformerCompileClass(),
    transformerVariantGroup()
  ]
})
