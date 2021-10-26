export const formatViewCount = (viewCount) => {
    if (viewCount >= 1000 && viewCount < 100000) {
        return (viewCount / 1000).toFixed(1) + "K" 
    } else if (viewCount >= 100000 && viewCount < 1000000) {
        return Math.round((viewCount / 1000)) + "K"
    } else if (viewCount >= 1000000) {
        return (viewCount / 1000000).toFixed(1) + "M"
    } else {
        return viewCount
    }
}