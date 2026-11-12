import { site } from "@/lib/site";

export const OG_SIZE = { width: 1200, height: 630 } as const;

/**
 * The social card, rasterised at build time by src/pages/opengraph-image.ts.
 * next/og drew every line in its one face, Noto Sans Regular, so no line
 * asks for a heavier weight.
 */
export function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        // Current satori sizes boxes as content-box; next/og's sized this one
        // as border-box, so without this the padding pushes the copy off the card.
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        color: "#ffffff",
        background: site.themeColor,
      }}
    >
      <div style={{ display: "flex", fontSize: 30 }}>
        {site.name}
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
        <div
          style={{
            display: "flex",
            width: 132,
            height: 16,
            marginBottom: 40,
            background: "#ffffff",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 68,
            lineHeight: 1.1,
          }}
        >
          {site.suiteName}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#dbddf7",
          }}
        >
          Business AI apps, without an AI machine.
        </div>
      </div>
    </div>
  );
}
