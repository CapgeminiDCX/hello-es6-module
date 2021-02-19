
import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

/**
 * TODO : Check this : https://www.learnwithjason.dev/blog/learn-rollup-js 
 **/ 

export default {
  input: './src/index.js',
  output: {
    file: `./dist/hello-world.js`,
    format: 'umd',
    // This is the name of the exported global object.
    // So the world function could be called with hello.world();
    name: pkg.name,
    compact: true
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',  // only transpile our source code
      babelHelpers: 'external'
    }),
    //uglify()
  ]
}
