var foo = function foo () {
    console.log(this);
    console.log(arguments[0]);
    if( ! arguments[0] ) {
        
        return {};
    }
    return this;
};

var ap = Symbol("ap1");
var ap = Symbol("ap2");
foo(({
    a : "" ,
    b : setTimeout.bind(function () {
    
    }) ,
})).
    foo(({
        c () {
        } ,
        [ap] : () => {
        } ,
    })).
    foo();




a = ((() => {
    let cs = function cs () {
        return {
            c : cs.caller ,
        };
    };
    let c = {
        sd () {
            console.log(cs);
        } ,
    };
    
    return function () {
        console.log(cs().c);
    };
})());



//函数节流
window.onresize = function () {

};



//封装一个事件委托函数
cc = document.querySelector("div");

document.body.addEventListener(
    "click" ,
    (e) => {
        for ( let i of e.path ) {
            if( i === cc ) {
                console.log(i);
            }
        }
    } ,
);

//事件委托函数
/**
 *
 * @param type {string}
 * @param delegationEl {HTMLElement}
 * @param targetEl {HTMLElement}
 * @param method {function}
 */
function eDelegation (type ,
                      delegationEl ,
                      targetEl ,
                      method) {
    delegationEl.addEventListener(
        type,
        method
    )
};



eDelegation(
    "click" ,
    document.body ,
    document.querySelector(`div[#csd]`),
    (e) => {
    
    },
);