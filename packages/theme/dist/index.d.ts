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
        xxComfortable: number;
        xComfortable: number;
        comfortable: number;
        base: number;
        tight: number;
        xTight: number;
        xxTight: number;
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
        minimumTappableArea: number;
        iconSmall: number;
        iconMedium: number;
        iconLarge: number;
        iconXLarge: number;
        buttonHeightLarge: number;
        buttonHeightMedium: number;
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
    borderWidths: {
        default: number;
        focus: number;
        card: number;
    };
    breakpoints: {
        phone: number;
        tablet: number;
    };
    durations: {
        duration0: number;
        duration1: number;
        duration2: number;
        duration3: number;
        duration4: number;
        duration5: number;
        duration6: number;
        duration7: number;
    };
    easings: {
        entranceEffective: string;
        entranceRevealing: string;
        exitEffective: string;
        exitRevealing: string;
        standardAttentive: string;
        standardEffective: string;
        standardRevealing: string;
    };
    delays: {
        delay0: number;
        delay1: number;
        delay2: number;
        delay3: number;
        delay4: number;
    };
};
export type Theme = typeof theme;
export default theme;
