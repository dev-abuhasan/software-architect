
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

==== Verify the container is running =====
```
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




# For Nginx
docker pull nginx
docker run --name my-nginx -p 80:80 -d nginx
