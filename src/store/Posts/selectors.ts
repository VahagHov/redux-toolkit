import {createSelector} from '@reduxjs/toolkit'
import { RootState } from '..'
import { PostsInitialState } from '../../types/posts'

const postStoreselector = (state: RootState) => state.postsStore

const postsSelector = createSelector (
    [postStoreselector] ,
    (postsStore: PostsInitialState) => postsStore.postsList
)

export const postsSel = {
    postStoreselector ,
    postsSelector
}