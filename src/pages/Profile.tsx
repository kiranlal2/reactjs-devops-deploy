import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";


export default function Profile() {
    const context = useContext(EmployeeContext);
    if (!context) {
        return <div>Loading...</div>;
    }
    const {employeDetails, setEmployeDetails} = context;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-inherit">
        <div className="flex flex-col text-center bg-white p-6 rounded-lg shadow-lg Shadow-red-500/25 text-gray-800">
            <p>{employeDetails.name}</p>
            <p>{employeDetails.age}</p>
            <p>{employeDetails.position}</p>
            <p>{employeDetails.department}</p>
            <p>{employeDetails.experience}</p>
            <p>{employeDetails.location}</p>
            <button className="text-red-500" onClick={() => setEmployeDetails((prev) => ({...prev, name: "Adon Demiurges" }))}>Edit Name</button>
        </div>
    </div>
  )
}
