import { createContext, useContext } from 'react';

interface MyContextType {
    tasks: ITask[];
    updateContexts: (newTasks: ITask[]) => void;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
};