# User

| Column Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| id | integer | Primary key | Auto-incrementing identifier for the user |
| uuid | varchar(255) | Nullable | Universally Unique Identifier for the user |
| firstName | varchar(255) | Not nullable | First name of the user |
| lastName | varchar(255) | Not nullable | Last name of the user |
| email | varchar(255) | Not nullable, Unique | Email address of the user |
| password | varchar(255) | Not nullable | Encrypted password of the user |
| isValidateEmail | boolean | Not nullable, Default: false | Indicates whether the user's email address has been validated |
| createdAt | datetime | Not nullable | Timestamp of when the user was created |
| updatedAt | datetime | Not nullable | Timestamp of when the user was last updated |
| role | enum | Not nullable, Default: 'CUSTOMER' | The role of the user |
| userRoles | OneToMany relation to UserRole entity | Cascade delete | List of roles assigned to the user |
| userPackages | OneToMany relation to UserPackage entity | Cascade delete | List of packages assigned to the user |
| projects | OneToMany relation to Project entity | Cascade delete | List of projects assigned to the user |
