# UserRole

>**Note** จริงๆแล้วเป็น table ที่เอาไว้เก็บ User - Project - Workspace relations เพื่อใช้ในการเข้าถึงข้อมูลในระดับของ project และ workspace 

| Column Name | Data Type | Constraints | Description |
|-------------|----------|-------------|-------------|
| id          | number   | Primary Key | Unique ID for a user role |
| relationType| enum     | Not Null    | Relation type for user role |
| userRoleLevel| enum    | Not Null    | Level of permission a user has |
| targetId    | number   | Default Null| Record ID of user role for targeted relation type |
| userId      | number   | Not Null    | Unique identifier of a user |
| createdAt   | Date     | Not Null    | Date and time when user role was created |
| updatedAt   | Date     | Not Null    | Date and time when user role was last updated |
