import React, { createContext, useContext, useState } from 'react'
interface IAdmin {
    admin: boolean,
    setAdmin: React.Dispatch<boolean>
}
interface IProps {
    children: React.ReactNode
}
export const AdminContext = createContext<IAdmin>({} as IAdmin);

export default function AdminProvider(props: IProps) {
    const [admin, setAdmin] = useState<boolean>(false);
    return (
        <AdminContext.Provider value={{admin, setAdmin}}>
            {props.children}
        </AdminContext.Provider>
    )
}

export const useAdmin = () => useContext(AdminContext);