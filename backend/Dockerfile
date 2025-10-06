# 1. IMAGEN BASE: Usa una imagen ligera de Python
FROM python:3.11-slim

# 2. DIRECTORIO DE TRABAJO
WORKDIR /app

# 3. INSTALAR DEPENDENCIAS DE COMPILACIÓN (¡NUEVO!)
# apk add es el gestor de paquetes de Alpine Linux
# Necesario para compilar psycopg2-binary
RUN apk add --no-cache gcc musl-dev postgresql-dev

# 4. COPIAR Y INSTALAR DEPENDENCIAS
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 5. LIMPIEZA (¡OPCIONAL PERO RECOMENDADO!)
# Eliminar las herramientas de compilación después de instalar para reducir el tamaño final de la imagen
RUN apk del build-base postgresql-dev 

# 6. COPIAR CÓDIGO
COPY . .

# 7. PUERTO
EXPOSE 8000

# 8. COMANDO DE INICIO
CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]
