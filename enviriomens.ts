export const environment = {
  production: false,
  apiUrl: 'https://helpdesk-backend-render.onrender.com/api' // Tu URL de backend en la nube
};

// Instrucción para imprimir la salida en consola
console.log('=== CONFIGURACIÓN DE ENTORNO ===');
console.log('Modo Producción:', environment.production);
console.log('URL del Backend:', environment.apiUrl);