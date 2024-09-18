const WorkoutDetails = ({ workouts }) => {
    return (
        <div className="workout-details">
            <h2>{workouts.name}</h2>
            <p>{workouts.description}</p>
            <p><strong>Duration: </strong>{workouts.duration}</p>
            <p><strong>Reps: </strong>{workouts.repetitions}</p>
            <p><strong>Sets: </strong>{workouts.sets}</p>
            <p><strong>Load (lbs): </strong>{workouts.weight}</p>
            <p>{workouts.createdAt}</p>
        </div>
    );
};

export default WorkoutDetails;