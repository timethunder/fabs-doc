# OrderPackage

Column Name | Data Type | Constraints | Description
--- | --- | --- | ---
id | PrimaryGeneratedColumn |  |Unique identifier of OrderPackage
uuid | Column |  | Universally Unique Identifier of OrderPackage
package | ManyToOne | Nullable:false, eager:true | Package which OrderPackage belongs to
packageId| Column |  | Identifier of Package
orderPayment| ManyToOne | Nullable:true, eager:true | Payment made by user
orderPaymentId| Column |  | Identifier of OrderPayment
balanceSheetAmount| Column | Nullable:false  | The amount of balanceSheet
orderSubtotal| Column |  | The amount of OrderPackage subtotal
orderDiscount| Column |  | The amount of OrderPackage discount
orderTotal | Column |  | The amount of OrderPackage total
status | Column | Default: OrderStatus.PENDING | The status of OrderPackage - can be pending, processing or complete
createdAt | Column |  | The date of creation of OrderPackage
updatedAt | Column |  | The date of last update of OrderPackage.