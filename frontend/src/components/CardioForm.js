import { useState } from 'react';

const CardioForm = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [distance, setDistance] = useState('');
    const [calories, setCalories] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cardio = { name, description, duration, distance, calories };

        const res = await fetch('/api/cardio', {
            method: 'POST',
            body: JSON.stringify(cardio),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await res.json();

        if (!res.ok) {
            setError(json.message);
        } else {
            setName('');
            setDescription('');
            setDuration('');
            setDistance('');
            setCalories('');
            setError(null);
            console.log("Cardio added successfully");
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Cardio Workout</h3>

            <label>Cardio Name:</label>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Description:</label>
            <input 
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <label>Duration (minutes):</label>
            <input 
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
            />

            <label>Distance (miles):</label>
            <input 
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
            />

            <label>Calories Burned:</label>
            <input 
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
            />

            <button>Add Cardio</button>
            {error && <p>{error}</p>}
        </form>
    ); 
}

export default CardioForm;