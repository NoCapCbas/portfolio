
dev:
	docker compose -f docker-compose.dev.yml up -d --build

dev-recreate:
	docker compose -f docker-compose.dev.yml up -d --build

dev-down:
	docker compose -f docker-compose.dev.yml down

dev-logs:
	docker-compose -f docker-compose.dev.yml logs

prod:
	docker compose -f docker-compose.prod.yml up -d --build

prod-recreate:
	docker compose -f docker-compose.prod.yml up -d --build --force-recreate

prod-down:
	docker compose -f docker-compose.prod.yml down

prod-logs:
	docker-compose -f docker-compose.prod.yml logs
		
help:
	@echo "Available targets:"
	@echo "make dev"
	@echo "make dev-recreate"
	@echo "make dev-down"
	@echo "make dev-logs"
	@echo "make prod"
	@echo "make prod-recreate"
	@echo "make prod-down"
	@echo "make prod-logs"

.PHONY: help dev prod dev-recreate prod-recreate dev-down prod-down dev-logs prod-logs

