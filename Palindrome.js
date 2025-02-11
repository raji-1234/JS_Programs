/*let str1='Raj'
let rev=''
for (let i=str1.length-1;i>=0;i--){
    let c=str1.charAt(i)
    rev=rev+c
}

console.log(str1)
console.log(rev)
if(str1==rev){
    console.log('Is a palindrome')
}else{
    console.log('Is not a palindrome')
}*/
let name1='madam'
let newName=name1.split('').reverse().join('')
if(name1==newName){
    console.log('Is a palindrome')
}else{
    console.log('Is not a palindrome')
}