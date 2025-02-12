"use client";

import { createContext, useContext, useState } from "react";

interface DocContextType {
  docState: boolean;
  setDocState: React.Dispatch<React.SetStateAction<boolean>>;
  shareDoc: boolean;
  setShareDoc: React.Dispatch<React.SetStateAction<boolean>>;
  deleteDoc: boolean;
  setDeleteDoc: React.Dispatch<React.SetStateAction<boolean>>;
}

const DocContext = createContext<DocContextType | undefined>(undefined);
export const DocProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [docState, setDocState] = useState<boolean>(false);
  const [shareDoc, setShareDoc] = useState<boolean>(false);
  const [deleteDoc, setDeleteDoc] = useState<boolean>(false);
  return (
    <DocContext.Provider
      value={{
        docState,
        setDocState,
        shareDoc,
        setShareDoc,
        deleteDoc,
        setDeleteDoc,
      }}
    >
      {children}
    </DocContext.Provider>
  );
};

export const useDoc = () => {
  const context = useContext(DocContext);
  if (!context) {
    throw new Error("useDoc must be used within a DocProvider");
  }
  return context;
};

export default DocProvider;
