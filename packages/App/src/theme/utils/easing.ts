import { Easing } from 'react-native-reanimated';

export const generateEasing = (easing: number[]) => {
  if (easing.length < 4) {
    throw new Error("Missing Value: Easing doesn't have 4 values.");
  }

  return Easing.bezier(easing[0] ?? 0, easing[1] ?? 0, easing[2] ?? 0, easing[3] ?? 0);
};
