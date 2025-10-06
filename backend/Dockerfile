# 1. IMAGEN BASE: Usa una imagen ligera de Python (Basada en Debian)
FROM python:3.11-slim

# 2. DIRECTORIO DE TRABAJO
WORKDIR /app

# 3. INSTALAR DEPENDENCIAS DE COMPILACIÓN (¡CORRECCIÓN: USAMOS apt-get!)
# Necesario para compilar psycopg2-binary. Los paquetes equivalentes son:
# build-essential (incluye gcc) y libpq-dev (cabeceras de postgres)
RUN apt-get update && \
    apt-get install -y build-essential libpq-dev && \
    rm -rf /var/lib/apt/lists/*

# 4. COPIAR Y INSTALAR DEPENDENCIAS
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 5. LIMPIEZA (¡OPCIONAL PERO RECOMENDADO!)
# Eliminar las herramientas de compilación después de instalar para reducir el tamaño final de la imagen
# Nota: La limpieza ya está integrada en el paso 3 con rm -rf /var/lib/apt/lists/*
# Pero puedes añadir un paso para desinstalar los paquetes pesados:
RUN apt-get remove -y build-essential libpq-dev && \
    apt-get autoremove -y 

# 6. COPIAR CÓDIGO
COPY . .

# 7. PUERTO
EXPOSE 8000

# 8. COMANDO DE INICIO
CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]
