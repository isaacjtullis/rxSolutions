let prices = require('./prices.json');
let pharmacies = require('./pharmacies.json');
let products = require('./products.json');

function mergeProductIntoPharmacies(productsWithPrices){
  productsWithPrices.prices.forEach(price =>{
    price.pharmacy_ids.forEach(pharmID =>{
      pharmacies.pharmacies.forEach(pharmacy =>{
        if(pharmID === pharmacy.id){
          pharmacy.products.push(productsWithPrices);
        }
      })
    })
  })
}

function mergePriceIntoProduct(){
  pharmacies.pharmacies.forEach(pharm=>{
    Object.assign(pharm, { products: [] });
  });
  
  prices.prices.forEach(price=>{
    products.products.forEach(product=>{
      if(product.id === price.product_id){
        let combinedProductsArray = Object.assign({}, product, { prices: [price] } )
        mergeProductIntoPharmacies(combinedProductsArray)
      }
    })
  })
}


mergePriceIntoProduct();
console.log(pharmacies);
