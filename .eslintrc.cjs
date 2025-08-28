// module.exports = {
//   root: true,
//   parser: "@typescript-eslint/parser",
//   plugins: ["@typescript-eslint"],
//   extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
//   ignorePatterns: ["dist", "node_modules"],
// };

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'warn',
  },
  ignorePatterns: ['dist', 'node_modules'],
};
