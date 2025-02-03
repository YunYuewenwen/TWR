PlayerEvents.loggedIn((event) => {
	let { player } = event

	let modGroup = [
		"ftbultimine",
		"oreexcavation",
		"veinmining"
	]

	let detectedMods = []

	modGroup.forEach((modId) => {
		if (Platform.isLoaded(modId)) {
			detectedMods.push(modId)
		}
	})

	// If multiple mods are detected, use different i18n key
	if (detectedMods.length > 0) {
		let getMod = detectedMods.join(", ")
		let messageKey = detectedMods.length > 1 ? "message.kubejs.checkMultipleCheating" : "message.kubejs.checkCheating"
		player.tell(Component.translate(messageKey, [getMod]))
	}
})