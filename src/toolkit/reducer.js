import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [
    {
      id: "2f383fa8",
      day: "12월",
      title: "툴킷 기능구현",
      content: "아어려웡....",
    },
  ],
};

export const todoList = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todo.push(action.payload);
    },

    remove: (state, action) => {
      state.todo = state.todo.filter((el) => el.id !== action.payload);
    },
    path: (state, action) => {
      state.todo = state.todo.map((todo) =>
        todo.id === action.payload.id ? (todo = action.payload) : todo
      );
    },
  },
});
console.log(todoList.reducer);
//store에서 add, remove, complte 액션을 내보낸다.
export default todoList.reducer;
export const { add, remove, path } = todoList.actions;
