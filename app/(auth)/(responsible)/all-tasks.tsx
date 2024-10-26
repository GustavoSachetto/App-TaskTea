import { TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import {
    ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
    GradientBorderBoxTasks, ContainerAllTasks, Task,
    BoxTasks, Title, Description
} from '@/styles/tasks';
import { LinkedSign, Voltar, ContainerRowTasks, ContainerColumn } from '@/styles/finished-tasks';
import Colors from '@/constants/Colors';
import { useEffect, useState } from 'react';
import { TaskUserPageProps, TaskUserProps } from '@/services/api/routes/taskuser';
import { useSession } from '@/hooks/ctx';
import { h, w } from '@/utils/responsiveMesures';
import { getFontSize } from '@/utils/fontSize';
import { InputSearch, SectionSearch } from '@/styles/all-tasks';
import { getAllTasks, getMyTasks, searchTask, TaskPageProps, TaskProps } from '@/services/api/routes/tasks';

const ImageVoltar = require('@/assets/icons/voltar.png');
const blue = Colors.colors.blue;

export default function TasksPage() {
    const router = useRouter();
    const { session } = useSession();
    const [searchText, setSearchText] = useState('');
    const [task, setTask] = useState<TaskPageProps | null>(null);

    const fetchSearch = async () => {
        if (searchText.trim() === '') {
            fetchTask()
        } else {
            const filteredTasks = await searchTask(searchText, session);
            setTask(filteredTasks);
        }
    };
    const fetchTask = async () => {
        if (session) {
            const allTask = await getMyTasks(session, 0);
            setTask(allTask);
        }
    };

    useEffect(() => {
        fetchTask();
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
                        {task?.data && task.data.length > 0 ? (
                            task.data.map((data: TaskProps) => (
                                <TouchableOpacity
                                    key={data.id}
                                    style={{ width: '100%' }}
                                    onPress={() => router.push({ pathname: "/single-task", params: { id: `${data.id}` } })}
                                >
                                    <Task style={{ flex: 1, alignSelf: 'stretch' }} customColor={blue}>
                                        <Title>{data.title}</Title>
                                        <Description>{data.description}</Description>
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
