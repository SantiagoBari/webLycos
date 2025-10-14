import os
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

# Inicialización de la aplicación Flask
app = Flask(__name__)

# ----------------------------------------------------
# 1. CONFIGURACIÓN DE LA BASE DE DATOS (CRUCIAL)
# ----------------------------------------------------

# Obtener variables de entorno definidas en docker-compose.yml
DB_USER = os.environ.get("POSTGRES_USER")
DB_PASS = os.environ.get("POSTGRES_PASSWORD")
DB_NAME = os.environ.get("POSTGRES_DB")
DB_HOST = os.environ.get("DATABASE_HOST")
DB_PORT = os.environ.get("DATABASE_PORT")

# URI de conexión para SQLAlchemy: postgresql://user:password@host:port/dbname
app.config['SQLALCHEMY_DATABASE_URI'] = (
    f"postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
)
# Desactivar seguimiento de modificaciones para ahorrar recursos
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ----------------------------------------------------
# 2. MODELO DE DATOS DE EJEMPLO (SQLAlchemy ORM)
# ----------------------------------------------------

class Producto(db.Model):
    """Define un modelo simple para la tabla 'producto'."""
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), unique=True, nullable=False)
    precio = db.Column(db.Float, nullable=False)

    def to_dict(self):
        """Convierte la instancia del modelo a un diccionario para JSON."""
        return {
            'id': self.id,
            'nombre': self.nombre,
            'precio': self.precio
        }

# ----------------------------------------------------
# 3. INICIALIZACIÓN DE LA BASE DE DATOS (CORREGIDO)
# ----------------------------------------------------
# Este bloque ahora se ejecuta una sola vez cuando el contenedor arranca,
# creando las tablas y los datos iniciales de forma segura.
with app.app_context():
    # Crea las tablas definidas por los modelos (e.g., Producto)
    db.create_all()

    # Opcional: Añadir datos iniciales si la tabla está vacía
    if Producto.query.count() == 0:
        db.session.add(Producto(nombre='Hosting Web3 Básico', precio=10.50))
        db.session.add(Producto(nombre='Clases de Doma 1v1', precio=50.00))
        db.session.commit()
        print("Datos iniciales de productos creados.")


# ----------------------------------------------------
# 4. RUTAS DE LA API
# ----------------------------------------------------

# Ruta de estatus
@app.route('/api/status', methods=['GET'])
def status():
    # Intenta hacer una consulta simple para verificar la conexión a la DB
    try:
        db.session.execute(db.text('SELECT 1'))
        db_status = "Conectado a PostgreSQL"
    except Exception as e:
        db_status = f"Fallo de conexión a DB: {e}"

    return jsonify({
        "status": "running",
        "service": "Flask API",
        "db_status": db_status
    }), 200

# Ruta de datos que usa la base de datos
@app.route('/api/productos', methods=['GET'])
def get_productos():
    # Consulta todos los productos en la base de datos
    productos = Producto.query.all()

    # Convierte la lista de objetos Producto a una lista de diccionarios JSON
    return jsonify([p.to_dict() for p in productos])
