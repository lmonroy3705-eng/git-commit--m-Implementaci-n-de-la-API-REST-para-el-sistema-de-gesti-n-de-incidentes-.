interface Ticket {
  id?: string;
  asunto: string;
  descripcion: string;
  estado: string;
  prioridad: string;
}

class ApiService {
  private url = 'https://helpdesk-backend-render.onrender.com/api';

  async obtenerTickets(): Promise<Ticket[]> {
    try {
      const response = await fetch(`${this.url}/tickets`);
      if (!response.ok) throw new Error('Servidor remoto inaccesible');
      return await response.json();
    } catch (error) {
      console.log('⚠️ Sin conexión directa al backend remoto. Cargando datos de prueba:');
      return [
        { id: '1', asunto: 'Error en impresoras', descripcion: 'Piso 2', estado: 'Abierto', prioridad: 'Alta' },
        { id: '2', asunto: 'Bloqueo de usuario', descripcion: 'Falla en credenciales', estado: 'En Proceso', prioridad: 'Media' }
      ];
    }
  }
}

// Función que ejecuta la prueba en la consola de OneCompiler
async function ejecutarPrueba() {
  console.log('=== INICIANDO PRUEBA DE SERVICIO ===');
  const api = new ApiService();
  const datos = await api.obtenerTickets();
  console.log('Resultados:', datos);
}

ejecutarPrueba();