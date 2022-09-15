import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const toDoApi = createApi({
  reducerPath: 'toDoApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://jsonplaceholder.typicode.com/' 
}),
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: () => ({
        url : 'todos',
        method: 'GET'
      })
    }),
  }),
})

export const { useGetToDosQuery } = toDoApi