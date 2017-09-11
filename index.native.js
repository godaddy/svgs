import { View } from 'react-native';
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
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Symbol,
  Text,
  TSpan,
  TextPath,
  Use
} from 'react-native-svg';

const Svg = (props) => {
  const { title, ...rest } = props;

  if (title) {
    return (
      <View accessible={ true } accessibilityLabel={ title }>
        <RNSvg { ...rest} />
      </View>
    );
  }

  return <RNSvg { ...rest} />
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
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Text,
  TSpan,
  TextPath,
  Use
};

export default Svg;
