# Export environment variables, replace placeholder variables
export DEV_EMAIL=example@domain.com
export HOST_DOMAIN=example.com

# Run the Docker container with environment variables
docker run -d \
  -e DEV_EMAIL="$DEV_EMAIL" \
  -e HOST_DOMAIN="$HOST_DOMAIN" \
  ghcr.io/nocapcbas/portfolio:prod
