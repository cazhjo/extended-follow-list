import { twitchFollowItem } from './html-elements.js'

const streamerInfo = {
    name: "DrDisRespect",
    avatar: "https://yt3.ggpht.com/tvkeak3Sfk6blV7sMIO6CjhUMSTmNTSgiBF2NOaj7V0xuZPEvkmARxgKtCUFpyONef-LS1ZW=s88-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/watch?v=KmxEidsVlTc",
    game: "Youtube",
    viewCount: 3533520,

}

const customStreamers = [streamerInfo]

window.addEventListener('load', () => {
    const followList = document.getElementsByClassName("InjectLayout-sc-588ddc-0 dBaosp tw-transition-group")[0]
    let customItem = twitchFollowItem(streamerInfo)
    followList.prepend(customItem)
    console.log(followList)
})

