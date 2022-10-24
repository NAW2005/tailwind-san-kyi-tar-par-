import { configureStore } from "@reduxjs/toolkit";
import forfaq from "../store/slicer/forfaq";
import forfeauter from "./slicer/forfeauter";
import forsendmoney from "./slicer/forsendmoney";

const store = configureStore({
  reducer: {
    faq: forfaq,
    forfeauter: forfeauter,
    avc: forsendmoney,
  },
});
export default store;
