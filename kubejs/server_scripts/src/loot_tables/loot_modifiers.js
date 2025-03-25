LootJS.modifiers((event) => {
	// vines and sticks
	event.addBlockLootModifier("#minecraft:leaves")
		.matchMainHand("#minecraft:swords")
		.randomChance(0.3)
		.addLoot("minecraft:vine")
		.randomChance(0.3)
		.addLoot("minecraft:stick");
	// ice chips
	event.addBlockLootModifier("frostedheart:thin_ice").removeLoot("frostedheart:ice_chip");
	event.addBlockLootModifier("frostedheart:thin_ice")
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
});