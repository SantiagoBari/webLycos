# ======================================================================
# ETAPA 1: "Builder"
# ======================================================================
FROM python:3.12-slim as builder

ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    PYTHONIOENCODING=utf-8

WORKDIR /app

# Instalar solo las dependencias de construcción
RUN apt-get update && \
    apt-get install -y \
        build-essential \
        libpq-dev \
        gcc && \
    rm -rf /var/lib/apt/lists/*

# Instalar las dependencias de Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt


# ======================================================================
# ETAPA 2: "Final" - La imagen limpia y de producción
# ======================================================================
FROM python:3.12-slim

ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    PYTHONIOENCODING=utf-8

WORKDIR /app

# Instalar solo las dependencias de RUNTIME (no las de construcción)
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        libpq5 && \
    rm -rf /var/lib/apt/lists/*

# Copiar las dependencias de Python YA INSTALADAS desde la etapa "builder"
COPY --from=builder /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin

# Copiar el código de la aplicación
COPY . .

# Puerto y Comando de inicio (sin cambios)
EXPOSE 8000
CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]
