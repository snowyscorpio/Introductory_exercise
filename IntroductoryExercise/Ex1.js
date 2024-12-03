/*
 i put it all in an arrow function so we can test a few options on it ^-^ 
*/

//First paragraph- אם המספר מתחלק ב-2 או ב-3 או ב-5 –יש להדפיס 1 (מתחלק רק במספר אחד בלבד)
const FirstParagraph = (num) => Number(num % 2 === 0 || num % 3 === 0 || num % 5 === 0) && console.log('1');
FirstParagraph(12);
FirstParagraph(15);
FirstParagraph(17);
/*
 Number - Converting the boolean answer (true/false) to a number (1 or 0);

 Conditional Rendering- the usage of && between the convertion and the console.log - cause the expression inside is returning true od false (1 or 0) , if it returns 1 (true) it will print '1' if 0 (false) it wont do anything cause it wont come to the point of reaching the console.log ***(thats called "conditional rendering")*** ;
 */


//Second paragraph- אם המספר מתחלק גם ב-2 וב-3 או  ב-3 וב-5 או ב-2 וב-5 – יש להדפס 2 (מתחלק בשני מספרים בלבד)
const SecondParagraph = (num) => Number((num % 2 === 0) + (num % 3 === 0) + (num % 5 === 0) === 2) && console.log('2');
SecondParagraph(6);
SecondParagraph(2);
/*
 when a condition is true it will it will convert it to 1 from true, and if it ===2 that means that 2 of the conditions are 1 (true), in easy words 1+1=2 , true = 1 so "true+true= 2 conditions are true" :p
*/


//Third paragraph- אם המספר מתחלק גם ב-2 וב-3 וב-5 – יש להדפיס 3
const ThirdParagraph = (num) => Number(num % 2 === 0 && num % 3 === 0 && num % 5 === 0) && console.log('3');
ThirdParagraph(120);