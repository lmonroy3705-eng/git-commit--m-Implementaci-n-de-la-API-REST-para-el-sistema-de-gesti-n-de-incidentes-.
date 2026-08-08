// ==============================================
// FORMULARIO DE REGISTRO DE TICKETS
// Versión adaptada para ejecutar en OneCompiler
// ==============================================

// Definimos la estructura de un Ticket
interface Ticket {
  asunto: string;
  descripcion: string;
  prioridad: 'Baja' | 'Media' | 'Alta';
  fecha?: Date;
}

// Simulamos el Servicio API
class ApiService {
  private apiUrl = "https://helpdesk-api.onrender.com/api/tickets";

  async crearTicket(datos: Ticket): Promise<Ticket> {
    console.log("📡 Enviando a la API:", this.apiUrl);
    console.log("📋 Datos:", datos);
    
    // Simulamos respuesta exitosa (sin llamar a red para que funcione aquí)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...datos, fecha: new Date() });
      }, 1000);
    });
  }
}

// Clase principal del Formulario
class FormularioTicket {
  private formulario: Ticket;
  private apiService: ApiService;

  constructor() {
    this.formulario = {
      asunto: "",
      descripcion: "",
      prioridad: "Media"
    };
    this.apiService = new ApiService();
  }

  // Validar el formulario
  validar(): boolean {
    if (this.formulario.asunto.length < 5) {
      console.log("❌ El asunto debe tener al menos 5 caracteres");
      return false;
    }
    if (this.formulario.descripcion.trim() === "") {
      console.log("❌ La descripción es obligatoria");
      return false;
    }
    return true;
  }

  // Cargar datos desde entrada simulada
  cargarDatos(asunto: string, descripcion: string, prioridad: Ticket['prioridad'] = 'Media') {
    this.formulario = { asunto, descripcion, prioridad };
    console.log("✅ Datos cargados:", this.formulario);
  }

  // Enviar el formulario
  async enviar() {
    console.log("\n🔄 Enviando formulario...");
    
    if (!this.validar()) {
      console.log("⚠️ Corrige los errores antes de enviar");
      return;
    }

    try {
      const respuesta = await this.apiService.crearTicket(this.formulario);
      console.log("✅ ✅ Ticket guardado con éxito!");
      console.log("📋 Respuesta del servidor:", respuesta);
      this.limpiar();
    } catch (error) {
      console.log("❌ Error al guardar:", error);
    }
  }

  // Limpiar formulario
  limpiar() {
    this.formulario = { asunto: "", descripcion: "", prioridad: "Media" };
    console.log("🗑️ Formulario limpiado");
  }
}

// ==============================================
// PRUEBA DE EJECUCIÓN
// ==============================================
console.log("======================================");
console.log("   SISTEMA DE REGISTRO DE TICKETS");
console.log("======================================\n");

// Creamos el formulario
const miFormulario = new FormularioTicket();

// Cargamos datos de ejemplo
miFormulario.cargarDatos(
  "Equipo fallando",
  "La computadora no enciende al iniciar sesión",
  "Alta"
);

// Enviamos el formulario
miFormulario.enviar();