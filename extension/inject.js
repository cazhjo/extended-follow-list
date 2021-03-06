const streamerInfo = {
    name: "DrDisRespect",
    avatar: "https://yt3.ggpht.com/tvkeak3Sfk6blV7sMIO6CjhUMSTmNTSgiBF2NOaj7V0xuZPEvkmARxgKtCUFpyONef-LS1ZW=s88-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/watch?v=KmxEidsVlTc",
    game: "Youtube",
    viewCount: 3533520,
    title: "stream"
}

const customStreamers = [streamerInfo];

const twitchFollowItem = ({ name, title, viewCount, game }) => {
    const id = String(Math.random() * (100000000 - 10000000) + 10000000)
    const avatar = "https://yt3.ggpht.com/tvkeak3Sfk6blV7sMIO6CjhUMSTmNTSgiBF2NOaj7V0xuZPEvkmARxgKtCUFpyONef-LS1ZW=s88-c-k-c0x00ffffff-no-rj"
    return {
        "trackingID": id,
        "promotionsCampaignID": "",
        "user": {
            "id": id,
            "login": "",
            "displayName": name,
            "profileImageURL": avatar,
            "primaryColorHex": "FFBF00",
            "broadcastSettings": {
                "id": id,
                "title": title,
                "__typename": "BroadcastSettings"
            },
            "__typename": "User"
        },
        "label": "NONE",
        "content": {
            "id": id,
            "previewImageURL": avatar,
            "broadcaster": {
                "id": id,
                "broadcastSettings": {
                    "id": id,
                    "title": title,
                    "__typename": "BroadcastSettings"
                },
                "__typename": "User"
            },
            "viewersCount": viewCount,
            "self": {
                "canWatch": true,
                "isRestricted": false,
                "restrictionType": null,
                "__typename": "StreamSelfConnection"
            },
            "game": {
                "id": id,
                "displayName": game,
                "name": game,
                "__typename": "Game"
            },
            "type": "live",
            "__typename": "Stream"
        },
        "__typename": "PersonalSectionChannel",
        "id": id
    }
}
(function () {
    const realFetch = window.fetch;
    window.fetch = async (...args) => {
        const response = await realFetch(...args);
        const clone = await response.clone().json()

        if (clone?.[0]?.data?.personalSections) {
            const followlist = clone[0].data.personalSections[0].items
            chrome.runtime.sendMessage('get-streamers', (response) => {
                for (let streamer of response) {
                    followlist.splice(0, 0, twitchFollowItem(Object.values(streamer)[0])) // TODO: sort list
                }
            })
        }

        const newResponse = {
            url: response.url,
            type: response.type,
            statusText: response.statusText,
            status: response.status,
            redirected: response.redirected,
            ok: response.ok,
            headers: response.headers,
            bodyUsed: response.bodyUsed,
        }

        return new Response(new Blob([JSON.stringify(clone, null, 2)], { type: 'application/json' }), newResponse);
    };
})()