import { ReactNode, createContext } from "react";
import { useAppwrite } from "@/lib/useAppwrite";
import { getCurrentUser } from "./appwrite";

interface User{
    $id : string;
    name : string;
    email : string;
    avatar  : string;
}

interface GlobalContextType {
    isLoggedIn : boolean;
    user : User | null;
    loading : boolean;
    refetch : (newParams ?: Record<string, string | number>) => Promise<void>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({children} : {children : ReactNode}) => {
    const {
        data : user,
        loading,
        refetch
    } = useAppwrite({ getCurrentUser,
    });

    return (
        <GlobalContext.Provider value= {{}}>
            {children}
        </GlobalContext.Provider>
    )
}
