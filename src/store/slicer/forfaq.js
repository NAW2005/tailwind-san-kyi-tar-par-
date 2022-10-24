import { createSlice } from "@reduxjs/toolkit";

const forfaq = createSlice({
  name: "forfaq",
  initialState: [
    {
      id: 1,
      title: "What's the best thing about Swizerland?",
      paragraph: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              eaque sit, recusandae vel dolore amet, quidem eveniet est magnam
              eius tenetur, facilis commodi saepe tempore. Exercitationem
              eligendi quidem illum provident! `,
      one: false,
    },
    {
      id: 2,
      title: "What's the best thing about Swizerland?",
      paragraph: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              eaque sit, recusandae vel dolore amet, quidem eveniet est magnam
              eius tenetur, facilis commodi saepe tempore. Exercitationem
              eligendi quidem illum provident! `,
      one: false,
    },

    {
      id: 3,
      title: "What's the best thing about Swizerland?",
      paragraph: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              eaque sit, recusandae vel dolore amet, quidem eveniet est magnam
              eius tenetur, facilis commodi saepe tempore. Exercitationem
              eligendi quidem illum provident! `,
      one: false,
    },
    {
      id: 4,
      title: "What's the best thing about Swizerland?",
      paragraph: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              eaque sit, recusandae vel dolore amet, quidem eveniet est magnam
              eius tenetur, facilis commodi saepe tempore. Exercitationem
              eligendi quidem illum provident! `,
      one: false,
    },
    {
      id: 5,
      title: "What's the best thing about Swizerland?",
      paragraph: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              eaque sit, recusandae vel dolore amet, quidem eveniet est magnam
              eius tenetur, facilis commodi saepe tempore. Exercitationem
              eligendi quidem illum provident! `,
      one: false,
    },
  ],
  reducers: {
    toggle: (state, action) => {
      return state.map((i) =>
        i.id === action.payload ? { ...i, one: !i.one } : { ...i, one: false }
      );
    },
  },
});

export const { toggle } = forfaq.actions;
export default forfaq.reducer;
