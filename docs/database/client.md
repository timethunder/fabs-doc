# Client

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id | number | Primary Key, Auto-generated | Unique ID for each client |
| workspaceId | number | Not null, FK (Workspace.id), eager | Foreign key referencing Workspace table |
| name | string | Not null | Name of the client |
| businessType | string | - | Foreign key referencing BusinessType table |
| typeId | number | Not null, FK (CompanyType.id), eager | Foreign key referencing CompanyType table |
| taxNumber | string | - | Optional field for client's tax number |
| address | string | - | Optional field for client's address |
| establishmentDate | Date | - | Optional field for client's establishment date |
| closedDate | Date | - | Optional field for client's closed date |
| createdAt | Date | Not null | Date and time when the client was created |
| updatedAt | Date | Not null | Date and time when the client was last updated | 
