import React, { useState, useEffect, useContext } from 'react';
import { Users, DollarSign, Wrench, Bell, LogOut } from 'lucide-react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const { user, logout, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const [stats, setStats] = useState({ members: 0, trainers: 0, revenue: 0, activeMembers: 0 });
    const [members, setMembers] = useState([]);
    const [equipment, setEquipment] = useState([]);
    const [newEquipment, setNewEquipment] = useState('');

    useEffect(() => {
        if (!loading && user?.role !== 'admin') {
            navigate('/');
        }
        if (!loading && user?.role === 'admin') {
            fetchStats();
            fetchMembers();
            fetchEquipment();
        }
    }, [user, loading, navigate]);

    if (loading) return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Loading...</div>;

    const fetchStats = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/admin/stats', {
                headers: { Authorization: `Bearer ${user.token}` },
            });
            const data = await res.json();
            setStats(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchMembers = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/admin/members', {
                headers: { Authorization: `Bearer ${user.token}` },
            });
            const data = await res.json();
            setMembers(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchEquipment = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/admin/equipment', {
                headers: { Authorization: `Bearer ${user.token}` },
            });
            const data = await res.json();
            setEquipment(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddEquipment = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:5000/api/admin/equipment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({ name: newEquipment }),
            });
            setNewEquipment('');
            fetchEquipment();
        } catch (error) {
            console.error(error);
        }
    };

    const toggleMemberStatus = async (id, currentStatus) => {
        try {
            await fetch(`http://localhost:5000/api/admin/member/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({ isActive: !currentStatus }),
            });
            fetchMembers();
            fetchStats();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <button onClick={logout} className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                        <LogOut className="w-6 h-6 text-red-400" />
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-gray-400">Total Members</h3>
                            <Users className="text-blue-400" />
                        </div>
                        <p className="text-3xl font-bold">{stats.members}</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-gray-400">Active Members</h3>
                            <Users className="text-green-400" />
                        </div>
                        <p className="text-3xl font-bold">{stats.activeMembers}</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-gray-400">Monthly Revenue</h3>
                            <DollarSign className="text-yellow-400" />
                        </div>
                        <p className="text-3xl font-bold">${stats.revenue}</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-gray-400">Trainers</h3>
                            <Users className="text-purple-400" />
                        </div>
                        <p className="text-3xl font-bold">{stats.trainers}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Member Management */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                        <h2 className="text-xl font-bold mb-4">Member Management</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="text-gray-400 border-b border-gray-700">
                                        <th className="pb-3">Name</th>
                                        <th className="pb-3">Plan</th>
                                        <th className="pb-3">Status</th>
                                        <th className="pb-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {members.map((member) => (
                                        <tr key={member._id} className="border-b border-gray-700/50">
                                            <td className="py-3">{member.name}</td>
                                            <td className="py-3">{member.membership?.plan?.name || 'None'}</td>
                                            <td className="py-3">
                                                <span className={`px-2 py-1 rounded-full text-xs ${member.membership?.isActive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                                    {member.membership?.isActive ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td className="py-3">
                                                <button
                                                    onClick={() => toggleMemberStatus(member._id, member.membership?.isActive)}
                                                    className="text-blue-400 hover:text-blue-300"
                                                >
                                                    {member.membership?.isActive ? 'Deactivate' : 'Activate'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Equipment Management */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Equipment Tracker</h2>
                            <Wrench className="text-gray-400" />
                        </div>

                        <form onSubmit={handleAddEquipment} className="flex gap-2 mb-6">
                            <input
                                type="text"
                                placeholder="New Equipment Name"
                                className="flex-1 bg-gray-700 p-2 rounded border border-gray-600 focus:outline-none"
                                value={newEquipment}
                                onChange={(e) => setNewEquipment(e.target.value)}
                                required
                            />
                            <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">Add</button>
                        </form>

                        <div className="space-y-3">
                            {equipment.map((item) => (
                                <div key={item._id} className="flex justify-between items-center bg-gray-700/30 p-3 rounded-lg">
                                    <span>{item.name}</span>
                                    <span className={`px-2 py-1 rounded-full text-xs ${item.status === 'Operational' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                                        }`}>
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
