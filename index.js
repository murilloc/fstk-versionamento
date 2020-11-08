// Conditional module
if(process.env.PRD !== 'true') require('dotenv').config()

dotenv.config();
 
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_PASSWORD);

console.log(new Date());

for(let i =0; i < 10; i++){
 console.log(i);
}

