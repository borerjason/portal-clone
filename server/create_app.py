from flask import Flask


def create_app():
    app = Flask("clone", static_folder="dist", static_url_path="")

    @app.route("/")
    def index():
        return app.send_static_file("index.html")

    return app
