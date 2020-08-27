const express = require('express');
const router = express.Router();


// function days(current) {
//   let week = new Array();
//   // Starting Monday not Sunday 
//   let first = current.getDate();
//   for (let i = 0; i < 9; i++) {
//     // if (first > 32){
//     //   first= 0;
//     // }
//     week.push(
//       new Date(current.setDate(first++))
//     );
//   }
//   return week;
// }

// let input = new Date(Date.now());
// console.log('input: %s', input);



// let result = days(input);
// console.log(result.map(d => d.toString()));




router.route('/')
.get((req, res) => {
  res.render('main', { Data1: '28', Data2: '29', Data3: '30', Data4: "31", Data5: "1", Data6: "2", Data7: "3" });
});





module.exports = router;
