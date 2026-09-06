import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/privacy");

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
        <article className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
          <p className="text-sm font-semibold text-[#06c]">PDPA</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            นโยบายความเป็นส่วนตัว
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6e6e73]">
            ข้อมูลเว็บไซต์ การติดต่อ และการใช้งาน Mimir Suites Cloud อยู่คนละขอบเขตกัน
          </p>
          <p className="mt-3 text-sm text-[#6e6e73]">
            ปรับปรุงล่าสุด 7 กันยายน 2026
          </p>
          <div className="mt-14 grid gap-10 text-base leading-8 text-[#424245]">
            <section>
              <h2 className="text-2xl font-semibold text-[#1d1d1f]">
                ข้อมูลติดต่อ
              </h2>
              <p className="mt-3">
                แบบฟอร์มส่งชื่อ ช่องทางติดต่อ บริษัท
                และรายละเอียดงานที่คุณกรอกไปยังระบบลูกค้าสัมพันธ์ของเรา
                เพื่อให้ทีมงานตอบกลับและจัดทำข้อเสนอ เราไม่ส่งค่าที่กรอกไปยังเครื่องมือวิเคราะห์
                ติดต่อเรื่องข้อมูลส่วนบุคคลได้ที่{" "}
                <a data-cta="email" className="underline" />{" "}
                ผู้ดำเนินการเว็บไซต์เป็นผู้ควบคุมข้อมูลตาม PDPA
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#1d1d1f]">
                Analytics แบบไม่ใช้คุกกี้
              </h2>
              <p className="mt-3">
                เราใช้ PostHog ในโปรเจกต์ LocalAIThailand ที่โฮสต์ในสหรัฐอเมริกา
                เพื่อวัดหน้าเว็บ แหล่งอ้างอิง แคมเปญ ประเภทอุปกรณ์ การกดช่องทางติดต่อ
                และการเลื่อนถึง 50% หรือ 90% ของหน้า URL จะเหลือเฉพาะโดเมนและ path
                และเราไม่สร้างโปรไฟล์บุคคล
              </p>
              <p className="mt-3">
                PostHog ทำงานแบบไม่ใช้คุกกี้ตลอดเวลา ไม่เก็บข้อมูลใน local storage หรือ
                session storage ไม่บันทึกภาพการใช้งาน และไม่แสดงกล่องขอความยินยอม
                ระบบนับผู้ชมด้วย hash ที่คำนวณบนเซิร์ฟเวอร์ และไม่รับค่าที่กรอกในแบบฟอร์ม
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#1d1d1f]">
                ข้อมูลที่ใช้กับโมเดล Cloud
              </h2>
              <p className="mt-3">
                เมื่อคุณเลือกใช้โมเดล Cloud
                เนื้อหาที่จำเป็นต่อคำสั่งจะถูกส่งไปยังผู้ให้บริการโมเดลที่คุณเลือก
                หลังจากขั้นตอนปิดบังข้อมูลส่วนบุคคลตามการตั้งค่าของบริการ การประมวลผลนี้แยกจาก
                PostHog และเป็นไปตามข้อตกลงของ Mimir Suites Cloud
                และผู้ให้บริการโมเดลนั้น
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#1d1d1f]">
                วัตถุประสงค์ ผู้รับ และการโอนข้อมูล
              </h2>
              <p className="mt-3">
                เราใช้ข้อมูลติดต่อเพื่อดำเนินการตามคำขอก่อนเข้าทำสัญญา
                และใช้สถิติรวมเพื่อปรับปรุงเว็บไซต์ ผู้รับข้อมูลมีเฉพาะทีมงาน ผู้ให้บริการ CRM,
                PostHog ในสหรัฐอเมริกา และผู้ให้บริการโมเดลที่คุณเลือกสำหรับงาน Cloud
                เราใช้ข้อกำหนดคุ้มครองข้อมูลกับผู้ประมวลผลและไม่ขายข้อมูล
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#1d1d1f]">
                ระยะเวลาและสิทธิของคุณ
              </h2>
              <p className="mt-3">
                ข้อมูล Analytics เก็บไม่เกิน 12 เดือน ข้อมูลติดต่อที่ไม่เกิดสัญญาเก็บไม่เกิน 2 ปี
                ส่วนข้อมูลบริการเก็บตามข้อตกลงและกฎหมาย คุณขอเข้าถึง แก้ไข ลบ ระงับ คัดค้าน
                โอนย้าย หรือถอนความยินยอม
                และร้องเรียนต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลได้
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
