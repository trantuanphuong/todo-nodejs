var firstFunction = function() {
    console.log("FirstFunction")
}
var secondFunction = function() {
    setTimeout(firstFunction, 5000)
    console.log("SecondFunction")
}
secondFunction();

function demoCallback(callback) {
    callback("data");
}

demoCallback( function(data){
console.log(data)
})

const p = Promise.resolve(12)
  .then(result => console.log(result)) // 12
  .then(res => Promise.reject(new Error('Stop')))
  .then(() => 'Smile')
  .catch(err => console.error(err)) // Error: stop

doublefunc = function(number) {
    return new Promise((resolve, reject) => {
        if(number%2 == 0) {
            resolve(number*2)
        }
        else {
            reject("error 1")
        }
    })
}

test('compare1', () => {
    return compare1(12).then(data => {
        expect(data).toBe(24);
    });
});

compare2 = function(number) {
    return new Promise((resolve, reject) => {
      if(number%3 == 0) {
          resolve(number)
      }
      else {
          reject("error 2")
      }
    })
}

compare1(12)
.then(result => 
    compare2(result)
)
.then(result => 
    console.log(result)
)
.catch(err => {
    console.log(err) 
})