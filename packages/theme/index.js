"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restyle_1 = require("@shopify/restyle");
var tokens = require("./dist/tokens");
var typography_1 = require("./utils/typography");
var palette = {
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
var theme = (0, restyle_1.createTheme)({
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
        headingXSmall: (0, typography_1.transformThemeTypographyToken)(tokens.typographyHeadingXSmall),
        headingSmall: (0, typography_1.transformThemeTypographyToken)(tokens.typographyHeadingSmall),
        headingMedium: (0, typography_1.transformThemeTypographyToken)(tokens.typographyHeadingMedium),
        headingLarge: (0, typography_1.transformThemeTypographyToken)(tokens.typographyHeadingLarge),
        headingXLarge: (0, typography_1.transformThemeTypographyToken)(tokens.typographyHeadingXLarge),
        headingXxLarge: (0, typography_1.transformThemeTypographyToken)(tokens.typographyHeadingXxLarge),
        bodySmall: (0, typography_1.transformThemeTypographyToken)(tokens.typographyBodySmall),
        bodyMedium: (0, typography_1.transformThemeTypographyToken)(tokens.typographyBodyMedium),
        bodyLarge: (0, typography_1.transformThemeTypographyToken)(tokens.typographyBodyLarge),
        labelSmall: (0, typography_1.transformThemeTypographyToken)(tokens.typographyLabelSmall),
        labelMedium: (0, typography_1.transformThemeTypographyToken)(tokens.typographyLabelMedium),
        labelLarge: (0, typography_1.transformThemeTypographyToken)(tokens.typographyLabelLarge),
        componentButtonMedium: (0, typography_1.transformThemeTypographyToken)(tokens.typographyComponentButtonMedium),
        componentButtonLarge: (0, typography_1.transformThemeTypographyToken)(tokens.typographyComponentButtonLarge),
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
exports.default = theme;
