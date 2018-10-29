// setTimeout(() => {
//     console.log('1');
// }, 20);
//
// setImmediate(() => {
//     console.log('2');
// });
//
// setTimeout(() => {
//     console.log('3');
// }, 10);
//
// process.nextTick(() => {
//     console.log(5);
// });
//
// console.time('computed');
// for (let i = 0; i < 100000000; i++) {
//
// }
// console.timeEnd('computed');
// console.log('4');

// async function fn() {
//     return 1;
// }
//
// let result = fn();
// result.then((num) => {
//     console.log(num);
// });

/*
 * 状态：
 *   Pending 准备状态
 *   Fulfilled => PROMISE中的异步操作处理成功
 *   Rejected => PROMISE中的异步操作处理失败
 */
// new Promise((resolve, reject) => {
//     /*
//      * resolve：异步操作成功后，我们应该去执行的函数
//      * reject：异步操作失败后，我们应该去执行的函数
//      */
//     setTimeout(function () {
//         resolve();
//     }, 1000);
//     console.log(1);
//
// }).then(() => {
//     console.log(3);
// }, () => {
//     console.log(4);
// });
// console.log(2);
//=> 1 2 3 ：PROMISE本身是同步的，创建它的时候，就把传递进来的回调函数执行了（回调函数中包含异步的任务），而 RESOLVE 对应的是 THEN 中成功的回调函数 ，而 REJECT 对应的是 THEN 中失败的函数（或者是CATCH）

// new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve(10);
//     }, 1000);
//     console.log(1);
//
// }).then((num) => {
//     //=>num:10
//     return num * 10;
// }).catch(() => {
//     //=>CATCH相对于THEN中的第二个失败回调函数好处：第二个函数对应的是REJECT,只有执行REJECT才会被触发，而CATCH不仅仅执行REJECT被触发，而且如果PROMISE主体中的代码抛出异常或者上一个THEN中的代码抛出异常都会触发CATCH中的操作
// }).then((num) => {
//     //=>num:10 第二个及以后THEN中的参数值是上一个THEN的返回值
//     console.log(num);
// });
// console.log(2);


// async function fn() {
//     return 'ok';
// }
// console.log(fn());//=>Promise { 'ok' }

// function fn() {
//     return new Promise((resolve) => {
//         resolve('ok');
//     });
// }
// console.log(fn());//=>Promise { 'ok' }

/*
 * Promise的应用场景：
 *   1、利用强大的THEN链机制，我们尽可能更多的把异步操作基于Promise处理（例如：AJAX库的封装...）
 *   2、我们使用的async的原理其实就是Promise（不用async，自己把其改为Promise也可以）
 *   3、客户端和服务器端的数据获取，由于建议大家都使用异步操作，所以一般都是基于Promise完成的
 *   4、在redux中使用redux-promise中间件
 *   ...
 */













