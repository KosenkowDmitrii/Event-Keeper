const form = document.querySelector('#createEventForm');
form.addEventListener('submit', async (e) => {
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
  const res = await response.json();
  console.log(res);
  if(response.status === 200) {
    window.location = '/main'
  }
})
