//所有Symbol变量放在这
class SYMBOL {
    
    addSetter = function (item){
        if(this[item]){
            return "早已存在相同的key,请直接使用或更换其他key";
        }
        this[item] = Symbol();
    }.bind(this);
}

const instence = new SYMBOL();

export {instence as symbol};