import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { endPoint } from "../query/endpoint";
import { QueryReturnType } from "@/dto/base";
import { RegisterRequest } from "@/dto/request/auth";
import { RegisterResponse } from "@/dto/response/auth";



export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        register: builder.mutation<QueryReturnType<RegisterResponse>, RegisterRequest>({
                query: (payload) => ({
                    ...endPoint.auth.register(),
                    data: payload,
                }),
            }),
    })
});

export const {
    useRegisterMutation,
} = authApi;