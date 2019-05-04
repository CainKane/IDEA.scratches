//所有Symbol变量放在这
class SYMBOL {
    addSetter (item) {
        if( this[item] ) {
            console.info("早已存在相同的key,请直接使用或更换其他key");
            return "早已存在相同的key,请直接使用或更换其他key";
        }
        this[item] = Symbol();
    }
    del (item){
        delete this[item];
    }
}

const instence = new SYMBOL();

export { instence as symbol };
export default instence;
