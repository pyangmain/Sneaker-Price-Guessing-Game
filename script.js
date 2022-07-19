const startButton = document.getElementById('start-button')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('game started');
    console.log(sneakerArray[0].title);
    console.log(sneakerArray[0].lastSale + 35);
}

const sneakerArray = [{
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Jackie-Robinson.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649445192",
    title: "Nike Dunk Low Jackie Robinson",
    lastSale: 365,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Max-Penny-1-Social-Status-Black-Varsity-Roayal.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656705071",
    title: "Nike Air Max Penny 1 Social Status Recess Black",
    lastSale: 230,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Max-Penny-1-Social-Status-Photon-Dust.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656705065",
    title: "Nike Air Max Penny 1 Social Status Recess Photon Dust",
    lastSale: 240,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633027409",
    title: "Nike Dunk Low Retro White Black Panda (2021)",
    lastSale: 182,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-White-07_V2-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1631122839",
    title: "Nike Air Force 1 Low '07 White",
    lastSale: 128,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-White-Black-2021-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1611766850",
    title: "Nike Dunk Low White Black (2021) (W)",
    lastSale: 185,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1613360456",
    title: "Nike Dunk Low Retro White Black (GS)",
    lastSale: 153,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Chlorophyll-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653041272",
    title: "Nike Dunk Low Chlorophyll",
    lastSale: 211,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Valerian-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652712361",
    title: "Nike Dunk Low Valerian Blue",
    lastSale: 163,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Coconut-Milk-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651696484",
    title: "Nike Dunk Low Coconut Milk",
    lastSale: 170,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Black-White-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645037142",
    title: "Nike Dunk High Black White (2021)",
    lastSale: 143,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Judge-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656661997",
    title: "Nike Dunk Low Judge Grey",
    lastSale: 140,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Box-Logo-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606164536",
    title: "Nike Air Force 1 Low Supreme White",
    lastSale: 214,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Rose-Whisper-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650654997",
    title: "Nike Dunk Low Rose Whisper (W)",
    lastSale: 144,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-07-Black-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607050715",
    title: "Nike Air Force 1 Low '07 Black Black",
    lastSale: 111,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Black-White-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654800213",
    title: "Nike Dunk Low Black White (2022)",
    lastSale: 125,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Reverse-Panda-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657781952",
    title: "Nike Dunk Low Reverse Panda",
    lastSale: 124,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Team-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648821059",
    title: "Nike Dunk Low Team Red (2022)",
    lastSale: 138,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Los-Angeles-Dodgers-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657285119",
    title: "Nike SB Dunk Low Los Angeles Dodgers",
    lastSale: 217,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Racer-Blue-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654154937",
    title: "Nike Dunk Low Racer Blue White",
    lastSale: 155,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Jackie-Robinson-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651314154",
    title: "Nike Dunk Low Jackie Robinson (GS)",
    lastSale: 250,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Safari-Mix-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650480982",
    title: "Nike Dunk Low Safari Mix (W)",
    lastSale: 138,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-World-Champs-Black-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655494428",
    title: "Nike Dunk Low World Champs Black White",
    lastSale: 151,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Blazer-Mid-77-Vintage-White-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606325720",
    title: "Nike Blazer Mid 77 Vintage White Black",
    lastSale: 80,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Panda-2021-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638807175",
    title: "Nike Dunk High Panda (2021) (W)",
    lastSale: 146,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-PS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1624468188",
    title: "Nike Dunk Low Retro White Black (PS)",
    lastSale: 73,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-EMB-NBA-75th-Anniversary-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1635520438",
    title: "Nike Dunk Low EMB NBA 75th Anniversary Chicago",
    lastSale: 149,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Valour-Blue-Team-Maroon-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654859404",
    title: "Nike SB Dunk Low Philadelphia Phillies",
    lastSale: 217,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Humara-LX-Jacquemus-Beige-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657005041",
    title: "Nike Air Humara LX Jacquemus Light Bone Gold (W)",
    lastSale: 186,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Mid-Off-White-Black-Product-2.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655993157",
    title: "Nike Air Force 1 Mid Off-White Black",
    lastSale: 221,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Sun-Club-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656520314",
    title: "Nike Dunk Low Next Nature Sun Club Arctic Orange",
    lastSale: 127,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606325289",
    title: "Nike Air Force 1 Low Supreme Black",
    lastSale: 138,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Cortez-Union-Grain-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655966102",
    title: "Nike Cortez SP Union Sesame",
    lastSale: 172,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Next-Nature-White-Mint-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650654943",
    title: "Nike Dunk Low Next Nature White Mint (W)",
    lastSale: 129,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Court-Purple-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648131848",
    title: "Nike Dunk Low Championship Court Purple",
    lastSale: 165,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Two-Toned-Grey-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649690607",
    title: "Nike Dunk Low Two-Toned Grey (GS)",
    lastSale: 140,
    }]