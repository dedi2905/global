import { createStore, action } from "easy-peasy";
export const store = createStore({
  dataSiswa: {
    nama: ["dedi", "iqbal", "ridwan", "rahmat"],
  },
  comment: {
    like: 0,
    setLike: action((state) => {
      state.like += 1;
    }),
  },

  // model handle event
  handleState: {
    hide: false,
    setHide: action((state) => {
      state.hide = !state.hide;
    }),

    scrool: false,
    setScrool: action((state) => {
      state.scrool = !state.scrool;
    }),
  },
});
