module.exports = {
  parser: '@typescript-eslint/parser', // Enables ESLint to understand TypeScript
  plugins: ['@typescript-eslint'], // Adds extra TS-specific linting rules
  extends: [
    'eslint:recommended', // Base ESLint rules
    'plugin:@typescript-eslint/recommended', // TypeScript best practices
    'prettier', // Prevent ESLint from conflicting with Prettier formatting
  ],
  env: {
    node: true, // Enables Node.js globals (like process, __dirname)
    es6: true, // Enables ES6 syntax
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-console': 'off', // Allow console logs (helpful in backend)
  },
};
