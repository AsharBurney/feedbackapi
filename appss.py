# -*- coding: utf-8 -*-
from flask import Flask, render_template, request, redirect
from influxdb import InfluxDBClient
import json
app = Flask(__name__)


def create_db_conn():
	client = InfluxDBClient('localhost', 8086, 'root', 'root', 'mydb1')
	return client;
	

@app.route('/')
def hello_world():
	author = "ashar"
	name = "ashar"
	return render_template('index.html', author=author, name=name)

@app.route('/create', methods = ['POST'])
def create():
	client=create_db_conn()
	db_name = request.form['dbname']
	client.create_database(db_name)
	print("Database Created")
	return render_template('index.html')

@app.route('/usedb', methods = ['POST'])
def usedb():
	client=create_db_conn()
	name = request.form['usedb']
	client.switch_database(name)
	print("Using db: " + name)
	return render_template('index.html')

@app.route('/select', methods = ['POST'])
def select():
	try:
		client=create_db_conn()	

		tablename = request.args.get('tablename')

		result = client.query("select * from "+tablename)
		return json.dumps(result.raw)
	except Exception as e:
		print e
		return redirect('/')

	

@app.route('/insert', methods = ['POST'])
def insert():
	client=create_db_conn()	
	data=request.args.get('data')
	json_acceptable_string = data.replace("'", "\"")
	json_body = json.loads(json_acceptable_string)
	#json_right=parseJson(json_body)

	#tablename=json_body["tablename"]
	#fields=json_body["fields"]

	###Required Format
	'''json_data = [
		{
			"measurement": "inverter",
			"fields": {"host":"serverxyz","value":10.23}
		}
	]'''
	'''json_data = [
	{
		"measurement": "inverter",
		"tags": {
			"host": "server01",
			"region": "us-west"
		},
		"timestamp": "2009-11-10T23:00:00Z",
		"fields": {
			"value": 0.64
		}
	}
]'''

	'''json_data =  [{
	"measurement": "a",
	"fields": {
		"siteSensors": {
			"solpotential":560.0,
			"wind": 5.0,
			"ambient_temperature": 45.0
		},
		"inverterSensors": {
			"inverterSensors_01": {
				"internal_temperature": 45.0
			},
			"inverterSensors_02": {
				"internal_temperature": 46.0
			}
		}
	},
	"SiteName/ID": 215,
	"Timestamp": "2017-11-09T12:57:53+05:00"

 }]'''

 	json_data =   [
        {
            "series": [
                {
                    "name": "inverter",
                    "fields": [
                        "time",
                        "value"
                    ],
                    "value": [
                        [
                            "2015-01-29T21:55:43.702900257Z",
                            0.55
                        ],
                        [
                            "2015-01-29T21:55:43.702900257Z",
                            23422
                        ],
                        [
                            "2015-06-11T20:46:02Z",
                            0.64
                        ]
                    ]
                }
            ]
        }
    ]


	try:
		client.write_points(json_body)

		print("Data inserted")
	except Exception as e:
		print e
	return redirect('/')

@app.route('/delete', methods = ['POST'])
def delete():
	client=create_db_conn()
	del_name = request.form['deleteQuery']
	client.drop_database(del_name)
	print("Database Deleted")
	return redirect('/')

#def parseJson(json_body):


if __name__ == "__main__":
	app.run()
