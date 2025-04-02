import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

export const wp = (value: number) => widthPercentageToDP(value);

export const hp = (value: number) => heightPercentageToDP(value);
