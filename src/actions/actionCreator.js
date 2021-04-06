let likes = 0;
let i=0;

export function deleteComment(id)
{
    return{
        type: "deleteComment",
        payload: {
            id
        }
    };
}

export function likePost()
{
    return{
        type: "likePost",
        payload: {
            likes: ++likes
        }
    };
}

export function addComment(commentData)
{
    return{
        type: "addComment",
        payload: {
            id: ++i,
            commentData,
            timestamp: Date.now()
        }
    };
}

