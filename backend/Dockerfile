# 1. IMAGEN BASE: Python Oficial (¡ACTUALIZADO A 3.12!)
FROM python:3.12-slim

# 2. CONFIGURACIÓN DE ENTORNO
# Mantenemos el locale para buena práctica, pero eliminamos PYTHONDONTWRITEBYTECODE
# ya que la nueva imagen no debería tener corrupción de bytecode.
ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    PYTHONIOENCODING=utf-8 

# 3. DIRECTORIO DE TRABAJO
WORKDIR /app

# 4. INSTALAR DEPENDENCIAS DEL SISTEMA (Para PostgreSQL/psycopg2)
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y \
        build-essential \
        libpq-dev && \
    rm -rf /var/lib/apt/lists/*

# 5. COPIAR Y INSTALAR DEPENDENCIAS DE PYTHON
COPY requirements.txt .
# ELIMINAMOS --no-binary :all: y --break-system-packages (no son necesarios en esta imagen estable)
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# 6. LIMPIEZA POST-INSTALACIÓN (Reducir el tamaño final)
RUN apt-get remove -y build-essential libpq-dev && \
    apt-get autoremove -y && \
    apt-get clean

# 7. COPIAR CÓDIGO
COPY . .

# 8. PUERTO
EXPOSE 8000

# 9. COMANDO DE INICIO (Debe ser correcto para esta imagen)
# Usaremos el comando gunicorn simple, ya que Python 3.12 es la versión por defecto.
CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]
