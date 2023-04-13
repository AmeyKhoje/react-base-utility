// import pkgJson from './package.json' assert {type: "json"};
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy';
import scss from 'rollup-plugin-scss';
import path from 'path';
import { fileURLToPath } from 'url';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import globals from 'rollup-plugin-node-globals';
import cleanupPlugin from 'rollup-plugin-cleanup';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        sourcemap: true,
      },
    ],
    plugins: [
      copy({
        targets: [
          {
            src: ['src/assets', '!**/*.spec.*'],
            dest: 'dist/',
          },
          {
            src: 'README.md',
            dest: 'dist/',
          },
        ],
        verbose: false,
        flatten: true,
      }),
      // scss({ fileName: 'bundle.css', sourceMap: true }),
      external(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declarationDir: 'types/',
        declaration: true,
      }),
      postcss({
        modules: true,
        use: [
          [
            'sass',
            {
              includePaths: [path.join(__dirname, './src/assets')],
            },
          ],
        ],
        extract: false,
      }),
      babel({
        exclude: 'node_modules/**',
      }),
      image(),
      globals(),
      terser(),
      json(),
      cleanupPlugin(),
    ],
    external: ['react', 'react-dom'],
  },
];
