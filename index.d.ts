import { SvgProps } from "react-native-svg";

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
  Symbol,
  TSpan,
  Text,
  TextPath,
  Use
} from "react-native-svg";

// Export SVG object with enhanced props which includes the title
interface EnhancedSvgProps extends SvgProps {
  title?: string;
}

export const Svg: React.ComponentClass<EnhancedSvgProps>;
export default Svg;
