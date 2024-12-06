
========= FOR DATABASES =========
```
docker pull postgres
docker run --name nestjs-postgres -e POSTGRES_USER=abuhasan -e POSTGRES_PASSWORD=72664228 -e POSTGRES_DB=cholti_bazar -p 5432:5432 -d postgres
```

# Connect to the database in the running container:
```
// Use the docker exec command to access the PostgreSQL shell (psql):
docker exec -it nestjs-postgres psql -U abuhasan -d cholti_bazar
```

# Check db access user from root access of docker
```
docker exec -it nestjs-postgres bash
env | grep POSTGRES

docker exec -it nestjs-postgres psql -U postgres

exit
```

==== Verify the container is running =====
```
docker start nestjs-postgres
docker ps
docker stop <container_id_or_name>
```


```
// Check existing databases:
\l
// Switch to a specific database:
\c database_name

// List all tables in the current database:
\dt
// Exit psql:
\q
```

# Download Pg-admin
Open pgAdmin and add a new server Use the following details:
Host: localhost
Port: 5432
Username: abuhasan
Password: 72664228


# Testing Connect from Application
```
docker-compose down
docker-compose up --build
```
Create a docker-compose.yml if not and add this 
```
version: '3.8'
services:
  postgres:
    image: postgres:latest
    container_name: nestjs-postgres
    environment:
      POSTGRES_USER: my_custom_user
      POSTGRES_PASSWORD: my_custom_password
      POSTGRES_DB: mydatabase
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:
```


if get error already container
```
docker stop nestjs-postgres
docker rm nestjs-postgres

docker-compose up --build
```



# For Nginx
docker pull nginx
docker run --name my-nginx -p 80:80 -d nginx
