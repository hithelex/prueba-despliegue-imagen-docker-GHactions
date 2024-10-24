
# Usa una imagen base de Node.js
FROM node:18



# Crea un directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expone el puerto (si lo necesitas)
EXPOSE 3000

# Ejecuta la aplicación
CMD ["node", "index.js"]