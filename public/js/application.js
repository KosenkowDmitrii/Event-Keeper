const form = document.querySelector('#createEventForm');


form.addEventListener('submit', async (e) => { //Логика eventAdd Добавить новое событие
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

const backBtn = document.getElementById('backBtn'); //кнопка назад на главную
backBtn.addEventListener('click', function () {
  window.location = '/main';
});

const saveBtn = document.getElementById('saveBtn'); //кнопка релоада страницы при сохранении нового события
saveBtn.addEventListener('click', function () {
  window.location.reload();
});



