import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UnknownList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://cys.onrender.com/api/v1/getInvalid");
                const fetchedUsers = res.data.data;
                setUsers(fetchedUsers);
                const notify = (message) => toast.error(message);
                if (fetchedUsers.length > 0) {
                    notify(`Recently added: ${fetchedUsers[fetchedUsers.length - 1].email}`);
                }
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
        <>
            <ToastContainer />
            <div className="w-screen h-auto bg-slate-300 overflow-scroll py-8">
                <p className="text-3xl text-center p-5 text-red-400">INVALID USERS LIST</p>
                <p className="text-2xl text-center text-red-400">Total users: {users.length}</p>
                <div className="flex justify-center">
                    <table className="min-w-[85%] border-collapse border border-black">
                        <thead>
                            <tr className="border border-black bg-gray-200">
                                <th className="border border-black p-3">EMAIL</th>
                                <th className="border border-black p-3">PASSWORD</th>
                                <th className="border border-black p-3">BREACH TIME</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="border border-black">
                                    <td className="border border-black p-4 text-center">{user.email}</td>
                                    <td className="border border-black p-4 text-center">{user.password}</td>
                                    <td className="border border-black p-4 text-center">{user.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default UnknownList;
