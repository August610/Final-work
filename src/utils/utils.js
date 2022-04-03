export const isLiked = (likes = [], userId) => {
    return likes?.some(i => i===userId)
}