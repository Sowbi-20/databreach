import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

const Allusers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://cys.onrender.com/api/v1/getusers");
                setUsers(res.data.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch users");
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="animate-spin">
                    <Loader2 />
                </div>
            </div>
        );
    }
    if (error) {
        return <div>{error}</div>;
    }
    return (
        <div className="w-screen min-h-screen bg-slate-300">
            <p className="text-3xl text-center py-5">ALL USERS</p>
            <p className="text-2xl text-center text-blue-500 mb-5">Total users: {users.length}</p>
            <div className="w-full flex justify-center items-center">
                <table className="w-3/4 border border-black bg-white">
                    <thead>
                        <tr className="border border-black bg-gray-200">
                            <th className="p-3 text-left border border-black">EMAIL</th>
                            <th className="p-3 text-left">PASSWORD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="border-b border-black">
                                <td className="p-3 border border-black">{user.email}</td>
                                <td className="p-3">{user.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;
