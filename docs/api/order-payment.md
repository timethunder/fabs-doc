# 📦 Order & Payment

## Prerequisites
* Request headers
	* `Authorization: Bearer {access_token}`

## Create order
Request
```ts
// src/orders/orders.controller.ts#create
POST api/orders/create
{
	packages: {
		id: number;
		balanceSheetAmount: number;
	}[];
	slipDate: Date;
	slipBase64: string;
}
```
Response
```ts
{
	orderPackages: [
		{
			id: number;
			uuid: string;
			packageId: number;
			package: Package;
			orderPayment: OrderPayment;
			orderPaymentId: number;
			balanceSheetAmount: number;
			orderSubtotal: number;
			orderDiscount: number;
			orderTotal: number;
			status: OrderStatus;
			createdAt: Date;
			updatedAt: Date;
		},
		...
	],
	orderPayment: {
		id: number;
		uuid: string;
		userId: number;
		user: User;
		orderPackages: OrderPackage[];
		orderPackageIds: number[];)
		orderSubtotal: number;
		orderDiscount: number;
		orderTotal: number;
		orderNumber: string;
		paymentSlipBase64: string;
		paymentDate: Date;
		status: PaymentStatus;
		approver: User;
		approverId: number;
		createdAt: Date;
		updatedAt: Date;
	},
}
```

## Get order history list
Request
```ts
// src/orders/orders.controller.ts#history
GET api/orders/history
```
Response
```ts
[
	{
		id: number;
		uuid: string;
		userId: number;
		user: User;
		orderPackages: OrderPackage[];
		orderPackageIds: number[];)
		orderSubtotal: number;
		orderDiscount: number;
		orderTotal: number;
		orderNumber: string;
		paymentSlipBase64: string;
		paymentDate: Date;
		status: PaymentStatus;
		approver: User;
		approverId: number;
		createdAt: Date;
		updatedAt: Date;
	},
	...
]
```

## Confirm order
Request
```ts
// src/backoffice/backoffice.controller.ts#confirmOrder
POST api/backoffice/orders/confirm
{
	orderId: number;
	orderUuid: string;
}
```
Response
```ts
// void
```

## Cancel order
Request
```ts
// src/backoffice/backoffice.controller.ts#cancelOrder
POST api/backoffice/orders/cancel
{
	orderId: number;
	orderUuid: string;
}
```
Response
```ts
// void
```
