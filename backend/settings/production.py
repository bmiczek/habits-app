from backend.settings.common import *
import django_heroku

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ['SECRET_KEY']

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['0.0.0.0', 'localhost', '127.0.0.1', 'fierce-shelf-18969.herokuapp.com']

STATICFILES_DIRS = [os.path.join(BASE_DIR, "../build")]

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'static',
        'STATS_FILE': os.path.join(BASE_DIR, '../webpack-stats.prod.json')
    }
}

django_heroku.settings(locals())