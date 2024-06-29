/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line unused-imports/no-unused-imports
import react from '@vitejs/plugin-react'
import reactSwc from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'
import { visualizer } from 'rollup-plugin-visualizer'
import Unocss from 'unocss/vite'
import { defineConfig, type ConfigEnv, type PluginOption } from 'vite'
import importer from 'vite-plugin-importer'
import monkey, { cdn } from 'vite-plugin-monkey'
import tsconfigPaths from 'vite-tsconfig-paths'

import packageJson from './package.json'

dotenv.config()

function createReactPlugin(command: ConfigEnv['command']) {
  const swc = reactSwc()

  const babel = react()

  // return babel

  // use @vitejs/plugin-react in build
  // for use emotion babel plugin
  // https://emotion.sh/docs/babel#features-which-are-enabled-with-the-babel-plugin
  return command === 'serve' ? swc : babel
}

function createImportPlugins(command: ConfigEnv['command']): PluginOption[] {
  return [
    command === 'build' &&
      importer({
        libraryName: '@icon-park/react',
        libraryDirectory: 'es/icons',
        camel2DashComponentName: false // default: true,
      })
  ].filter(Boolean)
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // https://github.com/lisonge/vite-plugin-monkey/issues/10#issuecomment-1207264978
  esbuild: {
    charset: 'utf8'
  },
  plugins: [
    tsconfigPaths(),
    Unocss(),
    createReactPlugin(command),
    ...createImportPlugins(command),
    monkey({
      entry: 'src/main.tsx',
      userscript: {
        name: {
          '': packageJson.title,
          'zh-CN': packageJson['title:zh-CN'],
          'zh-TW': packageJson['title:zh-TW']
        },
        author: packageJson.author,
        namespace: packageJson.author,
        description: {
          '': packageJson.description,
          'zh-CN': packageJson['description:zh-CN'],
          'zh-TW': packageJson['description:zh-TW']
        },
        license: packageJson.license,
        match: [
          // all
          '*://*/*'
        ],
        icon: 'https://chat.openai.com/favicon.ico',
        'run-at': 'document-end'
      },
      build: {
        fileName: 'smart-web.user.js',
        externalGlobals: {
          react: cdn.npmmirror('React', 'umd/react.production.min.js'),
          'react-dom': cdn.npmmirror(
            'ReactDOM',
            'umd/react-dom.production.min.js'
          ),
          i18next: cdn.npmmirror('i18next', 'dist/umd/i18next.min.js'),
          'react-draggable': cdn.npmmirror(
            'ReactDraggable',
            'build/web/react-draggable.min.js'
          ),
          'zustand/middleware': cdn.npmmirror(
            'zustandMiddleware',
            'umd/middleware.production.js'
          )
        }
      },
      server: {
        open: true
      }
    }),
    process.env.NODE_ENV === 'production' &&
      process.argv.includes('--analyze') &&
      visualizer({
        open: true
      })
  ],
  build: {
    cssMinify: false
  }
}))
