import { ADD_COMMENT } from "../type/FakeBookType";

//addCommentAction, deleteCommentAction
export const fakebookAction = (userComment) => {

        return {
            type: ADD_COMMENT,
            comment:{
                ...userComment,
                avatar:`https://i.pravatar.cc/?u=${userComment.name}`
            }
        }
}
