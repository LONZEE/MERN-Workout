import { useEffect, useState } from "react";

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);
    useEffect(() => {
        const fetchWorkouts = async () => {
            const res = await fetch('/api/workouts');
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
                <WorkoutDetails key={workouts._id} workouts={workouts} />

            ))}
            </div>
            <WorkoutForm />
        </div>
    );
    };

export default Home;