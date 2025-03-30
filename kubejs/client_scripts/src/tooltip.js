ItemEvents.tooltip((event) => {
    function createItemTooltip(key) {
        return Text.of(Component.translate(`tooltip.the_winter_rescue.${key}`)).gray()
    }

    let addTooltip = [
        {
            items: ["minecraft:blast_furnace", "minecraft:furnace"],
            key: ["replaced_recipe"]
        },
        {
            items: ["minecraft:vine"],
            key: ["snowy_vine"]
        },
        {
            items: ["frostedheart:makeshift_knife"],
            key: ["flint_knife"]
        },
        {
            items: ["stone_age:flint_knife"],
            key: ["flint_knife_2"]
        },
        {
            items: ["stone_age:tanning_rack"],
            key: ["tanning_rack"]
        },
        {
            items: ["kubejs:activated_carbon"],
            key: ["activated_carbon"]
        },
        {
            items: ["minecraft:campfire"],
            key: ["campfire"]
        },
        {
            items: ["frostedheart:straw_lining", "frostedheart:kelp_lining", "frostedheart:gambeson", "frostedheart:buff_coat"],
            key: ["lining"]
        },
        {
            items: ["create:blaze_burner"],
            key: ["blaze_burner"]
        }
    ]
    addTooltip.forEach((recipe) => {
        event.add(recipe.items, recipe.key.map(createItemTooltip))
    })
})