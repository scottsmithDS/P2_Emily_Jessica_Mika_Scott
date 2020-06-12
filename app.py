from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import pymongo
import csv
import json
from pymongo import MongoClient

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/Project_Two"
mongo = PyMongo(app)

# Or set inline
# mongo = PyMongo(app, uri="mongodb://localhost:27017/craigslist_app")


@app.route("/")
def index():
    listings = mongo.db.ALL2.find()
    return render_template("index.html", listings=listings)
    



if __name__ == "__main__":
    app.run(debug=True)


