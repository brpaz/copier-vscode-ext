import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/extension.ts'],
  sourcemap: true,
  target: 'node24',
  format: ['cjs'],
  dts: true,
  outDir: 'dist',
  clean: true,
  external: ['vscode'],
  outExtensions() {
    return {
      js: '.js',
    }
  },
})
