# fullstack-reps

## Start-up

### ENV setup
- Root: <nano .env>: Vars

- Backend: <nano .env>: Vars

- Frontend: <nano .env>: Vars

### Running each seperately in a WSL2 Environment
- Docker: Ensure docker desktop is running. Run <docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker \
 -d -p 5432:5432 \
-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres>. All variables defined above are for demonstration
purposes only. Do not leave these variables as default. 
- Root: <npm i>
- Backend: <npm i>, <npx knex migrate:latest && npx knex seed:runn>, <npm start>
- Frontend: <npm i>, <npm start>

### Docker Compose
