yobject
=======

IO-style prototypical inheritance in JavaScript

The idea is to be able to inherit by cloning, like so:

    var Car = Yobject.clone("Car");
    Car.wheels = 4;

    var ferrari = Car.clone();
    ferrari.color = "red";
    console.log(ferrari.wheels); //prints 4
