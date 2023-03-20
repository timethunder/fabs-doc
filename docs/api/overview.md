# API - Overview

[FABS-API](https://github.com/timethunder/fabs-api/) คือ API web services ที่ถูกพัฒนาด้วย [NestJS](https://nestjs.com/) เพื่อเป็นตัวกลางในการจัดการข้อมูลระหว่างเว็บไซต์หลัก/เว็บไซต์ backoffice และฐานข้อมูล

```
WEB/BACKOFFICE <<<  API  >>> DATABASE
```

ซึ่งสามารถแบ่งส่วนหลักๆเป็นหมวดได้ดังนี้

```
├── Authentication
│	├── Login
│	├── Register
│	├── Forgot password
│	├── Reset password
│	├── Email verification
│   └── Resend verification email
├── Workspace
├── Project
│   └── Client settings
├── TrialBalance
└── Order & Payment
```

หรือสามารถดู API Docs by Swagger ทั้งหมดได้ที่ [FABS-API](https://github.com/timethunder/fabs-api/) โดยทำการรัน local และเข้าไปยัง http://localhost:3000/api

Exam: https://github.com/zxol/airbnbapi
