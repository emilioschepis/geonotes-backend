local:
	make --jobs=2 local-hasura local-functions

local-hasura:
	docker compose up

local-functions:
	cd functions && npm run serve
