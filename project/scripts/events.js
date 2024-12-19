// Sample data for running events
const runningEvents = [
    { date: '2023-11-01', time: '08:00', place: 'New York, NY', distance: '5K', fee: '$30', name: 'New York Fun Run' },
    { date: '2023-11-15', time: '09:00', place: 'Los Angeles, CA', distance: '10K', fee: '$40', name: 'LA Marathon' },
    { date: '2023-12-01', time: '07:00', place: 'Chicago, IL', distance: 'Half Marathon', fee: '$50', name: 'Chicago Half Marathon' },
    { date: '2023-12-10', time: '06:30', place: 'Houston, TX', distance: 'Marathon', fee: '$60', name: 'Houston Marathon' },
    { date: '2024-01-05', time: '08:00', place: 'Miami, FL', distance: '5K', fee: '$25', name: 'Miami Beach Run' },
    { date: '2024-01-20', time: '09:00', place: 'San Francisco, CA', distance: '10K', fee: '$35', name: 'Golden Gate Run' },
    { date: '2024-02-14', time: '07:00', place: 'Las Vegas, NV', distance: 'Half Marathon', fee: '$45', name: 'Vegas Valentine Run' },
    { date: '2024-02-28', time: '06:30', place: 'Phoenix, AZ', distance: 'Marathon', fee: '$55', name: 'Phoenix Marathon' },
    { date: '2024-03-10', time: '08:00', place: 'Seattle, WA', distance: '5K', fee: '$20', name: 'Seattle Spring Run' },
    { date: '2024-03-25', time: '09:00', place: 'Denver, CO', distance: '10K', fee: '$30', name: 'Denver Dash' }
];

const eventsList = document.getElementById('eventsList');

runningEvents.forEach(event => {
    const eventElement = document.createElement('li');
    eventElement.innerHTML = `
        <strong>${event.name}</strong><br>
        Date: ${event.date}<br>
        Time: ${event.time}<br>
        Place: ${event.place}<br>
        Distance: ${event.distance}<br>
        Fee: ${event.fee}
    `;
    eventsList.appendChild(eventElement);
});

const trainingForm = document.getElementById('trainingForm');
const trainingList = document.getElementById('trainingList');

const saveTrainingSession = () => {
    const date = document.getElementById('date').value;
    const distance = document.getElementById('distance').value;
    const notes = document.getElementById('notes').value;

    const trainingSession = {
        date,
        distance,
        notes
    };

    let trainingSessions = JSON.parse(localStorage.getItem('trainingSessions')) || [];
    trainingSessions.push(trainingSession);
    localStorage.setItem('trainingSessions', JSON.stringify(trainingSessions));

    displayTrainingSessions();
    clearForm();
};

const displayTrainingSessions = () => {
    const trainingSessions = JSON.parse(localStorage.getItem('trainingSessions')) || [];
    trainingList.innerHTML = '';
    trainingSessions.forEach(session => {
        const sessionElement = document.createElement('li');
        sessionElement.textContent = `${session.date}: ${session.distance} km - ${session.notes}`;
        trainingList.appendChild(sessionElement);
    });
};

const clearForm = () => {
    document.getElementById('date').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('notes').value = '';
};

trainingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    saveTrainingSession();
});

displayTrainingSessions();