import PIL
import os
import os.path
from PIL import Image

f = r'C:/Users/dell/Desktop/flask app/market/static/img/'
for file in os.listdir(f):
    f_img = f+"/"+file
    img = Image.open(f_img)
    img = img.resize((1500,2500))
    img.save(f_img)