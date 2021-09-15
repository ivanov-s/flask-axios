from flask import Flask
from flask import render_template
import json
#  форма для обратной сзвязи
from forms import CallBackForm

app = Flask(__name__)
SECRET_KEY = '12345'
app.config['SECRET_KEY'] = SECRET_KEY


@app.route("/")
def index():
    form = CallBackForm()
    return render_template('index.html',
                           title="Пример отправки",
                           form=form)


@app.route("/callback", methods=['POST'])
def callback():
    form = CallBackForm()
    if form.validate_on_submit():
        #  функции отправить почту, записать в БД и т. д.
        return json.dumps({'success': 'true', 'msg': 'Ждите звонка!'})
    else:
        #  обработать ошибку
        return json.dumps({'success': 'false', 'msg': 'Ошибка на сервере!'})
