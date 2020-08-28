const express = require('express');
const router = express.Router();







router.route('/')
.get((req, res) => {
  res.render('main', { Data1: '28', Data2: '29', Data3: '30', Data4: "31", Data5: "1", Data6: "2", Data7: "3" });
});



router.route('/chosenDay')
.get((req,res)=>{
  res.render('chosenDay');
})
.post( async (req, res) => {
  const { events, notes } = req.body;
  res.json( {events , notes});
})






module.exports = router;
