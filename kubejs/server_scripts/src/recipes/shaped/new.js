/**
 * For creating all standard minecraft:crafting_shaped recipes
 */
ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	let addShapedRecipes = [
		[
			"frostedheart:snowshoes", [
				"B  ",
				"BBB",
				"AAA"
			], {
				A: "#minecraft:planks",
				B: "minecraft:leather"
			}
		],
		[
			"frostedheart:snowshoes", [
				"B  ",
				"BBB",
				"AAA"
			], {
				A: "#minecraft:planks",
				B: "stone_age:grass_mesh"
			}
		],
		[
			"frostedheart:ice_skates", [
				"A  ",
				"AAA",
				"BBB"
			], {
				A: "#forge:leather",
				B: "#forge:nuggets/iron"
			}
		],
		[
			"stone_age:dried_grass_bed", [
				"  B",
				"BBB",
				"AAA"
			], {
				A: "#minecraft:wooden_slabs",
				B: "charcoal_pit:straw"
			}
		],
		[
			"charcoal_pit:log_pile", [
				"AAA",
				"AAA",
				"AAA"
			], {
				A: "#minecraft:logs_that_burn"
			}
		],
		[
			"stone_age:millstone", [
				" B ",
				" C ",
				"AAA"
			], {
				A: "#forge:stone",
				B: "minecraft:stick",
				C: "minecraft:stone"
			}
		],
		[
			"stone_age:stone_chest", [
				"BBB",
				"ACA",
				"AAA"
			], {
				A: "minecraft:stone",
				B: "minecraft:stone_slab",
				C: "minecraft:clay_ball"
			}
		],
		[
			"stone_age:grass_mesh", [
				"A A",
				" A ",
				"A A"
			], {
				A: "stone_age:grass_lead"
			}
		],
		[
			"stone_age:cobweb_mesh", [
				"A A",
				" A ",
				"A A"
			], {
				A: "minecraft:string"
			}
		],
		[
			"stone_age:fishing_net", [
				"BAB",
				"ACA",
				"BAB"
			], {
				A: "stone_age:leather_strip",
				B: "#forge:rods/wooden",
				C: "#minecraft:wooden_slabs"
			}
		],
		[
			"stone_age:feeder", [
				"BCB",
				"ACA",
				"BCB"
			], {
				A: "#minecraft:logs",
				B: "#forge:crops/wheat",
				C: "#minecraft:wooden_slabs"
			}
		],
		[
			"stone_age:tree_stump", [
				"   ",
				" B ",
				"AAA"
			], {
				A: "minecraft:stone",
				B: "#minecraft:logs"
			}
		],
		[
			"stone_age:drying_rack", [
				"A A",
				" A ",
				"A A"
			], {
				A: "#forge:rods/wooden"
			}
		],
		[
			"stone_age:tanning_rack", [
				"A A",
				" A ",
				"AAA"
			], {
				A: "#forge:rods/wooden"
			}
		],
		[
			"minecraft:crafting_table", [
				"AA",
				"AA"
			], {
				A: "#minecraft:planks"
			}
		],
		[
			"stone_age:drying_rack", [
				"AA",
				"AA"
			], {
				A: "#forge:rods/wooden"
			}
		],
		[
			"frostedheart:makeshift_pickaxe", [
				"CC",
				"BA"
			], {
				A: "#forge:rods/wooden",
				B: "#forge:string",
				C: "#frostedheart:garbage"
			}
		],
		[
			"frostedheart:makeshift_axe", [
				"CB",
				"CA"
			], {
				A: "#forge:rods/wooden",
				B: "#forge:string",
				C: "#frostedheart:garbage"
			}
		],
		[
			"frostedheart:makeshift_shovel", [
				"BC",
				" A"
			], {
				A: "#forge:rods/wooden",
				B: "#forge:string",
				C: "#frostedheart:garbage"
			}
		],
		[
			"frostedheart:makeshift_knife", [
				"A ",
				" A"
			], {
				A: "#frostedheart:garbage"
			}
		],
		[
			"frostedheart:makeshift_hoe", [
				"CB",
				" A"
			], {
				A: "#forge:rods/wooden",
				B: "#forge:string",
				C: "#frostedheart:garbage"
			}
		],
		[
			"stone_age:tree_stump", [
				"AA",
				"BB"
			], {
				A: "#minecraft:logs",
				B: "minecraft:stone",
			}
		],
		[
			"frostedheart:stone_hammer", [
				"CC",
				"BA"
			], {
				A: "#forge:rods/wooden",
				B: "#forge:string",
				C: "#forge:stone"
			}
		],
		[
			"minecraft:campfire", [
				"AA",
				"BB"
			], {
				A: "charcoal_pit:straw",
				B: "#minecraft:logs",
			}
		],
		[
			"frostedheart:heat_incubator", [
				"  D",
				" CA",
				"DBD"
			], {
				A: "frostedheart:heat_pipe",
				B: "#forge:plates/steel",
				C: "frostedheart:incubator",
				D: "#forge:plates/copper"
			}
		],
		[
			"frostedheart:gas_vent", [
				"ABA",
				"BCB"
			], {
				A: "#forge:plates/invar",
				B: "immersiveengineering:fluid_pipe",
				C: "#forge:plates/steel"
			}
		],
		[
			"immersiveengineering:radiator", 2, [
				"ABA",
				"BCB",
				"ABA"
			], {
				A: "immersiveengineering:sheetmetal_steel",
				B: "#forge:plates/steel",
				C: "immersiveengineering:plantoil_bucket"
			}
		],
		[
			"frostedresearch:rubbing_pad", [
				"AAA",
				"BBB",
				"AAA"
			], {
				A: "#forge:plates/cast_iron",
				B: "#forge:ingots/cast_iron"
			}
		],
		[
			"kubejs:motor", [
				" AC",
				"ABA",
				" A "
			], {
				A: "immersiveengineering:wirecoil_copper",
				B: "#forge:rods/cast_iron",
				C: "#forge:plates/aluminum"
			}
		],
		[
			"create:filter", [
				"A A",
				"B B",
				"A A"
			], {
				A: "minecraft:string",
				B: "#forge:nuggets/iron"
			}
		],
		[
			"create:attribute_filter", [
				"A A",
				"B B",
				"A A"
			], {
				A: "minecraft:string",
				B: "#forge:nuggets/brass"
			}
		],
		[
			"create:nozzle", [
				"ABA",
				"A A",
				"BBB"
			], {
				A: "minecraft:string",
				B: "#forge:ingots/cast_iron"
			}
		],
		[
			"frostedheart:oil_burner", [
				"A A",
				"AAA",
				"BBB"
			], {
				A: "#forge:plates/copper",
				B: "minecraft:stone_bricks"
			}
		],
		[
			"frostedheart:soil_thermometer", [
				"BDB",
				"ACA",
				" A "
			], {
				A: "#forge:plates/iron",
				B: "minecraft:glass",
				C: "minecraft:redstone",
				D: "create:precision_mechanism"
			}
		],
		[
			"frostedheart:buff_coat", [
				"AAA",
				"CBC",
				"AAA"
			], {
				A: "minecraft:leather",
				B: "stone_age:leather_strip",
				C: "#forge:wires/copper"
			}
		],
		[
			"frostedheart:kelp_lining", [
				"CBC",
				"AAA"
			], {
				A: "minecraft:dried_kelp",
				B: "stone_age:leather_strip",
				C: "#forge:wires/copper"
			}
		],
		[
			"frostedheart:mercury_body_thermometer", [
				" BB",
				"BAB",
				"CB "
			], {
				A: "minecraft:redstone",
				B: "minecraft:glass",
				C: "#forge:plates/iron"
			}
		],
		[
			"frostedheart:heat_pipe", 3, [
				" B ",
				"ACA",
				" B "
			], {
				A: "#forge:plates/steel",
				B: "immersiveengineering:treated_wood_horizontal",
				C: "#forge:plates/copper"
			}
		],
		[
			"frostedheart:heater_vest", [
				"ACA",
				"BDB",
				"ACA"
			], {
				A: "#forge:plates/steel",
				B: "minecraft:leather",
				C: "#forge:plates/copper",
				D: "immersiveengineering:metal_barrel"
			}
		],
		[
			"frostedheart:charger", [
				"CBC",
				"DCD",
				"AAA"
			], {
				A: "immersiveengineering:treated_wood_horizontal",
				B: "#forge:plates/steel",
				C: "#forge:plates/copper",
				D: "minecraft:bucket"
			}
		],
		[
			"frostedheart:sauna_vent", [
				"DBD",
				"BCB",
				"AAA"
			], {
				A: "immersiveengineering:treated_wood_horizontal",
				B: "#forge:plates/invar",
				C: "minecraft:bucket",
				D: "#forge:ingots/invar"
			}
		],
		[
			"frostedheart:advanced_thermos", [
				"ABA",
				"CBC",
				"CBC"
			], {
				A: "#forge:plates/iron",
				B: "#forge:plates/steel",
				C: "#forge:plates/aluminum"
			}
		],
		[
			"frostedheart:iron_pro_pick", [
				"ABA",
				" B ",
				" B "
			], {
				A: "#forge:ingots/iron",
				B: "immersiveengineering:stick_treated"
			}
		],
		[
			"frostedheart:iron_core_spade", [
				"A",
				"B",
				"B"
			], {
				A: "#forge:plates/iron",
				B: "immersiveengineering:stick_treated"
			}
		],
		[
			"frostedheart:steel_core_spade", [
				"A",
				"B",
				"B"
			], {
				A: "#forge:plates/steel",
				B: "immersiveengineering:stick_treated"
			}
		],
		[
			"frostedheart:iron_geologists_hammer", [
				"CBA",
				" B ",
				" B "
			], {
				A: "#forge:plates/iron",
				B: "immersiveengineering:stick_treated",
				C: "#forge:ingots/iron"
			}
		],
		[
			"frostedheart:steel_geologists_hammer", [
				"CBA",
				" B ",
				" B "
			], {
				A: "#forge:plates/steel",
				B: "immersiveengineering:stick_treated",
				C: "#forge:ingots/steel"
			}
		],
		[
			"immersiveengineering:rs_engineering", [
				"ABA",
				"BCB",
				"ABA"
			], {
				A: "immersiveengineering:sheetmetal_iron",
				B: "#forge:plates/copper",
				C: "kubejs:servo_core"
			}
		],
		[
			"create:shaft", 3, [
				"A",
				"A",
				"A"
			], {
				A: "#forge:ingots/iron"
			}
		],
		[
			"create:whisk", [
				"BAB",
				"BAB",
				"BBB"
			], {
				A: "#forge:ingots/iron",
				B: "#forge:plates/iron"
			}
		],
		[
			"create:basin", [
				"A A",
				"AAA"
			], {
				A: "#forge:plates/iron"
			}
		],
		[
			"create:precision_mechanism", [
				"CAC",
				"BCB",
				"CAC"
			], {
				A: "#forge:plates/brass",
				B: "create:electron_tube",
				C: "create:shaft"
			}
		],
		[
			"frostedheart:invar_block", [
				"AAA",
				"AAA",
				"AAA"
			], {
				A: "#forge:plates/invar"
			}
		],
		[
			"frostedheart:hay_hat", [
				"AAA",
				"A A",
			], {
				A: "charcoal_pit:straw"
			}
		],
		[
			"frostedheart:hay_jacket", [
				"A A",
				"AAA",
				"AAA"
			], {
				A: "charcoal_pit:straw"
			}
		],
		[
			"frostedheart:hay_pants", [
				"AAA",
				"A A",
				"A A"
			], {
				A: "charcoal_pit:straw"
			}
		],
		[
			"frostedheart:incubator", [
				"AAA",
				"A B",
				"BBB"
			], {
				A: "#minecraft:planks",
				B: "minecraft:stone"
			}
		],
		[
			"minecraft:arrow", 4, [
				"A",
				"B",
				"C"
			], {
				A: "stone_age:bone_arrow_head",
				B: "#forge:rods/wooden",
				C: "#forge:feathers"
			}
		],
		[
			"frostedheart:hand_stove", [
				" B ",
				"BAB",
				" B "
			], {
				A: "#forge:clay",
				B: "#forge:plates/copper"
			}
		],
		[
			"immersiveengineering:hammer", [
				" AC",
				" BA",
				"B  "
			], {
				A: "#twr:ingots/structural",
				B: "#forge:rods/wooden",
				C: "stone_age:leather_strip"
			}
		],
		[
			"frostedheart:straw_lining", [
				"AAA",
				"CBC",
				"AAA"
			], {
				A: "charcoal_pit:straw",
				B: "stone_age:leather_strip",
				C: "stone_age:grass_lead"
			}
		],
		[
			"frostedheart:thermos", [
				"ACA",
				"BCB",
				"BAB"
			], {
				A: "#forge:plates/copper",
				B: "#minecraft:logs",
				C: "#minecraft:planks"
			}
		],
		[
			"frostedheart:copper_pro_pick", [
				"ABA",
				" B ",
				" B "
			], {
				A: "#forge:ingots/copper",
				B: "#forge:rods/wooden"
			}
		],
		[
			"frostedheart:copper_core_spade", [
				"A",
				"B",
				"B"
			], {
				A: "#forge:plates/copper",
				B: "#forge:rods/wooden"
			}
		],
		[
			"frostedheart:copper_geologists_hammer", [
				"CBA",
				" B ",
				" B "
			], {
				A: "#forge:plates/copper",
				B: "#forge:rods/wooden",
				C: "#forge:ingots/copper"
			}
		],
		[
			"frostedheart:generator_brick", 4, [
				"ABA",
				"BAB",
				"ABA"
			], {
				A: "minecraft:stone_bricks",
				B: "minecraft:brick"
			}
		],
		[
			"frostedheart:generator_amplifier_r1", [
				"ABA",
				"DCD",
				"ABA"
			], {
				A: "minecraft:stone_bricks",
				B: "minecraft:brick",
				C: "#forge:plates/copper",
				D: "minecraft:clay_ball"
			}
		],
		[
			"frostedheart:generator_core_t1", [
				"ACA",
				"CBC",
				"ACA"
			], {
				A: "minecraft:brick",
				B: "frostedheart:energy_core",
				C: "#forge:ingots/copper"
			}
		],
		[
			"frostedheart:rye_bread", [
				"AAA"
			], {
				A: "frostedheart:rye"
			}
		],
		[
			"frostedheart:wooden_cup", 4, [
				"A A",
				"A A",
				" A "
			], {
				A: "#minecraft:planks"
			}
		],
		[
			"kubejs:wet_straw_briquette", [
				"AAA",
				"A A",
				"AAA"
			], {
				A: "charcoal_pit:straw"
			}
		],
		[
			"stone_age:fish_bone", [
				"ABA"
			], {
				A: "minecraft:bone",
				B: "minecraft:flint"
			}
		],
		[
			"frostedheart:hide_hat", [
				"AAA",
				"A A",
				"B C"
			], {
				A: "stone_age:raw_hide",
				B: "stone_age:leather_strip",
				C: "stone_age:fish_bone"
			}
		],
		[
			"frostedheart:hide_jacket", [
				"ACA",
				"ABA",
				"AAA"
			], {
				A: "stone_age:raw_hide",
				B: "stone_age:leather_strip",
				C: "stone_age:fish_bone"
			}
		],
		[
			"frostedheart:hide_boots", [
				"ABA",
				"ACA"
			], {
				A: "stone_age:raw_hide",
				B: "stone_age:leather_strip",
				C: "stone_age:fish_bone"
			}
		],
		[
			"frostedheart:wool_hat", [
				"AAA",
				"A A",
				"B C"
			], {
				A: "#minecraft:wool",
				B: "stone_age:leather_strip",
				C: "stone_age:fish_bone"
			}
		],
		[
			"frostedheart:wool_jacket", [
				"ACA",
				"ABA",
				"AAA"
			], {
				A: "#minecraft:wool",
				B: "stone_age:leather_strip",
				C: "stone_age:fish_bone"
			}
		],
		[
			"frostedheart:wool_pants", [
				"AAA",
				"ABA",
				"ACA"
			], {
				A: "#minecraft:wool",
				B: "stone_age:leather_strip",
				C: "stone_age:fish_bone"
			}
		],
		[
			"frostedheart:wool_boots", [
				"ABA",
				"ACA"
			], {
				A: "#minecraft:wool",
				B: "stone_age:leather_strip",
				C: "stone_age:fish_bone"
			}
		],
		[
			"frostedheart:hay_hat", [
				"AAA",
				"A A",
				"B B"
			], {
				A: "charcoal_pit:straw",
				B: "stone_age:grass_lead"
			}
		],
		[
			"frostedheart:hay_jacket", [
				"ABA",
				"ABA",
				"AAA"
			], {
				A: "charcoal_pit:straw",
				B: "stone_age:grass_lead"
			}
		],
		[
			"frostedheart:hay_pants", [
				"AAA",
				"ABA",
				"ABA"
			], {
				A: "charcoal_pit:straw",
				B: "stone_age:grass_lead"
			}
		],
		[
			"kubejs:clay_bucket", [
				"A A",
				"A A",
				" A "
			], {
				A: "minecraft:clay_ball"
			}
		],
		[
			"frostedheart:hay_boots", [
				"ABA",
				"ABA"
			], {
				A: "charcoal_pit:straw",
				B: "stone_age:grass_lead"
			}
		],
		[
			"frostedresearch:drawing_desk", [
				"BB ",
				"CAB",
				"AAB"
			], {
				A: "#minecraft:planks",
				B: "#minecraft:wooden_slabs",
				C: "#forge:plates/copper"
			}
		],
		[
			"frostedresearch:charcoal", [
				"A ",
				" A"
			], {
				A: "#forge:charcoal"
			}
		],
		[
			"comforts:sleeping_bag_brown", [
				"BBB",
				"ACA",
				"BBB"
			], {
				A: "stone_age:leather_strip",
				B: "#forge:leather",
				C: "frostedheart:straw_lining"
			}
		],
		[
			"charcoal_pit:clay_pot", [
				"AAA",
				"A A",
				"AAA"
			], {
				A: "minecraft:clay_ball"
			}
		],
		[
			"frostedheart:charcoal_stick", [
				"A"
			], {
				A: "kubejs:charcoal_briquette"
			}
		],
		[
			"frostedheart:bronze_hammer", [
				"AAC",
				" BA",
				"B A"
			], {
				A: "#forge:ingots/bronze",
				B: "#forge:rods/wooden",
				C: "stone_age:leather_strip"
			}
		],
		[
			"frostedheart:bronze_pickaxe", [
				"AAA",
				" B ",
				" B "
			], {
				A: "#forge:ingots/bronze",
				B: "#forge:rods/wooden"
			}
		],
		[
			"frostedheart:bronze_axe", [
				"AA",
				"AB",
				" B"
			], {
				A: "#forge:ingots/bronze",
				B: "#forge:rods/wooden"
			}
		],
		[
			"frostedheart:bronze_hoe", [
				"AA",
				" B",
				" B"
			], {
				A: "#forge:ingots/bronze",
				B: "#forge:rods/wooden"
			}
		],
		[
			"frostedheart:bronze_sword", [
				"A",
				"A",
				"B"
			], {
				A: "#forge:ingots/bronze",
				B: "#forge:rods/wooden"
			}
		],
		[
			"frostedheart:bronze_shovel", [
				"A",
				"B",
				"B"
			], {
				A: "#forge:ingots/bronze",
				B: "#forge:rods/wooden"
			}
		],
		[
			"frostedheart:bronze_knife", [
				" A",
				"B "
			], {
				A: "#forge:ingots/bronze",
				B: "#forge:rods/wooden"
			}
		],
		[
			"minecraft:iron_pickaxe", [
			"AAA",
			" B ",
			" B "
		], {
			A: "#forge:ingots/iron",
			B: "#forge:rods/wooden"
		}
		],
		[
			"minecraft:iron_axe", [
			"AA",
			"AB",
			" B"
		], {
			A: "#forge:ingots/iron",
			B: "#forge:rods/wooden"
		}
		],
		[
			"minecraft:iron_hoe", [
			"AA",
			" B",
			" B"
		], {
			A: "#forge:ingots/iron",
			B: "#forge:rods/wooden"
		}
		],
		[
			"minecraft:iron_sword", [
			"A",
			"A",
			"B"
		], {
			A: "#forge:ingots/iron",
			B: "#forge:rods/wooden"
		}
		],
		[
			"minecraft:iron_shovel", [
			"A",
			"B",
			"B"
		], {
			A: "#forge:ingots/iron",
			B: "#forge:rods/wooden"
		}
		],
		[
			"caupona:clay_cistern", [
				"CCC",
				"CSC",
				"CCC"
			], {
				C: "#forge:clay",
				S: "#forge:rods/wooden"
			}
		],
		[
			"charcoal_pit:main_bloomery", [
				"ABA",
				"BCB",
				"ABA"
			], {
				A: "frostedheart:mortar",
				B: "#forge:plates/bronze",
				C: "charcoal_pit:sandy_brick"
			}
		],
		[
			"charcoal_pit:sandy_tuyere", [
				"BAB",
				"ACA",
				"BAB"
			], {
				A: "frostedheart:mortar",
				B: "charcoal_pit:sandy_brick_item",
				C: "#forge:plates/bronze"
			}
		],
		[
			"charcoal_pit:unfired_sandy_brick", 4, [
				"ABA",
				"BAB",
				"ABA"
			], {
				A: "minecraft:sand",
				B: "minecraft:clay_ball"
			}
		],
		[
			"charcoal_pit:barrel", [
				"AAA",
				"A A",
				"AAA"
			], {
				A: "#minecraft:wooden_slabs"
			}
		],
		[
			"charcoal_pit:coal_pile", [
				"AAA",
				"ABA",
				"AAA"
			], {
				A: "minecraft:coal",
				B: "#forge:dusts/ash"
			}
		],
		[
			"minecraft:lead", [
				"AA ",
				"A A",
				" AA"
			], {
				A: "stone_age:leather_strip"
			}
		],
		[
			"minecraft:bucket", [
				"A A",
				" A "
			], {
				A: "#twr:plates/structural"
			}
		],
		[
			"minecraft:iron_door", [
				"AA ",
				"AA ",
				"AA "
			], {
				A: "#twr:plates/structural"
			}
		],
		[
			"minecraft:flint_and_steel", [
				"A ",
				" B",
			], {
				A: "#forge:rods/cast_iron",
				B: "minecraft:flint"
			}
		],
		[
			"minecraft:flint_and_steel", [
			"A ",
			" B",
		], {
			A: "#forge:rods/steel",
			B: "minecraft:flint"
		}
		],
		[
			"minecraft:anvil", [
				"BBB",
				" A ",
				"AAA"
			], {
				A: "#twr:ingots/hard",
				B: "#twr:storage_blocks/hard"
			}
		],
		[
			"minecraft:hopper", [
			"A A",
			"ABA",
			" A "
			], {
				A: "#twr:ingots/structural",
				B: "#forge:chests"
			}
		],
		[
			"storagedrawers:iron_storage_upgrade", [
			"AAA",
			"CBC",
			"AAA"
		], {
			A: "#forge:rods/wooden",
			B: "storagedrawers:upgrade_template",
			C: "#forge:storage_blocks/iron"
		}
		],
		[
			"minecraft:cauldron", [
			"A A",
			"A A",
			"AAA"
		], {
			A: "#twr:ingots/structural"
		}
		],
		[
			"minecraft:compass", [
			" A ",
			"ABA",
			" C "
		], {
			A: "#twr:ingots/structural",
			B: "minecraft:redstone",
			C: "#twr:rods/magnetic"
		}
		],
		[
			"immersiveengineering:coil_lv", [
			"AAA",
			"ABA",
			"AAA"
		], {
			A: "immersiveengineering:wirecoil_copper",
			B: "#forge:rods/cast_iron"
		}
		],
		[
			"create:mechanical_press", [
			" A ",
			"BPB",
			"CCC"
		], {
			A: "create:andesite_casing",
			B: "create:shaft",
			C: "#twr:storage_blocks/hard",
			P: "minecraft:piston"
		}
		],
		[
			"supplementaries:lunch_basket", [
			"B B",
			"AAA",
			"BBB"
		], {
			A: "stone_age:grass_mesh",
			B: "#forge:rods/treated_wood"
		}
		],
	]
	addShapedRecipes.forEach((recipe, index) => {
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
		/*if (output==null)
		{
		console.log(keys)
		console.log(pattern)
		console.log(output)
		}*/
		// Add new Recipes
		kubejs.shaped(output, pattern, keys)
			.id(`the_winter_rescue:minecraft/crafting_shaped/new/${index}`)
	})
})