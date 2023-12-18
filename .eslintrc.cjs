module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    "alloy",
    "alloy/react",
    "alloy/typescript",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:unicorn/recommended",
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "unicorn"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
    "unicorn/filename-case": "off",
  },
}
