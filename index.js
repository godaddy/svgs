import PropTypes from 'prop-types';
import React from 'react';
import rip from 'rip-out';

/**
 * PropType specification where a value can be represented as number and string.
 *
 * @type {PropTypes}
 * @private
 */
const numb = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]);

/**
 * Helper function to copy and paste over properties to a different object if
 * they exists.
 *
 * @param {Object} from Object to copy from.
 * @param {Object} to Object to paste to.
 * @param {String} props Name of the property
 * @private
 */
function copypaste(from, to, ...props) {
  props.forEach((prop) => {
    if (prop in from) to[prop] = from[prop];
  });
}

/**
 * The `react-native-svg` has some crazy api's that do not match with the
 * properties that can be applied to SVG elements. This prepare function removes
 * those properties and adds the properties back in their correct location.
 *
 * @param {Object} props Properties given to us.
 * @returns {Object} Cleaned object.
 * @private
 */
function prepare(props) {
  const clean = rip(props,
    'translate', 'scale', 'rotate', 'skewX', 'skewY', 'originX', 'originY',
    'fontFamily', 'fontSize', 'fontWeight', 'fontStyle',
    'style'
  );

  const transform = [];

  //
  // Correctly apply the transformation properties.
  // To apply originX and originY we need to translate the element on those values and
  // translate them back once the element is scaled, rotated and skewed.
  //
  if ('originX' in props || 'originY' in props) transform.push(`translate(${props.originX || 0}, ${props.originY || 0})`);
  if ('translate' in props) transform.push(`translate(${props.translate})`);
  if ('scale' in props) transform.push(`scale(${props.scale})`);
  if ('rotate' in props) transform.push(`rotate(${props.rotate})`);
  if ('skewX' in props) transform.push(`skewX(${props.skewX})`);
  if ('skewY' in props) transform.push(`skewY(${props.skewY})`);
  if ('originX' in props || 'originY' in props) transform.push(`translate(${-props.originX || 0}, ${-props.originY || 0})`);
  if (transform.length) clean.transform = transform.join(' ');

  //
  // Correctly set the initial style value.
  //
  const style = ('style' in props) ? props.style : {};

  //
  // This is the nasty part where we depend on React internals to work as
  // intended. If we add an empty object as style, it shouldn't render a `style`
  // attribute. So we can safely conditionally add things to our `style` object
  // and re-introduce it to our `clean` object
  //
  copypaste(props, style, 'fontFamily', 'fontSize', 'fontWeight', 'fontStyle');
  clean.style = style;

  //
  // React-Native svg provides as a default of `xMidYMid` if aspectRatio is not
  // specified with align information. So we need to support this behavior and
  // correctly default to `xMidYMid [mode]`.
  //
  const preserve = clean.preserveAspectRatio;
  if (preserve && preserve !== 'none' && !~preserve.indexOf(' ')) {
    clean.preserveAspectRatio = 'xMidYMid ' + preserve;
  }

  return clean;
}

/**
 * Return a circle SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} Circle SVG.
 * @public
 */
function Circle(props) {
  return <circle { ...prepare(props) } />;
}

/**
 * Return a clipPath SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} ClipPath SVG.
 * @public
 */
function ClipPath(props) {
  return <clipPath { ...prepare(props) } />;
}

/**
 * Return a defs SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} Defs SVG.
 * @public
 */
function Defs(props) {
  return <defs { ...prepare(props) } />;
}

/**
 * Return a ellipse SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} Ellipse SVG.
 * @public
 */
function Ellipse(props) {
  return <ellipse { ...prepare(props) } />;
}

/**
 * Return a g SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} G SVG.
 * @public
 */
function G(props) {
  const { x, y, ...rest } = props;

  if ((x || y) && !rest.translate) {
    rest.translate = `${x || 0}, ${y || 0}`;
  }

  return <g { ...prepare(rest) } />;
}

/**
 * PropType validation for the <G />.
 *
 * @type {Object}
 * @private
 */
G.propTypes = {
  x: numb,
  y: numb
};

/**
 * Return a image SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} Image SVG.
 * @public
 */
function Image(props) {
  return <image { ...prepare(props) } />;
}

/**
 * Return a line SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} Line SVG.
 * @public
 */
function Line(props) {
  return <line { ...prepare(props) } />;
}

/**
 * Return a linearGradient SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} LinearGradient SVG.
 * @public
 */
function LinearGradient(props) {
  return <linearGradient { ...prepare(props) } />;
}

/**
 * Return a path SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} Path SVG.
 * @public
 */
function Path(props) {
  return <path { ...prepare(props) } />;
}

/**
 * Return a polygon SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} Polygon SVG.
 * @public
 */
function Polygon(props) {
  return <polygon { ...prepare(props) } />;
}

/**
 * Return a polyline SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} Polyline SVG.
 * @public
 */
function Polyline(props) {
  return <polyline { ...prepare(props) } />;
}

/**
 * Return a radialGradient SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} RadialGradient SVG.
 * @public
 */
function RadialGradient(props) {
  return <radialGradient { ...prepare(props) } />;
}

/**
 * Return a rect SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} Rect SVG.
 * @public
 */
function Rect(props) {
  return <rect { ...prepare(props) } />;
}

/**
 * Return a stop SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} Stop SVG.
 * @public
 */
function Stop(props) {
  return <stop { ...prepare(props) } />;
}

/**
 * Return a SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} SVG.
 * @public
 */
function Svg(props) {
  const { title, ...rest } = props;

  if (title) {
    return (
      <svg role='img' aria-label='[title]' { ...prepare(rest) }>
        <title>{ title }</title>
        { props.children }
      </svg>
    );
  }

  return <svg { ...prepare(rest) } />;
}

/**
 * PropType validation for the <Svg />.
 *
 * @type {Object}
 * @private
 */
Svg.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
};

/**
 * Return a symbol SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} Symbol SVG.
 * @public
 */
function Symbol(props) {
  return <symbol { ...prepare(props) } />;
}

/**
 * Return a text SVG element.
 *
 * @returns {React.Component} Text SVG.
 * @public
 * @param {Object} props The properties that are spread on the SVG element.
 * @param {String} props.x x position
 * @param {String} props.y y position
 * @param {String} props.dx delta x
 * @param {String} props.dy delta y
 * @param {String} props.rotate rotation
 */
function Text(props) {
  const { x, y, dx, dy, rotate, ...rest } = props;

  return <text { ...prepare(rest) } { ...{ x, y, dx, dy, rotate } } />;
}

/**
 * PropType validation for the <Text />.
 *
 * @type {Object}
 * @private
 */
Text.propTypes = {
  x: numb,
  y: numb,
  dx: numb,
  dy: numb,
  rotate: numb
};

/**
 * Return a tspan SVG element.
 *
 * @returns {React.Component} TSpan SVG.
 * @public
 * @param {Object} props The properties that are spread on the SVG element.
 * @param {String} props.x x position
 * @param {String} props.y y position
 * @param {String} props.dx delta x
 * @param {String} props.dy delta y
 * @param {String} props.rotate rotation
 */
function TSpan(props) {
  const { x, y, dx, dy, rotate, ...rest } = props;

  return <tspan { ...prepare(rest) } { ...{ x, y, dx, dy, rotate } } />;
}

/**
 * PropType validation for the <TSpan />.
 *
 * @type {Object}
 * @private
 */
TSpan.propTypes = Text.propTypes;

/**
 * Return a textpath SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} TextPath SVG.
 * @public
 */
function TextPath(props) {
  return <textPath { ...prepare(props) } />;
}

/**
 * Return a use SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} Use SVG.
 * @public
 */
function Use(props) {
  return <use { ...prepare(props) } />;
}

/**
 * Return a mask SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} Use SVG.
 * @public
 */
function Mask(props) {
  return <mask { ...prepare(props) } />;
}

/**
 * Return a pattern SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} Use SVG.
 * @public
 */
function Pattern(props) {
  return <pattern { ...prepare(props) } />;
}

//
// Expose everything in the same way as `react-native-svg` is doing.
//
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
