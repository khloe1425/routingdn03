// rxr

const initialState = {
  mangPhim:[]
}

export const PhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LAY_DS_PHIM":
      console.log(action.mangPhim);
      state.mangPhim = action.mangPhim;
        return {...state}
  default:
    return state
  }
}
