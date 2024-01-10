import { Platform } from "react-native";
export const transformThemeTypographyToken = (input) => {
    return Object.assign(Object.assign({}, input), { fontWeight: Platform.OS === "android" ? undefined : input.fontWeight });
};
//# sourceMappingURL=typography.js.map