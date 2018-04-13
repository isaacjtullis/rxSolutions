You have been given an array of pharmacy objects, an array of two product objects, and an array of price objects. Merge these arrays into one array of pharmacies with the nested products, with the array of prices nested in the product.

Given: 
- The `id` attribute in the product object can be mapped to the `product_id` in the price objects.
- The `id` attribute in a pharmacy object can be mapped to the `pharmacy_ids` array in the price objects.

The finished object should look like what was given in the final.json file, but for every pharmacy.

Use any library/framework you want, as long as you use JavaScript. You don’t have to create a UI, we are just interested in the final result and how you went about making it.