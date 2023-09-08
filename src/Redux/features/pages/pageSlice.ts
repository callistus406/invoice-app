import { createSlice } from "@reduxjs/toolkit";

interface PageState {
  toggleEditInvoiceState: boolean;
}
const initialState: PageState = {
  toggleEditInvoiceState: false,
};

const pageSlice = createSlice({
  name: "pageActions",
  initialState,
  reducers: {
    toggleEditInvoice: (state: any, action: any) => {
      state.toggleEditInvoiceState = action.payload;
    },
  },
});

export default pageSlice.reducer;
export const { toggleEditInvoice } = pageSlice.actions;
