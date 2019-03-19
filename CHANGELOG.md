# CHANGELOG

### 4.1.0

- Added TypeScript definition files.

### 4.0.0

- Upgrade to babel 7

### 3.3.1

- Upgrade to Babel 7 was a breaking change, reverting to 6 in this build so
  3.3.1 no longer breaks people. Will re-release breaking babel upgrade as 4.0

### 3.3.0

- Upgrade to `@babel/7`
- Added `<Mask />` and `<Pattern />` support
- Updated devDependencies to latest

### 3.2.1

- Do not prefix `preserveAspectRatio="none"` with `xMidYMid`.

### 3.2.0

- `preserveAspectRatio` now as the same align default of `xMidYMid` when no
  alignment is given.
- Moved babel-* dependencies to `devDependencies` and make the assumption
  that these are installed by developers if they do not want to use our
  pre-build bundle.
- Added code coverage and Travis-CI/Coveralls integration.
- Added missing propType validation in the `index.native.js` file as
  well as for the `<G />` tag in the browser build.

### 3.1.2

- Support `originX` and `originY` as properties. See #13 #18

### 3.1.1

- Updated `peerDependencies` to include all React versions, not just 15.x.x.
  See #16
- Correctly transform/translate svg groups (`<G>`) when `x` and `y` properties
  are added. See #15

### 3.1.0

- Improved accessibility by supporting titles for SVG elements. See #11
- Correctly use `textPath` instead of `textpath` as the element names are case
  sensitive. See #12

### 3.0.1

- 3.0.0 also introduced some `Prop-Type` validation to certain components. It
  forced `x` and `y` values to be strings. This has now been updated to allow
  both `string` and `number` values.

### 3.0.0

- `browser` property changed to `reactnative`.
- Additional babel object spread plugin added.

### 2.1.1

- Actually run the build during publish so we `npm publish` a version with the
  compiled code.

### 2.1.0

- The package is now published with ES5 compiled code. Except for the `browser`
  field as that is still used by React-Native so we would want ES6 there.

### 2.0.0

- The package `react-native-svg` has been removed from the `peerDependencies`.
  We now make the assumption that you install this dependency as part of your
  react-native application. This resolves issues that people when trying to `npm
  shrinkwrap` their dependencies when they are not using react-native.
