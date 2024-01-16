import { createTheme } from '@shopify/restyle';
import * as tokens from '@src/tokens';
import { transformThemeTypographyToken } from './utils/typography';
import { Easing } from 'react-native-reanimated';
import { generateEasing } from './utils/easing';

const palette = {
  // Light
  lightBackgroundsAccent: tokens.colorLightBackgroundsAccent,
  lightBackgroundsDisabled: tokens.colorLightBackgroundsDisabled,
  lightBackgroundsInteractive: tokens.colorLightBackgroundsInteractive,
  lightBackgroundsPressedA: tokens.colorLightBackgroundsPressedA,
  lightBackgroundsPressedB: tokens.colorLightBackgroundsPressedB,
  lightBackgroundsPrimaryA: tokens.colorLightBackgroundsPrimaryA,
  lightBackgroundsPrimaryB: tokens.colorLightBackgroundsPrimaryB,
  lightBackgroundsSecondary: tokens.colorLightBackgroundsSecondary,
  lightBordersPrimary: tokens.colorLightBordersPrimary,
  lightBordersSecondary: tokens.colorLightBordersSecondary,
  lightBordersTertiary: tokens.colorLightBordersTertiary,
  lightContentAccent: tokens.colorLightContentAccent,
  lightContentDisabled: tokens.colorLightContentDisabled,
  lightContentInteractive: tokens.colorLightContentInteractive,
  lightContentInverseInteractive: tokens.colorLightContentInverseInteractive,
  lightContentPrimary: tokens.colorLightContentPrimary,
  lightContentSecondary: tokens.colorLightContentSecondary,

  // Dark
  darkBackgroundsAccent: tokens.colorDarkBackgroundsAccent,
  darkBackgroundsDisabled: tokens.colorDarkBackgroundsDisabled,
  darkBackgroundsInteractive: tokens.colorDarkBackgroundsInteractive,
  darkBackgroundsPrimaryA: tokens.colorDarkBackgroundsPrimaryA,
  darkBackgroundsPrimaryB: tokens.colorDarkBackgroundsPrimaryB,
  darkBackgroundsSecondary: tokens.colorDarkBackgroundsSecondary,
  darkBordersPrimary: tokens.colorDarkBordersPrimary,
  darkBordersSecondary: tokens.colorDarkBordersSecondary,
  darkBordersTertiary: tokens.colorDarkBordersTertiary,
  darkContentAccent: tokens.colorDarkContentAccent,
  darkContentDisabled: tokens.colorDarkContentDisabled,
  darkContentInteractive: tokens.colorDarkContentInteractive,
  darkContentInverseInteractive: tokens.colorDarkContentInverseInteractive,
  darkContentPrimary: tokens.colorDarkContentPrimary,
  darkContentSecondary: tokens.colorDarkContentSecondary,
};

const theme = createTheme({
  colors: palette,
  spacing: {
    xxComfortable: tokens.spacingXxComfortable,
    xComfortable: tokens.spacingXComfortable,
    comfortable: tokens.spacingComfortable,
    base: tokens.spacingBase,
    tight: tokens.spacingTight,
    xTight: tokens.spacingXTight,
    xxTight: tokens.spacingXxTight,
  },
  textVariants: {
    // Europa 2
    headingXSmall: transformThemeTypographyToken(tokens.typographyHeadingXSmall),
    headingSmall: transformThemeTypographyToken(tokens.typographyHeadingSmall),
    headingMedium: transformThemeTypographyToken(tokens.typographyHeadingMedium),
    headingLarge: transformThemeTypographyToken(tokens.typographyHeadingLarge),
    headingXLarge: transformThemeTypographyToken(tokens.typographyHeadingXLarge),
    headingXxLarge: transformThemeTypographyToken(tokens.typographyHeadingXxLarge),
    bodySmall: transformThemeTypographyToken(tokens.typographyBodySmall),
    bodyMedium: transformThemeTypographyToken(tokens.typographyBodyMedium),
    bodyLarge: transformThemeTypographyToken(tokens.typographyBodyLarge),
    labelSmall: transformThemeTypographyToken(tokens.typographyLabelSmall),
    labelMedium: transformThemeTypographyToken(tokens.typographyLabelMedium),
    labelLarge: transformThemeTypographyToken(tokens.typographyLabelLarge),
    componentButtonMedium: transformThemeTypographyToken(tokens.typographyComponentButtonMedium),
    componentButtonLarge: transformThemeTypographyToken(tokens.typographyComponentButtonLarge),
  },
  borderRadii: {
    small: tokens.borderRadiusSmall,
    medium: tokens.borderRadiusMedium,
    circular: tokens.borderRadiusCircular,
  },
  opacity: {
    slightlyTransparent: tokens.opacitySlightlyTransparent,
    semiTransparent: tokens.opacitySemiTransparent,
    veryTransparent: tokens.opacityVeryTransparent,
  },
  sizing: {
    minimumTappableArea: tokens.sizingMinimumTappableArea,
    iconXSmall: tokens.sizingIconXSmall,
    iconSmall: tokens.sizingIconSmall,
    iconMedium: tokens.sizingIconMedium,
    iconLarge: tokens.sizingIconLarge,
    iconXLarge: tokens.sizingIconXLarge,
    buttonHeightLarge: tokens.sizingButtonHeightLarge,
    buttonHeightMedium: tokens.sizingButtonHeightMedium,
  },
  borders: {
    input: tokens.borderInput,
    inputFocus: tokens.borderInputFocus,
    card: tokens.borderCard,
  },
  borderWidths: {
    default: tokens.borderWidthDefault,
    focus: tokens.borderWidthFocus,
    card: tokens.borderWidthCard,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  motion: {
    durations: {
      duration0: tokens.motionDurationDuration0,
      duration1: tokens.motionDurationDuration1,
      duration2: tokens.motionDurationDuration2,
      duration3: tokens.motionDurationDuration3,
      duration4: tokens.motionDurationDuration4,
      duration5: tokens.motionDurationDuration5,
      duration6: tokens.motionDurationDuration6,
      duration7: tokens.motionDurationDuration7,
    },
    easings: {
      entranceEffective: Easing.bezier(
        tokens.motionEasingEntranceEffective[0],
        tokens.motionEasingEntranceEffective[1],
        tokens.motionEasingEntranceEffective[2],
        tokens.motionEasingEntranceEffective[3],
      ),
      entranceRevealing: generateEasing(tokens.motionEasingEntranceRevealing),
      exitEffective: generateEasing(tokens.motionEasingExitEffective),
      exitRevealing: generateEasing(tokens.motionEasingExitRevealing),
      standardAttentive: generateEasing(tokens.motionEasingStandardAttentive),
      standardEffective: generateEasing(tokens.motionEasingStandardEffective),
      standardRevealing: generateEasing(tokens.motionEasingStandardRevealing),
    },
    delays: {
      delay0: tokens.motionDelayDelay0,
      delay1: tokens.motionDelayDelay1,
      delay2: tokens.motionDelayDelay2,
      delay3: tokens.motionDelayDelay3,
      delay4: tokens.motionDelayDelay4,
    },
  },
});

export type Theme = typeof theme;
export default theme;
