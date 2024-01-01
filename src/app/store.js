import {configureStore} from '@reduxjs/toolkit'
import historyReducer from '../features/history'

export const store = configureStore({
    reducer : historyReducer
})
