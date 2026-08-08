interface Ticket {
  id?: string;
  asunto: string;
  descripcion: string;
  estado: string;
  prioridad: string;
  fecha?: string;
}

class ApiService {
  // ⚠️ REEMPLAZA ESTA URL CON LA URL REAL QUE TE DIO RENDER EN TU ACTIVIDAD 8
  private url = 'https://tu-servicio-real.onrender.com/api';

  async obtenerTickets(): Promise<Ticket[]> {
    try {
      const response = await fetch(`${this.url}/tickets`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      console.log('⚠️ No se detectó una URL real activa. Ejecutando datos de prueba local:');
      return [
        { id: '1', asunto: 'Falla de red', descripcion: 'Sin internet en oficina', estado: 'Abierto', prioridad: 'Alta' },
        { id: '2', asunto: 'Cambio de clave', descripcion: 'Usuario bloqueado', estado: 'Cerrado', prioridad: 'Baja' }
      ];
    }
  }

  async crearTicket(datos: Ticket): Promise<Ticket> {
    try {
      const response = await fetch(`${this.url}/tickets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
      });
      return await response.json();
    } catch (error) {
      console.log('\n⚠️ Simulando guardado de ticket nuevo:');
      return { id: '3', ...datos };
    }
  }
}

// Ejecución
async function probarConexion() {
  const api = new ApiService();
  
  console.log('--- PRUEBA 1: OBTENER TICKETS ---');
  const tickets = await api.obtenerTickets();
  console.log(tickets);

  console.log('\n--- PRUEBA 2: CREAR TICKET ---');
  const nuevo = await api.crearTicket({
    asunto: 'Error en sistema',
    descripcion: 'No carga el panel',
    estado: 'Abierto',
    prioridad: 'Media'
  });
  console.log('Respuesta:', nuevo);
}

probarConexion();

// Función de prueba que se ejecuta al presionar RUN
async function probarConexion() {
  console.log('Probando conexión con la API en Render...');
  const api = new ApiService();
  try {
    const tickets = await api.obtenerTickets();
    console.log('Respuesta recibida:', tickets);
  } catch (error) {
    console.error('Error al conectar con el backend:', error);
  }
}

probarConexion();