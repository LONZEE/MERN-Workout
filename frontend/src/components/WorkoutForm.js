import { useState } from 'react';


const WorkoutForm = () => {

    const [workout, setWorkout] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState('');
    const [repetitions, setRepetitions] = useState('');
    const [sets, setSets] = useState('');
    const [weight, setWeight] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        // Prevent the default form submission action
        e.preventDefault();

        const newWorkout = { workout, duration, repetitions, sets, weight };

        const res = await fetch('/api/workouts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newWorkout)
        });
        const json = await res.json();
        
        if (!res.ok) {
            setError(json.message);
        }
        if (res.ok) {
            setWorkout('');
            setDuration('');
            setRepetitions('');
            setSets('');
            setWeight('');


            setError(null);
            console.log("Workout added successfully");
        }
    };
    
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Workout Name:</label>
            <input 
                type="text"
                
                value={workout}
                onChange={(e) => setWorkout(e.target.value)}
            />

            <label>Date:</label>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <label>Duration:</label>
            <input 
                type="number"
                
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
            />

            <label>Repetitions:</label>
            <input 
                type="number"
                
                value={repetitions}
                onChange={(e) => setRepetitions(e.target.value)}
            />
            <label>Sets:</label>
            <input 
                type="number"
                
                value={sets}
                onChange={(e) => setSets(e.target.value)}
            />
            <label>Weight (lbs):</label>
            <input 
                type="number"
                
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
        </form>
    );
};


export default WorkoutForm;