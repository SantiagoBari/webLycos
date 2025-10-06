# 1. IMAGEN BASE: Usa una imagen ligera de Python (Basada en Debian)
FROM python:3.11-slim

# 2. DIRECTORIO DE TRABAJO
WORKDIR /app

# 3. CONFIGURAR LOCALE Y ENCODING (¡NUEVO Y CRUCIAL!)
# Esto resuelve el error de "can't concat IncrementalDecoder to bytes" en la instalación de pip.
ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    PYTHONIOENCODING=utf-8

# 4. INSTALAR DEPENDENCIAS DE COMPILACIÓN
# Necesario para compilar psycopg2-binary
RUN apt-get update && \
    apt-get install -y build-essential libpq-dev && \
    rm -rf /var/lib/apt/lists/*

# 5. COPIAR Y INSTALAR DEPENDENCIAS
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 6. LIMPIEZA
RUN apt-get remove -y build-essential libpq-dev && \
    apt-get autoremove -y 

# 7. COPIAR CÓDIGO
COPY . .

# 8. PUERTO
EXPOSE 8000

# 9. COMANDO DE INICIO
CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]
