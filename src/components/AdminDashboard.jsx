import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';
import { Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [estadoFilter, setEstadoFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    demo: 0,
    closed: 0
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    filterLeads();
  }, [estadoFilter, leads]);

  const fetchLeads = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API}/leads`);
      
      if (response.data.success) {
        setLeads(response.data.leads);
        calculateStats(response.data.leads);
      }
    } catch (error) {
      console.error('Error fetching leads:', error);
      toast({
        title: 'Error',
        description: 'No se pudieron cargar los leads',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const calculateStats = (leadsData) => {
    const stats = {
      total: leadsData.length,
      new: leadsData.filter(l => l.estado === 'new').length,
      contacted: leadsData.filter(l => l.estado === 'contacted').length,
      demo: leadsData.filter(l => l.estado === 'demo').length,
      closed: leadsData.filter(l => l.estado === 'closed').length
    };
    setStats(stats);
  };

  const filterLeads = () => {
    if (estadoFilter === 'all') {
      setFilteredLeads(leads);
    } else {
      setFilteredLeads(leads.filter(lead => lead.estado === estadoFilter));
    }
  };

  const handleStatusChange = async (leadId, newStatus) => {
    try {
      const response = await axios.put(`${API}/leads/${leadId}/status`, {
        estado: newStatus
      });
      
      if (response.data.success) {
        // Update local state
        setLeads(prevLeads => 
          prevLeads.map(lead => 
            lead.id === leadId ? { ...lead, estado: newStatus } : lead
          )
        );
        
        toast({
          title: 'Estado actualizado',
          description: `Lead actualizado a ${getEstadoLabel(newStatus)}`
        });
        
        // Recalculate stats
        const updatedLeads = leads.map(lead => 
          lead.id === leadId ? { ...lead, estado: newStatus } : lead
        );
        calculateStats(updatedLeads);
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: 'Error',
        description: 'No se pudo actualizar el estado',
        variant: 'destructive'
      });
    }
  };

  const getEstadoBadgeVariant = (estado) => {
    switch (estado) {
      case 'new':
        return 'warning';
      case 'contacted':
        return 'info';
      case 'demo':
        return 'success';
      case 'closed':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const getEstadoLabel = (estado) => {
    const labels = {
      new: 'Nuevo',
      contacted: 'Contactado',
      demo: 'Demo',
      closed: 'Cerrado'
    };
    return labels[estado] || estado;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Panel de Administración</h1>
          <p className="dashboard-subtitle">Gestión de Leads PlantClinic</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <Card className="stat-card">
            <CardContent className="stat-content">
              <Users className="stat-icon" />
              <div>
                <div className="stat-number">{stats.total}</div>
                <div className="stat-label">Total Leads</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="stat-card">
            <CardContent className="stat-content">
              <Clock className="stat-icon new" />
              <div>
                <div className="stat-number">{stats.new}</div>
                <div className="stat-label">Nuevos</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="stat-card">
            <CardContent className="stat-content">
              <TrendingUp className="stat-icon contacted" />
              <div>
                <div className="stat-number">{stats.contacted}</div>
                <div className="stat-label">Contactados</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="stat-card">
            <CardContent className="stat-content">
              <CheckCircle className="stat-icon demo" />
              <div>
                <div className="stat-number">{stats.demo}</div>
                <div className="stat-label">En Demo</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter */}
        <Card className="filter-card">
          <CardContent className="filter-content">
            <label className="filter-label">Filtrar por estado:</label>
            <Select value={estadoFilter} onValueChange={setEstadoFilter}>
              <SelectTrigger className="filter-select">
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos ({stats.total})</SelectItem>
                <SelectItem value="new">Nuevos ({stats.new})</SelectItem>
                <SelectItem value="contacted">Contactados ({stats.contacted})</SelectItem>
                <SelectItem value="demo">En Demo ({stats.demo})</SelectItem>
                <SelectItem value="closed">Cerrados ({stats.closed})</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Leads Table */}
        <Card className="table-card">
          <CardHeader>
            <CardTitle>Leads ({filteredLeads.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="loading-state">Cargando leads...</div>
            ) : filteredLeads.length === 0 ? (
              <div className="empty-state">No hay leads para mostrar</div>
            ) : (
              <div className="table-wrapper">
                <table className="leads-table">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Empresa</th>
                      <th>Hectáreas</th>
                      <th>Cultivo</th>
                      <th>Estado</th>
                      <th>Fecha</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id}>
                        <td className="email-cell">{lead.email}</td>
                        <td>{lead.empresa}</td>
                        <td className="numeric-cell">{lead.hectareas}</td>
                        <td className="cultivo-cell">{lead.tipoCultivo}</td>
                        <td>
                          <Badge variant={getEstadoBadgeVariant(lead.estado)}>
                            {getEstadoLabel(lead.estado)}
                          </Badge>
                        </td>
                        <td className="date-cell">{formatDate(lead.timestamp)}</td>
                        <td>
                          <Select
                            value={lead.estado}
                            onValueChange={(newStatus) => handleStatusChange(lead.id, newStatus)}
                          >
                            <SelectTrigger className="status-select">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">Nuevo</SelectItem>
                              <SelectItem value="contacted">Contactado</SelectItem>
                              <SelectItem value="demo">Demo</SelectItem>
                              <SelectItem value="closed">Cerrado</SelectItem>
                            </SelectContent>
                          </Select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
