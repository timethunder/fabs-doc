# EmailVerification

| Column Name     | Data Type | Constraints               | Description     |
|-----------------|-----------|--------------------------|-----------------|
| id              | number    | primary key               | Unique id of email verification entity |
| email           | string    | not null                  | The email for email verification request |
| emailToken      | string    | not null                  | The token generated for email verification |
| timestamp       | date      | not null, create date     | The date-time when email verification request was made |
