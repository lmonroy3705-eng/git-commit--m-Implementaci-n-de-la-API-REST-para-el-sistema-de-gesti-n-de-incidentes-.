// ==============================================
// LISTA DE TICKETS - Versión sin Angular
// ==============================================

// Definimos la estructura de un Ticket
interface Ticket {
  id: number;
  asunto: string;
  prioridad: 'Baja' | 'Media' | 'Alta';
  estado: string;
  descripcion?: string;
}

// Simulamos el Servicio API
class ApiService {
  private apiUrl = "https://helpdesk-api.onrender.com/api/tickets";
  private tickets: Ticket[] = [];
  private contadorId = 1;

  // Obtener todos los tickets
  async obtenerTickets(): Promise<Ticket[]> {
    console.log("📡 Consultando:", this.apiUrl);
    // Simulamos datos de ejemplo
    this.tickets = [
      { id: 1, asunto: "Equipo no enciende", prioridad: "Alta", estado: "Pendiente" },
      { id: 2, asunto: "Cambio de contraseña", prioridad: "Media", estado: "En proceso" },
      { id: 3, asunto: "Solicitud de software", prioridad: "Baja", estado: "Resuelto" }
    ];
    return new Promise(resolve => {
      setTimeout(() => resolve([...this.tickets]), 800);
    });
  }

  // Eliminar ticket
  async eliminarTicket(id: number): Promise<boolean> {
    console.log(`🗑️ Eliminando ticket #${id}`);
    this.tickets = this.tickets.filter(t => t.id !== id);
    return new Promise(resolve => {
      setTimeout(() => resolve(true), 500);
    });
  }
}

// Clase principal de la Lista
class ListaTickets {
  private tickets: Ticket[] = [];
  private apiService: ApiService;

  constructor() {
    this.apiService = new ApiService();
  }

  // Cargar todos los tickets
  async cargarTickets() {
    console.log("\n🔄 Cargando lista de tickets...");
    try {
      this.tickets = await this.apiService.obtenerTickets();
      this.mostrarTabla();
    } catch (error) {
      console.log("❌ Error al cargar:", error);
    }
  }

  // Eliminar un ticket
  async borrarTicket(id: number) {
    const exito = await this.apiService.eliminarTicket(id);
    if (exito) {
      this.tickets = this.tickets.filter(t => t.id !== id);
      console.log(`✅ Ticket #${id} eliminado`);
      this.mostrarTabla();
    }
  }

  // Mostrar tabla formateada
  mostrarTabla() {
    console.log("\n==================================================");
    console.log("               LISTA DE TICKETS");
    console.log("==================================================");
    
    if (this.tickets.length === 0) {
      console.log("      📭 No hay tickets registrados");
      console.log("==================================================\n");
      return;
    }

    console.log("ID   | Asunto                     | Prioridad | Estado");
    console.log("-----+----------------------------+-----------+-------------");
    
    this.tickets.forEach(t => {
      console.log(
        String(t.id).padEnd(4), "|",
        t.asunto.padEnd(27), "|",
        t.prioridad.padEnd(9), "|",
        t.estado
      );
    });
    console.log("==================================================\n");
  }
}

// ==============================================
// PRUEBA DE EJECUCIÓN
// ==============================================
console.log("======================================");
console.log("   SISTEMA - LISTA DE TICKETS");
console.log("======================================");

// Creamos la lista y cargamos datos
const miLista = new ListaTickets();

(async () => {
  // Cargar y mostrar todos
  await miLista.cargarTickets();

  // Eliminar un ticket de ejemplo
  await miLista.borrarTicket(2);
})();