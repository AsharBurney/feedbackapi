import psycopg2
import json

def calldb(db, sql_cmd, sql_params): 
    try: 
        cur = db.cursor()
        cur.execute(sql_cmd, sql_params)
        return
    except Exception as e: 
        print ('Error ', e ) 
        raise 

params = {
  "host":"postgresql",
  "database":"feedback",
  "user":"postgres",
  "password":"123"
}

conn = psycopg2.connect(params)

# Prepare SQL
sql_cmd = "INSERT INTO MyTable (channel, report_id, report_data) SELECT CAST(src.MyJSON->>'account_id' AS INTEGER), CAST(src.MyJSON->>'id' AS INTEGER), src.MyJSON FROM ( SELECT CAST(%s AS JSONB) AS MyJSON ) src" 

# Convert dictionary to native JSON data type
data2 = {"id": 4573457, "account_id": 456, "address": "15 Millers Rd, WA"}
data2_json = json.dumps(data2)

sql_params = (data2_json,)

# Execute SQL
calldb(conn, sql_cmd, sql_params) 
conn.commit()