import { createContext, useContext } from 'react';

interface MyContextType {
    tasks: ITask[];
    token: string;
    updateTokenContexts: (newToken: string) => void;
    updateContexts: (newTasks: ITask[]) => void;
}



export const MyContext = createContext<MyContextType | undefined>(undefined);


export const TokenContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
};


export const useTokenContext = () => {
    const context = useContext(TokenContext);
    if (!context) {
        throw new Error('useTokenContext must be used within a TokenContextProvider');
    }
    return context;
};