const form = document.querySelector('#createEventForm');
const frm = document.querySelector('#reduct-event');
const container = document.querySelector('#container');

function deleter(butt,divc){
  butt.addEventListener('click', () => {
    divc.remove();})
}

<<<<<<< HEAD
<<<<<<< HEAD
form.addEventListener('submit', async (e) => { //Логика eventAdd Добавить новое событие
  e.preventDefault();
  const { date, events, notes, action, method } = e.target;
  const response = await fetch(action, {
=======
=======
>>>>>>> 8b1b333e630f6aa911d91957821c96386107c7c3
if(form){

  form.addEventListener('submit', async (e) => {//Логика eventAdd Добавить новое событие
    e.preventDefault();
    const { date, events, notes, action, method } = e.target;
    
    const response = await fetch(action, {
<<<<<<< HEAD
>>>>>>> 70827daa538c5820dd4459a90e1684a09164ff48
=======
>>>>>>> 8b1b333e630f6aa911d91957821c96386107c7c3
    method,
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      date: date.value,
      events: events.value,
      notes: notes.value,
    })
  })
  window.location.reload();
  const result = await response.json();
})

<<<<<<< HEAD
<<<<<<< HEAD
const backBtn = document.getElementById('backBtn'); //кнопка назад на главную
=======
=======

>>>>>>> 8b1b333e630f6aa911d91957821c96386107c7c3
if(frm){
frm.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent default action of form
  const { events , notes, method} = e.target; // destructuring data
  const response = await fetch('/main/chosenDay',{
      method,
      headers: {
          'Content-Type': 'Application/json' 
        },
      body: JSON.stringify({
          events: events.value,
          notes: notes.value,
      }) 
  });
  const result = await response.json();
  console.log(result);
  const div = document.createElement('div');
  // div.setAttribute('id', 'div');
  div.innerHTML = `<div id="div"><div class="form-group mx-5">
  <label for="exampleInputText">${events.value}</label>
  </div>
<div class="form-group mx-5">
  <label for="exampleInputText">${notes.value}</label>
  </div>
  <button id="deletebtn" type="button" action="click" class="btn btn-dark ml-5 form-group">Удалить событие</button>
  </div>`
  container.appendChild(div);
  let b = document.getElementById('deletebtn');
  let div2 = document.getElementById('div');
 deleter(b,div2);
})
}
// {<button type="button" action="click" class="btn btn-outline-dark form-group">Добавить заметку</button>}

<<<<<<< HEAD
const backBtn = document.getElementById('backBtn');
>>>>>>> 70827daa538c5820dd4459a90e1684a09164ff48
=======
const backBtn = document.getElementById('backBtn'); //кнопка назад на главную;
>>>>>>> 8b1b333e630f6aa911d91957821c96386107c7c3
backBtn.addEventListener('click', function () {
  window.location = '/main';
});

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8b1b333e630f6aa911d91957821c96386107c7c3
const saveBtn = document.getElementById('saveBtn'); //кнопка релоада страницы при сохранении нового события
saveBtn.addEventListener('click', function () {
  window.location.reload();
});


<<<<<<< HEAD
=======
>>>>>>> 70827daa538c5820dd4459a90e1684a09164ff48

=======
>>>>>>> 8b1b333e630f6aa911d91957821c96386107c7c3
