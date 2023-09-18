import { defineConfig, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
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
