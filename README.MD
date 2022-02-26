# New Home

## Run instruction

1. Requirements:
    - latest version of Docker
    - latest version of docker compose

2. Create envs files:

Go to `./backend_core/env` copy all files and change file name (without -default). Then provide necessary data. If you
don`t know what kind of data you should provide, contact with pawel.konior@gmail.com

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