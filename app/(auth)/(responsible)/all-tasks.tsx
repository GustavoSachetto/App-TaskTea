import { TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import {
    ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
    GradientBorderBoxTasks, ContainerAllTasks, Task,
    BoxTasks, Title, Description
} from '@/styles/tasks';
import { LinkedSign, Voltar, ContainerRowTasks, ContainerColumn } from '@/styles/finished-tasks';
import { getAllTaskUser, searchTaskUser } from '@/services/api/routes/taskuser';
import Colors from '@/constants/Colors';
import { useEffect, useState } from 'react';
import { TaskUserPageProps, TaskUserProps } from '@/services/api/routes/taskuser';
import { useSession } from '@/hooks/ctx';
import { h, w } from '@/utils/responsiveMesures';
import { getFontSize } from '@/utils/fontSize';
import { InputSearch, SectionSearch } from '@/styles/all-tasks';

const ImageVoltar = require('@/assets/icons/voltar.png');
const blue = Colors.colors.blue;

export default function TasksPage() {
    const router = useRouter();
    const { session } = useSession();
    const [searchText, setSearchText] = useState('');
    const [taskUser, setTaskUser] = useState<TaskUserPageProps>({
        data: [],
        links: {},
        meta: {}
    });

    const fetchSearch = async () => {
        if (searchText.trim() === '') {
            const allTaskUser = await getAllTaskUser(session);
            setTaskUser(allTaskUser);
        } else {
            const filteredTasks = await searchTaskUser(searchText, session);
            setTaskUser(filteredTasks);
        }
    };

    useEffect(() => {
        const fetchTaskUser = async () => {
            if (session) {
                const response = await getAllTaskUser(session);
                setTaskUser(response);
            }
        };

        fetchTaskUser();
    }, [session]);

    useEffect(() => {
        fetchSearch();
    }, [searchText]);

    return (
        <ContainerAllTasks>

            <ContainerRowTasks>
                <LinkedSign onPress={() => { router.push('/(auth)/(responsible)/(tabs)/settings') }}>
                    <Voltar source={ImageVoltar} resizeMode="contain" />
                </LinkedSign>
                <ContainerColumn>
                    <TextTask customColor={blue} customFontSize={getFontSize(16)}>Todos os desafios</TextTask>
                </ContainerColumn>
            </ContainerRowTasks>

            <SectionSearch>
                <InputSearch
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Pesquisar desafio..."
                />
            </SectionSearch>

            <ContainerTasksDoing customColor={blue}></ContainerTasksDoing>

            <GradientBorderBoxTasks customColor={blue} customHeight={h(65)}>
                <BoxTasks>
                    <ScrollViewContainerTasks showsVerticalScrollIndicator={false}>
                        {taskUser.data && taskUser.data.length > 0 ? (
                            taskUser.data.map((taskUser: TaskUserProps) => (
                                <TouchableOpacity
                                    key={taskUser.id}
                                    style={{ width: '100%' }}
                                    onPress={() => router.push({ pathname: "/single-task", params: { id: `${taskUser.id}` } })}
                                >
                                    <Task style={{ flex: 1, alignSelf: 'stretch' }} customColor={blue}>
                                        <Title>{taskUser.task.title}</Title>
                                        <Description>{taskUser.task.description}</Description>
                                    </Task>
                                </TouchableOpacity>
                            ))
                        ) : (
                            <Text>Sem nenhuma tarefa em andamento.</Text>
                        )}
                    </ScrollViewContainerTasks>
                </BoxTasks>
            </GradientBorderBoxTasks>
        </ContainerAllTasks>
    );
}
