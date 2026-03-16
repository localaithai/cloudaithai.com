export default function Footer() {
  return (
    <footer className="py-12 border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          {/* Solutions */}
          <div>
            <p className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">Solutions</p>
            <div className="space-y-2 text-[13px] text-[#86868b]">
              <a href="/solutions/ecommerce" className="block hover:text-[#1d1d1f] transition-colors">ร้านค้าออนไลน์</a>
              <a href="/solutions/creator" className="block hover:text-[#1d1d1f] transition-colors">Content Creator</a>
              <a href="/solutions/legal" className="block hover:text-[#1d1d1f] transition-colors">สำนักงานกฎหมาย</a>
              <a href="/solutions/healthcare" className="block hover:text-[#1d1d1f] transition-colors">คลินิก & โรงพยาบาล</a>
              <a href="/solutions/realestate" className="block hover:text-[#1d1d1f] transition-colors">อสังหาริมทรัพย์</a>
              <a href="/solutions/restaurant" className="block hover:text-[#1d1d1f] transition-colors">ร้านอาหาร & F&B</a>
            </div>
          </div>

          {/* Tools */}
          <div>
            <p className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">เครื่องมือ</p>
            <div className="space-y-2 text-[13px] text-[#86868b]">
              <a href="/integrations" className="block hover:text-[#1d1d1f] transition-colors">55+ Integrations</a>
              <a href="/home-ai" className="block hover:text-[#1d1d1f] transition-colors">Home AI Assistant</a>
              <a href="/#models" className="block hover:text-[#1d1d1f] transition-colors">Frontier Models</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">Company</p>
            <div className="space-y-2 text-[13px] text-[#86868b]">
              <a href="/#pricing" className="block hover:text-[#1d1d1f] transition-colors">ราคา</a>
              <a href="/#contact" className="block hover:text-[#1d1d1f] transition-colors">ติดต่อเรา</a>
              <a href="https://localaithai.com" target="_blank" className="block hover:text-[#2997ff] transition-colors">LocalAI Thailand</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">ติดต่อ</p>
            <div className="space-y-2 text-[13px] text-[#86868b]">
              <a href="tel:0827047606" className="block hover:text-[#1d1d1f] transition-colors">082-704-7606</a>
              <a href="mailto:chavin@pace-design.co.th" className="block hover:text-[#1d1d1f] transition-colors">chavin@pace-design.co.th</a>
              <a href="https://line.me/R/ti/p/@542mgysj" className="block hover:text-[#1d1d1f] transition-colors">LINE @542mgysj</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-black/[0.04] gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#2997ff] to-[#5856d6] flex items-center justify-center">
              <span className="text-white text-[9px] font-black">C</span>
            </div>
            <span className="text-[13px] font-semibold text-[#1d1d1f]">CloudAI Thailand</span>
          </div>
          <p className="text-[11px] text-[#d2d2d7]">&copy; 2026 CloudAI Thailand — AI Automation สำหรับธุรกิจไทย</p>
        </div>
      </div>
    </footer>
  );
}
