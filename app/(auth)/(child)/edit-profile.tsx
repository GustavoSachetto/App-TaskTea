import { Container, Banner, NameProfile, SectionProfile } from '@/styles/profile-page';
import { getMyUser, storeImage, UserProps } from '@/services/api/routes/user';
import { getMyStatisticTotal, TotalProps } from '@/services/api/routes/statistic';
import { useSession } from '@/hooks/ctx';
import { useEffect, useState } from 'react';
import { ProfilePhoto, ButtonEdit, EditImage, ImageProfile, Button, ButtonText, ProfileBanner } from '@/styles/edit-profile';
import * as ImagePicker from 'expo-image-picker';

const ImageEditar = require('@/assets/icons/editar.png');

export default function EditProfilePage() {
    const [userData, setUserData] = useState<UserProps | undefined>(undefined);
    const [statisticData, setStatisticData] = useState<TotalProps | undefined>(undefined);
    const [imageProfile, setImageProfile] = useState<string | null>(null);
    const { session } = useSession();

    useEffect(() => {
        fetchStatisticData();
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        if (session) {
            const response = await getMyUser(session);
            setUserData(response.data);
        }
    };

    const fetchStatisticData = async () => {
        if (session) {
            const response = await getMyStatisticTotal(session);
            setStatisticData(response);
        }
    };

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const { uri } = result.assets[0];
            setImageProfile(uri);
            console.log(`Imagem selecionada: ${uri}`);
        } else {
            console.log('Seleção de imagem cancelada.');
        }
    };

    const handleSubmit = async () => {
        if (session && imageProfile) {
                const response = await storeImage(imageProfile, session);
                console.log('Imagem salva com sucesso!', response);
        } else {
            console.log('Nenhuma imagem selecionada ou sessão inválida.');
        }
    };

    return (
        <Container>
            <ProfileBanner>
                <ButtonEdit onPress={pickImage}>
                    <EditImage source={ImageEditar} resizeMode="contain" />
                </ButtonEdit>
                <Banner source={require('../../../assets/images/fundoazul.png')} />
            </ProfileBanner>
            <ProfilePhoto>
                <ButtonEdit onPress={pickImage}>
                    <EditImage source={ImageEditar} resizeMode="contain" />
                </ButtonEdit>
                <ImageProfile source={imageProfile ? { uri: imageProfile } : require('../../../assets/icons/perfil.png')} />
            </ProfilePhoto>
            <SectionProfile>
                <NameProfile>{userData ? userData.name : "Nome não disponível"}</NameProfile>
            </SectionProfile>
            <Button onPress={handleSubmit}>
                <ButtonText>Salvar</ButtonText>
            </Button>
        </Container>
    );
}
