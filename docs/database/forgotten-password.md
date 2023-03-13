# ForgottenPassword

Column Name | Data Type | Constraints | Description
--- | --- | --- | ---
id | PrimaryGeneratedColumn | none | Primary key and Auto-incremented
email | Column | none | Email address associated with the account
newPasswordToken | Column | none | Token for changing the password of the user
timestamp | CreateDateColumn | none | Date when the password reset token was generated.