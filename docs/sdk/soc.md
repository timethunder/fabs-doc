# Statement of Changes in Equity

`StatementOfChangesAdapter` เป็น adapter ที่สร้างขึ้นมาเพื่อใช้กับหน้า "**งบแสดงการเปลี่ยนแปลงส่วนของผู้ถือหุ้น**" ตามรูปตัวอย่างด้านล่าง

![ตัวอย่าง](./img/soc-1.png)

ซึ่งข้อมูลนี้มีความจำเป็นต้องใช้ `TrialBalance`(ที่มี `additionalInfo` ด้วย) โดยใช้ร่วมกับ `StatementOfChangesBuilder` ซึ่งเป็นตัวคำนวณค่าใน row ต่างๆ

## ส่วนของการพัฒนา

มี property หลักที่ควรทำความเข้าใจก่อนคือ `configRows()` ซึ่งสร้างขึ้นมาเพื่อใช้เป็นตัวกลางในการกำหนดว่าในหน้านี้จะมี row ใดบ้างและแต่ละ row มีค่าอะไร ซึ่งค่านั้นก็อาจจะได้จากการคำนวณหรือดึงจาก `TrialBalance` ก็ได้ เช่น

```ts
public get configRows(): StatementOfChangesConfig[] {
		return [
			{
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
			},
        ]
}
```

เช่น config ตัวแรกนี่คือบรรทัดแรกของหน้างบแสดงการเปลี่ยนแปลงฯ ซึ่ง
- `refId` คือ id แต่ ณ ตอนนี้ไม่ได้ใช้
- `title` คือ text ที่จะแสดงใน column ซ้ายสุด
- `level` คือความลึกของย่อหน้า
- `topLine` คือขีดเส้นบน 
- `type` คือประเภทของ row
- `skip` คือเงื่อนไขว่าจะข้าม row นี้หรือไม่ในการ render ครั้งนี้ซึ่งจะมีตัวแปรกำหนดอยู่
- `required` คือ จะแสดงหรือไม่ถ้า `value` เป็็น `0` ทุก columns
- `value` คือ ค่าตัวเลข ตาม column ที่มีในตาราง

## How to Use

function หลักที่ใช้สร้างข้อมูลไปสร้างตารางคือ `renderRows` ซึ่งจะได้ `StatementOfChangesAndShareHolderEquityTableRow[]` ซึ่งมี type ดังนี้

```ts
export type StatementOfChangesAndShareHolderEquityTableRow = {
	index: number
	no: string
	refId?: number
	title: string
	level: number
	paidUpSheareCapital?: number
	sharePremium?: number
	profit?: number
	arrangedProfit?: number
	otherComponentsOfShareholdersEquity?: number
	total?: number
	topLine: boolean
	textWeigth?: string
}
```

ตัวอย่างการใช้งาน

```ts
const adapter = new StatementOfChangesAdapter(trialBalance)
const rows = adapter.renderRows()
```