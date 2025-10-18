ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:saddle', 1),
        [
            ' A ',
            'ABA',
            '   '
        ],
        {
            A:"minecraft:leather",
            B:"minecraft:iron_ingot"
        }
    );

    event.recipes.create.pressing('magistuarmory:steel_plate', '#forge:ingots/steel')
})