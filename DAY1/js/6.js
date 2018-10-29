let data = {
    msg: 'hello word'
};
Object.defineProperty(data, 'msg', {
    get() {
        console.log(1);
        return 'ok';
    },
    set(val) {
        console.log(2);
    }
});
console.log(data.msg);
data.msg = 100;
