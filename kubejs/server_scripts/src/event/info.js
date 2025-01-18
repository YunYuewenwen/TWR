PlayerEvents.loggedIn((event) => {
	let { player } = event

	global.debugUserName.forEach((debugUser) => {
		let playerInfo = Component.translate("text.kubejs.player").getString()

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