from flask import Flask, render_template, Response
from sqlalchemy import create_engine
import json
import pandas as pd
from bokeh.plotting import figure,show,output_file


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

def create_db_conn():
	engine = create_engine('postgresql://postgres:123@localhost:5432/reon')
	return engine;

def gen():    
	while True:        
		df = None
		try:
			engine = create_db_conn()
			tablename = request.args.get('tablename')
			df = pd.read_sql_query('select' + ' ' + parm1 + ' ' + 'from' + ' ' + tablename + ' ' + 'where' + ' ' + parm2 + ' ' + 'like' + ' ' + '%216%' + ';', con=engine)			
			yield (b'--fetchjson\r\n'               
			b'Content-Type: application/json\r\n\r\n' + str(df.to_json()) + b'\r\n')
		except Exception as e:
			print(e)     
	p = figure(x_axis_label='TIME', y_axis_label='PAC')
	p.line(df['parm1'], df['parm2'])
	show(p)
		

@app.route('/fetch_json')
def fetch_json():    
	return Response(gen(),                    
		mimetype='multipart/x-mixed-replace; boundary=fetchjson')

if __name__ == "__main__":    
	app.run()



# from random import random

# from bokeh.layouts import column
# from bokeh.models import Button
# from bokeh.palettes import RdYlBu3
# from bokeh.plotting import figure, curdoc

# # create a plot and style its properties
# p = figure(x_range=(0, 100), y_range=(0, 100), toolbar_location=None)
# p.border_fill_color = 'black'
# p.background_fill_color = 'black'
# p.outline_line_color = None
# p.grid.grid_line_color = None

# # add a text renderer to our plot (no data yet)
# r = p.text(x=[], y=[], text=[], text_color=[], text_font_size="20pt",
#            text_baseline="middle", text_align="center")

# i = 0

# ds = r.data_source

# # create a callback that will add a number in a random location
# def callback():
#     global i

#     # BEST PRACTICE --- update .data in one step with a new dict
#     new_data = dict()
#     new_data['x'] = ds.data['x'] + [random()*70 + 15]
#     new_data['y'] = ds.data['y'] + [random()*70 + 15]
#     new_data['text_color'] = ds.data['text_color'] + [RdYlBu3[i%3]]
#     new_data['text'] = ds.data['text'] + [str(i)]
#     ds.data = new_data

#     i = i + 1

# # add a button widget and configure with the call back
# button = Button(label="Press Me")
# button.on_click(callback)

# # put the button and plot in a layout and add to the document
# curdoc().add_root(column(button, p))