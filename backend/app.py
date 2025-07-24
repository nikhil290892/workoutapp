from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import datetime

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017")
db = client.workout_db

@app.route("/api/logs", methods=["POST"])
def log_workout():
    data = request.json
    data["timestamp"] = datetime.datetime.utcnow()
    db.logs.insert_one(data)
    return jsonify({"status": "success"}), 201

@app.route("/api/logs/<username>", methods=["GET"])
def get_logs(username):
    logs = list(db.logs.find({"user": username}, {"_id": 0}))
    return jsonify(logs)

if __name__ == "__main__":
    app.run(debug=True)