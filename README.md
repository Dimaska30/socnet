# TT Developers School project template

This repo contains the template of the project for TT Developers School 2017-2018.

## Requirements:
1. Node v8.9.x
2. NPM v5.5.1

## Repo contains:
1. docker-compose file with postgres db. You can change db_user and db_password in docker-compose.yml file.
2. Instruction for Heroku integration.

## How to use Docker:
* npm run docker-build: to download images if it's still not exist
* npm run docker-start: start postgres and redis within docker containers
* npm run docker-clean: turn containers off.

## How to set up Heroku:
You can find official guide here: [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

### Steps:
1. Register account
2. Install heroku-cli
3. Open you project folder and execute "heroku create"
4. Use dev mode: "heroku config:set NPM_CONFIG_PRODUCTION=false"
5. Use git push heroku master to deploy your app.
6. Execute "heroku ps:scale web=1" to make sure your service has been deployed
7. Rename your app by "heroku apps:rename newname". Use the app name like "tt-school-vvinogradov".
8. You can find more details in the link provided above.

After push, you will be able to use dev version of your app at URL like [https://tt-school-project-template.herokuapp.com/](https://tt-school-project-template.herokuapp.com/)

### Some tips:
1. To login under SSH to the heroku: "heroku run bash"
2. To get some logs from heroku: "heroku logs --tail"

### Add Postgres SQL to your project:
1. Install PG addon: "heroku addons:create heroku-postgresql:hobby-dev"
2. Check if it's working: "heroku pg:info"
3. Get db credentials: "heroku  pg:credentials:url". You can use it to connect to the db from your local environment or from any GUI software.
This command will return connection URL like "postgres://username:password@host:port/db_name"

You can find official doc [here](https://devcenter.heroku.com/articles/heroku-postgresql)

