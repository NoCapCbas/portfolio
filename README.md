# Project Intention
This project serves as a minimalist hub to show clients/employers my projects, resume and other code related work.

# Technology Used to Develop this Project
- golang
- alpinejs
- tailwindcss

# Production Infrastructure Overview
- Traefik, as reverse-proxy 
- Github workflow, for auto image package
- Watchtower, for auto deployment from image package

# Development

## Frontend
### to install dependencies...
```bash
npm install
```

### to refresh tailwind files...
```bash
npx tailwindcss -i ./static/css/input.css -o ./static/css/output.css --watch
```

## Backend
### run the project...
```bash
go run ./cmd/main.go
```

## To add a new project...
copy the templates from templates/projects/

# Deployment

Create .env files using .env.example
```
DEV_EMAIL="9aV4y@example.com"
HOST_DOMAIN=localhost
INTERNAL_PORT=8080
```

Run Makefile command 
```
make prod
```

# Resources
- icons, sourced from https://heroicons.com/
- design inspo, sourced from https://www.hudy9x.com, https://nickjanetakis.com/

