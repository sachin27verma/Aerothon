from flask import Flask, request, jsonify
from route_planning import fetch_route

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, World!"

@app.route  ('/api/v1/getroute', methods=['POST'])
def get_route():
    data = request.get_json()
    print(data["data"][0])
    response = fetch_route(data["data"][0])
    print(response)
    return jsonify(response)  # Return the data as a JSON response

if __name__ == '__main__':
    app.run(debug=True, port=8000)
