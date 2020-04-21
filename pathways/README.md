# WITHWOMEN

WITHWomen is an application that is designed assess women's relationships and  connect women to various types of resources.

## System dependencies

* `node`: 8 or higher
* `yarn`: 12 or higher
* `ruby`: 2.3.7 or higher (see `.ruby_version`)
* `mysql`: 5.7 or higher

## Third-Party Services

* `Google Analytics`
* `SparkPost` for sending emails from the contact form.

## Initial Setup

```bash
bin/setup
```

## Updates

```bash
bin/update
```

## Testing

Run all automated tests and make sure they pass before pushing your code.

```bash
bin/rails test:system test
```

## Linting

Run the following command and fix all linting errors before pushing your code.

```bash
bin/lint
```

##Heroku Deployment

#### Database Setup

* Add `JawsDB MySQL` to the application resources
* Take note of the `JAWSDB_URL` config var in the `Settings` tab.
* Create a config var `DATABASE_URL` with the same value as `JAWSDB_URL` but change `mysql://` to `mysql2://`

#### Code Deployment

* Install  Heroku CLI tools from [https://devcenter.heroku.com/articles/heroku-cli#download-and-install](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).
* Login to Heroku by running the following command from the terminal.

   ```bash
   heroku login
   ```
   
* Add the heroku repo to the project (`pathwaysapp` below is the name of the Heroku app):

   ```bash
   heroku git:remote -a pathwaysapp
   ```

* Push your code:

   ```bash
   git push heroku master
   ```

* Ensure that the SQL view `pathways_report_concerns` and `pathways_report_violence` exists in the database. See `lib/assets/` for create syntax.

#### Database Updates

* `heroku run bin/rails db:migrate` to execute migrations.