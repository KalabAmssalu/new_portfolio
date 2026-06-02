import { person, home } from "./content";
import { baseURL } from "./once-ui.config";

export const personSchemaExample = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.role,
  url: baseURL,
  email: person.email,
};

export const websiteSchemaExample = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${person.name} Portfolio`,
  url: baseURL,
  description: home.description,
};

export const organizationSchemaExample = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: `${person.name} Portfolio`,
  url: baseURL,
};
