// how to you data access
const data = [{id:1, name:'abul', address: 'kochu khet'}];

console.log(data[0].address);

const products  = {
    count: 5000,
    data: [
        { id:1, name: 'lenevo laptop', price: 65000},
        { id:1, name: 'mackbook', price: 165000},
    ]
}

// second product price
console.log(products.data[1].price);

const user = {
    id: 5001,
    name: 'Raj',
    address: {
        street:{
            first: '54/1 uttora side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}

const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'Bangladesh'
    }
}

console.log(user.address.street.second);

// when you use ? trace then it's called chain
console.log(user.address.street?.second);