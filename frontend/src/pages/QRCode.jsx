import React, { useContext } from 'react';
import QRCode from 'react-qr-code';
import AuthContext from '../context/AuthContext';

const QRCodePage = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <div className="bg-white p-8 rounded-3xl shadow-2xl text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Gym Access Pass</h1>
                <div className="bg-gray-100 p-4 rounded-xl inline-block">
                    <QRCode value={user?._id || ''} size={256} />
                </div>
                <p className="text-gray-500 mt-6 font-mono text-sm">
                    ID: {user?._id}
                </p>
                <p className="text-gray-900 font-medium mt-2">
                    Scan at entrance
                </p>
            </div>
        </div>
    );
};

export default QRCodePage;
