# Package

Column Name | Data Type | Constraints | Description
-----------|----------|-------------|------------
id | integer | PRIMARY KEY | Unique identifier for a package
title | varchar | NOT NULL | Title of the package
projectRecordLimit | integer | NOT NULL | Limit for the number of records in a project
price | integer | NOT NULL | Price of the package
isHidden | boolean | NOT NULL | Indicates whether a package is hidden or not
isDefault | boolean | NOT NULL | Indicates whether this is the default package or not
duration | integer | NOT NULL, DEFAULT=1 | Duration of the package
durationUnit | enum | NOT NULL, DEFAULT='Y' | Unit of duration of the package
startedAt | datetime | NULL | Start date for the package
endedAt | datetime | NULL | End date for the package
createdAt | datetime | NOT NULL | Date and time when the record was created
updatedAt | datetime | NOT NULL | Date and time when the record was last updated