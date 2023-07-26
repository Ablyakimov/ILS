import { configureStore } from '@reduxjs/toolkit'
import routeReducer from './routeReducer'

export const store = configureStore({
  reducer: {
    routes: routeReducer,
  },
})
