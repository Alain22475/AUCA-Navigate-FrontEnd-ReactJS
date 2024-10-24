import React, { useState, useEffect } from 'react';
import '../components/styles/StudentProfile.css';

const Profile = () => {
    // State to manage orientation task completion
    const [tasks, setTasks] = useState({
        schoolTour: false,
        accessPolicies: false,
        accountsSetup: false,
        registration: false,
    });

    // State to manage progress
    const [progress, setProgress] = useState(0);

    // Effect to calculate progress based on completed tasks
    useEffect(() => {
        const completedTasks = Object.values(tasks).filter(task => task).length;
        const totalTasks = Object.keys(tasks).length;
        setProgress((completedTasks / totalTasks) * 100);
    }, [tasks]);

    // Handler to toggle task completion
    const handleTaskChange = (event) => {
        const { name, checked } = event.target;
        setTasks((prevTasks) => ({
            ...prevTasks,
            [name]: checked,
        }));
    };

    // Function to determine the progress color class
    const getProgressColorClass = () => {
        if (progress === 0) return 'progress-red';
        if (progress === 25) return 'progress-orange';
        if (progress === 50) return 'progress-yellow';
        if (progress === 75) return 'progress-green';
        if (progress === 100) return 'progress-blue';
        return ''; // Default case
    };

    return (
        <div className="page-container">
            <h5>Profile</h5>
            <div className="profile-section">
                <div className="profile-circle">U</div> {/* Placeholder for user initials */}
                <div className="personal-info">
                    <p>Name: John Doe</p>
                    <p>Phone: +1234567890</p>
                    <p>Email: johndoe@example.com</p>
                    <p>Nationality: Country</p>
                </div>
                
                {/* Orientation Tasks Section */}
                <div className="orientation-tasks">
                    <h2>Orientation Tasks</h2>
                    <div className="task-list">
                        <div className="task-item">
                            <input
                                type="checkbox"
                                name="schoolTour"
                                checked={tasks.schoolTour}
                                onChange={handleTaskChange}
                            />
                            <label>Take School Tour</label>
                        </div>
                        <div className="task-item">
                            <input
                                type="checkbox"
                                name="accessPolicies"
                                checked={tasks.accessPolicies}
                                onChange={handleTaskChange}
                            />
                            <label>Access to School Policies</label>
                        </div>
                        <div className="task-item">
                            <input
                                type="checkbox"
                                name="accountsSetup"
                                checked={tasks.accountsSetup}
                                onChange={handleTaskChange}
                            />
                            <label>Student Accounts Setup</label>
                        </div>
                        <div className="task-item">
                            <input
                                type="checkbox"
                                name="registration"
                                checked={tasks.registration}
                                onChange={handleTaskChange}
                            />
                            <label>Registration</label>
                        </div>
                    </div>
                    
                    {/* Progress Display */}
                    <div className={`progress-container ${getProgressColorClass()}`}>
                        <p>Progress: {progress.toFixed(0)}%</p>
                    </div>
                </div>
                
                {/* Save Changes Button */}
                <button onClick={() => alert('Changes saved!')}>Save Changes</button>
            </div>
        </div>
    );
};

export default Profile;
