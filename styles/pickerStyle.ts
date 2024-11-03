import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { getFontSize } from '@/utils/fontSize';
import { StyleSheet } from 'react-native';
import { w } from '@/utils/responsiveMesures';

export const stylesPicker = StyleSheet.create({
    picker: {
      paddingTop: wp('2%'),
      paddingBottom: wp('2%'),
      borderColor: 'transparent',
      borderRadius: w(4),
      alignSelf: 'center',
      width: '100%',
      height: '1%',
      fontSize: getFontSize(8),
      color: '#737373'
    },
  });