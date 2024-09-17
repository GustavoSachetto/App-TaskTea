export const Fonts = {
    RalewayRegular: 'Raleway-Regular',
    RalewayBold: 'Raleway-Bold',
    RalewayExtraBold: 'Raleway-ExtraBold',
} as const;

export type FontName = keyof typeof Fonts;
