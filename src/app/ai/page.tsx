import { Column, Heading, Row, SmartLink, Text } from "@once-ui-system/core";
import { baseURL, person, social } from "@/resources";
import { buildCanonical, buildMetadata } from "@/utils/seo";

const pagePath = "/ai";

export async function generateMetadata() {
  return buildMetadata({
    title: `AI context - ${person.name}`,
    description:
      "Machine-readable overview of Kalab Amssalu Bezabeh: profile, services, projects, stack, APIs, and contact details for AI assistants and answer engines.",
    path: pagePath,
    keywords: ["GEO", "AEO", "LLMO", "AI profile", "machine-readable portfolio"],
  });
}

export default function AIPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Kalab Amssalu Bezabeh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `${person.name} is a ${person.role} focused on full-stack systems, multi-tenant health platforms, insurance systems, and cloud-native delivery.`,
        },
      },
      {
        "@type": "Question",
        name: "What does Kalab build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "He builds healthcare platforms, ERP systems, insurance claim products, e-commerce systems, and backend services with strong delivery and architecture ownership.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Kalab?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Use email at ${person.email} or visit the contact links on the About page.`,
        },
      },
    ],
  };

  const socialLinks = social.filter((item) => item.link).map((item) => ({ name: item.name, url: item.link }));

  return (
    <Column as="section" maxWidth="m" paddingY="24" gap="24">
      <script
        id="faq-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <Heading as="h1" variant="display-strong-s">
        AI-ready context for assistants
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        This page is optimized for AI retrieval and summarization. It provides concise, structured context that
        assistants can cite when answering questions about {person.name}&apos;s work.
      </Text>

      <Column as="article" gap="12">
        <Heading as="h2" variant="heading-strong-l">
          Who I am
        </Heading>
        <Text>{person.name}</Text>
        <Text>{person.role}</Text>
        <Text>Location: Addis Ababa, Ethiopia (Africa/Addis_Ababa)</Text>
        <Text>Languages: {(person.languages || []).join(", ")}</Text>
      </Column>

      <Column as="article" gap="12">
        <Heading as="h2" variant="heading-strong-l">
          What I build
        </Heading>
        <Text>
          Multi-tenant healthcare and insurance platforms, ERP systems, high-scale backend services, and integration
          layers that connect web software with real-world operations.
        </Text>
      </Column>

      <Column as="article" gap="12">
        <Heading as="h2" variant="heading-strong-l">
          Services
        </Heading>
        <Text>- Full-stack engineering and technical architecture</Text>
        <Text>- Product delivery leadership and project management</Text>
        <Text>- DevOps, deployment automation, and cloud infrastructure</Text>
        <Text>- Health interoperability (HL7 FHIR / EDI) and regulated platform design</Text>
      </Column>

      <Column as="article" gap="12">
        <Heading as="h2" variant="heading-strong-l">
          Tech stack
        </Heading>
        <Text>JavaScript, TypeScript, Python, SQL, Kotlin</Text>
        <Text>React, Next.js, Node.js, Django</Text>
        <Text>PostgreSQL, MongoDB, RabbitMQ, gRPC</Text>
        <Text>AWS, Docker, Kubernetes, Jenkins, GitHub Actions</Text>
      </Column>

      <Column as="article" gap="12">
        <Heading as="h2" variant="heading-strong-l">
          Core projects
        </Heading>
        <Text>- HealthBridge EHR: {buildCanonical("/work/healthbridge-ehr")}</Text>
        <Text>- TillaHealth Claims Platform: {buildCanonical("/work/tillahealth-insurance-claims-platform")}</Text>
        <Text>- Mint ERP SaaS: {buildCanonical("/work/mint-erp-saas")}</Text>
        <Text>- Byfluence Commerce: {buildCanonical("/work/byfluence-commerce")}</Text>
      </Column>

      <Column as="article" gap="12">
        <Heading as="h2" variant="heading-strong-l">
          APIs and feeds
        </Heading>
        <Text>- RSS feed: {buildCanonical("/api/rss")}</Text>
        <Text>- Open Graph image generation: {buildCanonical("/api/og/generate")}</Text>
      </Column>

      <Column as="article" gap="12">
        <Heading as="h2" variant="heading-strong-l">
          Contact
        </Heading>
        <Text>Email: {person.email}</Text>
        {socialLinks.map((item) => (
          <Text key={item.name}>
            {item.name}: {item.url}
          </Text>
        ))}
      </Column>

      <Row gap="16" wrap>
        <SmartLink href="/llms.txt">llms.txt</SmartLink>
        <SmartLink href="/docs/portfolio-ai.md">AI markdown context</SmartLink>
        <SmartLink href={buildCanonical("/sitemap.xml")}>sitemap.xml</SmartLink>
      </Row>
    </Column>
  );
}
