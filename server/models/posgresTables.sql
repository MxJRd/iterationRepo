CREATE TABLE users (
  _id SERIAL PRIMARY KEY,
  user_name VARCHAR(80) UNIQUE not null,
  password VARCHAR(80) not null
);

CREATE TABLE donations (
    _id SERIAL PRIMARY KEY, 
    name  VARCHAR(80) not null,
    amount FLOAT not null,
    credit_card VARCHAR(80) not null,
    phone_num VARCHAR(80) not null,
    date DATE not null,
    email VARCHAR(80) not null,
    fk_user_id SERIAL,
    CONSTRAINT fk_user_id
      FOREIGN KEY(_id) 
        REFERENCES users(_id)
          ON DELETE SET NULL
);

- 'finds total amount of donations'
SELECT sum(amount)
FROM "donations" ;

- 'insert values into table'
INSERT INTO donations(name, amount, credit_card, phone_num, date, email, user_id)
VALUES ('lucas', '100', '152635241', '36042992', 'dec-12-2019', 'lucas@gitMasterGabi.com', 1)
