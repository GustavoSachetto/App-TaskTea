export type LevelProps = {
  progress: number,
  currentLevel: number
}

export const calculateLevel: (totalPoints: number) => LevelProps = (totalPoints) => {
  const pointsForTheNextLevel: number = 5;
  
  return {
    progress: (totalPoints % pointsForTheNextLevel) / pointsForTheNextLevel,
    currentLevel: Math.floor(totalPoints/pointsForTheNextLevel) 
  }
}