import { createSlice } from "@reduxjs/toolkit";
import { TbWiper, TbWorld } from "react-icons/tb";

const forfeauter = createSlice({
  name: "forfeauter",
  initialState: [
    {
      id: 1,
      title: `Competitive exchanges rates`,
      para: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            eaque sit, recusandae vel dolore amet, quidem eveniet est magnam
            eius tenetur, facilis commodi saepe tempore. Exercitationem
            eligendi quidem illum provident!`,
      icon: <TbWiper />,
    },
    {
      id: 2,
      title: `No hidden fees`,
      para: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
        eaque sit, recusandae vel dolore amet, quidem eveniet est magnam
        eius tenetur, facilis commodi saepe tempore. Exercitationem
        eligendi quidem illum provident!`,
      icon: <TbWiper />,
    },
    {
      id: 3,
      title: `Transfers are instant`,
      para: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
        eaque sit, recusandae vel dolore amet, quidem eveniet est magnam
        eius tenetur, facilis commodi saepe tempore. Exercitationem
        eligendi quidem illum provident!`,
      icon: <TbWorld />,
    },
  ],
  reducers: {
    text: (state, action) => {
      return state;
    },
  },
});

export const { text } = forfeauter.actions;
export default forfeauter.reducer;
