import Svg, {
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
} from '../index.js';

import { shallow } from 'enzyme';
import assume from 'assume';
import React from 'react';

describe('@ux/svg', function () {
  describe('properties', function () {
    it('changes rotate to a transform property', function () {
      const props = shallow(<Path rotate={ 45 } />).props();

      assume(props.transform).equals('rotate(45)');
    });

    it('changes scale to a transform property', function () {
      const props = shallow(<Path scale={ 4 } />).props();

      assume(props.transform).equals('scale(4)');
    });

    it('changes translate to a transform property', function () {
      const props = shallow(<Path translate={ '8, 9' } />).props();

      assume(props.transform).equals('translate(8, 9)');
    });

    it('changes skewX to a transform property', function () {
      const props = shallow(<Path skewX={ 10 } />).props();

      assume(props.transform).equals('skewX(10)');
    });

    it('changes skewY to a transform property', function () {
      const props = shallow(<Path skewY={ 10 } />).props();

      assume(props.transform).equals('skewY(10)');
    });

    it('changes originX to a transform property', function () {
      const props = shallow(<Path originX={ 10 } />).props();

      assume(props.transform).equals('translate(10, 0) translate(-10, 0)');
    });

    it('changes originY to a transform property', function () {
      const props = shallow(<Path originY={ 10 } />).props();

      assume(props.transform).equals('translate(0, 10) translate(0, -10)');
    });

    it('combines multiple props in to a single transform', function () {
      const props = shallow(<Path translate={ '1, 2' } scale={ 1 } />).props();

      assume(props.transform).equals('translate(1, 2) scale(1)');
    });

    it('extracts font information to a style object', function () {
      const props = shallow(<Text
        fontSize={ 12 }
        fontWeight='bold'
        fontFamily='arial'
        fontStyle='normal'
      />).props();

      assume(props.style).is.a('object');
      assume(props.style.fontSize).equals(12);
      assume(props.style.fontWeight).equals('bold');
      assume(props.style.fontFamily).equals('arial');
      assume(props.style.fontStyle).equals('normal');
    });

    it('preserve a style object', function () {
      const props = shallow(<Text
        style={{
          userSelect: 'none'
        }}
      />).props();

      assume(props.style).is.a('object');
      assume(props.style.userSelect).equals('none');
    });

    it('preserve a style object but give bigger priority to font values', function () {
      const props = shallow(<Text
        fontSize={ 12 }
        style={{
          userSelect: 'none'
        }}
      />).props();

      assume(props.style).is.a('object');
      assume(props.style.fontSize).equals(12);
      assume(props.style.userSelect).equals('none');
    });
  });

  describe('Circle', function () {
    it('is exposed as component', function () {
      assume(Circle).is.not.a('undefined');
    });

    it('is a circle', function () {
      const name = shallow(<Circle />).name();

      assume(name).equals('circle');
    });
  });

  describe('ClipPath', function () {
    it('is exposed as component', function () {
      assume(ClipPath).is.not.a('undefined');
    });

    it('is a ClipPath', function () {
      const name = shallow(<ClipPath />).name();

      assume(name).equals('clipPath');
    });
  });

  describe('Defs', function () {
    it('is exposed as component', function () {
      assume(Defs).is.not.a('undefined');
    });

    it('is a def', function () {
      const name = shallow(<Defs />).name();

      assume(name).equals('defs');
    });
  });

  describe('Ellipse', function () {
    it('is exposed as component', function () {
      assume(Ellipse).is.not.a('undefined');
    });

    it('is a ellipse', function () {
      const name = shallow(<Ellipse />).name();

      assume(name).equals('ellipse');
    });
  });

  describe('G', function () {
    it('is exposed as component', function () {
      assume(G).is.not.a('undefined');
    });

    it('is a g', function () {
      const name = shallow(<G />).name();

      assume(name).equals('g');
    });

    it('applies x/y properties as transforms', function () {
      const props = shallow(<G x={ 1 } y= { 2 } />).props();

      assume(props.transform).equals('translate(1, 2)');
    });

    it('does not apply x/y properties as transforms when translate exists', function () {
      const props = shallow(<G x={ 1 } y= { 2 } translate='5, 6' />).props();

      assume(props.transform).equals('translate(5, 6)');
    });
  });

  describe('Image', function () {
    it('is exposed as component', function () {
      assume(Image).is.not.a('undefined');
    });

    it('is a image', function () {
      const name = shallow(<Image />).name();

      assume(name).equals('image');
    });
  });

  describe('Line', function () {
    it('is exposed as component', function () {
      assume(Line).is.not.a('undefined');
    });

    it('is a line', function () {
      const name = shallow(<Line />).name();

      assume(name).equals('line');
    });
  });

  describe('LinearGradient', function () {
    it('is exposed as component', function () {
      assume(LinearGradient).is.not.a('undefined');
    });

    it('is a linearGradient', function () {
      const name = shallow(<LinearGradient />).name();

      assume(name).equals('linearGradient');
    });
  });

  describe('Path', function () {
    it('is exposed as component', function () {
      assume(Path).is.not.a('undefined');
    });

    it('is a path', function () {
      const name = shallow(<Path />).name();

      assume(name).equals('path');
    });
  });

  describe('Polygon', function () {
    it('is exposed as component', function () {
      assume(Polygon).is.not.a('undefined');
    });

    it('is a polygon', function () {
      const name = shallow(<Polygon />).name();

      assume(name).equals('polygon');
    });
  });

  describe('Polyline', function () {
    it('is exposed as component', function () {
      assume(Polyline).is.not.a('undefined');
    });

    it('is a polyline', function () {
      const name = shallow(<Polyline />).name();

      assume(name).equals('polyline');
    });
  });

  describe('RadialGradient', function () {
    it('is exposed as component', function () {
      assume(RadialGradient).is.not.a('undefined');
    });

    it('is a radialGradient', function () {
      const name = shallow(<RadialGradient />).name();

      assume(name).equals('radialGradient');
    });
  });

  describe('Rect', function () {
    it('is exposed as component', function () {
      assume(Rect).is.not.a('undefined');
    });

    it('is a rect', function () {
      const name = shallow(<Rect />).name();

      assume(name).equals('rect');
    });
  });

  describe('Stop', function () {
    it('is exposed as component', function () {
      assume(Stop).is.not.a('undefined');
    });

    it('is a stop', function () {
      const name = shallow(<Stop />).name();

      assume(name).equals('stop');
    });
  });

  describe('Svg', function () {
    it('is exposed as component', function () {
      assume(Svg).is.not.a('undefined');
    });

    it('is a svg', function () {
      const name = shallow(<Svg />).name();

      assume(name).equals('svg');
    });

    it('corrects preserveAspectRatio to have a default alignment', function () {
      const html = shallow(<Svg preserveAspectRatio="meet" />).html();

      assume(html).to.include('preserveAspectRatio="xMidYMid meet"');
    });

    it('correctly supports preserveAspectRatio="none"', function () {
      const html = shallow(<Svg preserveAspectRatio="none" />).html();

      assume(html).to.include('preserveAspectRatio="none"');
    });

    it('renders with aria roles when an title is encountered', function () {
      const html = shallow(<Svg title="accessibility title here" />).html();

      assume(html).to.equal('<svg role="img" aria-label="[title]"><title>accessibility title here</title></svg>');
    });
  });

  describe('Symbol', function () {
    it('is exposed as component', function () {
      assume(Symbol).is.not.a('undefined');
    });

    it('is a symbol', function () {
      const name = shallow(<Symbol />).name();

      assume(name).equals('symbol');
    });
  });

  describe('Text', function () {
    it('is exposed as component', function () {
      assume(Text).is.not.a('undefined');
    });

    it('is a text', function () {
      const name = shallow(<Text />).name();

      assume(name).equals('text');
    });
  });

  describe('TSpan', function () {
    it('is exposed as component', function () {
      assume(TSpan).is.not.a('undefined');
    });

    it('is a tspan', function () {
      const name = shallow(<TSpan />).name();

      assume(name).equals('tspan');
    });
  });

  describe('TextPath', function () {
    it('is exposed as component', function () {
      assume(TextPath).is.not.a('undefined');
    });

    it('is a textPath', function () {
      const name = shallow(<TextPath />).name();

      assume(name).equals('textPath');
    });
  });

  describe('Use', function () {
    it('is exposed as component', function () {
      assume(Use).is.not.a('undefined');
    });

    it('is a use', function () {
      const name = shallow(<Use />).name();

      assume(name).equals('use');
    });
  });

  describe('Pattern', function () {
    it('is exposed as component', function () {
      assume(Pattern).is.not.a('undefined');
    });

    it('is a mask', function () {
      const name = shallow(<Pattern id="foo" />).name();

      assume(name).equals('pattern');
    });
  });

  describe('Mask', function () {
    it('is exposed as component', function () {
      assume(Mask).is.not.a('undefined');
    });

    it('is a mask', function () {
      const name = shallow(<Mask id="foo" />).name();

      assume(name).equals('mask');
    });
  });
});
