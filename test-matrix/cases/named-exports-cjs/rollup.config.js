import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.mjs',
  output: {
    file: 'dist/rollup.js',
    format: 'cjs',
  },
  plugins: [commonjs()],
};
