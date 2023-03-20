# 📂 Project

## Prerequisites
* Request headers
	* `Authorization: Bearer {access_token}`

## Create new project
Request
```ts
// src/projects/projects.controller.ts#create
POST api/projects
{
	name: string
	businessType: string
	typeId: number
	taxNumber: string
	address: string
	establishmentDate: Date;
	closedDate: Date;
	approvalDate: Date
	additionalInfos: AdditionalBalanceInfos
	currentPeriod: CurrentPeriod
	previousPeriod: PreviousPeriod
	taxRate: number
	isYearCompare: string
	directors: Director[]
	workspaceId: string
	companyTypeId: number
	operation: string
	packageId: number
}
```
Response
```ts
{
	id: number
	uuid: string
	trialBalance: TrialBalance
	trialBalanceId: number
	client: Client
	clientId: number
	user: User
	userId: number
	userPackage: UserPackage
	userPackageId: number
	createdAt: Date
	updatedAt: Date
	deletedAt: Date
}
```

## Get project list
Request
```ts
// src/projects/projects.controller.ts#findAll
GET api/projects
```
Response
```ts
[
	{
		id: number
		uuid: string
		trialBalance: TrialBalance
		trialBalanceId: number
		client: Client
		clientId: number
		user: User
		userId: number
		userPackage: UserPackage
		userPackageId: number
		createdAt: Date
		updatedAt: Date
		deletedAt: Date
	},
	...
]
```

## Get project by ID
Request
```ts
// src/projects/projects.controller.ts#findOne
GET api/projects/{id}
```
Response
```ts
{
	id: number
	uuid: string
	trialBalance: TrialBalance
	trialBalanceId: number
	client: Client
	clientId: number
	user: User
	userId: number
	userPackage: UserPackage
	userPackageId: number
	createdAt: Date
	updatedAt: Date
	deletedAt: Date
	isFreeTrial: boolean
}
```

## Update project by ID
Request
```ts
// src/projects/projects.controller.ts#update
PATCH api/projects/{id}
// all fields are optional
{
	name: string
	businessType: string
	typeId: number
	taxNumber: string
	address: string
	establishmentDate: Date;
	closedDate: Date;
	approvalDate: Date
	additionalInfos: AdditionalBalanceInfos
	currentPeriod: CurrentPeriod
	previousPeriod: PreviousPeriod
	taxRate: number
	isYearCompare: string
	directors: Director[]
	workspaceId: string
	companyTypeId: number
	operation: string
	packageId: number
}
```
Response
```ts
{
	id: number
	uuid: string
	trialBalance: TrialBalance
	trialBalanceId: number
	client: Client
	clientId: number
	user: User
	userId: number
	userPackage: UserPackage
	userPackageId: number
	createdAt: Date
	updatedAt: Date
	deletedAt: Date
	isFreeTrial: boolean
}
```

## Delete project by ID
Request
```ts
// src/projects/projects.controller.ts#remove
DELETE api/workspace/{id}
```
Response
```ts
null
```
