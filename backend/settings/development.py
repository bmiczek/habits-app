from backend.settings.common import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '-hgg^9h^99#u6hly!=a708637i#jpz8(@a*1b^sb7asy!yoz1w'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

STATICFILES_DIRS = [os.path.join(BASE_DIR, "../public")]

WEBPACK_LOADER = {
    'DEFAULT': {
        'STATS_FILE': os.path.join(BASE_DIR, '../webpack-stats.dev.json')
    }
}