/*let age=25
if(age==18)
{
    console.log('Congrats,You are eligible to vote!')
}else if(age>18){
    console.log('You are aleady eligible')
}else
{
    console.log('You are not eligible')
}*/
 /*let num1=100
 let num2='100'
 //== is used to compare the values
 //=== is used to compare the values and as well as datatypes
 if(num1===num2){
    console.log('Equals')}else
    {
        console.log('Not Equals')
    }
 */

    let age=50
    switch(age)
    {
        case 25: 
        console.log('You are eligible') 
        break
        case 15: 
        console.log('You are not eligible as you age is less than 18') 
        break
        case 18: 
        console.log('You have just become eligible') 
        break
       default: 
        console.log('Unknown value') 
        break
    }