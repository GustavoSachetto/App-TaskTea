import React, { useEffect, useState } from 'react';
import { Slot } from 'expo-router';
import * as Font from 'expo-font';
import { Fonts } from '../../constants/Fonts'; 

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const fetchFonts = async () => {
    try {
      await Font.loadAsync({
        [Fonts.RalewayRegular]: require('../../assets/fonts/Raleway-Regular.ttf'),
        [Fonts.RalewayBold]: require('../../assets/fonts/Raleway-Bold.ttf'),
        [Fonts.RalewayExtraBold]: require('../../assets/fonts/Raleway-ExtraBold.ttf'),
      });
      setFontsLoaded(true);
    } catch (error) {
      console.error('Error loading fonts', error);
    } 
  };

  useEffect(() => {
    fetchFonts();
  }, []);

  return (
    <Slot />
  );
}
