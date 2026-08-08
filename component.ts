// ==============================================
// COMPONENTE PRINCIPAL - SISTEMA DE HELP DESK
// Versión adaptada para ejecutar en OneCompiler
// ==============================================

// Simulador de Navegación y Plantilla
class AppRoot {
  // Estilos simulados
  private estilos = {
    cabecera: "background: #1e293b; color: white; padding: 15px 30px;",
    enlace: "color: #93c5fd; margin-right: 20px; text-decoration: none; font-weight: bold;",
    contenido: "max-width: 1200px; margin: 20px auto;"
  };

  // Estado de la página actual
  private paginaActual: string = "dashboard";

  constructor() {
    console.log("✅ Componente Principal cargado");
  }

  // Mostrar la plantilla completa
  mostrarPlantilla() {
    console.log("\n".repeat(1));
    console.log("╔════════════════════════════════════════════════════════╗");
    console.log("║           🏠   SISTEMA DE HELP DESK                     ║");
    console.log("╚════════════════════════════════════════════════════════╝");
    console.log("");
    console.log("  🧭 MENÚ DE NAVEGACIÓN:");
    console.log("  ──────────────────────────────────────────────────────");
    console.log("  🔗 /dashboard      → 📊 Panel Principal");
    console.log("  🔗 /registrar      → ➕ Nuevo Ticket");
    console.log("  🔗 /tickets        → 📋 Ver Tickets");
    console.log("");
    console.log("  📍 Estilos aplicados:");
    console.log(`    • Cabecera: ${this.estilos.cabecera}`);
    console.log(`    • Enlaces: ${this.estilos.enlace}`);
    console.log("");
    console.log("╔════════════════════════════════════════════════════════╗");
    console.log(`║  📄 CONTENIDO ACTUAL: Página /${this.paginaActual.padEnd(43)}║`);
    console.log("║                                                        ║");
    console.log("║  (Aquí se carga el contenido según la ruta seleccionada) ║");
    console.log("║  <router-outlet>  →  Componente dinámico cargado       ║");
    console.log("╚════════════════════════════════════════════════════════╝");
  }

  // Simular navegación entre páginas
  navegar(ruta: string) {
    console.log(`\n🔄 Navegando a: ${ruta}`);
    
    const rutasPermitidas = ['dashboard', 'registrar', 'tickets'];
    
    if (rutasPermitidas.includes(ruta.replace('/', ''))) {
      this.paginaActual = ruta.replace('/', '');
      console.log(`✅ Página cambiada a: /${this.paginaActual}`);
      this.mostrarPlantilla();
    } else {
      console.log("❌ Ruta no encontrada - Página 404");
    }
  }
}

// ==============================================
// EJECUCIÓN DEL PROGRAMA
// ==============================================
console.log("======================================");
console.log("   SISTEMA DE HELP DESK - INICIADO");
console.log("======================================");

// Creamos el componente principal
const app = new AppRoot();

// Mostrar la página inicial
app.mostrarPlantilla();

// Simulamos navegación entre páginas
setTimeout(() => app.navegar('/registrar'), 1500);
setTimeout(() => app.navegar('/tickets'), 3000);