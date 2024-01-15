import {Easing} from 'react-native-reanimated';
import StyleDictionary, {TransformedToken} from 'style-dictionary';

// Prepend token type to name
const customNameTransformer = (token: TransformedToken) => {
  if (
    !token.name.toLowerCase().startsWith(token.original.type.toLowerCase()) &&
    token.original.type !== 'other'
  ) {
    token.name = `${token.original.type as string}${token.name}`;
  } else {
    token.name = token.name.charAt(0).toLowerCase() + token.name.slice(1);
  }
  return token.name;
};

// Transform string to number
const strToNumberTransformer = (token: TransformedToken) => {
  try {
    token.value = parseFloat(token.value);
  } catch (e) {
    console.log(e);
  } finally {
    return token.value;
  }
};

const msToIntTransformer = (token: TransformedToken) => {
  try {
    token.value = parseFloat(token.value);
  } catch (e) {
    console.log(e);
  } finally {
    return token.value;
  }
};

// Transform opacity from 50% to 0.5
const opacityTransformer = (token: TransformedToken) => {
  try {
    token.value = parseFloat(token.value) / 100;
  } catch (e) {
    console.log(e);
  } finally {
    return token.value;
  }
};

// Transform easing to an
const easingObjectTransformer = (token: TransformedToken) => {
  try {
    token.value = (token.value as string)
      .split(',')
      .map(each => parseFloat(each));
    if (token.value.length < 4) {
      throw new Error("Missing Value: Easing doesn't have 4 values.");
    }
  } catch (e) {
    console.log(e);
  } finally {
    return token.value;
  }
};

StyleDictionary.registerTransform({
  type: 'name',
  name: 'name/type',
  transformer: customNameTransformer,
});

StyleDictionary.registerTransform({
  type: 'value',
  name: 'value/strToInt',
  matcher: token => {
    return (
      (token.type === 'borderRadius' ||
        token.type === 'borderWidth' ||
        token.type === 'spacing' ||
        token.type === 'fontSizes' ||
        token.type === 'lineHeights' ||
        token.type === 'letterSpacing' ||
        token.type === 'sizing') &&
      typeof token.value === 'string'
    );
  },
  transformer: strToNumberTransformer,
});

StyleDictionary.registerTransform({
  type: 'value',
  name: 'time/msToInt',
  matcher: token => {
    return typeof token.value === 'string' && token.value.endsWith('ms');
  },
  transformer: msToIntTransformer,
});

StyleDictionary.registerTransform({
  type: 'value',
  name: 'value/opacity',
  matcher: token => {
    return token.type === 'opacity' && typeof token.value === 'string';
  },
  transformer: opacityTransformer,
});

StyleDictionary.registerTransform({
  type: 'value',
  name: 'easing/array',
  matcher: token => {
    return token.path.includes('easing');
  },
  transformer: easingObjectTransformer,
});

StyleDictionary.extend('src/tokens/config.json').buildAllPlatforms();
