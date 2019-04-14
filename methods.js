//只能通过构造器调用的构造函数
let app = function cons () {
    if( ! (this instanceof cons) ) {
        console.error("this constructor can only be call with 'new'");
    }
    cons.prototype.par = function () {
        
    };
};

//模拟一个new调用
var New = function New () {
    const temp = {};
    Object.create("","")
    return temp;
};