from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Load the trained model with the correct path
model_path = os.path.join('models', 'symptom_checker_model.h5')
model = tf.keras.models.load_model(model_path)

@app.route('/check_symptoms', methods=['POST'])
def check_symptoms():
    try:
        data = request.json['symptoms']
        data = np.array(data).reshape(1, -1)  # Adjust the shape if necessary
        predictions = model.predict(data)
        response = {
            'predictions': predictions.tolist()
        }
        return jsonify(response)
    except Exception as e:
        return handle_exception(e)

@app.errorhandler(Exception)
def handle_exception(e):
    response = {
        "error": str(e)
    }
    return jsonify(response), 500

if __name__ == '__main__':
    app.run(debug=True)
