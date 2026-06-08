# javascript and classes

## OOP  -> Pogmming Paradiagm

## Object
- collection of properties and methods
- Example : toLowerCase

## why use OOP

## parts of OOP
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
Abstraction
Encapsulation
Inheritance
Polymorphism

---

* **__Encapsulation:__** Bundles data and methods into a single class, hiding internal states to prevent unauthorized access.
* __**Abstraction: Hides**__ complex background implementation details and only exposes essential features to the user.
* **__Inheritance:__** Allows a new child class to adopt fields and methods from an existing parent class to reuse code.
* **__Polymorphism:__** Enables a single function, interface, or object to take on multiple forms depending on context.


---

In JavaScript, Object-Oriented Programming works slightly differently because JS uses prototypes under the hood, but it provides the exact same class syntax to make it easy to read.
Here is our Smartphone example written in modern JavaScript:

```js

// 1. ABSTRACTION & INHERITANCE: Creating a base blueprint

class Phone {
    constructor(brand) {
        this.brand = brand;
    }

    // Abstracted method: The user calls it, but doesn't see the inner network logic

    makeCall(number) {
        console.log(`Connecting to network... Dialing ${number}...`);
    }
}
// 3. INHERITANCE: SmartPhone inherits everything from Phone

class SmartPhone extends Phone {
    // 2. ENCAPSULATION: True private variables in JS start with a hash (#)
    #securityPin;
    #batteryLevel;

    constructor(brand, securityPin) {
        super(brand); // Calls the parent (Phone) constructor
        this.#securityPin = securityPin;
        this.#batteryLevel = 45; // Private variable
    }

    // Encapsulation: A secure, controlled way to check the battery
    getBatteryStatus() {
        return `Battery is at ${this.#batteryLevel}%`;
    }

    // 4. POLYMORPHISM: Overriding how the power button behaves for a SmartPhone

    pressPowerButton(hold = false) {
        if (hold) {
            return "Displaying: Shut down / Restart menu";
        } else {
            return "Screen locked. Always-on display activated.";
        }
    }
}
// 4. POLYMORPHISM: A different class using the exact same method name

class OldButtonPhone extends Phone {
    pressPowerButton(hold = false) {
        if (hold) {
            return "Phone turning off entirely.";
        } else {
            return "Nothing happens. (Old phones need a long press!)";
        }
    }
}
// --- TESTING THE CODE ---
const myPhone = new SmartPhone("Apple", 1234);
// 1. Abstraction in action
myPhone.makeCall("98765-43210"); 
// 2. Encapsulation in action// console.log(myPhone.#batteryLevel); // <-- This will throw a SyntaxError (Private field)
console.log(myPhone.getBatteryStatus()); // Securely accessed via public function
// 3 & 4. Polymorphism in action (Same method name, different behavior)const pixelPhone = new SmartPhone("Google", 5555);const nokia3310 = new OldButtonPhone("Nokia");

console.log(pixelPhone.pressPowerButton(false)); // Output: Screen locked...
console.log(nokia3310.pressPowerButton(false));  // Output: Nothing happens...

```

------------------------------
## Key JavaScript Nuances to Notice:

* The # Symbol: In JavaScript, variables prefixed with # (like #batteryLevel) are strictly private. They cannot be read or changed from outside the class.
* The extends Keyword: This is how JavaScript implements Inheritance.
* The super() Function: When a child class extends a parent class, it must call super() in the constructor to pass data up to the parent.


