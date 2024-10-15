import * as Progress from 'react-native-progress';
import { ContainerLevel, Level, LevelText } from "@/styles/level-bar";

interface LevelProps {
  progress: number,
  currentLevel: number
}

export default function LevelBar({ progress, currentLevel }: LevelProps) {
  return (
    <ContainerLevel>
      <Level $activate={false}>
        <LevelText $activate={false}>
          {currentLevel}
        </LevelText>
      </Level>

      <Progress.Bar 
        progress={progress}
        width={230} 
        height={30}
        borderRadius={50}
        borderColor='#d9d9d9'
        borderWidth={2}
        color='#48f97c'
        useNativeDriver={true}
      />

      <Level $activate={true}>
        <LevelText $activate={true}>
          {currentLevel + 1}
        </LevelText>
      </Level>
    </ContainerLevel>
  )
}