# my-awesome-hunter-backend

> Project to study

# Preview:

`http://my-awesome-hunter-backend.herokuapp.com/api/v1/jobs`

# Using:

- Typescript
- Migrations with Sequelize
- Custom import migrations using typescript
- Testing with Jest
- CI\CD with Heroku

# Endpoints

## Cities

GET `/api/v1/cities`

Return a list of cities.

```json
[
  {
    "id": 1,
    "name": "Abadia de Goiás",
    "state_id": 9,
    "latitude": -16.7588118948196,
    "longitude": -49.4405478326574
  }
]
```

## States

GET `/api/v1/states`

Return a list of states.

```json
[
  {
    "id": 1,
    "name": "Acre",
    "name_prefix": "Estado do",
    "subdivision": "AC"
  }
]
```

## States

GET `/api/v1/technologies`

Return a list of technologies.

```json
[
  {
    "id": 1,
    "name": "Java"
  },
  {
    "id": 2,
    "name": "Python"
  }
]
```

## datasets source

- [br-city-codes (@datasets-br)](https://github.com/datasets-br/city-codes/blob/master/data/br-city-codes.csv)

- [br-state-codes (@datasets-br)](https://github.com/datasets-br/state-codes/blob/master/data/br-state-codes.csv)
