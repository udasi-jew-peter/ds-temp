declare const theme: {
    colors: {
        lightBackgroundsAccent: string;
        lightBackgroundsDisabled: string;
        lightBackgroundsInteractive: string;
        lightBackgroundsPressedA: string;
        lightBackgroundsPressedB: string;
        lightBackgroundsPrimaryA: string;
        lightBackgroundsPrimaryB: string;
        lightBackgroundsSecondary: string;
        lightBordersPrimary: string;
        lightBordersSecondary: string;
        lightBordersTertiary: string;
        lightContentAccent: string;
        lightContentDisabled: string;
        lightContentInteractive: string;
        lightContentInverseInteractive: string;
        lightContentPrimary: string;
        lightContentSecondary: string;
        darkBackgroundsAccent: string;
        darkBackgroundsDisabled: string;
        darkBackgroundsInteractive: string;
        darkBackgroundsPrimaryA: string;
        darkBackgroundsPrimaryB: string;
        darkBackgroundsSecondary: string;
        darkBordersPrimary: string;
        darkBordersSecondary: string;
        darkBordersTertiary: string;
        darkContentAccent: string;
        darkContentDisabled: string;
        darkContentInteractive: string;
        darkContentInverseInteractive: string;
        darkContentPrimary: string;
        darkContentSecondary: string;
    };
    spacing: {
        xxComfortable: string;
        xComfortable: string;
        comfortable: string;
        base: string;
        tight: string;
        xTight: string;
        xxTight: string;
    };
    textVariants: {
        headingXSmall: any;
        headingSmall: any;
        headingMedium: any;
        headingLarge: any;
        headingXLarge: any;
        headingXxLarge: any;
        bodySmall: any;
        bodyMedium: any;
        bodyLarge: any;
        labelSmall: any;
        labelMedium: any;
        labelLarge: any;
        componentButtonMedium: any;
        componentButtonLarge: any;
    };
    borderRadii: {
        small: number;
        medium: number;
        circular: number;
    };
    opacity: {
        slightlyTransparent: number;
        semiTransparent: number;
        veryTransparent: number;
    };
    sizing: {
        minimumTappableArea: string;
        iconSmall: string;
        iconMedium: string;
        iconLarge: string;
    };
    borders: {
        input: {
            color: string;
            width: number;
        };
        inputFocus: {
            color: string;
            width: number;
        };
        card: {
            color: string;
            width: number;
        };
    };
};
export type Theme = typeof theme;
export default theme;
