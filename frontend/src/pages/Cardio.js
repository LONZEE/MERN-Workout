import { useEffect, useState } from "react";

import CardioDetails from "../components/CardioDetails";
import CardioForm from "../components/CardioForm";

const Cardio = () => {
    const [cardio, setCardio] = useState(null);
    useEffect(() => {
        const fetchCardio = async () => {
            const res = await fetch('/api/cardio');
            const data = await res.json();
            
            if (res.ok) {
                setCardio(data);
            }
        }; 
        fetchCardio();   
    }, []);

    return (
        <div className="cardio">
        <div className="cardio">
            {cardio && cardio.map((cardio) => (
                <CardioDetails key={cardio._id} cardio={cardio} />

            ))}
            </div>
            <CardioForm />
        </div>
    );
    };

    export default Cardio;