const CardioDetails = ({ cardio }) => {
    return (
        <div className="workout-details">
        <h1>{cardio.name}</h1>
        <p><strong>Description: </strong>{cardio.description}</p>
        <p><strong>Duration: </strong>{cardio.duration}</p>
        <p><strong>Distance: </strong>{cardio.distance}</p>
        <p><strong>Calories: </strong>{cardio.calories}</p>
        </div>
    );
    };

export default CardioDetails;