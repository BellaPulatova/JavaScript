
function test(){
    var name = 'wbba'
    return name + ' surname'
}
console.log(test())

var wbba = function(){
    console.log('wbba')
}
wbba();
function sum ( a, b){
    console.log(a+b)
}
sum(3,4)

var time = 'xufton'
if (time === 'kun') {
    console.log('light off')
}
else if (time==='tun') {
    console.log('light on')
}
else if (time==='shom'){
    console.log('ihtiyoriy')
}
else{
    console.log('hech nima')
};

function sum(a,b){
    if(a>b){
        console.log(a-b)
    }
    else if (a<b){
        console.log(b-a)
    }
    else{
        console.log(a-b)
    }
}
sum (4,5)
sum (5,4)

console.log(2+2)
var number = 10

const obj = {
    name: 'WebBrian',
    surname: 'Academy',
    status: 'IT',
    };
    Object.values(obj).map(([value, key], index) => {
    console.log(value);
    });
    
