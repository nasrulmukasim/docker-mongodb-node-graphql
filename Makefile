all: build start

build:
	@docker-compose build

start:
	@docker-compose up -d --force-recreate

stop:
	@docker-compose down

reset-all: reset-mongo-db remove-node-modules reset-git

reset-git:
	@git reset --hard

reset-mongo-db:
	@echo "Removing all mongodb data. This will require sudo privileges."
	@sudo rm -rf data

remove-node-modules:
	@echo "Removing node modules. This will require sudo privileges."
	@sudo rm -rf node_modules