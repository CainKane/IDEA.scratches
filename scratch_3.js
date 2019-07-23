/*
<- 1 :  (...args) => fn1(fn2(...args))
<- 2 :  (...args) => fn1(fn2(...args))
 */

const
    fn1 = () => {},
    fn2 = () => {},
    fn3 = () => {},
    fn4 = () => {}
;

[fn1,fn2,fn3,fn4].reduce(
    (accu,curr)=>
        (...args) =>
            accu(curr(...args))
);


acc1 = (...args) => fn1(fn2(...args));

acc2 = (...args) => acc1(fn3(...args));

acc3 = (...args) => acc2(fn4(...args));


$acc1 = (...args) => {
    return fn1(fn2(...args))
};
$acc2 = (...args) => {
    return $acc1(fn3(...args));
};
$acc2(1,2);
/**
 *(...args) => fn1(fn2(...args))
 *(...args) =>
 *
 */

