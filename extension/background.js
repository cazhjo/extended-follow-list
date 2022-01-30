const API_KEY = ""
const streamers = []

const fetchLivestreams = async (channelId) => await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&order=viewCount&key=${API_KEY}`).then(response => response.json())
const fetchVideoStats = async (videoId) => await fetch(`https://youtube.googleapis.com/youtube/v3/videos?id=${videoId}&part=statistics&key=${API_KEY}`).then(response => response.json())

const updateStreamerInfo = async () => {
    chrome.storage.sync.get(null, async (items) => {
        if (items) {
            for (let streamer of Array.isArray(items) ? items : [items]) {
                const channelId = Object.keys(streamer)?.[0]
                if (!channelId) continue
                const liveStreamInfo = await fetchLivestreams(channelId)
                if (!liveStreamInfo) continue
                const { id: { videoId }, snippet: { channelTitle, title, thumbnails } } = liveStreamInfo.items[0]

                if (!videoId) continue
                const videoStats = await fetchVideoStats(videoId)
                const { statistics: { viewCount } } = await videoStats.items[0] 
                chrome.storage.sync.set({ [channelId]: { name: channelTitle, title, game: 'Youtube', url: `https://www.youtube.com/watch?v=${videoId}`, viewCount } })
            }
        }

        setTimeout(updateStreamerInfo, 5000)
    })
}

chrome.runtime.onMessage.addListener(async ({ cmd, channelId, value }, sender, sendResponse) => {
    if (cmd === 'add-streamer') {
        await chrome.storage.sync.set({ [channelId]: value })
    }
    if (cmd === 'get-streamers') {
        await chrome.storage.sync.get(null, (items) => {
            sendResponse(items)
        })
    }
})

chrome.runtime.onStartup.addListener(() => {
    updateStreamerInfo()
})

chrome.runtime.onInstalled.addListener(() => {
    updateStreamerInfo()
})