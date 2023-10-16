
let wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
]
  
let presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
]
    
function guessGifts(list, gifts) {
    let match = []
      gifts.forEach((p) => {
        list.forEach((w) => {
          if (p.size === w.size && p.clatters === w.clatters && p.weight === w.weight && match.indexOf(w.name) === -1){
            match.push(w.name)
          }
        });
      });
    return match
}

// must return ["Toy Car", "Mini Puzzle"]
console.log(guessGifts(wishlist, presents))