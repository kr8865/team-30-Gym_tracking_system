import React, { useState, useEffect, useContext } from 'react';
import { Users, Clipboard, Activity, LogOut } from 'lucide-react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const TrainerDashboard = () => {
    const { user, logout, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);
    const [clientProgress, setClientProgress] = useState([]);
    const [dietPlan, setDietPlan] = useState({ name: '', meals: [] });

    useEffect(() => {
        if (!loading && user?.role !== 'trainer') {
            navigate('/');
        }
        if (!loading && user?.role === 'trainer') {
            fetchClients();
        }
    }, [user, loading, navigate]);

    if (loading) return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Loading...</div>;

    const fetchClients = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/trainer/clients', {
                headers: { Authorization: `Bearer ${user.token}` },
            });
            const data = await res.json();
            setClients(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchProgress = async (clientId) => {
        try {
            const res = await fetch(`http://localhost:5000/api/trainer/client/${clientId}/progress`, {
                headers: { Authorization: `Bearer ${user.token}` },
            });
            const data = await res.json();
            setClientProgress(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClientSelect = (client) => {
        setSelectedClient(client);
        fetchProgress(client._id);
    };

    const handleAssignDiet = async (e) => {
        e.preventDefault();
        // Simplified diet assignment for demo
        const meals = [
            { time: 'Breakfast', description: 'Oatmeal & Eggs', calories: 500 },
            { time: 'Lunch', description: 'Chicken & Rice', calories: 700 },
            { time: 'Dinner', description: 'Salmon & Veggies', calories: 600 },
        ];

        try {
            await fetch('http://localhost:5000/api/trainer/diet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({
                    userId: selectedClient._id,
                    name: 'Balanced Diet',
                    meals,
                }),
            });
            alert('Diet plan assigned!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Trainer Dashboard</h1>
                    <button onClick={logout} className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                        <LogOut className="w-6 h-6 text-red-400" />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Client List */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 col-span-1">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Users className="text-blue-400" /> Clients
                        </h2>
                        <div className="space-y-3">
                            {clients.map((client) => (
                                <div
                                    key={client._id}
                                    onClick={() => handleClientSelect(client)}
                                    className={`p-4 rounded-lg cursor-pointer transition-colors ${selectedClient?._id === client._id ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                                        }`}
                                >
                                    <p className="font-bold">{client.name}</p>
                                    <p className="text-sm text-gray-300">{client.email}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Client Details */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 col-span-2">
                        {selectedClient ? (
                            <>
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold">{selectedClient.name}</h2>
                                        <p className="text-gray-400">Client Profile</p>
                                    </div>
                                    <button
                                        onClick={handleAssignDiet}
                                        className="bg-green-600 px-4 py-2 rounded-lg font-bold hover:bg-green-500 flex items-center gap-2"
                                    >
                                        <Clipboard className="w-4 h-4" /> Assign Diet Plan
                                    </button>
                                </div>

                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                    <Activity className="text-orange-400" /> Recent Activity
                                </h3>
                                <div className="space-y-4">
                                    {clientProgress.length > 0 ? (
                                        clientProgress.map((workout) => (
                                            <div key={workout._id} className="bg-gray-700/50 p-4 rounded-lg">
                                                <div className="flex justify-between mb-2">
                                                    <span className="text-gray-300">{new Date(workout.date).toLocaleDateString()}</span>
                                                    <span className="text-blue-400 font-bold">{workout.durationMinutes} mins</span>
                                                </div>
                                                <div className="text-sm text-gray-400">
                                                    {workout.exercises.map(e => e.name).join(', ')}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500">No recent workouts logged.</p>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="h-full flex items-center justify-center text-gray-500">
                                Select a client to view details
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerDashboard;
