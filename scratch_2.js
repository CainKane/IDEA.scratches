 Foo = class {
    #p = {sa : "232"};
    getPrivateValue(foo) {
        return foo.#p;
    }
};
xc = class {
    #p = {a:1}
};

(new Foo).getPrivateValue(new Foo);