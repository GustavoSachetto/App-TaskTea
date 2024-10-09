import React, { createContext, useContext, useState, ReactNode } from 'react';

type OverlayContextProps = {
  isVisible: boolean;
  showOverlay: () => void;
  hideOverlay: () => void;
};

const OverlayContext = createContext<OverlayContextProps | undefined>(undefined);

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showOverlay = () => setIsVisible(true);
  const hideOverlay = () => setIsVisible(false);

  return (
    <OverlayContext.Provider value={{ isVisible, showOverlay, hideOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error('useOverlay deve ser usado dentro de um OverlayProvider');
  }
  return context;
};
