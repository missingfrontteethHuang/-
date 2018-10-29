let inputList = document.getElementsByTagName('input');

// for (var i = 0, len = inputList.length; i < len; i++) {
//     inputList[i].onclick = function () {
//         console.log(i);
//     }
// }
//=>为啥不行?
// 事件绑定是异步编程，在绑定点击事件的时候并没有执行绑定的函数，当点击行为触发，绑定的函数执行，此时函数中遇到的变量I是全局变量（FOR循环中定义的那个变量）,已经都变为5了

// for (let i = 0, len = inputList.length; i < len; i++) {
//     inputList[i].onclick = function () {
//         console.log(i);
//     }
// }
//=>let会形成块级作用域，每一次循环都会把相关i的值保存在自己的块级作用域中；以后点击行为触发，方法执行的时候，遇到变量I，会到相关的块级作用域中进行查找

// for (var i = 0, len = inputList.length; i < len; i++) {
//     (function (i) {
//         inputList[i].onclick = function () {
//             console.log(i);
//         }
//     })(i);
// }
//=>自己包一层作用域（原理和LET一样），这样会导致，循环几次就创建了几个闭包，性能上不是特别的理想（闭包弊端：过多使用闭包会消耗内存，可能会导致内存泄漏等问题）

for (var i = 0, len = inputList.length; i < len; i++) {
    inputList[i].index = i;
    inputList[i].onclick = function () {
        console.log(this.index);
    }
}