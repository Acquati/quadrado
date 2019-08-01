module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'eslint:recommended'
  ],
  plugins: [
    'prettier',
    'vue'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': 1,
    'semi': [2, 'never'],
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error', { 'semi': false }],    
    'vue/singleline-html-element-content-newline': ['error', {
      'ignoreWhenNoAttributes': false,
      'ignoreWhenEmpty': false
    }]
  },
  globals: {
    $nuxt: true
  }
}
