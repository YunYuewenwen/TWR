Ponder.registry((event) => {
	event.create("immersiveindustry:rotary_kiln_cylinder")
		.tag("immersiveindustry:ponder")
		.scene("industrial_electrolyzer", "Industrial Electrolyzer", "kubejs:industrial_electrolyzer", (scene) => {
			scene.showBasePlate()
			scene.idle(20)
		})
})