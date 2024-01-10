import { createTheme } from "@shopify/restyle";
import * as tokens from "./dist/tokens";
import { transformThemeTypographyToken } from "./utils/typography";

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
    headingXSmall: transformThemeTypographyToken(
      tokens.typographyHeadingXSmall
    ),
    headingSmall: transformThemeTypographyToken(tokens.typographyHeadingSmall),
    headingMedium: transformThemeTypographyToken(
      tokens.typographyHeadingMedium
    ),
    headingLarge: transformThemeTypographyToken(tokens.typographyHeadingLarge),
    headingXLarge: transformThemeTypographyToken(
      tokens.typographyHeadingXLarge
    ),
    headingXxLarge: transformThemeTypographyToken(
      tokens.typographyHeadingXxLarge
    ),
    bodySmall: transformThemeTypographyToken(tokens.typographyBodySmall),
    bodyMedium: transformThemeTypographyToken(tokens.typographyBodyMedium),
    bodyLarge: transformThemeTypographyToken(tokens.typographyBodyLarge),
    labelSmall: transformThemeTypographyToken(tokens.typographyLabelSmall),
    labelMedium: transformThemeTypographyToken(tokens.typographyLabelMedium),
    labelLarge: transformThemeTypographyToken(tokens.typographyLabelLarge),
    componentButtonMedium: transformThemeTypographyToken(
      tokens.typographyComponentButtonMedium
    ),
    componentButtonLarge: transformThemeTypographyToken(
      tokens.typographyComponentButtonLarge
    ),
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
    iconSmall: tokens.sizingIconSmall,
    iconMedium: tokens.sizingIconMedium,
    iconLarge: tokens.sizingIconLarge,
  },
  borders: {
    input: tokens.borderInput,
    inputFocus: tokens.borderInputFocus,
    card: tokens.borderCard,
  },
});

export type Theme = typeof theme;
export default theme;
