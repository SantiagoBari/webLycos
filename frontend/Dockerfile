# ETAPA 1: CONSTRUCCIÓN (Build Stage)
FROM node:20-alpine AS builder
WORKDIR /app

# Copia e instala dependencias de desarrollo y producción
COPY package.json package-lock.json ./
RUN npm install

# Copia el código fuente
COPY . .

# Genera el código optimizado para producción
RUN npm run build

# ----------------------------------------------------------------------

# ETAPA 2: PRODUCCIÓN (Runner Stage)
FROM node:20-alpine AS runner
WORKDIR /app

# Copiar solo lo esencial de la etapa de construcción
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# El puerto por defecto para el servidor de Next.js en producción
ENV PORT 3000
EXPOSE 3000

# Next.js usa 'npm start' para correr el servidor optimizado
CMD ["npm", "start"]
