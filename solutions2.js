let prices = require('./prices.json');
let pharmacies = require('./pharmacies.json');
let products = require('./products.json');

function initPharmacies(){
  pharmacies.pharmacies.forEach(pharmacy=>{
    Object.assign(pharmacy, { products: [] });
  });
}

function mergePriceIntoProduct(){
  prices.prices.forEach(price=>{
    const product = products.products.find(product => product.id === price.product_id)
    const combinedProductsArray = Object.assign({}, product, { prices: [price] } )
    mergeProductIntoPharmacies(combinedProductsArray, price.pharmacy_ids)
  })
}

function mergeProductIntoPharmacies(productsWithPrices, pharmacy_ids){
  pharmacy_ids.forEach(pharmID =>{
    pharmacies.pharmacies.forEach(pharmacy=>{
      if(pharmID === pharmacy.id){
        const newProducts = [...pharmacy.products, productsWithPrices]
        Object.assign(pharmacy, {products: newProducts})
      }
    })
  })
}

initPharmacies();
mergePriceIntoProduct();
console.log(pharmacies);

// what is the fastest way to go about this? 
// How can I refactor this? 


// Pharmacies has many products 
// Products have one Pharmacies 

// Products have many prices 
// Price has one product 