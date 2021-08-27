import * as path from 'path';
import type { Options } from 'esbuild-dev-tool';
import { htmlPluginFactory } from 'esbuild-dev-tool';

export function getEsbuildConfig(mode: 'development' | 'production'): Options {
  if (mode !== 'development' && mode !== 'production') {
    throw new Error('mode can only be development or production');
  }
  const root = path.resolve(__dirname, '..', '..');
  const htmlPlugin = htmlPluginFactory({
    template: path.join(root, 'index.ejs'),
    minify: mode === 'production',
    output: path.join(root, 'dist', 'index.html'),
  });
  return {
    esbuildOptions: {
      entryPoints: [path.join(root, 'src', 'index.tsx')],
      sourcemap: true,
      platform: 'browser',
      bundle: true,
      outdir: path.join(root, 'dist'),
      define: {
        'process.env.NODE_ENV': `"${mode}"`,
      },
      minify: mode === 'production',
      loader: {
        '.svg': 'file',
        '.png': 'file',
      },
      entryNames: '[name]-[hash]',
      assetNames: 'assets/[name]-[hash]',
      plugins: [htmlPlugin],
    },
  };
}
