// Activity 1

let Hello = () => {
    console.log ("Hello Code Nation");
};

Hello();

let Hellox5 = (loop, num) => {
    for(i = 0; i <num; i++){
    loop();
    }
}

Hellox5(Hello, 4);

// Activity 2

let array = [1, 2, 3, 4, 5];

let arrayx3 = array.map((multiply) => {
    return multiply*3;
});

console.log(arrayx3);

// Activity 3

const add = (a,b) => {
    return a+b;
}

const subtract = (a,b) => {
    return a-b;
}

const multiply = (a,b) => {
    return a*b;
}

const devide = (a,b) => {
    return a/b;
}

const doMaths = (num1) =>{
    return (num2, fn) => {
        return fn (num1, num2)
    }
}

result = doMaths()