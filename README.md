# Portfolio App, using Django + Next.js
- Frontend uses Next.js
- Backend uses Django for content management and database management
- Database uses Django's default sqlite.db

# Portfolio App Deployment, using Django + Next.js

### git clone repo
```shell
git clone https://github.com/NoCapCbas/portfolio.git
```

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
docker compose -f docker-compose.prod.yml up --build -d
```

### Update Caddyfile
- Update Caddyfile and replace localhost with the domain of the application
