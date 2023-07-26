import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedRoute: {},
  allRoutes: [
    {
      key: 1,
      routeName: 'Первый маршрут',
      waypoints: [
        {lat: 59.84660399, lng: 30.29496392},
        {lat: 59.82934196, lng: 30.42423701},
        {lat: 59.83567701, lng: 30.38064206},
      ],
    },
    {
      key: 2,
      routeName: 'Второй маршрут',
      waypoints: [
        {lat: 59.82934196, lng: 30.42423701},
        {lat: 59.82761295, lng: 30.41705607},
        {lat: 59.84660399, lng: 30.29496392},
      ],
    },
    {
      key: 3,
      routeName: 'Третий маршрут',
      waypoints: [
        {lat: 59.83567701, lng: 30.38064206},
        {lat: 59.84660399, lng: 30.29496392},
        {lat: 59.82761295, lng: 30.41705607},
      ],
    },
  ],
}

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    addNewRoute(state, { payload }) {
      const newRoute = { ...payload, key: Date.now() }
      state.allRoutes.push(newRoute)
    },
    removeRoute(state, { payload: id }) {
      state.allRoutes = state.allRoutes.filter((item) => item.key !== id)
    },
    selectRoute(state, { payload }) {
      state.selectedRoute = payload
    },
  },
})

export const { addNewRoute, removeRoute, selectRoute } = routeSlice.actions
export default routeSlice.reducer
