import { View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import RNSvg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Image,
  Line,
  LinearGradient,
  Mask,
  Path,
  Pattern,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Symbol,
  TSpan,
  Text,
  TextPath,
  Use
} from 'react-native-svg';

/**
 * Return a SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} SVG.
 * @public
 */
const Svg = (props) => {
  const { title, ...rest } = props;

  if (title) {
    return (
      <View accessible={ true } accessibilityLabel={ title }>
        <RNSvg { ...rest } />
      </View>
    );
  }

  return <RNSvg { ...rest } />;
};

Svg.propTypes = {
  title: PropTypes.string
};

export {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Image,
  Line,
  LinearGradient,
  Mask,
  Path,
  Pattern,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  TSpan,
  Text,
  TextPath,
  Use
};

export default Svg;
