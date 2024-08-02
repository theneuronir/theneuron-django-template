#!/bin/bash

mv env.example .env
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt -i https://mirror-pypi.runflare.com/simple/ --trusted-host runflare.com
./manage.py migrate
npm i

echo 'Run backend: ./manage.py runserver'
echo 'Run webpack: npm run dev'
