import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import AuthContext from '../context/AuthContext';

const Plans = () => {
    const [plans, setPlans] = useState([]);
    const { user, login } = useContext(AuthContext); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/member/plans');
                const data = await res.json();
                setPlans(data);
            } catch (error) {
                console.error('Error fetching plans:', error);
            }
        };
        fetchPlans();
    }, []);

    const handlePurchase = async (planId) => {
        const token = user.token;
        try {
            const res = await fetch('http://localhost:5000/api/member/purchase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: Bearer ${token},
                },
                body: JSON.stringify({ planId }),
            });

            if (res.ok) {
                const updatedUser = await res.json();
                // Ideally update context, but for now alert and redirect
                alert('Membership activated successfully!');
                // Update local storage user
                const currentUser = JSON.parse(localStorage.getItem('user'));
                currentUser.membership = updatedUser.membership;
                localStorage.setItem('user', JSON.stringify(currentUser));
                window.location.reload(); // Force reload to update context
            } else {
                alert('Purchase failed');
            }
        } catch (error) {
            console.error('Purchase error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">Choose Your Plan</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div key={plan._id} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex flex-col">
                            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                            <div className="text-4xl font-bold mb-6 text-blue-400">
                                ${plan.price}
                                <span className="text-lg text-gray-400 font-normal">/{plan.durationMonths === 1 ? 'mo' : 'yr'}</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="bg-green-500/20 p-1 rounded-full">
                                            <Check className="w-4 h-4 text-green-500" />
                                        </div>
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handlePurchase(plan._id)}
                                disabled={user?.membership?.isActive}
                                className={`w-full py-3 rounded-xl font-bold transition-colors ${user?.membership?.isActive
                                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-500'
                                    }`}
                            >
                                {user?.membership?.isActive ? 'Plan Active' : 'Choose Plan'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Plans;