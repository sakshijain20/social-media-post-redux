

const initialstate = {
    comments: [],
    likes: 0
}; 

export default function reducer(state = initialstate, action)
{
     if (action.type === 'addComment')
         return {...state, comments: [...state.comments, action.payload]};
    else if (action.type === 'deleteComment')
        return {comments: state.comments.filter(comment => comment.id !== action.payload.id)};
    else if (action.type === 'likePost')
        return {...state, likes: action.payload.likes};

    return state;
}