# [In Progress] Habits App - Django + React

The goal of this app is to practice creating an application using Django
and React.

## Prerequisites
1. Install pyenv
2. Install virtualenv
3. Install npm/nodejs
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
cd frontend
cp .env.sample .env
```

Install frontend dependencies
```shell script
cd frontend/
npm install
```

## Running the App

Start the django server (in the root of the project)
```shell script
./manage.py runserver
```

Start the npm server
```shell script
cd frontend/
npm start
```

Visit http://localhost:8000

## Running the App in production
Section in progress, mock using the following:

```shell script
cd frontend/
npm run build
cd ..
./manage.py runserver --settings=backend.settings_production
```