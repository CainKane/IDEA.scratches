//es6 class demo


class app {
    state = {};
    
    constructor (
        a ,
        b,
    ) {
        this.a = a;
        this.b = b;
        
    }
    
    cons = () => {
        console.log(this.a)
    };
    
}


class CS extends app {
    constructor (
        a ,
        b,
    ) {
        super();
        this.a = "xcxdsd";
    }
    
}