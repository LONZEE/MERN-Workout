import { useEffect, useState } from "react";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);
    useEffect(() => {
        const fetchWorkouts = async () => {
            const res = await fetch('http://localhost:4000/api/workouts');
            const data = await res.json();
            
            if (res.ok) {
                setWorkouts(data);
            }
        }; 
        fetchWorkouts();   
    }, []);


    return (
        <div className="home">
        <div className="workouts">
            {workouts && workouts.map((workouts) => (
                <p key={workouts.id}>{workouts.name}</p>
            ))}
            </div>
        </div>
    );
    };

export default Home;