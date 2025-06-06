// nahora-merchant/src/pages/Index.jsx (ou onde você colocou o arquivo)
import React, { useState, useEffect } from 'react';
import axios from '../lib/axios';

const Index = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('authToken');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      console.log('Tentando conectar a:', axios.getUri({ url: '/api/deliveries/active-deliveries', ...config }));
      const response = await axios.get('/api/deliveries/active-deliveries', config); // Endpoint correto
      setDeliveries(response.data);
    } catch (err) {
      console.error('Erro:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Entregas Ativas</h1>
      <ul>
        {deliveries.map((delivery) => (
          <li key={delivery._id}>{delivery.customer} - {delivery.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Index;