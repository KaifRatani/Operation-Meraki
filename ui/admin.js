document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('eventForm');
  const eventList = document.getElementById('eventList');
  const participantTable = document.querySelector('#participantTable tbody');

  loadEvents();
  loadParticipants();

  // Navigation logic
  window.showSection = (id) => {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.sidebar button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.sidebar button[onclick*="${id}"]`).classList.add('active');
  };

  // Submit form: create or update event
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const eventId = form.eventId.value.trim();
    const data = {
      title: form.title.value.trim(),
      description: form.description.value.trim(),
      location: form.location.value.trim(),
      date: form.date.value,
      start_time: form.start_time.value,
      duration: form.duration.value.trim()
    };

    const url = eventId ? `/api/events/edit/${eventId}` : '/api/events/create';
    const method = eventId ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await res.text();
      alert(result);
      form.reset();
      form.eventId.value = '';
      loadEvents();
      showSection('update');
    } catch (err) {
      alert('Error saving event.');
      console.error(err);
    }
  });

  // Load events for update section
  async function loadEvents() {
    try {
      const res = await fetch('/api/events');
      const events = await res.json();
      eventList.innerHTML = '';

      events.forEach(event => {
        const div = document.createElement('div');
        div.className = 'event-card';
        div.innerHTML = `
          <h3>${event.title}</h3>
          <p><strong>Date:</strong> ${event.date} | ${event.start_time} (${event.duration})</p>
          <p><strong>Location:</strong> ${event.location}</p>
          <p>${event.description}</p>
          <button onclick='editEvent(${JSON.stringify(event)})'>Edit</button>
        `;
        eventList.appendChild(div);
      });
    } catch (err) {
      console.error(err);
      eventList.innerHTML = '<p>Error loading events.</p>';
    }
  }

  // Fill form with event data for editing
  window.editEvent = (event) => {
    form.eventId.value = event.id;
    form.title.value = event.title;
    form.description.value = event.description;
    form.location.value = event.location;
    form.date.value = event.date;
    form.start_time.value = event.start_time;
    form.duration.value = event.duration;
    showSection('create');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Load participant data into table
  async function loadParticipants() {
    try {
      const res = await fetch('/api/events/participants');
      const data = await res.json();
      participantTable.innerHTML = '';

      if (data.length === 0) {
        participantTable.innerHTML = '<tr><td colspan="4">No participants found.</td></tr>';
        return;
      }

      data.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${row.event_id}</td>
          <td>${row.name}</td>
          <td>${row.role}</td>
          <td>${new Date(row.response_time).toLocaleString()}</td>
        `;
        participantTable.appendChild(tr);
      });
    } catch (err) {
      console.error(err);
      participantTable.innerHTML = '<tr><td colspan="4">Failed to load participants.</td></tr>';
    }
  }
});
