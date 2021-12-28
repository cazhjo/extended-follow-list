const streamerInfo = {
    name: "DrDisRespect",
    avatar: "https://yt3.ggpht.com/tvkeak3Sfk6blV7sMIO6CjhUMSTmNTSgiBF2NOaj7V0xuZPEvkmARxgKtCUFpyONef-LS1ZW=s88-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/watch?v=KmxEidsVlTc",
    game: "Youtube",
    viewCount: 3533520,
}

const customStreamers = [streamerInfo]

const replaceHTMLCollection = (parent, array) => {
    const newParent = document.createElement("div")

    for (let item of array)
        newParent.appendChild(item)

    parent.innerHTML = newParent.innerHTML
}

const updateFollowList = (followList, streamers) => {
    let top12 = [...followList.children]
    for (let streamer of streamers) {
        let current = followList.getElementsByClassName(streamer.name)[0]
        if (current) {
            current.getElementsByClassName["viewCount"].innerText = formatViewCount(streamer.viewCount)
            continue
        }

        for (let i = 0; i < top12.length; i++) {
            let viewCount = unformatViewCount(top12[i].getElementsByClassName("Layout-sc-nxg1ff-0 faqhMI")[0].firstChild.innerText)
            if (streamer.viewCount >= viewCount) {
                top12.splice(i, 0, twitchFollowItem(streamer))
                break
            }
        }
    }

    replaceHTMLCollection(followList, top12.slice(0, 12))
}

window.addEventListener('load', () => {
    console.log('here')
    const followList = document.getElementsByClassName("InjectLayout-sc-588ddc-0 dBaosp tw-transition-group")[0]
    console.log(followList)
    updateFollowList(followList, customStreamers)
})

