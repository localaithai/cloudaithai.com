export default function Footer() {
  return (
    <footer className="py-10 border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#2997ff] to-[#5856d6] flex items-center justify-center">
              <span className="text-white text-[9px] font-black">C</span>
            </div>
            <span className="text-[13px] font-semibold text-[#1d1d1f]">CloudAI Thailand</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[13px] text-[#86868b]">
            <a href="#models" className="hover:text-[#1d1d1f] transition-colors">AI Models</a>
            <a href="#tools" className="hover:text-[#1d1d1f] transition-colors">เครื่องมือ</a>
            <a href="#pricing" className="hover:text-[#1d1d1f] transition-colors">ราคา</a>
            <a href="#contact" className="hover:text-[#1d1d1f] transition-colors">ติดต่อ</a>
            <a href="https://localaithai.com" target="_blank" className="hover:text-[#2997ff] transition-colors">LocalAI Thailand</a>
          </div>

          <p className="text-[11px] text-[#d2d2d7]">&copy; 2026 CloudAI Thailand</p>
        </div>
      </div>
    </footer>
  );
}
