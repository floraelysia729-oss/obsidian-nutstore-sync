import UnoCSS from '@unocss/postcss'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
	plugins: [UnoCSS({ cwd: __dirname })],
}
