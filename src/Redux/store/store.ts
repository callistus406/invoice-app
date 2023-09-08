import { configureStore } from "@reduxjs/toolkit";

import pageActionsReducer from "../features/pages/pageSlice";

const store = configureStore({
    reducer:pageActionsReducer
})


export default store