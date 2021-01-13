const initState = {
    merches: [
        {
            id: "1",
            name: "Casio Wristwatches",
            image: "https://images.asos-media.com/products/casio-wonderwoman-collab-digital-watch-in-gold/22120728-1-gold?$n_320w$&wid=317&fit=constrain"
        },
        {
            id: "2",
            name: "IvyPark x Addidas",
            image: "https://images.asos-media.com/products/adidas-x-ivy-park-straight-leg-jumpsuit-in-black/21282256-1-black?$n_320w$&wid=317&fit=constrain"
        },
        {
            id: "3",
            name: "Sneakers and Trainers",
            image: "https://images.asos-media.com/products/asos-design-distant-chunky-trainers-in-white/22021715-1-white?$n_320w$&wid=317&fit=constrain"
        },
        {
            id: "4",
            name: "Bags",
            image: "https://images.asos-media.com/products/nike-velvet-box-bag-in-black/20578358-1-black?$n_320w$&wid=317&fit=constrain"
        }
    ],

    watches: [
        {
            id: "1",
            name: "Casio Gunmetal Vintage inspired bracelet watch",
            price: "$55.00",
            image: "https://wrixtyz.netlify.app/img/casio1.jpg",
            category: "watches",
            colour: "silver"
        },
        {
            id: "2",
            name: "Casio F-91W-1XY classic digital watch",
            price: "$20.00",
            image: "https://wrixtyz.netlify.app/img/casio2.jpg",
            category: "watches",
            colour: "black"
        },
        {
            id: "3",
            name: "Casio A163WA-1QES digital bracelet watch in silver",
            price: "$33.00",
            image: "https://wrixtyz.netlify.app/img/casio3.jpg",
            category: "watches",
            colour: "silver"
        },
        {
            id: "4",
            name: "Casio LA670WEA-7EF silver mini digital watch",
            price: "$30.00",
            image: "https://wrixtyz.netlify.app/img/casio4.jpg",
            category: "watches",
            colour: "silver"
        },
        {
            id: "5",
            name: "Casio A159WGEA-1EF gold digital watch",
            price: "$60.00",
            image: "https://wrixtyz.netlify.app/img/casio5.jpg",
            category: "watches",
            colour: "gold"
        },
        {
            id: "6",
            name: "Casio LA680WEGA-1BER mini digital gold dial watch",
            price: "$25.00",
            image: "https://wrixtyz.netlify.app/img/casio6.jpg",
            category: "watches",
            colour: "gold"
        },
        {
            id: "7",
            name: "Casio LQ 400D 7AEF vintage style watch",
            price: "$33.00",
            image: "https://wrixtyz.netlify.app/img/casio7.jpg",
            category: "watches",
            colour: "silver"
        },
        {
            id: "8",
            name: "Casio G-shock DW-5600DN-7 digital watch in white",
            price: "$100.00",
            image: "https://wrixtyz.netlify.app/img/casio8.jpg",
            category: "watches",
            colour: "white"
        },
        {
            id: "9",
            name: "Casio F-91WS-8EF digital watch in grey",
            price: "$30.00",
            image: "https://wrixtyz.netlify.app/img/casio9.jpg",
            category: "watches",
            colour: "grey"
        },
        {
            id: "10",
            name: "Casio Baby G BA-110TM-1A resin watch in black",
            price: "$109.00",
            image: "https://wrixtyz.netlify.app/img/casio10.jpg",
            category: "watches",
            colour: "black"
        },
        {
            id: "11",
            name: "Casio digital leather watch in cream",
            price: "$49.00",
            image: "https://wrixtyz.netlify.app/img/casio11.jpg",
            category: "watches",
            colour: "cream"
        },
        {
            id: "12",
            name: "Casio G Shock digital watch in pink GMD-8800",
            price: "$99.00",
            image: "https://wrixtyz.netlify.app/img/casio12.jpg",
            category: "watches",
            colour: "pink"
        }
    ],
    
    ivys: [
        {
            id: "1",
            name: "adidas x IVY PARK bum bag in black with multi pockets",
            price: "$69.95",
            image: "https://images.asos-media.com/products/adidas-x-ivy-park-bum-bag-in-black-with-multi-pockets/21282282-1-black?$n_320w$&wid=317&fit=constrain",
            category: "addidas x ivy park",
            colour: "black and brown"
        },
        {
            id: "2",
            name: "adidas x IVY PARK Plus blazer in black",
            price: "$139.95",
            image: "https://images.asos-media.com/products/adidas-x-ivy-park-plus-blazer-in-black/21063741-1-black?$n_320w$&wid=317&fit=constrain",
            category: "addidas x ivy park",
            colour: "black and brown"
        },
        {
            id: "3",
            name: "Cadidas x IVY PARK Plus blazer in black",
            price: "$139.95",
            image: "https://images.asos-media.com/products/adidas-x-ivy-park-blazer-in-black/21278476-1-black?$n_320w$&wid=317&fit=constrain",
            category: "addidas x ivy park",
            colour: "black and brown"
        },
        {
            id: "4",
            name: "adidas x IVY PARK sheer 3 pack crew socks in yellow tint/ messa/ black",
            price: "$24.95",
            image: "https://images.asos-media.com/products/adidas-x-ivy-park-sheer-3-pack-crew-socks-in-yellow-tint-messa-black/21282003-1-multi?$n_320w$&wid=317&fit=constrain",
            category: "addidas x ivy park",
            colour: "black and brown"
        },
        {
            id: "5",
            name: "adidas x IVY PARK knitted mini skirt in black",
            price: "$69.95",
            image: "https://images.asos-media.com/products/adidas-x-ivy-park-knitted-mini-skirt-in-black/21282280-1-black?$n_240w$&wid=238&fit=constrain",
            category: "addidas x ivy park",
            colour: "black and brown"
        },
        {
            id: "6",
            name: "adidas x IVY PARK shorts in black with pocket detail",
            price: "54.95",
            image: "https://images.asos-media.com/products/adidas-x-ivy-park-shorts-in-black-with-pocket-detail/21278234-1-black?$n_240w$&wid=238&fit=constrain//wrixty.netlify.app/img/casio6.jpg",
            category: "addidas x ivy park",
            colour: "black and brown"
        },
        {
            id: "7",
            name: "adidas x IVY PARK cargo trousers in black",
            price: "$84.95",
            image: "https://images.asos-media.com/products/adidas-x-ivy-park-cargo-trousers-in-black/21282636-1-black?$n_240w$&wid=238&fit=constrain",
            category: "addidas x ivy park",
            colour: "black and brown"
        },
        {
            id: "8",
            name: "adidas x IVY PARK track jacket in black with popper detail",
            price: "$99.95",
            image: "https://images.asos-media.com/products/adidas-x-ivy-park-track-jacket-in-black-with-popper-detail/21282272-1-black?$n_240w$&wid=238&fit=constrains",
            category: "addidas x ivy park",
            colour: "black and brown"
        },
        {
            id: "9",
            name: "adidas x IVY PARK track pants in messa with popper detail",
            price: "$84.95",
            image: "https://images.asos-media.com/products/adidas-x-ivy-park-track-pants-in-messa-with-popper-detail/21282259-1-brown?$n_240w$&wid=238&fit=constrain",
            category: "addidas x ivy park",
            colour: "brown"
        },
        {
            id: "10",
            name: "adidas x IVY PARK knitted body in black",
            price: "$54.00",
            image: "https://images.asos-media.com/products/adidas-x-ivy-park-knitted-body-in-black/21278472-1-black?$n_240w$&wid=238&fit=constrain",
            category: "addidas x ivy park",
            colour: "black and brown"
        },
        {
            id: "11",
            name: "adidas x IVY PARK long sleeve body suit in maroon",
            price: "$41.00",
            image: "https://images.asos-media.com/products/adidas-x-ivy-park-long-sleeve-body-suit-in-maroon/14467179-1-maroon?$n_240w$&wid=238&fit=constrain",
            category: "addidas x ivy park",
            colour: "maroon"
        },
        {
            id: "12",
            name: "adidas x IVY PARK sweatshirt in maroon",
            price: "$47.00",
            image: "https://images.asos-media.com/products/adidas-x-ivy-park-sweatshirt-in-maroon/14465723-1-maroon?$n_240w$&wid=238&fit=constrain",
            category: "addidas x ivy park",
            colour: "black and brown"
        }
    ]
        
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer