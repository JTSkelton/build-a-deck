$(document).ready(function(){

  const numbers = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];
  const arrayCardSuits = ["hearts", "spades", "diamonds", "clubs"];

    arrayCardSuits.forEach(function(suit) {
      numbers.forEach(function(number) {
        const name = "<li>" + number + " Of " + suit + "</li>";
        $(".deck ul").append(name);
        // document.write(name);
      })

    
    });
});