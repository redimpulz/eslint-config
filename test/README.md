# Test Files

This directory contains test fixtures to validate that the ESLint configurations work correctly.

## Purpose

These tests verify:

1. **Configuration Loading** - Each config file can be imported and loaded without errors
2. **Dependencies Resolution** - All required ESLint plugins and configurations are properly installed
3. **Rule Functionality** - ESLint rules are correctly applied and violations are detected

## Intentional Rule Violations

The test files contain **intentional ESLint rule violations** to ensure rules are working:

- **`base.test.ts`**
  - Import order violation (external imports should come before local imports)
  - Type import violation (should use `import type` for type-only imports)

- **`react.test.tsx`**
  - React Hooks exhaustive-deps warning (disabled with eslint-disable-line)

- **`next.test.tsx`**
  - Using `<img>` instead of `next/image` (disabled with eslint-disable-line)

## Running Tests

```bash
npm test              # Run all tests
npm run test:base     # Test base configuration only
npm run test:react    # Test React configuration only
npm run test:next     # Test Next.js configuration only
```

## Expected Behavior

Tests will **pass** while showing warnings for the intentional violations. This confirms that:
- The configurations load successfully
- The linting rules are active and working
- The package can be safely published
