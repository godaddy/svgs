# CHANGELOG

### 2.0.0

- The package `react-native-svg` has been removed from the `peerDependencies`.
  We now make the assumption that you install this dependency as part of your
  react-native application. This resolves issues that people when trying to `npm
  shrinkwrap` their dependencies when they are not using react-native.
