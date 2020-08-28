const form = document.querySelector('#createEventForm');
const frm = document.querySelector('#reduct-event');
const container = document.querySelector('#container');

function deleter(butt,divc){
  butt.addEventListener('click', () => {
    divc.remove();})
}

if(form){

  form.addEventListener('submit', async (e) => {//Логика eventAdd Добавить новое событие
    e.preventDefault();
    const { date, events, notes, action, method } = e.target;
    
    const response = await fetch(action, {
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

const backBtn = document.getElementById('backBtn'); //кнопка назад на главную;
backBtn.addEventListener('click', function () {
  window.location = '/main';
});

const saveBtn = document.getElementById('saveBtn'); //кнопка релоада страницы при сохранении нового события
saveBtn.addEventListener('click', function () {
  window.location.reload();
});


