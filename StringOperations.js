let firstname='Rajeshwari'
let lastname='Choukimath'
console.log(firstname)
console.log(lastname)
console.log(firstname,lastname)
let fullname=firstname + lastname
console.log(fullname)
fullname=firstname + ' ' + lastname
console.log(fullname)

//concat function
fullname=firstname.concat(lastname)
console.log(fullname)

fullname=firstname.concat(' ').concat(lastname)
console.log(fullname)

fullname=firstname.concat(' ',lastname)
console.log(fullname)

//find the length of the fullname

console.log('The Length of the FullName is '+ fullname.length)


//convert to uppercase and lowercase
console.log(fullname.toUpperCase())
console.log(fullname.toLowerCase())

//Replace function
//Replace World with India
let str='Clean World Green World'

let result=str.replace('World','India')
console.log(result)

result=str.replace(/World/g,'India')
console.log(result)