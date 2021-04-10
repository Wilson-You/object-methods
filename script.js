//assign; assign one or more objects to merge with the target object
const objTarget = { a: 1, b: 2 }
const objSource = { a: 3, c: 5 }
const pAssign = document.querySelector('.assign')
const returnedObj = Object.assign(objTarget, objSource)
pAssign.innerHTML = 'Method Assign: ' + JSON.stringify(returnedObj)

//hasOwnProperty; check whether the object owns the specified property; return true or false
const hasPropObj = { 'goodname': 'wilson' }
const pHasOwnProperty = document.querySelector('.hasownproperty')
pHasOwnProperty.innerHTML = 'Method hasOwnProperty: ' + hasPropObj.hasOwnProperty('goodname')

//entries; convert each item in an object into an array and return an array which contains all the subarrays

const entryObj = { name: 'wilson', age: 11, gender: 'm' }
const pEntries = document.querySelector('.entries')
pEntries.innerHTML = 'Method entries: ' + Object.entries(entryObj)
console.log(Object.entries(entryObj));