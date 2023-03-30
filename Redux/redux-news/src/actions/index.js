import * as types from '../constants/ActionTypes'
import axios from "axios";

const BASE_API_URL = 'https://hacker-news.firebaseio.com/v0';

const receiveStories = stories => ({
    type: types.RECEIVE_STORIES,
    stories
})

export const getStoriesByType = (type) => async dispatch => {
    try {
        const { data: storyIds } = await axios.get(
            `${BASE_API_URL}/${type}stories.json`
        );
        const stories = await Promise.all(storyIds.slice(0, 10).map(getStory));
        dispatch(receiveStories(stories));
    } catch (error) {
        console.log('Error while getting list of stories.');
    }
}

const getStory = async (id) =>{
    try {
        const story = await axios.get(`${BASE_API_URL}/item/${id}.json`)
        return story.data
    } catch (error) {
        console.log('Error while getting a story')
    }
}

