const sharedAssets: Readonly<Record<string, string>> = {
  "/mimir-apps/chat.png":
    "https://assets.mimir.business/assets/shared/apps/chat.6a32e40a7667.png",
  "/mimir-apps/docs.png":
    "https://assets.mimir.business/assets/shared/apps/docs.754dfdf77fa9.png",
  "/mimir-apps/extract.png":
    "https://assets.mimir.business/assets/shared/apps/extract.eaf20b4c3e62.png",
  "/mimir-apps/intake.png":
    "https://assets.mimir.business/assets/shared/apps/intake.c43895b99afb.png",
  "/mimir-apps/ledger.png":
    "https://assets.mimir.business/assets/shared/apps/ledger.9c9dd2671ec8.png",
  "/mimir-apps/quotation.png":
    "https://assets.mimir.business/assets/shared/apps/quotation.483fa04c93ed.png",
  "/mimir-apps/reconcile.png":
    "https://assets.mimir.business/assets/shared/apps/reconcile.78a4f0e9d5d7.png",
  "/mimir-apps/redact.png":
    "https://assets.mimir.business/assets/shared/apps/redact.7504a276eeeb.png",
  "/mimir-apps/scan.png":
    "https://assets.mimir.business/assets/shared/apps/scan.de83d07598c9.png",
  "/mimir-apps/second-brain.png":
    "https://assets.mimir.business/assets/shared/apps/second-brain.094bed7dba30.png",
  "/mimir-apps/slides.png":
    "https://assets.mimir.business/assets/shared/apps/slides.e6a5a53b6d58.png",
  "/mimir-apps/summarize.png":
    "https://assets.mimir.business/assets/shared/apps/summarize.ebf576c418e9.png",
  "/mimir-apps/transcribe.png":
    "https://assets.mimir.business/assets/shared/apps/transcribe.61319bfca13b.png",
  "/mimir-apps/translate.png":
    "https://assets.mimir.business/assets/shared/apps/translate.93f772b5a40c.png",
  "/mimir-apps/verify.png":
    "https://assets.mimir.business/assets/shared/apps/verify.9472a5e3aa7e.png",
  "/mimir-apps/write.png":
    "https://assets.mimir.business/assets/shared/apps/write.0da10233fb87.png",
  "/mimir-suite-logo.png": "https://assets.mimir.business/assets/shared/brand/mimir-suite-logo.52b4d97f76ea.png",
  "/partners/ascenti-dark.png": "https://assets.mimir.business/assets/shared/partners/ascenti-dark.9ab2939100e8.png",
  "/partners/eaton.svg": "https://assets.mimir.business/assets/shared/partners/eaton.4d7cc489208e.svg",
  "/partners/ingram-micro.svg": "https://assets.mimir.business/assets/shared/partners/ingram-micro.a6c090cee0a5.svg",
  "/partners/schneider-electric.svg": "https://assets.mimir.business/assets/shared/partners/schneider-electric.757fc88ba198.svg",
  "/partners/sis.png": "https://assets.mimir.business/assets/shared/partners/sis.1e722cd4968f.png",
  "/partners/td-synnex.svg": "https://assets.mimir.business/assets/shared/partners/td-synnex.90fbe1686e01.svg",
  "/partners/vst-ecs.png": "https://assets.mimir.business/assets/shared/partners/vst-ecs.8af9fd17f623.png",
};

export function assetUrl(path: string): string {
  const url = sharedAssets[path];
  if (!url) throw new Error(`Missing shared asset mapping for ${path}`);
  return url;
}
