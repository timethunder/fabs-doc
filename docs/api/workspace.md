# 🏢 Workspace

## Prerequisites
* Request headers
	* `Authorization: Bearer {access_token}`

## Create new workspace
Request
```ts
// src/workspaces/workspaces.controller.ts#create
POST api/workspaces
{
	name: string
}
```
Response
```ts
{
	id: number,
	uuid: string,
	name: string,
	createdAt: date,
	updatedAt: date,
}
```

## Get workspace list
Request
```ts
// src/workspaces/workspaces.controller.ts#findAll
GET api/workspaces
```
Response
```ts
[
	{
		id: number,
		uuid: string,
		name: string,
		createdAt: date,
		updatedAt: date,
	},
	...
]
```

## Get workspace by ID
Request
```ts
// src/workspaces/workspaces.controller.ts#findOne
GET api/workspace/{id}
```
Response
```ts
{
	id: number,
	uuid: string,
	name: string,
	createdAt: date,
	updatedAt: date,
}
```

## Update workspace by ID
Request
```ts
// src/workspaces/workspaces.controller.ts#update
PATCH api/workspace/{id}
```
Response
```ts
{
	id: number,
	uuid: string,
	name: string,
	createdAt: date,
	updatedAt: date,
}
```

## Delete workspace by ID
Request
```ts
// src/workspaces/workspaces.controller.ts#remove
DELETE api/workspace/{id}
```
Response
```ts
null
```
