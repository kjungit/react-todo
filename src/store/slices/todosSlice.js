import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  loading: false,
};

const headers = {
  "content-type": "application/json",
  apikey: "FcKdtJs202301",
  username: "KDT4_KwonBeomJun",
};

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const response = await axios.get(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
    { headers }
  );
  return response.data;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (title) => {
  const response = await axios.post(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
    { title },
    { headers }
  );
  return response.data;
});

export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async ({ id, title, done }) => {
    const response = await axios.put(
      `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
      { title, done },
      { headers }
    );
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  const response = await axios.delete(
    `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
    { headers }
  );
  console.log(response);
  return { id };
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    // getTodos
    [getTodos.pending]: (state) => {
      state.loading = true;
    },
    [getTodos.fulfilled]: (state, action) => {
      console.log(state.entities);
      state.loading = false;
      state.entities = action.payload;
    },
    [getTodos.rejected]: (state) => {
      state.loading = false;
    },

    // addTodo
    [addTodo.pending]: (state) => {
      state.loading = true;
    },
    [addTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities.unshift(action.payload);
    },
    [addTodo.rejected]: (state) => {
      state.loading = false;
    },

    // editTodo
    [editTodo.pending]: (state) => {
      state.loading = true;
    },
    [editTodo.fulfilled]: (state, action) => {
      state.loading = false;
      const index = state.entities.findIndex(
        (item) => item.id === action.payload.id
      );
      state.entities.splice(index, 1, action.payload);
    },
    [editTodo.rejected]: (state) => {
      state.loading = false;
    },

    // deleteTodo
    [deleteTodo.pending]: (state) => {
      state.loading = true;
    },
    [deleteTodo.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.entities = state.entities.filter(
        (item) => item.id !== action.payload.id
      );
    },
    [deleteTodo.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default todosSlice.reducer;
