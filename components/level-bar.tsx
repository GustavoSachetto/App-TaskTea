import * as Progress from 'react-native-progress';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ContainerLevel, Level, LevelText } from "@/styles/level-bar";
import { LevelProps, calculateLevel } from '@/utils/calculateLevel';
import { useEffect, useState } from 'react';

interface LevelBarProps {
  totalPoints: number;
}

export default function LevelBar({ totalPoints }: LevelBarProps) {
  const [level, setLevel] = useState<LevelProps>({
    progress: 0,
    currentLevel: 0,
  });

  useEffect(() => {
    const calculatedLevel = calculateLevel(totalPoints);

    if (!isNaN(calculatedLevel.progress) && calculatedLevel.progress >= 0 && calculatedLevel.progress <= 1) {
      setLevel(calculatedLevel);
    } else {
      setLevel({ progress: 0, currentLevel: calculatedLevel.currentLevel });
    }
  }, [totalPoints]);

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
        height={wp(9)}
        borderRadius={50}
        borderColor='#d9d9d9'
        borderWidth={2}
        color='#48f97c'
      />

      <Level $activate={true}>
        <LevelText $activate={true}>
          {level.currentLevel + 1}
        </LevelText>
      </Level>
    </ContainerLevel>
  );
}
