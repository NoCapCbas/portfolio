# Portfolio App Deployment, using Django + Next.js

## Setup Walkthrough

### Dependencies
- Docker 
- Update .env file SECRET_KEY, SUPER_USER_NAME, SUPER_USER_PASSWORD, SUPER_USER_EMAIL


### git clone repo
...

### Update .env file
Navigate to the inside of the repo.
Update the .env file within the main project directory:
```shell

SECRET_KEY='django-insecure-123'

## False for live deployment
DEBUG=False

## Super-User Credentials
SUPER_USER_NAME='root'
SUPER_USER_PASSWORD='root'
SUPER_USER_EMAIL='root@root.com'
```

### Run Docker
Run the following docker command:
```shell
docker compose up --build -d
```

# Deployment
- Follow Setup Walkthrough 
- Update Caddyfile and replace localhost with the domain of the application
