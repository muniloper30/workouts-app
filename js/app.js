window.onload = () => {
    document.body.style.opacity = "1"; // Hacer que el body aparezca con transición
    window.alert(`¡Bienvenido a Workouts Fit!
    Para ver los workouts disponibles, haz clic en el botón "Mostrar Workouts".
    La web se encuentra en construcción, por lo que es posible que no todos los workouts estén disponibles.
    ¡Gracias por tu paciencia!`);
};




// URL de la API
const API_URL = 'https://workouts-fit-api.vercel.app/api/workouts'; // Api de workouts


// Elementos del DOM
const workoutList = document.getElementById('workout-list');
const workoutDetailSection = document.getElementById('workout-detail');
const workoutsSection = document.getElementById('workouts');
const landingSection = document.getElementById('landing');
const showWorkoutsbtn =document.getElementById('show-workouts');
const imgLogo = document.getElementById('csg-logo');

// Función para obtener los workouts desde la API
// Evento para cargar y mostrar workouts al hacer clic en el botón
showWorkoutsbtn.addEventListener('click', async () => {
    try {
        const response = await fetch(API_URL); // Llamada a la API
        const workouts = await response.json();
        renderWorkouts(workouts);
    } catch (error) {
        console.error('Error al cargar los workouts:', error);
    }
});


workoutDetailSection.style.display = 'none';

// Función para renderizar los workouts en la página
const renderWorkouts = (workouts) => {
    workoutList.innerHTML = ''; // Limpiar la lista de workouts
    workoutList.classList.add('visible');
    workouts.forEach(workout => { // Recorrer los workouts y agregarlos a la lista
        const li = document.createElement('li');
        li.textContent = workout.name;
        li.classList.add('workout-item');
        li.onclick = () => showWorkoutDetail(workout);
        workoutList.appendChild(li);
    });
};

// Mostrar detalles del workout
const showWorkoutDetail = (workout) => {
    landingSection.style.display = '';
    workoutsSection.style.display = 'none';
    imgLogo.style.display = 'block';
    workoutDetailSection.style.display = 'flex';

    const workoutName = document.getElementById('workout-name');
    const workoutDescription = document.getElementById('workout-description');
    const workoutSubtitle = document.getElementById('workout-subtitle');
    const workoutDifficulty = document.getElementById('workout-difficulty');
    const workoutDuration = document.getElementById('workout-duration');

    workoutName.textContent = workout.name;
    workoutDescription.textContent = workout.description;
    workoutSubtitle.textContent = workout.type;
    workoutDifficulty.textContent += workout.difficulty;
    workoutDuration.textContent += workout.duration;
    
};

// Volver a la lista de workouts
const showWorkouts = () => {
    landingSection.style.display = 'none';
    workoutDetailSection.style.display = 'none';
    workoutsSection.style.display = 'block';
};

