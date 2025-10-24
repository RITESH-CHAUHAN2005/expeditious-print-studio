import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({ title, description, keywords, image, url }: SEOProps) => {
  const siteTitle = "PrintHub - Custom Business Cards & Photo Canvas";
  const fullTitle = `${title} | ${siteTitle}`;
  const defaultImage = "/hero-banner.jpg";
  const defaultUrl = window.location.origin;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={url || defaultUrl} />
    </Helmet>
  );
};

export default SEO;
