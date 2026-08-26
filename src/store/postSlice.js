import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:[],
}
const postSlice =createSlice({
    name : "post",
    initialState,
    reducers: {
        addPost: (state,action)=>{
            
            state.posts.push(action.payload);
        },

        removePost: (state, action) => {
            state.posts = state.posts.filter(
                (post) => post.$id !== action.payload
            );
        },

        setPosts: (state,action)=>{
                    state.posts = action.payload;
        },
    }
})


export const {addPost,removePost,setPosts}=postSlice.actions;

export default postSlice.reducer;
