import { configureStore , Middleware } from '@reduxjs/toolkit'
import Reduxthunk from 'redux-thunk'
import {TypedUseSelectorHook , useDispatch , useSelector} from 'react-redux'
import { postsSlice } from './Posts/postsSlice'

const middleware = [Reduxthunk] as Array<Middleware>

export const store = configureStore ({
    reducer: {
        postsStore: postsSlice.reducer
    } ,
    middleware
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch | any

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppselector: TypedUseSelectorHook<RootState> = useSelector;