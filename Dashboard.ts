interface Ticket {
  id?: string;
  asunto: string;
  descripcion: string;
  estado: 'Pendiente' | 'Resuelto';
  prioridad: string;
}

class DashboardComponent {
  total = 0;
  pendientes = 0;
  resueltos = 0;

  tickets: Ticket[] = [
    { id: '1', asunto: 'Impresora no funciona', descripcion: 'Piso 2', estado: 'Pendiente', prioridad: 'Alta' },
    { id: '2', asunto: 'Restablecer clave', descripcion: 'Usuario Juan', estado: 'Resuelto', prioridad: 'Baja' },
    { id: '3', asunto: 'Falla de red', descripcion: 'Sistemas', estado: 'Pendiente', prioridad: 'Media' }
  ];

  ngOnInit() {
    this.calcularMetricas();
  }

  calcularMetricas() {
    this.total = this.tickets.length;
    this.pendientes = this.tickets.filter(t => t.estado === 'Pendiente').length;
    this.resueltos = this.tickets.filter(t => t.estado === 'Resuelto').length;
  }

  imprimirPanel() {
    console.log('=== PANEL DE CONTROL - HELP DESK ===');
    console.log(`Total Tickets : ${this.total}`);
    console.log(`Pendientes    : ${this.pendientes}`);
    console.log(`Resueltos     : ${this.resueltos}`);
  }
}

// Ejecución directa para comprobar la salida
const dashboard = new DashboardComponent();
dashboard.ngOnInit();
dashboard.imprimirPanel();