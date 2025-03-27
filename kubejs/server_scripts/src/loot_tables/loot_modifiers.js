LootJS.modifiers((event) => {
	// vines and sticks
	event.addBlockLootModifier("#minecraft:leaves")
		.matchMainHand("#minecraft:swords")
		.randomChance(0.75)
		.addLoot("minecraft:vine")
		.randomChance(0.75)
		.addLoot("minecraft:stick")
		.randomChance(0.03)
		.addLoot("frostedheart:frozen_seeds")
	// ice chips
	event.addBlockLootModifier("frostedheart:thin_ice")
		.removeLoot("frostedheart:ice_chip")
		.randomChance(1.0)
		.addLoot("frostedheart:ice_chip x1")
		.randomChance(0.3)
		.addLoot("frostedheart:ice_chip x2")
	event.addBlockLootModifier("minecraft:ice")
		.randomChance(1.0)
		.addLoot("frostedheart:ice_chip x1")
		.randomChance(0.5)
		.addLoot("frostedheart:ice_chip x2")
	event.addBlockLootModifier("minecraft:packed_ice")
		.randomChance(1.0)
		.addLoot("frostedheart:ice_chip x1")
		.randomChance(0.7)
		.addLoot("frostedheart:ice_chip x2")
	event.addBlockLootModifier("minecraft:blue_ice")
		.randomChance(1.0)
		.addLoot("frostedheart:ice_chip x2")
		.randomChance(0.9)
		.addLoot("frostedheart:ice_chip x2")

	event.addBlockLootModifier("frostedheart:dirty_snow")
		.randomChance(0.7)
		.addLoot("minecraft:flint")
		.randomChance(1.0)
		.addLoot("minecraft:stick")
		.randomChance(0.5)
		.addLoot("minecraft:vine")
		.randomChance(0.03)
		.addLoot("frostedheart:frozen_seeds")
		.randomChance(0.01)
		.addLoot("frostedheart:iron_fence_remains")
		.randomChance(0.01)
		.addLoot('frostedheart:ferrocerium_fire_starter')
		.randomChance(0.01)
		.addLoot('frostedheart:iron_parts')
		.randomChance(0.01)
		.addLoot('frostedheart:iron_truss_remains')
		.randomChance(0.01)
		.addLoot('frostedheart:insulator')
});