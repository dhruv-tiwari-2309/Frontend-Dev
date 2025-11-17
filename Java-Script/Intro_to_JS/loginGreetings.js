let userName="Dhruv";
let hours=new Date().getHours();
if(hours<12) console.log(`Good Morning ${userName}`);
else if(hours<17) console.log(`Good Afternoon ${userName}`);
else console.log(`Good Evening ${userName}`);