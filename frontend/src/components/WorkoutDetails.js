import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutDetails = ({ workouts }) => {
    const { dispatch } = useWorkoutsContext();
    
    const handleClick = async () => {

        const response = await fetch('/api/workouts/' + workouts._id, {
            method: 'DELETE'
        });
        const data = await response.json();
        if (!response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: data });
        }
    }



    return (
        <div className="workout-details">
            <h2>{workouts.name}</h2>
            
            <p><strong>Duration: </strong>{workouts.duration}</p>
            <p><strong>Reps: </strong>{workouts.repetitions}</p>
            <p><strong>Sets: </strong>{workouts.sets}</p>
            <p><strong>Load (lbs): </strong>{workouts.weight}</p>
            <p>{workouts.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    );
};

export default WorkoutDetails;