import { configureStore } from '@reduxjs/toolkit'
import { todoreducers } from "./slice"
export const store = configureStore({ reducer: todoreducers });