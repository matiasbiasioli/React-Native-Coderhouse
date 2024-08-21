import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../firabase/database'

//REDUX TOOLKIT QUERYS 

export const ecApi = createApi({
    reducerPath: 'ecApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'categories.json',
        }),
        //Acceder a la DB de firebase para get la imagen
        getImage: builder.query({
            query: () => 'image.json',
        }),
        putImage: builder.mutation({
            query: (image) => ({
                url: 'image.json',
                method: 'PUT',
                body: image,
            })
        })
    })
})

export const { useGetCategoriesQuery, useGetImageQuery, usePutImageMutation } = ecApi