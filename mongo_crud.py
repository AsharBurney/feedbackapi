from flask import Flask, render_template,redirect,request, jsonify
from pymongo import MongoClient
import json
from bson import ObjectId
import pandas as pd
from pandas.compat import StringIO
import HTML
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

client = MongoClient('localhost', 27017)
db = client['bisp_data1']
coll = db['bisp']


# @app.route('/')
# def hello_world():
# 	author = "ashar"
# 	name = "ashar"
# 	return render_template('index.html', author=author, name=name)


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)

@app.route('/select', methods=['GET','POST'])
def select():
	a=[]
	x=db['bisp'].find().limit(50)
	for index,emp in enumerate(x):
		a.append(emp)
	z=JSONEncoder().encode(a)
	j = json.loads(z)
	return jsonify(j)

@app.route('/')
def bda():
	return render_template('bda.html')

@app.route('/name')
def name():
	nam=request.args.get('nam') 
	occ=request.args.get('occ') 
	teh=request.args.get('teh')

	a=[]
	try:
		# Col = db['bisp'].find({
		#  "$and":[
		#  	{"$or" : [{ "NAME" :{"$exists":"false"} }, { "NAME" : nam }]}            ]})
		# Col = db['bisp'].find({ "$or":[{ "NAME" :{"$exists":"true"} }, { "NAME" : nam } ,{"OCCUPATION_DWH" :{"$exists":"true"} }, {"OCCUPATION_DWH" : occ },{"TEHSIL_NAME" :{"$exists":"true"} }, {"TEHSIL_NAME" : teh }]})



		Col = db['bisp'].find({ "$or":[{ "NAME" :{"$exists":"true"} }, { "NAME" : nam } ,{"OCCUPATION_DWH" :{"$exists":"true"} }, {"OCCUPATION_DWH" : occ },{"TEHSIL_NAME" :{"$exists":"true"} }, {"TEHSIL_NAME" : teh }]})
		# Col = db['bisp'].find({"NAME":nam,"OCCUPATION_DWH":occ,"TEHSIL_NAME":{"$exists":"false"}})
		for data in Col:
			a.append(data)
	except Exception as e:
		print (str(e))
	return (str(a))

# @app.route('/occup')
# def occup():
# 	occ=request.args.get('occ') 
# 	a=[]
# 	try:
# 		Col = db['bisp'].find({"OCCUPATION_DWH":occ})
# 		for data in Col:
# 			a.append(data)
# 	except Exception as e:
# 		print (str(e))
# 	return (str(a))

# @app.route('/tehsil')
# def tehsil():
# 	teh=request.args.get('teh') 
# 	a=[]
# 	try:
# 		Col = db['bisp'].find({"TEHSIL_NAME":teh})
# 		for data in Col:
# 			a.append(data)
# 	except Exception as e:
# 		print (str(e))
# 	return (str(a))

if __name__ == "__main__":
	app.run()
