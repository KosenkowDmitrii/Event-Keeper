const form = document.querySelector('#createEventForm');


form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { date, events, notes, action, method } = e.target;
    console.log(e.target);
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
  const result = await response.json();
})

const backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click', function () {
  window.location = '/main';
});

