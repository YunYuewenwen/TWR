Ponder.registry((event) => {
	event.create("immersiveindustry:car_kiln_brick")
		.tag("immersiveindustry:ponder")
		.scene("rotary_kiln", "Rotary Kiln", "kubejs:rotary_kiln", (scene) => {
			scene.showBasePlate()
			scene.idle(20)
		})
})