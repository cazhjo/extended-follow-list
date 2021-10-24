// async function getCurrentTab() {
//     let queryOptions = { active: true, currentWindow: true };
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab;
// }

chrome.action.onClicked.addListener((tab) => {
    chrome.extension.getBackgroundPage().console.log(tab)
    // chrome.scripting.executeScript({
    //     code: 'document.body.style.backgroundColor="red"'
    // })
})