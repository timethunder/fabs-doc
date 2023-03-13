# Data Builder

`DataBuilder` คือ class ที่สร้างเอาไว้สำหรับ query และสร้าง data model เพื่อนำไปใช้ในการสร้าง table สำหรับแต่ละหน้า

## Statement of Financial Position (งบแสดงฐานะการเงิน)

`StatementOfFinacialRowDataBuilder` เป็น class สำหรับสร้าง data model เพื่อนำไป render row ตามหน้า "**งบแสดงฐานะทางการเงิน**", "**งบกำไรขาดทุน**" โดยทั้ง 2 หน้านี้ต้องการ data model ที่คล้ายๆกันตาม code ด้านล่าง

```ts
export type StatementOfFinacialRowData = {
  title: string; // ชื่อหมวด
  secondary: SecondaryRowData[]; // ข้อมูลของหมวดย่อย
  total: TotalRowData; // ผลรวมของหมวด
};
```

โดยการทำงานหลักๆให้ดูที่ function `createRowDataFrom()` และ `createRowDataFromTertiary()` ซึ่งจะเป็นการหาผลรวมของ record ตาม `AccountCategory` ตามหมวดที่ input มาให้ เช่น

```ts
StatementOfFinacialRowDataBuilder.createRowDataFrom(this.tb, "หนี้สิน");
```

หรือหากต้องการ row ที่มี sub row อีก 1 ชั้น ให้ใช้ function

```ts
StatementOfFinacialRowDataBuilder.createRowDataFromTertiary(
  this.tb,
  "ส่วนเกินมูลค่าหุ้น"
);
```

## Statement of Changes in Owner's Equity(งบแสดงการเปลี่ยนแปลงส่วนของเจ้าของ)

`StatementOfChangesBuilder` เป็น class สำหรับสร้าง data model เพื่อนำไป render row ตามหน้า "งบแสดงการเปลี่ยนแปลงส่วนของเจ้าของ" โดยหน้านี้จะใช้ data model ตาม code ด้านล่าง

โดยแต่ละ field ใน type จะอ้างอิงตาม column

```ts
export type StatementOfChangeRowData = {
  paidUpShareCapital: number; // ทุนจดทะเบียน
  sharePremium: number; // ส่วนเกินมูลค่าหุ้น
  profit: number; // กำไรสะสม (ยังไม่จัดสรร)
  arrangedProfit: number; // กำไรสะสม (จัดสรรแล้ว)
  otherComponentsOfShareholdersEquity: number; // ส่วนของผู้ถือหุ้นอื่น
  total: number; // รวม
};
```

builder นี้จะต่างกับตัวก่อนหน้าเนื่องจาก pattern ของตารางในหน้านี้ไม่ตายตัว คนกำหนด row จึงอยู่ที่ `Adapter` ที่จะคอยเรียก function ใน class นี้แล้วเอาผลรวมไปประกอบตามอีกที เช่น

1. ตัวอย่างการเรียกใช้งานเพื่อสร้าง row แรกของหน้างบแสดงการเปลี่ยนแปลงส่วนของเจ้าของ

```ts
[{
	refId: 1,
	title: `ยอดคงเหลือ ณ วันที่ ${Util.parseThaiDate(
		this.tb.previousPeriod?.start ?? this.tb.currentPeriod.start,
	)}`,
	level: 1,
	topLine: true,
	type: 'content',
	skip: this.skipPreviousYearRows,
	required: false,
	value: this.builder.balanceAtStartOfPreviousYear,
}],
```

ซึ่งหลังจากนี้จะเป็นการอธิบายถึงตัว `Adapter` แต่ละตัวที่เรียกใช้ builder เหล่านี้
