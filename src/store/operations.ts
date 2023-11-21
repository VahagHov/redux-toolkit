import { AppDispatch } from "."
import { postsSlice } from "./Posts/postsSlice"

const getPosts = () => {
    const {setPosts} = postsSlice.actions

    return async (dispatch: AppDispatch) => {
      await fetch ('https://jsonplaceholder.typicode.com/posts')
      .then ((data) => data.json())
      .then ((data) => dispatch (setPosts (data)))
        
    } 
}

const getPostById = (id: number) => {

}

export const postsOp = {
    getPosts , getPostById
}