import { Container, Banner, ImageProfile, NameProfile, SectionProfile, 
  About, Button, ButtonText, ButtonEditProfile, ButtonExit } from '@/styles/profile-page';
import { getMyUser, saveBannerUser, saveImageUser, UserProps } from '@/services/api/routes/user';
import { getMyStatisticTotal, TotalProps } from '@/services/api/routes/statistic';
import { ButtonEditBanner, EditImage } from '@/styles/profile-page';
import { pickImage } from '@/utils/imageAnalyzer';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { View } from 'react-native';
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
    fetchUserData();
    fetchStatisticData();
  }, [session, editStatus])

  const fetchUserData = async () => {
    if (session) {
      const response = await getMyUser(session);
      setUserData(response.data);
    }
  }

  const fetchStatisticData = async () => {
    if (session) {
      const response = await getMyStatisticTotal(session);
      setStatisticData(response);
    }
  }

  const handleImageBanner = async () => {
    let imageBase64: string | undefined= await pickImage();

    setImages({
      banner: imageBase64,
      image: images?.image,
    });
  }

  const handleImagePerfil = async () => {
    let imageBase64: string | undefined= await pickImage();

    setImages({
      banner: images?.banner,
      image: imageBase64,
    });
  }

  const handleEditStatus = () => {
    setEditStatus(!editStatus);
    setImages({
      banner: userData?.banner,
      image: userData?.image,
    });
  }

  const handleSubmit = async () => {
    if (session && images) {
      await saveImageUser(images?.image, session);
      await saveBannerUser(images?.banner, session);
    }
    
    setEditStatus(!editStatus);
  }

  const defaultBanner = require('../../../../assets/images/fundoazul.png');
  const defaultImage = require('../../../../assets/icons/perfil.png');

  return (
    <Container>
      <View>
        <If conditional={editStatus == true}>
          <ButtonEditBanner onPress={handleImageBanner}>
            <EditImage source={ImageEditar} resizeMode="contain" />
          </ButtonEditBanner>
        </If>
        <Banner source={images?.banner ? { uri: images.banner } : userData?.banner ? { uri: userData.banner } : defaultBanner} />
      </View>
      
      <View>
        <If conditional={editStatus == true}>
          <ButtonEditProfile onPress={handleImagePerfil}>
            <EditImage source={ImageEditar} resizeMode="contain" />
          </ButtonEditProfile>
        </If>
        <ImageProfile source={images?.image ? { uri: images.image } : userData?.image ? { uri: userData.image } : defaultImage} />
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
