import { Platform } from "react-native";

export const transformThemeTypographyToken = (input: any) => {
  return {
    ...input,
    fontWeight: Platform.OS === "android" ? undefined : input.fontWeight,
  };
};
