import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoriesByType } from '../actions';
import Story from './Story';
import { useParams } from 'react-router';
import { getStories } from '../reducers/stories'

const StoryList = () => {
    const { type } = useParams();
    const stories = useSelector(getStories)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getStoriesByType(type))
    }, [type])

    return (
        <div>
            {stories.map((story) => (
                <Story key={story.id} story={story} />
            ))}
        </div>
    );
};

export default StoryList;