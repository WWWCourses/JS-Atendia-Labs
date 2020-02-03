// масив от обекти представящи данни за различни марки бири:
const beers = [
    { name: "Ариана", color: "светло", prices: [1.3, 2, 2.4], town: "София" },
    { name: "Ариана", color: "тъмно", prices: [1.4, 2.2, 2.8], town: "София" },
    { name: "Каменица", color: "светло", prices: [1.5, 2.5, 3], town: "Пловдив" },
    { name: "Загорка", color: "светло", prices: [2, 3, 3.6], town: "Стара Загора" },
];
// console.log("The beers array: ", beers);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// изписване на имената и цвета на всички бири:
for (let i = 0, len = beers.length; i < len; i++) {
    const beer = beers[i];

    // console.log(`${beer.name} - ${beer.color}`);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ЗАДАЧА: намиране на най-евтината бира по 3-та цена:
// да се изпише в конзолата името и цената на най-евтината бира, като използваме за сравнението 3-тата цена в масива prices:
let minPrice = beers[0].prices[2];
let cheapestBeer = beers[0];

// ~~~~~~~~~~~~~~~~~~~~~~ //
// --> your code here <-- //
// ~~~~~~~~~~~~~~~~~~~~~~ //

// const beers = [
//     { name: "Ариана", color: "светло", prices: [1.3, 2, 2.4], town: "София" },
//     { name: "Ариана", color: "тъмно", prices: [1.4, 2.2, 2.8], town: "София" },
//     { name: "Каменица", color: "светло", prices: [1.5, 2.5, 3], town: "Пловдив" },
//     { name: "Загорка", color: "светло", prices: [2, 3, 3.6], town: "Стара Загора" },
// ];
const lowestPrice = function (array) {
    let beerPrices = [];

    for (var i = 0; i < array.length; i += 1) {
        const beer = array[i];
        beerPrices[i] = beer.prices[beer.prices.length - 1];
    }

    let minPrice = Math.min(...beerPrices),
        beerPosition = beerPrices.indexOf(minPrice),
        cheapestBeer = beers[beerPosition].name;

    console.log(`The cheapest beer is: ${cheapestBeer} and its price is: ${minPrice} EUR.`);
};

lowestPrice(beers);