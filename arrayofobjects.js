const products = [
    {id: 1, name: 'lenevo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'lhp', price: 40000},
    {id: 4, name: 'mac', price: 155000},
]

// map total take
const names = products.map(product => product.name)
// console.log(names)

// forEach
products.forEach(p => console.log(p.id))

// filter only match
const expensive = products.filter(p => p.price > 50000)
// console.log(expensive)

// find only one take
const affordable = products.find(p => p.price < 50000)
console.log(affordable)

//  reduce total take
const total = products.reduce((acum, current) => acum + current.price, 0)
console.log(total)
