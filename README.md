1. Download the project from GitHub

```bash
git clone https://github.com/tony-matheus/TodoApp.git
```

2. Open the backend project folder.

3. Build the containers.

```bash
docker-compose build
```

4. Install dependencies.

```bash
docker-compose run --rm app bundle install
```

5. Run migrations

```bash
docker-compose run --rm app bundle exec rake db:create db:migrate
```

6. Start the server

```bash
docker-compose up
```

2. Open the frontend project folder.

3. Build the containers.

```bash
docker-compose up --build
```
