const formatViewCount = (viewCount) => {
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

const unformatViewCount = (viewCount) => {
    let suffix = viewCount[viewCount.length-1]
    let value = viewCount.slice(0, viewCount.length-1)

    if (suffix === "K") {
        return value * 1000 
    } else if (suffix === "M") {
        return value * 1000000
    } else {
        return +viewCount
    }
}