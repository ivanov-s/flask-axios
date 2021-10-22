# Для запуска выполнить в терминале
python3 -m venv venv

source venv/bin/activate

pip install pip --upgrade

pip install -r requirements.txt

export FLASK_ENV=development

export FLASK_APP=app.py

flask run
