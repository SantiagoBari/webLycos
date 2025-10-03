# 1. IMAGEN BASE: Python 3.11 en versión ligera
FROM python:3.11-slim

# 2. DIRECTORIO DE TRABAJO
WORKDIR /app

# 3. COPIAR Y INSTALAR DEPENDENCIAS: Para aprovechar el cache de Docker
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 4. COPIAR CÓDIGO: Copia el código de tu app.py
COPY . .

# 5. PUERTO: Este es el puerto interno del contenedor de Flask (8000)
EXPOSE 8000

# 6. COMANDO DE INICIO: Ejecuta Gunicorn para servir la aplicación Flask
# La sintaxis 'app:app' significa: "Busca la aplicación Flask llamada 'app' dentro del archivo 'app.py'"
CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]
