# 📂 Project

## CRUD
Request
```ts
// src/auth/auth.controller.ts#login
POST api/auth/login
{
	"email": string,
	"password": string
}
```
Resposne
```ts
{
	"access_token": string
}
```
