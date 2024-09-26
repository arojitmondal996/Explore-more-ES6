const products = [
    {id: 1, name: 'lenevo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'lhp', price: 40000},
    {id: 4, name: 'mac', price: 155000},
]

//  has some properties , method
class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about${talk}`)
    }
}

const lenevo = new Product(' Le Le lenevo')
// console.log(lenevo)
// lenevo.speak('oba kita kau')

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}
const tapan = new Teacher('Tapon sir', ' Bangla')
console.log(tapan)