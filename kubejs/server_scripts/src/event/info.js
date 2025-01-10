PlayerEvents.loggedIn((event) => {
    let {player, server} = event

    global.debugUserName.forEach((debugUser) => {
        // 留言(一个无聊到真的不能再无聊的东西)
        let playerInfo = Component.translate("text.kubejs.player").getString()
        let modPackVersion = Component.translate("text.kubejs.version").getString()
        player.paint({
            playerTip: {
                type: "text",
                x: 10,
                y: "$screenH - 40",
                alignX: "left",
                text: playerInfo,
                scale: 0.7
            }
        })
        player.paint({
            versionTip: {
                type: "text",
                x: 10,
                y: "$screenH - 30",
                alignX: "left",
                text: modPackVersion,
                scale: 0.7
            }
        })
        if (player.username === debugUser) {
            let devInfo = Component.translate("text.kubejs.dev").getString()
            player.paint({
                devTip: {
                    type: "text",
                    x: 10,
                    y: "$screenH - 50",
                    alignX: "left",
                    text: devInfo,
                    scale: 0.7
                }
            })
        }
    })
})