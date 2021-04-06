
let cid=0

export function addComment(comment) {
  return {
    type: 'add_comment',
    payload:
    {
      id: ++cid,
      comment
  }
}
}

export function removeComment(cid) {
  return 
  {
    type: "delete_comment",
    payload
    {
      id
    }

  }
}

export function addLike() {
  return {
    type: 'add_like',
    payload{
        likes: ++likes
    }
  }
