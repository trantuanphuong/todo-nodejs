// file DemoSimple.js
addFunc = function (a, b) {
    return a + b;
} 

doubleFunc = function(number) {
    return new Promise((resolve, reject) => {
        if(number%2 == 0) {
            resolve(number*2)
        }
        else {
            reject("error 1")
        }
    })
}

navFunc = function(number) {
    return new Promise((resolve, reject) => {
      if(number%2 == 0) {
          resolve(-number)
      }
      else {
          reject("error 2")
      }
    })
}

syncFunc = async function(data) {
    try {
      const result = await doubleFunc(data)
      return result
    } catch (err) {
      throw err
    }
}

module.exports.addFunc = addFunc;
module.exports.doubleFunc = doubleFunc;
module.exports.navFunc = navFunc;
module.exports.syncFunc = syncFunc;