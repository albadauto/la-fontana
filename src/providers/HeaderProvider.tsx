import React, { createContext, useContext, useState } from 'react'

export const HeaderContext = createContext({});
interface IBar{
    template: string
}

interface IProps{
    children?: React.ReactNode
}
export default function HeaderProvider(props: IProps) {
    const [bar, setBar] = useState<IBar>({ template: "" })
  return (
    <HeaderContext.Provider value={{bar, setBar}}>
        {props.children}
    </HeaderContext.Provider>
  )
}

export const useHeader = () => useContext(HeaderContext);
