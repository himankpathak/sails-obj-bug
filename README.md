# sails-obj-bug

a [Sails v1](https://sailsjs.com) application


### Migrations

Run the following migrations before lifting the app

```
CREATE DATABASE test_db;
CREATE USER test_user WITH ENCRYPTED PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE test_db TO test_user;
```

```
CREATE TABLE user_actions (
  id serial PRIMARY KEY,
  user_id integer,
  action_name varchar(255) not null,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL
);

INSERT INTO user_actions ( user_id, action_name )
VALUES (1, 'This is test data'), (2, 'This_is_test_data');
```

### API Route to test

GET /test-action

### Output on console

```
Current value: {
  createdAt: 2021-11-11T07:22:31.297Z,
  updatedAt: 2021-11-11T07:22:31.297Z,
  id: 1,
  user: 1,
  action: 'This is test data'
}
After passing the object to update function
Modified value: {
  id: 1,
  created_at: 2021-11-11T07:22:31.297Z,
  updated_at: 2021-11-11T07:22:31.297Z,
  user_id: 1,
  action_name: 'This is test data'
}
Current value: {
  createdAt: 2021-11-11T07:22:53.407Z,
  updatedAt: 2021-11-11T07:22:53.407Z,
  user: 2,
  action: 'This_is_test_data'
}
After passing the object to create function
Modified value: {
  created_at: 2021-11-11T07:22:53.407Z,
  updated_at: 2021-11-11T07:22:53.407Z,
  user_id: 2,
  action_name: 'This_is_test_data'
}
```
