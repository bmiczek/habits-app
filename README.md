# [In Progress] Habits App - Django + React

The goal of this app is to practice creating an application using Django
and React.

## Prerequisites
1. Install pyenv
2. Install virtualenv
3. Install yarn/nodejs
3. Download Python 3.8.0
    ```shell script
    pyenv install 3.8.0
    ```
   
## Installation
   
Clone the repo
```shell script
git clone git@github.com:bmiczek/habits-app.git
cd habits-app
```

### Backend
Create python virtual environment
```shell script
pyenv virtualenv 3.8.0 habits-app
pyenv local habits-app
```

Install python dependencies
```shell script
pip install -r requirements.txt
```

Run database migrations
```shell script
./manage.py migrate
```

Create a superuser
```
./manage.py createsuperuser
```

### Frontend
Create frontend environment file
```shell script
cp .env.sample .env
```

Install frontend dependencies
```shell script
yarn install
```

## Running the App in development

Start the django server (in the root of the project)
```shell script
./manage.py runserver
```

Start the nodejs server
```shell script
yarn start
```

Visit http://localhost:8000

## Run like production
```shell script
# build frontend
yarn build

# Set environment variables
export SECRET_KEY={guid}
export DJANGO_SETTINGS_MODULE=backend.settings.production

# copy frontend files to `staticfiles/.`
./manage.py collectstatic --settings=backend.settings.production --noinput 

# migrate the db
python manage.py migrate

# Start the server
gunicorn backend.wsgi --log-file -

# Start heroku locally after you set it up
heroku local
```

## Deploy to Heroku
```.shell script
heroku create
# Update the URL in ALLOWED_HOSTS in backend/settings/production.py

heroku buildpacks:add --index 1 heroku/nodejs
heroku buildpacks:add --index 2 heroku/python

heroku addons:create heroku-postgresql:hobby-dev

heroku config:set SECRET_KEY={guid}
heroku config:set DJANGO_SETTINGS_MODULE=backend.settings.production

# Make a Procfile:
release: python manage.py migrate
web: gunicorn backend.wsgi --log-file -

git push heroku master
```

# Resources

## Project setup

## Custom User Model
https://thinkster.io/tutorials/django-json-api/authentication

## JWT
https://simpleisbetterthancomplex.com/tutorial/2018/12/19/how-to-use-jwt-authentication-with-django-rest-framework.html

## Heroku Deployment
https://dev.to/shakib609/deploy-your-django-react-js-app-to-heroku-2bck
https://medium.com/agatha-codes/9-straightforward-steps-for-deploying-your-django-app-with-heroku-82b952652fb4