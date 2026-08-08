// ==============================================
// SERVICIO API - HELP DESK
// ==============================================

interface Ticket {
  id?: string;
  asunto: string;
  descripcion: string;
  estado: string;
  prioridad: string;
}

class ApiService {
  private url = 'https://helpdesk-api.onrender.com/api';

  async obtenerTickets(): Promise<Ticket[]> {
    try {
      console.log("🔄 Conectando al servidor...");
      const response = await fetch(`${this.url}/tickets`);
      
      if (!response.ok) {
        throw new Error(`Servidor respondió con código: ${response.status}`);
      }
      
      const datos = await response.json();
      console.log("✅ Datos recibidos del servidor:");
      return datos;
      
    } catch (error) {
      console.log("⚠️  Sin conexión al servidor. Cargando datos de prueba:");
      return [
        { 
          id: '1', 
          asunto: 'Error en impresoras', 
          descripcion: 'Piso 2, impresora no imprime', 
          estado: 'Abierto', 
          prioridad: 'Alta' 
        },
        { 
          id: '2', 
          asunto: 'Bloqueo de usuario', 
          descripcion: 'Falla en credenciales', 
          estado: 'En proceso', 
          prioridad: 'Media' 
        }
      ];
    }
  }
}

// ==============================================
// FUNCIÓN DE PRUEBA Y EJECUCIÓN
// ==============================================
async function ejecutarPrueba() {
  console.log("══════════════════════════════════════════════════════");
  console.log("       SISTEMA DE CONSULTA DE TICKETS");
  console.log("══════════════════════════════════════════════════════\n");

  const servicio = new ApiService();
  const tickets = await servicio.obtenerTickets();

  console.log("\n══════════════════════════════════════════════════════");
  console.log("               LISTA DE TICKETS");
  console.log("══════════════════════════════════════════════════════");
  console.log("ID   | Asunto                     | Prioridad | Estado");
  console.log("─────┼──────────────────────────────┼───────────┼──────────────");

  tickets.forEach(t => {
    console.log(
      String(t.id).padEnd(4), " | ",
      t.asunto.padEnd(26), " | ",
      t.prioridad.padEnd(9), " | ",
      t.estado
    );
  });

  console.log("══════════════════════════════════════════════════════");
  console.log(`✅ Total de tickets: ${tickets.length}`);
  console.log("✅ Ejecución finalizada\n");
}

// 🚀 INICIAMOS LA PRUEBA
ejecutarPrueba();
