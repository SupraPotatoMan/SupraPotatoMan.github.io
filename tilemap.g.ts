// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "ForestLevel":
            case "level1":return tiles.createTilemap(hex`32000800050405010504050501050405040405040105040401050404040105050110040405040410040105050d0e0e0e0e0e0e0e0f040505040405050104050d0e0e0e0e0f05050502070707070707070709050505100505010104040505020707070707070709010402070707070905010504040504050105020b0b0b0b0b0b0b0b0b0b0707070707070707070707070b0b0b0b0b0b0b0b0a0501030b0b0b0b0a040504040405040505020b0b0b080808080808080b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0a0505030b0b0b0b0b0709050105050105020b0b0b0c04040504040504060808080808080808080808080b0b0b0b0b0b0b0b0a0405030b0b0b0b0b0b0b0707070707070b0b0b0c040501010105040505040404051005040404010404030b0b0b0b0b0b0b0a0104030b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0c0405040101010405050401050401050404010410050106080808080808080c04040608080808080808080808080808080c04050405010101040504041005051001041005100110050d0e0e0e0e0e0e0e0f05`, img`
.............................2.....2....222222222.
.........222222................2..................
..................................................
..................................................
..................................................
................................2.................
.....................................2............
............................2..2..2.2.2.222222222.
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.tilePath9,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles4], TileScale.Sixteen);
            case "level":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
