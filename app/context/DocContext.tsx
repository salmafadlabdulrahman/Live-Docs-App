'use client';

import { createContext, useContext, useEffect, useState } from "react";

interface DocContextType {
  docState: boolean;
  setDocState: React.Dispatch<React.SetStateAction<boolean>> //(val:boolean) => void
}

const DocContext = createContext<DocContextType | undefined>(undefined);
export const DocProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [docState, setDocState] = useState<boolean>(false);
  return (
    <DocContext.Provider value={{docState, setDocState}}>
      {children}
    </DocContext.Provider>
  )
};

export const useDoc = () => {
    const context = useContext(DocContext);
    if(!context) {
        throw new Error("useDoc must be used within a DocProvider");
    }
    return context
}

export default DocProvider;
