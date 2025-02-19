# Usa una imagen oficial de Node.js v23.7.0 como base
FROM node:23.7.0

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Construye el proyecto Astro
RUN npm run build

# Expone los puertos en los que los servidores escucharán
EXPOSE 3000
EXPOSE 4321

# Comando para iniciar ambos servidores
CMD ["sh", "-c", "npm run preview & node src/server/server.js"]