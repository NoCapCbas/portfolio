# Export environment variables, replace placeholder variables
export DEV_EMAIL=example@domain.com
export HOST_DOMAIN=example.com

# Run the Docker container with environment variables
docker compose -f docker-compose.prod.yml up -d --build --force-recreate
