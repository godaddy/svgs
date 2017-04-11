# CHANGELOG

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
