from flask import jsonify, request, abort,url_for,render_template,redirect
from app import app
from flask_pymongo import PyMongo
import pymongo
client= pymongo.MongoClient(host='localhost', port=27017)
db= client.RankList
collection= db.rankdatas
# dataset= {     
#     'rank':95,     
#     'name':'male',     
#     } 
# result= collection.insert(dataset)


@app.route('/')
@app.route('/index')
def index():
    dataset=getDataFromDB()
    print(dataset)
    return render_template("index.html",dataset=dataset)
@app.route('/edit')
def editrank():
    return "Hello,World!"
@app.route('/add', methods=['GET','POST']) 
def addrank(): 
    rank=request.form.get('rank')
    name=request.form.get('name')
    # print(rank,name)
    dataset={'rank':rank, 'name':name}
    if rank != None:
        collection.insert(dataset)
    print(dataset)
    return render_template("add.html")


@app.route('/getdataset',methods=['get','POST'])
def getdataset():
    return jsonify({'source':getDataFromDB()})

def getDataFromDB():
    dataset = collection.find({})
    w=[]
    for x in dataset:
        # print(type(x))
        name=x['name']
        rank=x['rank']
        k=[rank,name]
        w.append(k)
    # print(w)
    return w
