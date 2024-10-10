import { useWindowDimensions } from "react-native";

export const useDynamicStyles = () => {
  const { width, height } = useWindowDimensions();

  return {
    paddingH: {
      paddingHorizontal: width * 0.05,
    },
    paddingV: {
      paddingVertical: height * 0.05,
    },
    imgW: {
      width: width * 0.04,
    },
    imgH: {
      height: height * 0.3,
    },
    imgWH: {
      height: height * 0.32,
      width: width * 0.9,
    },
    font12: {
      fontSize: height * 0.012,
    },
    marginB: {
      marginBottom: height * 0.04,
    },
    heartIcon: {
      top: -240, 
      right: 30, 
      zIndex: 10,

    },
  };
};
