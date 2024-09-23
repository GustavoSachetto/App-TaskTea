import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const width = Dimensions.get('screen').width;

export const getFontSize = (size : number) => {
  if (width > 768) { 
    return wp(size * 0.35); 
  }
  return wp(size * 0.5); 
};
