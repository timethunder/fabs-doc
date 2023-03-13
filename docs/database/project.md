# Project

Column Name | Data Type | Constraints | Description
--- | --- | --- | ---
id | integer | Primary Key | Auto-generated project ID 
uuid | string | Nullable | UUID of the project
trialBalance | object | Nullable | Trial balance object to which the project is attached
trialBalanceId | integer | Nullable | ID of the trial balance to which the project is attached
client | object | Not nullable | Client object to which the project is attached
clientId | integer | Not nullable | ID of the client to which the project is attached
user | object | Not nullable | User object to which the project is attached
userId | integer | Not nullable | ID of the user to which the project is attached
userPackage | object | Nullable | User package object to which the project is attached
userPackageId | integer | Nullable | ID of the user package to which the project is attached
createdAt | date | Not nullable | Date of project creation
updatedAt | date | Not nullable | Date of last update of the project
deletedAt | date | Nullable | Date of deletion of the project