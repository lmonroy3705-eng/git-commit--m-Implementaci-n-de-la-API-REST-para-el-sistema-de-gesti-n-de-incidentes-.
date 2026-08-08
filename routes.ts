// ==============================================
// CONFIGURACIÓN DE RUTAS - Versión sin Angular
// ==============================================

// Definimos la estructura de una Ruta
interface Ruta {
  path: string;
  nombre: string;
  redirigirA?: string;
  icono?: string;
}

// Clase que simula el Sistema de Rutas
class SistemaRutas {
  private rutas: Ruta[] = [];

  constructor() {
    // Definimos las rutas (igual que en tu código original)
    this.rutas = [
      { 
        path: '', 
        nombre: 'Raíz',
        redirigirA: '/dashboard',
        icono: '🏠'
      },
      { 
        path: 'dashboard', 
        nombre: 'Panel Principal',
        icono: '📊'
      },
      { 
        path: 'registrar', 
        nombre: 'Registrar Ticket',
        icono: '➕'
      },
      { 
        path: 'tickets', 
        nombre: 'Lista de Tickets',
        icono: '📋'
      }
    ];
  }

  // Mostrar todas las rutas configuradas
  mostrarRutas() {
    console.log("\n==================================================");
    console.log("         SISTEMA DE RUTAS - HELP DESK");
    console.log("==================================================");
    console.log("  Ruta (URL)          | Acción / Componente");
    console.log("----------------------+---------------------------");

    this.rutas.forEach(r => {
      const accion = r.redirigirA 
        ? `➡️ Redirige a ${r.redirigirA}` 
        : `✅ Carga: ${r.nombre}`;
      
      console.log(
        `  /${r.path.padEnd(18)} | ${accion}`
      );
    });

    console.log("==================================================\n");
  }

  // Simular navegación
  navegarA(ruta: string) {
    console.log(`\n🔄 Navegando hacia: /${ruta}`);
    
    const encontrada = this.rutas.find(r => r.path === ruta);
    
    if (encontrada) {
      if (encontrada.redirigirA) {
        console.log(`🔁 Redirigiendo automáticamente a: ${encontrada.redirigirA}`);
      } else {
        console.log(`✅ Página cargada: ${encontrada.nombre}`);
      }
    } else {
      console.log("❌ Ruta NO encontrada - Página 404");
    }
    console.log("--------------------------------------------------\n");
  }
}

// ==============================================
// EJECUCIÓN DEL PROGRAMA
// ==============================================
console.log("======================================");
console.log("   CONFIGURACIÓN DE RUTAS CARGADA");
console.log("======================================");

// Creamos el sistema de rutas
const rutasSistema = new SistemaRutas();

// Mostrar lista completa de rutas
rutasSistema.mostrarRutas();

// Simular navegaciones
rutasSistema.navegarA("");        // Redirige a dashboard
rutasSistema.navegarA("dashboard"); // Carga panel principal
rutasSistema.navegarA("registrar"); // Carga formulario
rutasSistema.navegarA("tickets");   // Carga lista
rutasSistema.navegarA("invalida");  // Ruta no existe