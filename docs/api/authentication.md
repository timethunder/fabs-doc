# 🔐 Authentication

## Login

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

## Register

Request
```ts
// src/auth/auth.controller.ts#register
POST api/auth/register
{
	"firstName": string,
	"lastName": string,
	"email": string,
	"password": string,
	"company": string,
	"agreements": boolean,
}
```
Resposne
```ts
{
	"uuid": string,
	"firstName": string,
	"lastName": string,
	"email": string,
	"id": number,
	"isValidateEmail": boolean,
	"createdAt": date,
	"updatedAt": date,
	"role": string
}
```

## Forgot password
Request
```ts
// src/auth/auth.controller.ts#sendEmailForgotPassword
GET api/auth/forgot-password/:email
```
Resposne
```ts
{
	"success": boolean,
	"message": string,
}
```

## Reset password
Request
```ts
// src/auth/auth.controller.ts#setNewPassord
POST api/auth/reset-password
{
	"email": string,
	"newPassword": string,
	"newPasswordToken": string,
 	"currentPassword": string
}
```
Resposne
```ts
{
	"success": boolean,
	"message": string,
}
```

## Email verification
Request
```ts
// src/auth/auth.controller.ts#verifyEmail
GET api/auth/verify/:token
```
Resposne
```ts
{
	"success": boolean,
	"message": string,
}
```

## Resend verification email
Request
```ts
// src/auth/auth.controller.ts#sendEmailVerification
GET api/auth/resend-verification/:email
```
Resposne
```ts
{
	"success": boolean,
	"message": string,
}
```
