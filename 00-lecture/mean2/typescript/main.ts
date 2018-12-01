const myStr: string = 'some string';
// myStr = 'another string';
const array1: ( boolean | string | number) [] = ['cat', 'dog', 'horse'];

const array2: Array<boolStrNum> = ['cat', 'dog', 'horse'];
const array3: boolStrNum[] = ['cat', 'dog', 'horse'];

array3.push(234);
array3.push(true);

type boolStrNum = boolean | string | number;

const first = <string>array3[0];
const second = array3[0] as string;

function isString(value: any): value is string {
  return typeof value === 'string';
}

if (isString(first)) {
}

interface IUser {
  firstName: string;
  lastName: string;
  email?: string;
}

const u: IUser = {
  firstName: 'Jeremy',
  lastName: 'Wilson'
};

u.email = 'email'

// u.lastName = ''

// function User(firstName, email) {
//   this.firstName = firstName;
//   this.email = email;
// }

class User {
  constructor(public firstName: string, public lastName: string, public email: string) {
  }
  protected sayHello(name: string): string {
    console.log(`Hello ${name} from ${this.firstName}`);
    return 'string';
  }
}

const user = new User('Jeremy', 'Wilson', 'jeremybwilson@gmail.com')
// const user1 = new User('Jeremy', 'Wilson', 'jeremybwilson@gmail.com')
// const user2 = new User('Bob', 'Dobalina', 'bob@bob.com');

// user.sayHello('Sally');  // => cannot be accessed outside of User class because of protected keyword

class Person extends User {
  constructor(firstName: string, lastName: string, email: string, public age: number = 18) {
    super(firstName, lastName, email)

    this.sayHello('Bob');
  }
}

const person = new Person('Sally', 'Alley', 'sally@sally.com');

// person.sayHello // => sayHello method not available outside of Person or User class because of protected keyword
