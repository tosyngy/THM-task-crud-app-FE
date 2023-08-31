import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
    name: string
    description: string
    status: boolean
}

const initialState: Task[] = [];

const addTaskReducer = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTasks: (state, action: PayloadAction<Task>) => {
            state.push(action.payload);
        },
    },
});

export const { addTasks } = addTaskReducer.actions;
export const reducer = addTaskReducer.reducer;