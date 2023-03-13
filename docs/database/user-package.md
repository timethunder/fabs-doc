# UserPackage

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id | number | PRIMARY KEY | Unique identifier for each user package |
| user | User | NOT NULL, FOREIGN KEY | User entity related to the package |
| userId | number |  | ID of the user related to the package |
| package | Package | NOT NULL, FOREIGN KEY | Package entity related to the user |
| packageId | number |  | ID of the package related to the user |
| packageQuota | number |  | The quota of the package assigned to the user |
| startedDate | Date |  | The date from which the package has been started |
| expiredDate | Date |  | The date on which the package will expire |
| createdAt | Date |  | The date of creation of the user package |
| updatedAt | Date |  | The date of last update of the user package |
