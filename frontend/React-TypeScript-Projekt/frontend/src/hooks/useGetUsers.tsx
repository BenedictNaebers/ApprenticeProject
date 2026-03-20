import axios from "axios";
import { useEffect, useState } from "react";

// Hier wird der "User" mit all seinen Attributen definiert
export interface User {
  id: number;
  name: string;
  gender: string;
  age: number;
  married: boolean;
  email: string;
}

export default function useGetUsers() {
  const [userData, setUserData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>(`${import.meta.env.VITE_API_URL}/api/users`);
      setUserData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
    setLoading(false); 
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { userData, loading };
}





