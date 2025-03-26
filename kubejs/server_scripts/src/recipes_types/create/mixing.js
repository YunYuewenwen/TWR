ServerEvents.recipes((event) => {
    let {create} = event.recipes
    let recipes = [
        {
            output: ["3x frostedheart:fire_clay_ball"],
            input: ["4x frostedheart:kaolin_dust", "4x frostedheart:bauxite_dust", "minecraft:clay_ball"]
        },
        {
            output: [Fluid.of("frostedheart:cryolite", 500)],
            input: ["2x frostedheart:cryolite_dust", "frostedheart:aluminium_hydroxide_dust", Fluid.of("frostedheart:sulfuric_acid", 500)]
        },
        {
            output: ["3x frostedheart:vulcanized_rubber"],
            input: ["immersiveengineering:dust_sulfur", Fluid.of("frostedheart:latex", 500)]
        },
        {
            output: ["3x frostedheart:vulcanized_rubber"],
            input: [Fluid.of("frostedheart:sulfur_dioxide", 125), Fluid.of("frostedheart:latex", 500)]
        },
        {
            output: [Fluid.of("frostedheart:lime_water", 1000)],
            input: ["frostedheart:quicklime", Fluid.of("minecraft:water", 1000)]
        },
        {
            output: ["kubejs:limed_coal"],
            input: ["kubejs:coal_dust", Fluid.of("frostedheart:lime_water", 100)]
        },
        {
            output: ["frostedheart:raw_rye_bread"],
            input: ["2x frostedheart:rye_flour", Fluid.of("minecraft:water", 1000)]
        },
        {
            output: ["minecraft:slime_ball"],
            input: ["create:dough", "minecraft:lime_dye"]
        },
        {
            output: ["stone_age:raw_bread"],
            input: ["create:dough", "minecraft:sugar"]
        },
        {
            output: ["kubejs:bounded_graphite"],
            input: ["4x #forge:dusts/hop_graphite", Fluid.of("frostedheart:tar", 1000)]
        },
        {
            output: [Fluid.of("minecraft:milk", 1000)],
            input: [Fluid.of("frostedheart:protein", 500), Fluid.of("minecraft:water", 500), "minecraft:sugar"]
        },
        {
            output: [Fluid.of("frostedheart:ferrous_chloride", 375)],
            input: [Fluid.of("frostedheart:hydrochloric_acid", 750), "create:crushed_raw_iron"]
        },
        {
            output: [Fluid.of("frostedheart:ferrous_chloride", 250), "immersiveengineering:slag"],
            input: [Fluid.of("frostedheart:hydrochloric_acid", 500), "frostedheart:iron_slag"]
        },
        {
            output: [Fluid.of("frostedheart:ferric_chloride", 500)],
            input: [Fluid.of("frostedheart:ferrous_chloride", 500), "#forge:dusts/iron"]
        },
        {
            output: [Fluid.of("frostedheart:ferrous_chloride", 250)],
            input: [Fluid.of("frostedheart:hydrochloric_acid", 500), "frostedheart:rusted_iron_ingot"]
        },
        {
            output: [Fluid.of("frostedheart:copper_chloride", 375)],
            input: [Fluid.of("frostedheart:hydrochloric_acid", 750), "frostedheart:copper_oxide_dust"]
        },
        {
            output: [Fluid.of("frostedheart:zinc_sulfate", 375)],
            input: [Fluid.of("frostedheart:sulfuric_acid", 750), "frostedheart:zinc_oxide_dust"]
        },
        {
            output: [Fluid.of("frostedheart:copper_chloride", 300)],
            input: [Fluid.of("frostedheart:hydrochloric_acid", 600), "create:crushed_raw_copper"]
        },
        {
            output: [Fluid.of("minecraft:milk", 1000)],
            input: [Fluid.of("frostedheart:protein", 500), Fluid.of("minecraft:water", 500), "minecraft:sugar"]
        },
        {
            output: ["8x immersiveengineering:treated_wood_horizontal"],
            input: ["8x #minecraft:planks", Fluid.of("immersiveengineering:creosote", 1000)]
        },
        {
            output: ["frostedheart:pulp"],
            input: ["4x #forge:dusts/wood", "#forge:clay_balls", Fluid.of("minecraft:water", 1000)]
        },
        {
            output: ["frostedheart:sodium_sulfide_dust"],
            input: ["frostedheart:sodium_ingot", "#forge:dusts/sulfur"]
        },
        {
            output: ["4x frostedheart:pulp"],
            input: ["6x #forge:dusts/wood", "frostedheart:sodium_sulfide_dust", "frostedheart:sodium_hydroxide_dust", Fluid.of("minecraft:water", 1000)]
        }

    ]
    let heated = [
        {
            output: ["2x frostedheart:high_refractory_brick"],
                input: ["4x frostedheart:fire_clay_ball", "2x frostedheart:magnesium_dust", "2x frostedheart:quicklime"]
        },
        {
            output: [Fluid.of("frostedheart:sulfuric_acid", 500)],
            input: ["2x #forge:dusts/sulfur", Fluid.of("minecraft:water", 500)]
        },
        {
            output: [Fluid.of("frostedheart:sulfuric_acid", 500)],
            input: [Fluid.of("frostedheart:sulfur_dioxide", 250), Fluid.of("minecraft:water", 500)]
        },
        {
            output: ["frostedheart:aluminium_hydroxide_dust"],
            input: ["frostedheart:sodium_hydroxide_dust", "2x frostedheart:crushed_raw_bauxite"]
        },
        {
            output: [Fluid.of("caupona:nail_soup", 1000)],
            input: ["kubejs:activated_carbon", Fluid.of("minecraft:water", 1000)]
        },
        {
            output: [Fluid.of("frostedheart:magnesium_chloride", 250)],
            input: ["frostedheart:magnesia_dust", Fluid.of("frostedheart:hydrochloric_acid", 500)]
        },
        {
            output: [Fluid.of("frostedheart:hydrochloric_acid", 1000)],
            input: [Fluid.of("minecraft:water", 1000), Fluid.of("frostedheart:chlorine", 500)]
        },
        {
            output: ["3x immersiveindustry:refractory_kiln_brick"],
            input: ["3x frostedheart:fire_clay_ball", "5x frostedheart:alumina_dust", "immersiveengineering:dust_hop_graphite"]
        },
        {
            output: [Fluid.of("frostedheart:latex", 10)],
            input: ["minecraft:dandelion"]
        },
        {
            output: ["2x frostedheart:high_refractory_brick"],
            inpit: ["4x frostedheart:fire_clay_ball", "frostedheart:magnesia_dust", "#forge:dusts/quicklime"]
        }
    ]
    recipes.forEach((recipe, index) => {
        create.mixing(recipe.output, recipe.input)
            .id(`the_winter_rescue:create/mixing/none/${index}`)
    })
    heated.forEach((recipe, index) => {
        create.mixing(recipe.output, recipe.input)
            .id(`the_winter_rescue:create/mixing/heated/${index}`)
            .heated()
    })
})