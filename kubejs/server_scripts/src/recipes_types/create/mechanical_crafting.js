ServerEvents.recipes((event) => {
    let {create} = event.recipes

    let recipes = [
        shapedRecipe("steampowered:alternator", [
            "BBEBB",
            "FFACD",
            "BBEBB"
        ], {
            A: "#forge:sheetmetals/steel",
            B: "#forge:plates/cast_iron",
            C: "steampowered:cast_iron_cogwheel",
            D: "steampowered:cast_iron_large_cogwheel",
            E: "immersiveengineering:coil_lv",
            F: "immersiveengineering:wirecoil_copper"
        }),
        shapedRecipe("steampowered:bronze_flywheel", [
            " DDD ",
            "DACAD",
            "DCBCD",
            "DACAD",
            " DDD "
        ], {
            A: "steampowered:bronze_cogwheel",
            B: "steampowered:bronze_large_cogwheel",
            C: "create:shaft",
            D: "#forge:plates/bronze"
        }),
        shapedRecipe("steampowered:bronze_steam_engine", [
            "DCEDD",
            "CCABF",
            "DCEDD"
        ], {
            A: "steampowered:bronze_cogwheel",
            B: "steampowered:bronze_large_cogwheel",
            C: "create:fluid_pipe",
            D: "#forge:plates/bronze",
            E: "create:propeller",
            F: "create:shaft"
        }),
        shapedRecipe("steampowered:cast_iron_flywheel", [
            " DDD ",
            "DACAD",
            "DCBCD",
            "DACAD",
            " DDD "
        ], {
            A: "steampowered:cast_iron_cogwheel",
            B: "steampowered:cast_iron_large_cogwheel",
            C: "create:shaft",
            D: "#forge:plates/cast_iron"
        }),
        shapedRecipe("steampowered:cast_iron_steam_engine", [
            "DCEDD",
            "CCABF",
            "DCEDD"
        ], {
            A: "steampowered:cast_iron_cogwheel",
            B: "steampowered:cast_iron_large_cogwheel",
            C: "create:fluid_pipe",
            D: "#forge:plates/cast_iron",
            E: "create:propeller",
            F: "create:shaft"
        }),
        shapedRecipe("frostedresearch:mechanical_calculator", [
            "GHHHG",
            "ABABA",
            "BDDDB",
            "PIAAA",
            "PDDDD"
        ], {
            A: "steampowered:cast_iron_cogwheel",
            B: "create:shaft",
            D: "create:precision_mechanism",
            G: "#forge:plates/cast_iron",
            H: "#forge:treated_wood",
            I: "minecraft:bell",
            P: "minecraft:piston"
        }),
        shapedRecipe("steampowered:steel_flywheel", [
            " DDD ",
            "DACAD",
            "DCBCD",
            "DACAD",
            " DDD "
        ], {
            A: "steampowered:steel_cogwheel",
            B: "steampowered:steel_large_cogwheel",
            C: "create:shaft",
            D: "#forge:plates/steel"
        }),
        shapedRecipe("steampowered:steel_steam_engine", [
            "DCEDD",
            "CCABF",
            "DCEDD"
        ], {
            A: "steampowered:steel_cogwheel",
            B: "steampowered:steel_large_cogwheel",
            C: "create:fluid_pipe",
            D: "#forge:plates/steel",
            E: "create:propeller",
            F: "create:shaft"
        }),
        shapedRecipe("create:blaze_burner", [
            "EC CE",
            "EBDBE",
            "EBBBE",
            "AAAAA"
        ], {
            A: "frostedheart:cast_iron_sheet",
            B: "#forge:plates/constantan",
            C: "#forge:plates/bronze",
            D: "minecraft:lava_bucket",
            E: "#forge:ingots/cast_iron"
        }),
        shapedRecipe("immersiveindustry:electrolyzer", [
            "FFEFF",
            "ABCBA",
            "AAAAA",
            "ACBCA",
            "FFDFF"
        ], {
            A: "#forge:plates/steel",
            B: "#forge:ingots/silver",
            C: "#forge:ingots/gold",
            D: "immersiveengineering:wirecoil_copper",
            E: "immersiveengineering:circuit_board",
            F: "#forge:ingots/steel"
        })
    ]
    recipes.forEach((recipe) => {
        event.remove({output: recipe.result, type: "create:mechanical_crafting"});
        create.mechanical_crafting(recipe)
    })

    let workbench_recipes = [
        shapedRecipe("create:rotation_speed_controller", [
            "AEDEA",
            "CDBDC",
            "AEDEA"
        ], {
            A: "create:brass_sheet",
            B: "create:brass_casing",
            C: "create:shaft",
            D: "#the_winter_rescue:cogwheels",
            E: "create:electron_tube"
        })
    ]
    workbench_recipes.forEach((recipe) => {
        event.remove({output: recipe.result, type: "minecraft:crafting_shaped"});
        create.mechanical_crafting(recipe)
    })
})