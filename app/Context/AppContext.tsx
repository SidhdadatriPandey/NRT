'use client';
import React, { ReactNode, useState } from 'react'
import { createContext } from 'react';

export interface Datatype{
    bg:string,
    setBg: React.Dispatch<React.SetStateAction<string>>
}

const initialValue={
    bg:'Home',
    setBg:()=>{}
}

export const userContext=createContext<Datatype>(initialValue);
export const AppContext: React.FC<{ children: ReactNode }> = ({children}) => {
    const [bg,setBg]=useState<string>("Home");
    const value={
        bg,
        setBg,
    }
  return (
    <userContext.Provider value={value}>
        {children}
    </userContext.Provider>
  )
}

export default AppContext
