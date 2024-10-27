import { Container, Banner, ImageProfile, NameProfile, SectionProfile, 
  About, Button, ButtonText, ButtonEditProfile, ButtonExit } from '@/styles/profile-page';
import { getMyStatisticTotal, TotalProps } from '@/services/api/routes/statistic';
import { getMyUser, saveBannerUser, saveImageUser, UserProps } from '@/services/api/routes/user';
import { ButtonEditBanner, EditImage } from '@/styles/profile-page';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import If from '@/components/conditional';

const ImageEditar = require('@/assets/icons/editar.png');

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserProps | undefined>(undefined);
  const [statisticData, setStatisticData] = useState<TotalProps | undefined>(undefined);
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const [images, setImages] = useState<{ 
    banner?: string | null, 
    image?: string | null
  } | null>(null);
  const { session } = useSession();

  useEffect(() => {
    fetchStatisticData();
    fetchUserData();
  }, [images])

  const fetchUserData = async () => {
    if (session) {
      const response = await getMyUser(session);
      setUserData(response.data);
    }
  }

  const fetchStatisticData = async () => {
    if (session) {
      const response = await getMyStatisticTotal(session);
      setStatisticData(response)
    }
  }

  const pickImage = async () => {
    return await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  }

  const pickImageBanner = async () => {
    let result = await pickImage();

    if (!result.canceled) setImages({
      banner: result.assets[0].uri,
      image: images?.image,
    });
  }

  const pickImagePerfil = async () => {
    let result = await pickImage();

    if (!result.canceled) setImages({
      banner: images?.banner,
      image: result.assets[0].uri,
    });
  }

  const handleEditStatus = () => {
    setEditStatus(!editStatus);
  }

  const handleSubmit = async () => {
    if (session && images) {
      await saveImageUser(images?.image, session);
      await saveBannerUser(images?.banner, session);
    }

    setEditStatus(false);
  }

  const defaultBanner = require('../../../../assets/images/fundoazul.png');
  const defaultImage = require('../../../../assets/icons/perfil.png');

  return (
    <Container>
      <View>
        <If conditional={editStatus == true}>
          <ButtonEditBanner onPress={pickImageBanner}>
            <EditImage source={ImageEditar} resizeMode="contain" />
          </ButtonEditBanner>
        </If>
        <Banner source={images?.banner ?? userData?.banner ?? defaultBanner} />
      </View>
      
      <View>
        <If conditional={editStatus == true}>
          <ButtonEditProfile onPress={pickImagePerfil}>
            <EditImage source={ImageEditar} resizeMode="contain" />
          </ButtonEditProfile>
        </If>
        <ImageProfile source={images?.image ?? userData?.image ?? defaultImage} />
      </View>

      <SectionProfile>
        <NameProfile>{userData?.name ?? "Nome não disponível"}</NameProfile>
        <About>Tarefas concluídas: {statisticData?.total_completed ?? "Dado não disponível"}</About>
        <About>Tarefas Incompletas: {statisticData?.total_incomplete ?? "Dado não disponível"}</About>
        <About>Média diária: {statisticData?.user_daily_average ?? "Dado não disponível"}</About>
        {editStatus === true ? (
          <>
            <Button onPress={handleSubmit}>
              <ButtonText>Salvar</ButtonText>
            </Button>
            <ButtonExit onPress={handleEditStatus}>
              <ButtonText >Voltar</ButtonText>
            </ButtonExit>
          </>
        ) : (
          <Button onPress={handleEditStatus}>
            <ButtonText >Editar perfil</ButtonText>
          </Button>
        )}
      </SectionProfile>
    </Container>
  )
}
