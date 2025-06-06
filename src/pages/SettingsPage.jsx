// src/pages/SettingsPage.jsx
import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import axios from '@/lib/axios';
import styles from './SettingsPage.module.css';

const SettingsPage = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) throw new Error('Faça login novamente.');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const response = await axios.get('/api/users/me', config);
        setUser(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Erro ao carregar configurações.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <DashboardLayout><p>Carregando...</p></DashboardLayout>;
  if (error) return <DashboardLayout><p>{error}</p></DashboardLayout>;

  return (
    <DashboardLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>Configurações</h1>
        <p>Email: {user.email}</p>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;