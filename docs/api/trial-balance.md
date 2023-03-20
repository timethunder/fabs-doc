# 📊 TrialBalance

## Prerequisites
* Request headers
	* `Authorization: Bearer {access_token}`

## Create new trial balance
Request
```ts
// src/trial-balances/trial-balances.controller.ts#create
POST api/trialBalances
{
	accountingYear: number;
	records: JSON;
	operation: OperationType;
	directors: JSON;
	currentPeriod: JSON;
	previousPeriod: JSON;
	approvalDate: Date;
	taxRate: Double;
	additionalInfos: JSON;
	remarkConfigs: JSON;
}
```
Resposne
```ts
{
	id: number;
	uuid: string;
	accountingYear: number;
	records: JSON;
	operation: OperationType;
	directors: JSON;
	currentPeriod: JSON;
	previousPeriod: JSON;
	approvalDate: Date;
	taxRate: Double;
	additionalInfos: JSON;
	remarkConfigs: JSON;
	createdAt: Date;
	updatedAt: Date;
}
```

## Get trial balance list
Request
```ts
// src/trial-balances/trial-balances.controller.ts#findAll
GET api/trialBalances
```
Resposne
```ts
[
	{
		id: number;
		uuid: string;
		accountingYear: number;
		records: JSON;
		operation: OperationType;
		directors: JSON;
		currentPeriod: JSON;
		previousPeriod: JSON;
		approvalDate: Date;
		taxRate: Double;
		additionalInfos: JSON;
		remarkConfigs: JSON;
		createdAt: Date;
		updatedAt: Date;
	},
	...
]
```

## Get trial balance by ID
Request
```ts
// src/trial-balances/trial-balances.controller.ts#findOne
GET api/trialBalances/{id}
```
Resposne
```ts
{
	id: number;
	uuid: string;
	accountingYear: number;
	records: JSON;
	operation: OperationType;
	directors: JSON;
	currentPeriod: JSON;
	previousPeriod: JSON;
	approvalDate: Date;
	taxRate: Double;
	additionalInfos: JSON;
	remarkConfigs: JSON;
	createdAt: Date;
	updatedAt: Date;
}
```

## Update trial balance by ID
Request
```ts
// src/trial-balances/trial-balances.controller.ts#update
PATCH api/trialBalances/{id}
// all fields are optional
{
	accountingYear: number;
	records: JSON;
	operation: OperationType;
	directors: JSON;
	currentPeriod: JSON;
	previousPeriod: JSON;
	approvalDate: Date;
	taxRate: Double;
	additionalInfos: JSON;
	remarkConfigs: JSON;
}
```
Resposne
```ts
{
	id: number;
	uuid: string;
	accountingYear: number;
	records: JSON;
	operation: OperationType;
	directors: JSON;
	currentPeriod: JSON;
	previousPeriod: JSON;
	approvalDate: Date;
	taxRate: Double;
	additionalInfos: JSON;
	remarkConfigs: JSON;
	createdAt: Date;
	updatedAt: Date;
}
```

## Update trial balance records by trial balance ID
Request
```ts
// src/trial-balances/trial-balances.controller.ts#updateTrialBalanceRecords
PUT api/trialBalances/{id}/trialBalanceRecords
{
	records: JSON;
}
```
Resposne
```ts
{
	id: number;
	uuid: string;
	accountingYear: number;
	records: JSON;
	operation: OperationType;
	directors: JSON;
	currentPeriod: JSON;
	previousPeriod: JSON;
	approvalDate: Date;
	taxRate: Double;
	additionalInfos: JSON;
	remarkConfigs: JSON;
	createdAt: Date;
	updatedAt: Date;
}
```

## Update trial balance remark configs by trial balance ID
Request
```ts
// src/trial-balances/trial-balances.controller.ts#updateTrialBalanceRemarkConfigs
PUT api/trialBalances/{id}/trialBalanceRemarkConfigs
{
	remarkConfigs: JSON;
}
```
Resposne
```ts
{
	id: number;
	uuid: string;
	accountingYear: number;
	records: JSON;
	operation: OperationType;
	directors: JSON;
	currentPeriod: JSON;
	previousPeriod: JSON;
	approvalDate: Date;
	taxRate: Double;
	additionalInfos: JSON;
	remarkConfigs: JSON;
	createdAt: Date;
	updatedAt: Date;
}
```

## Delete trial balance by ID
Request
```ts
// src/trial-balances/trial-balances.controller.ts#remove
DELETE api/trialBalances/{id}
```
Resposne
```ts
null
```
