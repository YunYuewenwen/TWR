ServerEvents.recipes((event) => {
    const recipes = [
        crucibleRecipe(["#forge:dusts/iron", "frostedheart:flux"], "frostedheart:steel_ingot", 1000, 1500)
    ]

    recipes.forEach((recipe) => {
        event.custom(recipe)
    })
})