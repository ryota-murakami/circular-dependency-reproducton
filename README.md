# Circular Dependency Demonstration

This project is a demo that shows the problem caused by circular dependencies between JavaScript modules when bundled with Webpack.

## Problem Overview

This demo reproduces the following circular dependency situation:

1. `moduleA.js` imports `moduleB.js`
2. `moduleB.js` imports `moduleA.js`
3. At runtime, an `Uncaught TypeError: helloA is not a function` error occurs

## Project Structure

```
src/
├── index.js        # Entry point
├── moduleA.js      # Module A
└── moduleB.js      # Module B (circular dependency)
```

## How to Run

Install dependencies:
```
npm install
```

Start the development server:
```
npm start
```

Or, create a production build:
```
npm run build
```

## Result

The following error will appear in the browser console:

```
Hello from A
Hello from B
Uncaught TypeError: helloA is not a function
```

## Explanation of the Problem

This issue is due to the ES Modules specification. In modules with circular dependencies, some functions or variables may be `undefined` depending on the timing of initialization.

In this demo:
1. When `moduleB.js` imports `moduleA.js`, `helloA` is not yet defined
2. `moduleA.js` is executed first, defines the `helloA` function, and then calls `helloB`
3. Inside `helloB`, it tries to call `helloA`, but at this point, `helloA` is `undefined`

## Solutions

Best practices to avoid circular dependencies:
1. Review your module structure and make dependencies one-way
2. Extract common functionality into a separate module
3. Use dynamic imports
4. Import inside functions (runtime import) 

Real example for fixing circular dependency in entire codebase: https://github.com/replayio/devtools/pulls?q=sort%3Aupdated-desc+is%3Apr+Circular+Import+is%3Aclosed