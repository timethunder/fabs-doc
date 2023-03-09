# Trial Balance Record (รายการในงบทดลอง) 

## ความหมาย
รายการบัญชีที่ย่อยที่สุดในระบบของ FABS ซึ่งจะถูกนำไปใช้ query เพื่อสร้างรายงานในอนาคต โดยแต่ละรายการก็จะต้องมีทั้ง ชื่อรายการ, ตัวเลขเดบิต, ตัวเลขเครดิต และรหัสบัญชี เป็นต้น

## ส่วนของการพัฒนา

`FABSTrialBalanceRecord` คือ class ที่ใช้ในการแทนรายการบัญชีของระบบบัญชี โดยมี properties แต่มีบางตัวที่เป็นส่วนสำคัญที่ควรรู้ ดังนี้

### เก็บข้อมูลตัวเลขโดยตรง
คือ properties ที่เกิดจากการ assign ค่าตรงๆจาก user

#### current/previousDebit และ current/previousCredit 🌟
เป็นตัวเลขทางบัญชีที่ผู้ใช้งานจะ input เข้ามาซึ่งถ้าเป็นงบดำเนินการปกติ จะมีข้อมูลทั้งฝั่ง current และ previous แต่ถ้าเป็นงบจัดตั้งจะมีแค่ current ซึ่งในหนึ่งรายการสามารถมีตัวเลขได้แค่ฝั่ง debit หรือ credit ด้านใดด้านหนึ่งเท่านั้น ไม่สามารถมีทั้ง 2 ฝั่งได้ ซึ่งโดยปกติแล้วผู้ใช้จะต้องใส่ตัวเลขตาม nature ของหมวดบัญชีที่กล่าวไปในบทก่อนหน้า แต่จะมีบางกรณีที่หมวดบัญชีเหล่านั้นเป็นกลุ่มที่เป็นค่าหัก(หรือค่าเสื่อม) รายการเหล่านั้นก็จะถูกกรอกลงในฝั่งตรงข้ามกับ nature 

#### adjustedCurrentDebit และ adjustedCurrentCredit
เป็นตัวเลขที่ออกแบบมาไว้เผื่อกรณีที่รายการบัญชีนั้นๆต้องการแก้ไขค่าตัวเลขทางบัญชี โดยจะมีการเก็บค่าเดิมไว้ใน properties นี้แต่ในปัจจุบันยังไม่ได้ถูกใช้งาน เพราะ ณ เวอร์ชันนี้ผู้พัฒนามองว่าผู้ใช้ต้องการนำงบทดลองที่สมบูรณ์แล้วมาสร้างเอกสาร ยังไม่มีการแก้ไขค่าตัวเลขทางบัญชี ซึ่งหากในอนาคตต้องการทำ Working Paper หรือทำรายงาน AJE / RJE ผู้พัฒนาก็จะสามารถใช้ properties นี้ได้

#### varianceDebit และ varianceCredit (หรือ Movement ตามภาษาบัญชี)
ตัวเลขการเคลื่อนไหวทางบัญชีระหว่าง "ปีปัจจุบัน" และ "ปีเปรียบเทียบ" ส่วนนี้ผู้ใช้จะเป็นคนกรอกให้เช่นกัน และข้อแตกต่างจาก properties ด้านบนคือหนึ่งรายการสามารถมี variance ได้ทั้ง 2 ฝั่ง 

#### accountCategory 🌟
หมวดบัญชี ซึ่งเป็นรายการที่อยู่ใน list ของ `AccountTypeConfigs.getNewList()` โดย property จะเป็นตัวที่ช่วยให้การจัดกลุ่มของรายการบัญชีเป็นไปได้ง่าย แต่หากระบุข้อนี้ผิดก็จะทำให้การคำนวณทุกอย่างผิดเช่นกัน

### ข้อมูลที่ถูกคำนวณจากสิ่งที่ผู้ใช้กรอก
ในการทำงานของ FABS ค่าทุกค่าจะถูกคำนวณตามกลุ่มและ nature ของหมวดบัญชีนั้นๆ ซึ่งเพื่อความง่ายต่อการจัดการ เราจึงจำเป็นต้องมีการคำนวณเบื้องต้นไว้ก่อนตั้งแต่แรกก่อนจะนำไปให้ `DataBuilder` หรือ `UtilityCalculator` หาผลรวมอีกที

#### current/previousAdjustedBalanceForCal 🌟
คือค่าที่ผ่านการหาออกมาแล้วว่าจะเป็นตัวเลขทางบวก หรือ ลบ โดยพิจารณาจาก `accountCategory` ที่ผู้ใช้กำหนดมาให้ ถูกใช้เมื่อต้องเอาไปหาผลรวมตามกลุ่มของหมวดบัญชีนั้นๆ ผู้พัฒนาสามารถหยิบค่านี้ไปใช้คำนวณต่อหรือหาผลรวมได้เลยโดยไม่ต้อง พบการเรียกใช้ได้จากหลายๆส่วน โดยเฉพาะการหาผลรวมใน `DataBuilder` และ `UtilityCalculator`