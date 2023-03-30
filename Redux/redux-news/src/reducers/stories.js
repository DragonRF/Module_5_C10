import {RECEIVE_STORIES} from "../constants/ActionTypes";

const stories = (state = [],action) =>{
    switch (action.type) {
        case RECEIVE_STORIES:
            return action.stories
        default:
            return state
    }
}

export default stories
export const getStories = state => state.stories
