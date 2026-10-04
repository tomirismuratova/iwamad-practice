import { useLikes } from '../context/LikesContext'

function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <button
      id="likeBtn"
      type="button"
      onClick={addLike}
    >
      Like ❤️ {likes}
    </button>
  )
}

export default LikeButton