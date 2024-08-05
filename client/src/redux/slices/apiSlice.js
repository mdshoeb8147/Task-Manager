import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = "http://localhost:5000/api";

const BaseQuery = fetchBaseQuery({ baseUrl: API_URI });

export const apiSlice = createApi({
  BaseQuery,
  tagTypes: [],
  endPoints: (builder) => ({}),
});
