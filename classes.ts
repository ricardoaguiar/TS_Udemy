class Vehicle {
    // public drive(): void {
    //     console.log('rum rum');
    // }

    constructor( public color: string) {
        //adding the public keyword on the argument we eliminate the:
        // this.color = color;
    }

    protected honk(): void {
        console.log('beep beep');
    }
}

class Car extends Vehicle {
    constructor(public wheel: number, color: string) {
        super(color);
    }
    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }

    private drive(): void {
        console.log('vroom');
    }
}

const vehicle = new Vehicle('orange');
// vehicle.drive();
// vehicle.honk();
console.log(vehicle.color);


const car = new Car(4, 'red');

console.log(car.wheel, car.color)
// car.startDrivingProcess();
// car.honk();