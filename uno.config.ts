import { defineConfig, presetUno, presetIcons } from 'unocss'
import presetTheme from 'unocss-preset-theme'
import type { Theme } from 'unocss/preset-uno'

export default defineConfig<Theme>({
  presets: [
    presetUno(),
    presetTheme<Theme>({
      theme: {
        dark: {
          colors: {
            background: '#242424',
            backgroundTodoDetail: '#212226',
            text: '#f5f8fa',
            hoverButtonIcon: '#111827',
            iconColor: '#f5f8fa',
          },
        },
        light: {
          colors: {
            background: '#c5c8ca',
            backgroundTodoDetail: '#8ea1a8',
            text: '#242424',
            hoverButtonIcon: '',
            iconColor: '#242424',
          },
        },
      },
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
      },
      collections: {
        carbon: () =>
          import('@iconify-json/carbon/icons.json').then((i) => i.default),
      },
      scale: 1.2,
    }),
  ],
})
