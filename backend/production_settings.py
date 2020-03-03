from .settings import *

SECRET_KEY = os.environ["SECRET_KEY"]

WEBPACK_LOADER = {
    "DEFAULT": {
        "BUNDLE_DIR_NAME": "bundles/",
        "STATS_FILE": os.path.join(BASE_DIR, "webpack-stats.prod.json"),
    }
}

DEBUG = False
