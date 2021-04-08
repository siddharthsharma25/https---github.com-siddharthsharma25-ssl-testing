from market import app
from market import routes
from flask_debugtoolbar import DebugToolbarExtension
app.debug = True
app.config['SECRET_KEY'] = 'dfdfdfdfdfdfdfdfd'
toolbar = DebugToolbarExtension(app)

if __name__=="__main__":
    app.run(debug=True)