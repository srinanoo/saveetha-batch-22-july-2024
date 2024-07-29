import axios from "axios"
import { useEffect, useState } from "react"
import './TraineesListComp.css'

export default function TraineesListComp() {
    const [traineesList, setTraineesList] = useState([]);

    const fetchData = async () => {
        let results = await axios.get('http://localhost:4000/api/v1/trainees/readAllTrainees');

        console.log(results.data);
        setTraineesList(results.data?.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleDeleteTrainee = async (e) => {
        console.log(e.target.id);
        if(confirm("Are you sure you want to delete this Trainee?")) {
            let results = await axios.delete(`http://localhost:4000/api/v1/trainees/deleteTrainee/${e.target.id}`);
            console.log(results);
            if(results.data.msg === "Trainee Deleted Successfully!") {
                alert(results.data.msg);
                fetchData();
            }
        }
    }

    return (
        <>
            {
                traineesList.length > 0 && traineesList.map((v, i) => {
                    return (
                        <div className="row" key={i}>
                            <div>{v.name}</div>
                            <div>{v.age}</div>
                            <div>{v.phone}</div>
                            <div>{v.email}</div>
                            <div>
                                <button id={v._id}>Edit</button>
                                <button id={v._id} onClick={handleDeleteTrainee}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}