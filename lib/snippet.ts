export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 155;

export function assertSnippet(
  where: string,
  { title, description, titleSuffix = "" }: { title: string; description: string; titleSuffix?: string },
): void {
  const renderedTitle = `${title}${titleSuffix}`;
  if (renderedTitle.length > TITLE_MAX) throw new Error(`SEO: title for ${where} is ${renderedTitle.length} chars, over ${TITLE_MAX}: ${renderedTitle}`);
  if (description.length > DESCRIPTION_MAX) throw new Error(`SEO: description for ${where} is ${description.length} chars, over ${DESCRIPTION_MAX}: ${description}`);
}
