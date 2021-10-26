import { formatViewCount } from "./utils"

export const twitchFollowItem = (newInfo) => {
    let target = document.createElement()
    target.innerHTML = `<div class="ScTransitionBase-sc-eg1bd7-0 haVKXi tw-transition"
    style="transition-property: transform, opacity; transition-timing-function: ease;">
    <div>
        <div class="Layout-sc-nxg1ff-0 emWtQg side-nav-card" data-test-selector="side-nav-card"><a
                data-a-id="followed-channel-0" data-test-selector="followed-channel"
                class="ScCoreLink-sc-udwpw5-0 dKdncz InjectLayout-sc-588ddc-0 gGsCsI side-nav-card__link tw-link"
                href="${newInfo.url}" target="_blank">
                <div class="Layout-sc-nxg1ff-0 dJHpfJ side-nav-card__avatar">
                    <figure aria-label="${newInfo.name}" class="ScAvatar-sc-12nlgut-0 dZzQyr tw-avatar"><img
                            class="InjectLayout-sc-588ddc-0 hYROTF tw-image tw-image-avatar" alt="${newInfo.name}"
                            src="${newInfo.avatar}">
                    </figure>
                </div>
                <div class="Layout-sc-nxg1ff-0 gLXkbC">
                    <div data-a-target="side-nav-card-metadata" class="Layout-sc-nxg1ff-0 hmnIz">
                        <div class="Layout-sc-nxg1ff-0 jDqVhz side-nav-card__title">
                            <p title="${newInfo.name}" data-a-target="side-nav-title"
                                class="CoreText-sc-cpl358-0 hSTXRs InjectLayout-sc-588ddc-0 ecXQMX">${newInfo.name}</p>
                        </div>
                        <div class="Layout-sc-nxg1ff-0 jreOmo side-nav-card__metadata"
                            data-a-target="side-nav-game-title">
                            <p title="${newInfo.game}" class="CoreText-sc-cpl358-0 gYwlvg">${newInfo.game}</p>
                        </div>
                    </div>
                    <div class="Layout-sc-nxg1ff-0 hWXYHp side-nav-card__live-status"
                        data-a-target="side-nav-live-status">
                        <div class="Layout-sc-nxg1ff-0 jDqVhz">
                            <div class="ScChannelStatusIndicator-sc-1cf6j56-0 YbZdY tw-channel-status-indicator"
                                data-test-selector="0"></div>
                            <div class="Layout-sc-nxg1ff-0 faqhMI"><span data-test-selector="1"
                                    aria-label="${formatViewCount(newInfo.viewCount)}" class="CoreText-sc-cpl358-0 itAETt">${formatViewCount(newInfo.viewCount)}</span></div>
                        </div>
                    </div>
                </div>
            </a></div>
        </div>
    </div>`
    return target
}