import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, color: "#f7fbff", background: "radial-gradient(circle at 78% 18%, #0077ff 0%, transparent 30%), linear-gradient(135deg, #07152b, #162f56)" }}>
      <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>CloudAI Thailand</div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>Mimir Suites Cloud</div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#c1dcff" }}>Business AI apps, without an AI machine.</div>
      </div>
    </div>,
    size,
  );
}
