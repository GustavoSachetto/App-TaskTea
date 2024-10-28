import * as ImagePicker from 'expo-image-picker';

export const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    base64: true
  });

  if (!result.canceled) return convertImageToBase64(result.assets[0].mimeType, result.assets[0].base64);
}

export function convertImageToBase64(mimeType?: string | null, base64Image?: string | null) {
  return `data:${mimeType};base64,${base64Image}`
}