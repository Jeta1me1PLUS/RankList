from flask import Flask, jsonify, request, abort,url_for,render_template,redirect
from flask_pymongo import PyMongo
app = Flask(__name__)

from app import views