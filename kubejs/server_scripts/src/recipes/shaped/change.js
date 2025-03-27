/**
 * For creating all standard minecraft:crafting_shaped recipes
 */
ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	let changeShapedRecipes = [
		[
			"charcoal_pit:mechanical_bellows", [
				"AAA",
				"BC ",
				"AAA"
			], {
				A: "minecraft:stone",
				B: "minecraft:piston",
				C: "charcoal_pit:bellows"
			}
		],
		[
			"charcoal_pit:bellows", [
				"ABA",
				"CCC",
				"ABA"
			], {
				A: "immersiveengineering:treated_wood_horizontal",
				B: "immersiveengineering:slab_treated_wood_horizontal",
				C: "minecraft:leather"
			}
		],
		[
			"minecraft:stone_bricks", 4, [
				"ABA",
				"B B",
				"ABA"
			], {
				A: "minecraft:stone",
				B: "frostedheart:mortar"
			}
		],
		[
			"charcoal_pit:sandy_collector", [
				"A A",
				"ABA",
				"AAA"
			], {
				A: "charcoal_pit:sandy_brick_item",
				B: "minecraft:bucket"
			}
		],
		[
			"charcoal_pit:sandy_brick", [
				"BAB",
				"ABA",
				"BAB"
			], {
				A: "frostedheart:mortar",
				B: "charcoal_pit:sandy_brick_item"
			}
		],
		[
			"create:brass_funnel", 2, [
				" A ",
				"BCB",
				" C "
			], {
				A: "create:electron_tube",
				B: "#forge:ingots/brass",
				C: "#the_winter_rescue:leather"
			}
		],
		[
			"create:andesite_funnel", 4, [
				" A ",
				"ACA",
				" C "
			], {
				A: "#forge:rods/cast_iron",
				C: "#the_winter_rescue:leather"
			}
		],
		/*
		[
			"frostedheart:beehive_oven_pit", [
				" A ",
				"ABA",
				" A "
			], {
				A: "frostedheart:refractory_bricks",
				B: "#forge:ingots/iron"
			}
		],
		*/
		[
			"minecraft:hay_block", [
				"AAA",
				"AAA",
				"AAA"
			], {
				A: "charcoal_pit:straw"
			}
		],
		[
			[
				"immersiveengineering:blueprint", { blueprint: "molds" }
			], [
				"A A",
				"CBC",
				"CCC"
			], {
				A: "minecraft:ink_sac",
				B: "#forge:plates/steel",
				C: "minecraft:paper"
			}
		],
		/*
		[
			"frostedheart:tree_tap", [
				"AAA",
				"  B"
			], {
				A: "#forge:rods/cast_iron",
				B: "minecraft:bucket"
			}
		],
		*/
		[
			"immersiveengineering:stick_steel", 4, [
				"  A",
				" A ",
				"A  "
			], {
				A: "#forge:ingots/steel"
			}
		],
		[
			"frostedheart:cast_iron_rod", 4, [
				"  A",
				" A ",
				"A  "
			], {
				A: "#forge:ingots/cast_iron"
			}
		],
		[
			"immersiveengineering:conveyor_basic", 3, [
				"ACA",
				"ABA"
			], {
				A: "#forge:plates/steel",
				B: "minecraft:redstone",
				C: "create:belt_connector"
			}
		],
		[
			"immersiveengineering:conveyor_basic", 3, [
				"ACA",
				"ABA"
			], {
				A: "#forge:plates/steel",
				B: "kubejs:motor",
				C: "create:belt_connector"
			}
		],
		[
			"create:wrench", [
				"AA",
				"AB",
				" C"
			], {
				A: "#forge:plates/bronze",
				B: "#the_winter_rescue:cogwheels",
				C: "immersiveengineering:stick_treated"
			}
		],
		[
			"immersiveengineering:heavy_engineering", 2, [
				"ABA",
				"BCB",
				"ABA"
			], {
				A: "#forge:plates/tungsten_steel",
				B: "immersiveengineering:component_steel",
				C: "frostedheart:tungstensteel_ingot"
			}
		],
		[
			"immersiveengineering:light_engineering", 2, [
				"ABA",
				"BCB",
				"ABA"
			], {
				A: "#forge:plates/aluminum",
				B: "immersiveengineering:component_iron",
				C: "#forge:ingots/steel"
			}
		],
		[
			"immersiveengineering:fluid_pump", [
				"CDC",
				"ABA",
				"ABA"
			], {
				A: "#forge:plates/steel",
				B: "immersiveengineering:fluid_pipe",
				C: "#forge:plates/aluminum",
				D: "kubejs:servo_core"
			}
		],
		[
			"immersiveengineering:generator", 2, [
				"ABA",
				"BCB",
				"ABA"
			], {
				A: "immersiveengineering:sheetmetal_steel",
				B: "#forge:plates/copper",
				C: "immersiveengineering:coil_mv"
			}
		],
		[
			"frostedheart:refractory_bricks", 2, [
				"ABA",
				"BAB",
				"ABA"
			], {
				A: "frostedheart:refractory_brick",
				B: "frostedheart:mortar"
			}
		],
		[
			"frostedheart:high_refractory_bricks", 2, [
				"ABA",
				"BAB",
				"ABA"
			], {
				A: "frostedheart:high_refractory_brick",
				B: "frostedheart:mortar"
			}
		],
		[
			"minecraft:comparator", [
				" B ",
				"BCB",
				"AAA"
			], {
				A: "#forge:plates/iron",
				B: "minecraft:redstone_torch",
				C: "immersiveengineering:wire_copper"
			}
		],
		[
			"minecraft:piston", [
				"AAA",
				"BAB",
				"BCB"
			], {
				A: "#minecraft:planks",
				B: "minecraft:stone",
				C: "#the_winter_rescue:cogwheels"
			}
		],
		[
			"immersiveengineering:cokebrick", 3, [
				"ABA",
				"CAC",
				"ABA"
			], {
				A: "minecraft:brick",
				B: "frostedheart:mortar",
				C: "#forge:plates/bronze"
			}
		],
		[
			"immersiveengineering:blastbrick", 4, [
				"ABA",
				"BCB",
				"ABA"
			], {
				A: "frostedheart:invar_sheet",
				B: "frostedheart:mortar",
				C: "frostedheart:refractory_bricks"
			}
		],
		[
			"immersiveengineering:wirecutter", [
				"A A",
				" B ",
				"B B"
			], {
				A: "#forge:plates/iron",
				B: "immersiveengineering:stick_treated"
			}
		],
		/*
		[
			"stone_age:grass_lead", [
				"AA",
				"A "
			], {
				A: "charcoal_pit:straw"
			}
		],
		*/
		[
			"elevatorid:elevator_white", [
				"AAA",
				"BBB",
				"AAA"
			], {
				A: "#forge:plates/steel",
				B: "#minecraft:wool"
			}
		],
		[
			"frostedheart:synthetic_leather", [
				"AAA",
				"BBB",
				"AAA"
			], {
				A: "frostedheart:pulp",
				B: "#forge:string"
			}
		],
		[
			"create:belt_connector", 3, [
				"AAA",
				"BBB",
				"AAA"
			], {
				A: "#forge:rubber",
				B: "#forge:wires/copper"
			}
		],
		[
			"create:fluid_pipe", 8, [
				"AAA",
				"AAA"
			], {
				A: "#forge:plates/bronze"
			}
		],
		[
			"create:shaft", 4, [
				"A",
				"A",
				"A"
			], {
				A: "#forge:rods/cast_iron"
			}
		],
		[
			"immersiveengineering:reinforced_crate", [
				"ABA",
				"CDC",
				"ABA"
			], {
				A: "#forge:treated_wood",
				B: "#forge:plates/iron",
				C: "#forge:rods/iron",
				D: "#forge:chests/wooden"
			}
		],
		[
			"steampowered:bronze_cogwheel", 4, [
				" B ",
				"BAB",
				" B "
			], {
				A: "create:shaft",
				B: "#forge:plates/bronze"
			}
		],
		[
			"steampowered:bronze_large_cogwheel", 2, [
				"BBB",
				"BAB",
				"BBB"
			], {
				A: "create:shaft",
				B: "#forge:plates/bronze"
			}
		],
		[
			"steampowered:cast_iron_cogwheel", 4, [
				" B ",
				"BAB",
				" B "
			], {
				A: "create:shaft",
				B: "#forge:plates/cast_iron"
			}
		],
		[
			"steampowered:cast_iron_large_cogwheel", 2, [
				"BBB",
				"BAB",
				"BBB"
			], {
				A: "create:shaft",
				B: "#forge:plates/cast_iron"
			}
		],
		[
			"steampowered:steel_cogwheel", 4, [
				" B ",
				"BAB",
				" B "
			], {
				A: "create:shaft",
				B: "#forge:plates/steel"
			}
		],
		[
			"steampowered:steel_large_cogwheel", 2, [
				"BBB",
				"BAB",
				"BBB"
			], {
				A: "create:shaft",
				B: "#forge:plates/steel"
			}
		],
		[
			"steampowered:bronze_boiler", [
				"B B",
				"BAB",
				"BBB"
			], {
				A: "create:fluid_pipe",
				B: "#forge:plates/bronze"
			}
		],
		[
			"steampowered:cast_iron_boiler", [
				"B B",
				"BAB",
				"BBB"
			], {
				A: "create:fluid_pipe",
				B: "#forge:plates/cast_iron"
			}
		],
		[
			"steampowered:bronze_burner", [
				"BCB",
				"B B",
				"AAA"
			], {
				A: "frostedheart:refractory_bricks",
				B: "#forge:plates/bronze",
				C: "#forge:plates/copper"
			}
		],
		[
			"steampowered:cast_iron_burner", [
				"BCB",
				"B B",
				"AAA"
			], {
				A: "frostedheart:refractory_bricks",
				B: "#forge:plates/cast_iron",
				C: "#forge:plates/copper"
			}
		],
		[
			"steampowered:steel_burner", [
				"BCB",
				"B B",
				"AAA"
			], {
				A: "frostedheart:high_refractory_bricks",
				B: "#forge:plates/steel",
				C: "#forge:plates/copper"
			}
		],
		[
			"create:wand_of_symmetry", [
				" DC",
				"BCD",
				"AB "
			], {
				A: "#forge:obsidian",
				B: "#forge:ingots/tungsten",
				C: "create:refined_radiance",
				D: "minecraft:white_stained_glass_pane"
			}
		],
		[
			"supplementaries:daub", 2, [
				"AB",
				"BA"
			], {
				A: "minecraft:clay",
				B: "charcoal_pit:straw"
			}
		],
		[
			"frostedheart:steam_core", [
				"ASA",
				"BWB",
				"ACA"
			], {
				A: "#forge:plates/steel",
				B: "#immersiveengineering:scaffoldings/steel",
				W: ["steampowered:steel_steam_engine", "steampowered:cast_iron_steam_engine"],
				C: "frostedheart:heat_pipe",
				S: "create:shaft"
			}
		],
		[
			"supplementaries:cage", [
				"AAA",
				"WBW",
				"CCC"
			], {
				A: "#forge:plates/steel",
				B: "#immersiveengineering:scaffoldings/steel",
				W: "frostedheart:gambeson",
				C: "#forge:treated_wood"
			}
		],
		[
			"create:mechanical_mixer", [
				" A ",
				"DCD",
				" B "
			], {
				A: "#forge:ingots/iron",
				B: "create:whisk",
				C: "#forge:sheetmetals/iron",
				D: "#the_winter_rescue:cogwheels"
			}
		],
		[
			"create:hand_crank", [
				" C ",
				"BBB",
				"  A"
			], {
				A: "#forge:ingots/iron",
				B: "#minecraft:planks",
				C: "create:shaft"
			}
		],
		[
			"create:gantry_shaft", [
				"BAD",
				"BCB",
				"DAB"
			], {
				A: "#forge:rods/cast_iron",
				B: "#forge:ingots/cast_iron",
				C: "#forge:dusts/redstone",
				D: "#minecraft:planks"
			}
		],
		[
			"minecraft:chest", 8, [
				"AAA",
				"A A",
				"AAA"
			], {
				A: "#forge:treated_wood"
			}
		],
		[
			"create:fluid_tank", 4, [
				"AAA",
				"ABA",
				"AAA"
			], {
				A: "#forge:plates/bronze",
				B: "#forge:glass"
			}
		],
	]
	changeShapedRecipes.forEach((recipe, index) => {
		let [
			output,
			quantity,
			pattern,
			keys
		] = recipe.length === 4 ? recipe : [recipe[0], 1, recipe[1], recipe[2]]

		// Ensure that the output is a valid item ID and NBT processing
		if (Array.isArray(output)) {
			// If it is an item with NBT
			let [itemID, nbt] = output
			// Ensure that the NBT is an object, even if it is empty
			output = Item.of(itemID, quantity).withNBT(nbt || {})
		} else {
			// Ordinary items, default without NBT
			output = Item.of(output, quantity)
		}

		// Remove old recipes
		event.remove({ output: output, type: "minecraft:crafting_shaped" })

		// Add new Recipes
		kubejs.shaped(output, pattern, keys)
			.id(`the_winter_rescue:minecraft/crafting_shaped/change/${index}`)
	})
})