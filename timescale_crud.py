from flask import Flask, render_template,redirect,request
from sqlalchemy import create_engine, sql
#from bokeh.plotting import figure,show,output_file
import json

import pandas as pd

app = Flask(__name__)


def create_db_conn():
	engine = create_engine('postgresql://postgres:123@localhost:5432/feedback')
	return engine;
	

@app.route('/')
def hello_world():
	author = "ashar"
	name = "ashar"
	return render_template('index.html', author=author, name=name)

@app.route('/select', methods = ['GET'])
def select():
	

	df = None
	try:
		engine = create_db_conn()
		df = pd.read_sql_query('select * from rating'+';',con=engine)
		return render_template('index.html', Col=df)
	except Exception as e:
		print(e)
		return 'unsuccessfull'
	return 'successfull'


@app.route('/insert', methods = ['PUT'])
def insert():

	data=request.data
	points = json.loads(data)
	# points = [{
	# 't11':'4',
	# 't12':'2',
	# 't13':'3',
	# 't14':'2',
	# 't2':'4',
	# 't3':'2',
	# 't41':'4',
	# 't42':'2',
	# 'name':"asharburney",
	# 'email':"ashar@inbox",
	# 'mob':"0331829169",
	# 'birthday':"1994/03/03"
 # } 
 # ]
	try:
		engine = create_db_conn()
		df = pd.read_sql_query('Insert Into' +' rating '+'(t11,t12,t13,t14,t2,t3,t41,t42,name,email,mob,birthday,comments)'+' '+'Values'+' '+'('+str(points['t11'])+','+str(points['t12'])+','+str(points['t13'])+','+str(points['t14'])+','+str(points['t2'])+','+str(points['t3'])+','+str(points['t41'])+','+"'"+str(points['t42'])+"'"+','+"'"+str(points['name'])+"'"+','+"'"+str(points["email"])+"'"+','+"'"+str(points['mob'])+"'"+','+"'"+str(points['birthday'])+"'"+"'"+str(points['comments'])+"'"+')'+';',con=engine)
		pd.DataFrame.to_sql(df,tablename, engine,if_exists='append')
		return 'successfull'
	except Exception as e:
		print(str(e))
		return 'unsuccessfull'
	








if __name__ == "__main__":
	app.run(host='0.0.0.0')















# @app.route('/oneparm', methods = ['GET'])
# def oneparm():
# 	"""
# 	returns : Pandas.Dataframe
	
# 	otherwise: returns False
# 	and prints exception
	
# 	"""

# 	df = None
# 	try:
# 		engine = create_db_conn()
# 		tablename = request.args.get('tablename')
# 		parm=request.args.get('parm') 
# 		df = pd.read_sql_query('select'+' '+ parm+' '+ 'from'+' '+tablename+';',con=engine)
# 		print(df)
# 	except Exception as e:
# 		print(e)
# 	return 'OK'

	

# @app.route('/insert', methods = ['PUT'])
# def insert():
# 	'''
# 	Saves a DataFrame to a table in oquantdatabase PostgresSQL
# 	1st arg : DataFrame
# 	2nd arg : tablename in postgres .. will be created and overwritten
# 	Default: if exists = True
# # 	'''
# # 	try:
# # 		engine= create_engine('postgresql://postgres:123@localhost:5432/feedback')
# # 		# tablename = request.args.get('tablename')
# # 		#df = pd.read_sql_query('Insert Into' +' '+tablename+' '+'(t11,t12,t13,t14,t2,t3,t41,t42)'+' '+'Values'+' '+'(2,3,4,5,1,2,3,4)'+';', con=engine)
# # # 		pd.DataFrame.to_sql(df,tablename, engine,if_exists='append'),t12,t13,t14,t2,t3,t41,t42,name,email,mob,birthday
# # 		sql = "insert into rating(t11,t12,t13,t14,t2,t3,t41,t42) VALUES (%s, %s, %s, %s,%s, %s, %s, %s)"
 
# # 		number_of_rows = engine(sql, points)
# # 	except Exception as e:
# # 		print(str(e))
# # 		return "ok"

# # 	else:
		
# # 		print("Table: "+tablename+" "+"inserted to database : "+"feedback")
# # 		return "best"
# 	def calldb(db, sql_cmd, sql_params): 
# 		try: 
# 			cur = db.cursor()
# 			cur.execute(sql_cmd, sql_params)
# 			return
# 		except Exception as e: 
# 			print ('Error ', e ) 
# 			raise 

# 	params = ('postgresql://postgres:123@localhost:5432/feedback')

# 	conn = psycopg2.connect(params)

# # Prepare SQL
# 	conn.execute("INSERT INTO rating (t11)SELECT src.MyJSON->'t11'src.MyJSON FROM (SELECT %s AS MyJSON) src",
#   (data2,)
# )
# 	return "ok"





# points = [{
# 	"t11":'2',
# 	"t12":'2'
# } 
# ]

# @app.route('/twoparmtime', methods=['GET'])	
# def twoparmtime():		
# 	"""		returns : Pandas.Dataframe		
# 	otherwise: returns False		
# 	and prints exception		"""		
# 	df = None		
# 	try:			
# 		engine = create_db_conn( )			
# 		tablename = request.args.get('tablename')			
# 		parm1 = request.args.get('parm1')			
# 		parm2 = request.args.get('parm2')			
# 		#parm3 = request.args.get('parm3')			
# 		df = pd.read_sql_query('select' + ' ' + parm1 + ' ' + 'from' + ' ' + tablename + ' ' + 'where' + ' ' + parm2 + ' ' + 'like' + ' ' + '%216%' + ';', con=engine)			
# 		print(df)		
# 	except Exception as e:			
# 		print(e)		
# 		return 'OK'
# 	p = figure(x_axis_label='TIME', y_axis_label='PAC')

# 	p.line(df['parm1'], df['parm2'])
# 	output_file('inverter.html')
# 	show(p)

# df = pd.DataFrame(points)





