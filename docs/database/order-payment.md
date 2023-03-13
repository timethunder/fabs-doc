# OrderPayment

Column Name | Data Type | Constraints | Description
------------ | ------------- | ------------- | -------------
id | number | Primary Key | Auto-generated unique identifier for each order payment record
uuid | string | Not Nullable | Universally Unique Identifier (UUID) assigned to each order payment record
userId | number | Not Nullable | The ID of the user associated with the order payment record
orderPackages | OneToMany(OrderPackage)[] | Nullable | Array of order package records associated with the order payment record
orderPackageIds | number[] | Nullable | Array of order package IDs associated with the order payment record
orderSubtotal | number | Not Nullable, Default 0 | Subtotal of the order payment record
orderDiscount | number | Not Nullable, Default 0 | Discount amount applied to the order payment record
orderTotal | number | Not Nullable, Default 0 | Total amount of the order payment record
orderNumber | string | Nullable | Order number associated with the order payment record
paymentSlipBase64 | string | Nullable | Payment slip sent by the user in base64 format
paymentDate | Date | Nullable | The date the payment was made by the user
status | PaymentStatus | Not Nullable, Default PENDING | Indicates the status of the order payment (pending, confirmed, rejected)
approver | User | Nullable | The user who approved the order payment record
approverId | number | Nullable | The ID of the approver associated with the order payment record
createdAt | Date | Not Nullable | The date the record was created in the database
updatedAt | Date | Not Nullable | The date the record was last updated in the database