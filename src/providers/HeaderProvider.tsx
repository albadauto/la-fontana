import React, { createContext, useContext, useState } from 'react'

export const HeaderContext = createContext({});
interface IBar{
    url: string,
    title: string,
    unsign: string,
}

interface IProps{
    children?: React.ReactNode
}
export default function HeaderProvider(props: IProps) {
    const [bar, setBar] = useState<IBar>({url: "", title:"", unsign: "" })
  return (
    <HeaderContext.Provider value={{bar, setBar}}>
        {props.children}
    </HeaderContext.Provider>
  )
}
