import React from 'react';
import './doctorlist.css';

const doctors = [
    { name: 'Dr. John Doe', specialty: 'Cardiologist' },
    { name: 'Dr. Jane Smith', specialty: 'Dermatologist' },
    { name: 'Dr. Alice Johnson', specialty: 'Neurologist' },
    { name: 'Dr. John Alica', specialty: 'Surgen' },
    { name: 'Dr. Smith', specialty: 'General Surgery' },
    { name: 'Dr.Johnson', specialty: 'Forensic Pathology' },
    // Add more doctors as needed
];

const DoctorsList = () => {
    return (
        <div className="doctors-list">
            <h2>Doctors</h2>
            <ul>
                {doctors.map((doctor, index) => (
                    <li key={index}>
                        <h3>{doctor.name}</h3>
                        <p>{doctor.specialty}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorsList;
