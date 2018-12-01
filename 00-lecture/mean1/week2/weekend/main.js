function Person(name){
    this.name = name;

}
Person.prototype.sayHello = function(){
        console.log(`Hello, my name is ${ this.name }`);
}

const person = new Person('Person');
console.log(person);
person.sayHello();

function Parent(name){
    Person.call(this, name);
}

Parent.prototype = Object.create(Person.prototype);
Parent.prototype.constructor = Parent;

Parent.prototype.assignChores = function(child, chore){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if(chore.completed){
                resolve(chore.payment);
            } else {
                reject(new Error(chore.punishment));
            }
        }, random(2000));
    });
}

function random(arrrayOrNumber){
    return Math.floor(
        Math.random() * (Array.isArray(arrrayOrNumber) ? arrrayOrNumber.length : arrrayOrNumber)
    );
};

function randomPunishment(){
    const punishments = ['go to bed early', 'have birthday taken away', 'have no electronics, ever', 'be grounded'];
    return punishments [random(punishments)];
};

function randomChore() {
    const chores = ['dishes', 'mowing lawn', 'laundry', 'dusting'];
    return chores[random(chores)];
}

const parent = new Parent('Jeremy');
console.log(parent);
parent.sayHello();

function Chore(){
    this.task = randomChore();
    this.completed = false;
    this.payment = random(100);
    this.punishment = randomPunishment();
}

function Child(name){
    Person.call(this, name);
    this.savings = 0;
}

Child.prototype = Object.create(Person.prototype);
Child.prototype.constructor = Child;

Child.prototype.doChores = function(chore, promiseOfPaymentOrPunishment){
    chore.completed = random(100) > 50;

    promiseOfPaymentOrPunishment
        .then(payment =>  {
            // handle success
            console.log(`Child successfully copmleted ${ chore.task } and receives $${ payment }.`);

            this.savings += payment;

        })
        .catch(function(error){
            // handle error
            console.log(`Child failed to complete ${ chore.task } and must ${ error.message }.`);
        });
};

Child.prototype.seeSavings = function () {
    console.log(`child has $${ this.savings } saved.`);
}

const child = new Child('Never');

for(let index = 0; index < 4; index++){
    const chore = new Chore();
    child.doChores(chore, parent.assignChores(child, chore));
}

setTimeout(function () {
    child.seeSavings();
}, 2100);