const sharedAssets: Readonly<Record<string, string>> = {
  "/mimir-apps/bridge.png": "https://assets.mimir.business/assets/shared/apps/bridge.93f772b5a40c.png",
  "/mimir-apps/brief.png": "https://assets.mimir.business/assets/shared/apps/brief.c9b9d598da86.png",
  "/mimir-apps/caption.png": "https://assets.mimir.business/assets/shared/apps/caption.7382eccc9d34.png",
  "/mimir-apps/chat.png": "https://assets.mimir.business/assets/shared/apps/chat.6a32e40a7667.png",
  "/mimir-apps/compose.png": "https://assets.mimir.business/assets/shared/apps/compose.0da10233fb87.png",
  "/mimir-apps/digest.png": "https://assets.mimir.business/assets/shared/apps/digest.ebf576c418e9.png",
  "/mimir-apps/dock.png": "https://assets.mimir.business/assets/shared/apps/dock.c43895b99afb.png",
  "/mimir-apps/dub.png": "https://assets.mimir.business/assets/shared/apps/dub.7f45890fedac.png",
  "/mimir-apps/echo.png": "https://assets.mimir.business/assets/shared/apps/echo.61319bfca13b.png",
  "/mimir-apps/extract.png": "https://assets.mimir.business/assets/shared/apps/extract.eaf20b4c3e62.png",
  "/mimir-apps/inspect.png": "https://assets.mimir.business/assets/shared/apps/inspect.65aa5904f8b0.png",
  "/mimir-apps/ledger.png": "https://assets.mimir.business/assets/shared/apps/ledger.9c9dd2671ec8.png",
  "/mimir-apps/people.png": "https://assets.mimir.business/assets/shared/apps/people.acbca0ceac43.png",
  "/mimir-apps/quote.png": "https://assets.mimir.business/assets/shared/apps/quote.483fa04c93ed.png",
  "/mimir-apps/scan.png": "https://assets.mimir.business/assets/shared/apps/scan.de83d07598c9.png",
  "/mimir-apps/tally.png": "https://assets.mimir.business/assets/shared/apps/tally.78a4f0e9d5d7.png",
  "/mimir-apps/veil.png": "https://assets.mimir.business/assets/shared/apps/veil.7504a276eeeb.png",
  "/mimir-apps/verify.png": "https://assets.mimir.business/assets/shared/apps/verify.9472a5e3aa7e.png",
  "/mimir-apps/well.png": "https://assets.mimir.business/assets/shared/apps/well.094bed7dba30.png",
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
