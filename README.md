# [In Progress] Habits App - Django + React

The goal of this app is to practice creating an application using Django
and React.

## Prerequisites

- Git
- Python 3 (or use pyenv/virtualenv)
- Node and npm

## Getting Started

Clone the repository

```
git clone git@github.com:bmiczek/habits-app.git
```

### Backend Setup

Start inside the repository

```
cd habits-app
```

Create a python virtual environment

```
pyenv virtualenv habits-app
pyenv local habits-app
```

Install the dependencies

```
pip install -r requirements.txt
```

Create the database

```
./manage.py migrate
```

Create a superuser

```
./manage.py createsuperuser
```

Start the server

```
./manage.py runserver
```

Explore the api by going to http://localhost:8000/api/habits

### Frontend Setup

Start inside the frontend directory

```
cd frontend
```

Install the dependencies
```
npm install
```

Start the application

```
npm start
```

View the application in the browser: http://localhost:3000/
