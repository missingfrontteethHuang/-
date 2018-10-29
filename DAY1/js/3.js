/*
class Person {
    constructor(num1, num2) {
        console.log(num1, num2);
        this.xxx = 100;//=>实例私有的属性
    }

    //=>以下方法是写在Person.prototype上的(实例公有的属性和方法)
    say() {
        console.log(`i can say`);
    }

    //=>把当前类当做普通对象，设置一些跟类有关的属性和方法（和实例没有任何的关系）
    //=>Person.sum=function(){}
    static sum() {

    }
}
Person.privateProp = 100;
Person.prototype.publicProp = 200;


let p1 = new Person(10, 20);
console.log(p1.num1);//=>undefined
console.log(p1.xxx);//=>100
p1.say();
console.log(p1.sum);//=>undefined
console.log(Person.sum);//=>函数本身*/

/*
class Fn {
    constructor(a, b) {
        //=>a:100 b:200  this:p
        this.x = 100;
    }

    getX() {
        console.log(this.x);
    }
}

class Person extends Fn {
    constructor(...arg) {
        //=>this:p
        super(...arg);//=>super(100,200)
        this.y = 200;
    }

    getY() {
        console.log(this.y);
    }
}

let p = new Person(100, 200);
console.log(p.x, p.y);//=>100 200
*/

/*function Fn() {
    this.x = 100;
}

Fn.prototype.getX = function () {
    console.log(this.x);
};

function Person() {
    this.y = 200;
}

//=>原型继承：让子类的原型等于父类的实例
Person.prototype = new Fn();
/!*
 * new Fn()
 *   x:100
 *   __proto__:Fn.prototype
 *      getX:function...
 *!/

Person.prototype.getY = function () {
    console.log(this.y);
};
/!*Person.prototype
 *   x:100  （原型继承不足：会把父类实例私有的属性X放在子类原型上，成为子类实例公有的属性）
 *   getY:function...
 *   __proto__:Fn.prototype
 *      getX:function...
 *!/

let p = new Person();*/

/*function Fn() {
    //=>this:p
    this.x = 100;
}

Fn.prototype.getX = function () {
    console.log(this.x);
};

function Person() {
    Fn.call(this);//=>CALL继承：把父类当做普通函数执行，让父类中的this变为子类的实例p  =>p.x=100 把父类实例私有的变为子类实例私有的 （不足：只能处理私有的，父类原型上的方法没有做继承处理）
    this.y = 200;
}

Person.prototype.getY = function () {
    console.log(this.y);
};
let p = new Person();*/

function Fn() {
    this.x = 100;
}

Fn.prototype.getX = function () {
    console.log(this.x);
};

function Person() {
    Fn.call(this);//=>this.x=100
    this.y = 200;
}

// Person.prototype = Fn.prototype;
// Person.prototype.getY = function () {
//     console.log(this.y);
// };//=>可以实现但是不好：子类和父类公用同一个原型，虽然可以实现子类实例的调取使用，但是子类向原型上增加东西，会导致父类的原型也改变了，从而影响其它父类的实例

// Person.prototype = {__proto__: Fn.prototype};//=>如果有一个类似于这样的空对象：即能保证p找到父类原型上的方法，而且以后子类加入东西和父类的原型还没有关系
Person.prototype = Object.create(Fn.prototype);
Person.prototype.getY = function () {
    console.log(this.y);
};
let p = new Person();

