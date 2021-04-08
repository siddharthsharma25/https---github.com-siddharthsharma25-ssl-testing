from market import app
from flask import render_template
from market.models import Item
from market.forms import RegisterForm
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/market', methods = ['GET','POST'])
def market():
    items=Item.query.all()
    return render_template('market.html',items=items)


@app.route("/register")
def register_page():
    form=RegisterForm()
    return render_template('register.html',form=form)

@app.route("/dark")
def dark_page():
    return render_template('dark.html')


@app.errorhandler(404)
def not_found_error(error):
    return render_template('error404.html'),404

# @app.errorhandler(500)
# def internal_error(error):
#     return render_template('404.html'),500


