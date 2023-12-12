from flask import request,Flask,jsonify
from flask_cors import CORS
from flask_restful import Api, Resource,reqparse
import util

app = Flask(__name__)
api=Api(app)
CORS(app)
@app.route('/get_locations_names')
def get_locations_names():
    response=jsonify({
        "locations":util.get_location_names()
    })
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/get_estimated_price', methods=['POST'])
def get_estimated_price():
    new_user_post_args = reqparse.RequestParser()
    new_user_post_args.add_argument("location",
                                    type=str,
                                    help="You must input a location.",
                                    required=True)
    new_user_post_args.add_argument("total_sqft",
                                    type=float,
                                    help="You must input a sqft.",
                                    required=True)
    new_user_post_args.add_argument("bath",
                                    type=float,
                                    help="You must input a bath.",
                                    required=True)
    new_user_post_args.add_argument("bhk",
                                    type=float,
                                    help="You must input a bhk.",
                                    required=True)

    args = new_user_post_args.parse_args()

    location = args["location"]
    total_sqft = args["total_sqft"]
    bhk = args["bhk"]
    bath = args["bath"]

    try:
        total_sqft = float(total_sqft)
        bhk = int(bhk)
        bath = int(bath)

        response = jsonify({
            "price": util.get_estimated_price(location, total_sqft, bath, bhk)
        })
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response

    except (ValueError, TypeError):
        print("Error: Invalid data format. Could not convert to float or int.")
        return jsonify({"error": "Invalid data format. Could not convert to float or int."}), 400




if __name__ == "__main__":
    print("start Flask server python for home prices predictions ")
    util.load_saved_artifacts()
    app.debug = True
    app.run()