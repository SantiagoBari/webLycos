from flask import Flask, jsonify

app = Flask(__name__)

# Definimos una ruta simple de "salud" (health check)
@app.route('/api/status', methods=['GET'])
def status():
    return jsonify({"status": "running", "service": "Flask API"}), 200

# Esta será la API que tu Next.js llamará
@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        "message": "Datos de Lykos desde Flask",
        "items": [
            {"id": 1, "name": "Web3 Hosting"},
            {"id": 2, "name": "Blockchain Solutions"}
        ]
    }
    return jsonify(data)

# No es necesario agregar if __name__ == '__main__': aquí
# porque Gunicorn se encargará de ejecutar la app.
