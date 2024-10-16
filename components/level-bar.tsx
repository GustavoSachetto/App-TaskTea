import * as Progress from 'react-native-progress';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ContainerLevel, Level, LevelText } from "@/styles/level-bar";
import { LevelProps, calculateLevel } from '@/utils/calculateLevel';
import { useEffect, useState } from 'react';

interface LevelBarProps {
  totalPoints: number
}

export default function LevelBar({ totalPoints }: LevelBarProps) {
  const [level, setLevel] = useState<LevelProps>({
    progress: 0,
    currentLevel: 0
  })
  
  useEffect(() => {
    setLevel(calculateLevel(totalPoints));
  }, [totalPoints])
  
  return (
    <ContainerLevel>
      <Level $activate={false}>
        <LevelText $activate={false}>
          {level.currentLevel}
        </LevelText>
      </Level>

      <Progress.Bar 
        progress={level.progress}
        width={wp(60)} 
        height={wp(7)}
        borderRadius={50}
        borderColor='#d9d9d9'
        borderWidth={2}
        color='#48f97c'
        useNativeDriver={true}
      />

      <Level $activate={true}>
        <LevelText $activate={true}>
          {level.currentLevel + 1}
        </LevelText>
      </Level>
    </ContainerLevel>
  )
}