import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'

import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		uni(),
		AutoImport({
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
			],
			imports: ['vue', 'uni-app'],
			dts: 'typings/auto-imports.d.ts',
		}),
	],
	resolve: {
		alias: {
			'@': `${path.resolve(__dirname, 'src')}/`,
		},
		extensions: ['.mjs', '.js', '.jsx', '.json', '.vue'],
	},
})
// vits.config.ts
