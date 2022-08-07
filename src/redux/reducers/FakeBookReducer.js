// rxreducer

//khai báo giá trị mặc định cho state của redux
const initialState = {
  arrComment:[
    {name:"DieuNhi", content:"Ahihihi", avatar:"https://i.pravatar.cc/?u=DieuNhi"},
    {name:"NgocPhuoc", content:"hello", avatar:"https://i.pravatar.cc/?u=NgocPhuoc"}
  ]
}
// state = initialState: default parameter
// export: dùng cho biến
// export defaut: dùng cho class
export const FakeBookReducer =  (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMMENT":

      state.arrComment = [
        ...state.arrComment,
        action.comment
      ]
        return {...state}
  default:
    return state
  }
}
