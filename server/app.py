from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, World!"



    # fetch data from http://api.aviationstack.com/v1/flights
    



if __name__ == '__main__':
    app.run(debug=True, port=3000)
