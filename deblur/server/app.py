from flask import Flask, request, jsonify
from flascors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    print("Received file:", file.filename)
    # TODO: Save and process the file
    return jsonify({"message": "File uploaded successfully"})

if __name__ == '__main__':
    app.run(debug=True)