//Script para poder indicarle a vercel los environments que debe utilizar

const fs = require('fs');

const dir = './src/environments';
const targetFile = './src/environments/environment.ts';
const targetFileProd = './src/environments/environment.prod.ts';

// Crear el contenido leyendo las variables DE VERCEL (no las tuyas)
const envConfigFile = `export const environment = {
    production: true,
    emailjs: {
        serviceId: '${process.env.EMAILJS_SERVICE_ID}',
        templateId: '${process.env.EMAILJS_TEMPLATE_ID}',
        publicKey: '${process.env.EMAILJS_PUBLIC_KEY}'
    }
};
`;

// Crear carpeta si no existe
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Escribir los archivos
fs.writeFileSync(targetFile, envConfigFile);
fs.writeFileSync(targetFileProd, envConfigFile);

console.log('Environment generado correctamente desde Vercel');