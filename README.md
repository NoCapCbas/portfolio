# Project Intention
This project serves as a minimalist hub to show clients/employers my projects, resume and other code related work.

# Technology Used to Develop this Project
- golang
- alpinejs
- tailwindcss

<!-- # Application Architecture Overview -->

# Resources
- icons, sourced from https://heroicons.com/

# Development

## to install dependencies...
```bash
npm install
```

## to refresh tailwind files...
```bash
npx tailwindcss -i ./static/css/input.css -o ./static/css/output.css --watch
```

## run the project...
```bash
go run ./cmd/main.go
```

# To add a new project...
copy the templates from templates/projects/

## design inspo
https://www.hudy9x.com


# Deployment
Use example script(init-deployment.sh) to run image
* don't forget to replace placeholder variables
This script is only for initial deployment, subsequent changes to repo will be handled by
new pushes to image package, and pulled by watchtower service for auto deployment
```shell
#!/bin/bash

# Export environment variables, replace placeholder variables
export DEV_EMAIL=example@domain.com
export HOST_DOMAIN=example.com

# Run the Docker container with environment variables
docker run -d \
  -e DEV_EMAIL="$DEV_EMAIL" \
  -e HOST_DOMAIN="$HOST_DOMAIN" \
  ghcr.io/nocapcbas/portfolio:prod
```


