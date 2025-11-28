import React from "react";
import { Helmet } from "react-helmet-async";

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
};

const DEFAULT_TITLE = "Rutherford Food Group";
const DEFAULT_DESCRIPTION = "Australia’s leading private-label manufacturer of premium entertaining foods.";

export default function Seo({
  title,
  description,
  keywords,
  image,
  url,
  noIndex,
}: SeoProps) {
  const fullTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  const metaUrl = url ?? (typeof window !== "undefined" ? window.location.href : "");
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description ?? DEFAULT_DESCRIPTION} />
      {keywords && <meta name="keywords" content={keywords} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description ?? DEFAULT_DESCRIPTION} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
    </Helmet>
  );
}