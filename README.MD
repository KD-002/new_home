# New Home


## Run instruction

1. Requirements:
   - latest version of Docker
   - latest version of docker compose
   
```bash

docker compose up
# or with mobile app
docker compose -f ./docker-compose-mobile.yaml up
```

### Services:

1. Web app -> http://localhost:8081/
2. Backend -> http://localhost:8081/api/*
3. Mobile:
   - ios -> http://0.0.0.0:19000/
   - web -> http://0.0.0.0:19006/
   - android -> http://0.0.0.0:19001/
   - dashboard -> http://0.0.0.0:19002/