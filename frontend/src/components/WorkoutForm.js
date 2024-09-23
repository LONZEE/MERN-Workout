import { useState } from 'react';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";


const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext();

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState('');
    const [repetitions, setRepetitions] = useState('');
    const [sets, setSets] = useState('');
    const [weight, setWeight] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = { name, date, duration, repetitions, sets, weight };

        const res = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await res.json();

        if (!res.ok) {
            setError(json.message);
        } else {
            setName('');
            setDate('');
            setDuration('');
            setRepetitions('');
            setSets('');
            setWeight('');
            setError(null);
            console.log("Workout added successfully");
            dispatch({ type: 'CREATE_WORKOUT', payload: json });
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Workout Name:</label>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Date:</label>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <label>Duration (minutes):</label>
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

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default WorkoutForm;