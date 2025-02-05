from flask import Flask, render_template, request, jsonify

from chat import get_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.get("/")
def index_get():
    return render_template("base.html")

@app.post("/predict")
def predict():
    data = request.get_json()
    print(f"Received data: {data}")
    
    text = data.get("message")
    if not text:
        return jsonify({"error": "No message provided"}), 400
    
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)

if __name__=="__main__":
    app.run(debug=True)
