class vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari cole na cole na cole na re')
    }
}

class Bus extends vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price)
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

}

class Truck extends vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}