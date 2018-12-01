var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myStr = 'some string';
// myStr = 'another string';
var array1 = ['cat', 'dog', 'horse'];
var array2 = ['cat', 'dog', 'horse'];
var array3 = ['cat', 'dog', 'horse'];
array3.push(234);
array3.push(true);
var first = array3[0];
var second = array3[0];
function isString(value) {
    return typeof value === 'string';
}
if (isString(first)) {
}
var u = {
    firstName: 'Jeremy',
    lastName: 'Wilson'
};
u.email = 'email';
// u.lastName = ''
// function User(firstName, email) {
//   this.firstName = firstName;
//   this.email = email;
// }
var User = /** @class */ (function () {
    function User(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    User.prototype.sayHello = function (name) {
        console.log("Hello " + name + " from " + this.firstName);
        return 'string';
    };
    return User;
}());
var user = new User('Jeremy', 'Wilson', 'jeremybwilson@gmail.com');
// const user1 = new User('Jeremy', 'Wilson', 'jeremybwilson@gmail.com')
// const user2 = new User('Bob', 'Dobalina', 'bob@bob.com');
// user.sayHello('Sally');  // => cannot be accessed outside of User class because of protected keyword
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(firstName, lastName, email, age) {
        if (age === void 0) { age = 18; }
        var _this = _super.call(this, firstName, lastName, email) || this;
        _this.age = age;
        _this.sayHello('Bob');
        return _this;
    }
    return Person;
}(User));
var person = new Person('Sally', 'Alley', 'sally@sally.com');
// person.sayHello // => sayHello method not available outside of Person or User class because of protected keyword
