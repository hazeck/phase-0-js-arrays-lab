// Write your code here
let products = ['Laptop', 'Phone', 'Headphones', 'Monitor']
console.log(products)

function logFirstProduct(details){
  details = products[0]
  console.log(details)
}
logFirstProduct('laptop')

function addProduct(product){
  products.push(product)
  console.log(products)
}
addProduct('Tablet')

function updatProduct() {
  products[1] = 'Smartphone'
  console.log(products)
}
updatProduct()
function deleteProduct() {
  products.pop()
  console.log(products)
}
deleteProduct()

console.log(products)
