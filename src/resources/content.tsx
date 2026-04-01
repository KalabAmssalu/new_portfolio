import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kalab",
  lastName: "Amssalu Bezabeh",
  name: "Kalab Amssalu Bezabeh",
  role: "Software Developer & Project Manager",
  avatar: "/images/avatar.jpg",
  email: "hello@kalab.dev",
  location: "Africa/Addis_Ababa",
  languages: ["Amharic", "English", "Afan Oromo"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s updates</>,
  description: <>Occasional notes on engineering, delivery, and health tech.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Portfolio`,
  description: `Full-stack engineering, architecture, and project leadership by ${person.name}`,
  headline: <>Shipping systems that scale — from insurance cores to national platforms</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">HealthBridge</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/healthbridge-ehr",
  },
  subline: (
    <>
      I&apos;m Kalab — a <Text as="span" size="xl" weight="strong">software developer and project manager</Text> based in{" "}
      <Text as="span" size="xl" weight="strong">Addis Ababa</Text>. I architect multi-tenant health and government
      platforms, lead delivery, and bridge web stacks with real-world hardware when the problem demands it.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} — Addis Ababa`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          I am a results-driven software developer and project manager with a Bachelor&apos;s degree in Information
          Systems from the University of Gondar, where I graduated with very great distinction. My career combines
          hands-on full-stack and DevOps work with steering complex IT projects from conception through production.
        </p>
        <p>
          I have led cross-functional teams at the Ministry of Innovation and Technology and Nexa IT Solution, shipped
          ERP and insurance platforms at national scale, and applied Agile practices that improved team efficiency by
          roughly 25% while keeping delivery predictable. I build and maintain systems using React, Node.js, Django,
          SQL, and cloud-native tooling, with deep exposure to healthcare interoperability (HL7 FHIR, EDI) and
          high-compliance retail.
        </p>
        <p>
          I care about clear ownership, mentorship, and code reviews that raise the bar for everyone on the team. I am
          based in Addis Ababa and fluent in Amharic, English, and Afan Oromo.
        </p>
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "TillaHealth Insurance",
        timeframe: "Present",
        role: "Full-Stack Software Developer, System Architect & Project Manager",
        achievements: [
          <>
            Owned architecture and delivery across a multi-tenant insurance ecosystem: claim management, EDI-based
            medical data exchange, clearinghouse automation, member and provider portals, encounter systems, and
            centralized filtering agents.
          </>,
          <>
            Led HealthBridge, a greenfield multi-tenant EHR, as architect and delivery lead — emphasizing global
            interoperability via HL7 FHIR for clinical workflows and hospital operations.
          </>,
          <>
            Directed Tena&apos;adam, a telehealth super-app: RTC video/audio consultations, homecare flows, and a secure
            e-prescription engine; plus TillaIdir, digitizing community Idir contributions and gatherings.
          </>,
          <>
            Earlier as project manager and system designer, aligned heterogeneous health modules and Agile execution,
            contributing to measurable gains in team throughput and release cadence.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Healthcare platform work",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Sevenfold Technologies",
        timeframe: "—",
        role: "Backend Lead Developer & System Analyst",
        achievements: [
          <>
            Spearheaded backend architecture for the Ministry of Women and Social Affairs nationwide ERP, digitizing
            core workflows and achieving roughly a 95% reduction in manual paperwork.
          </>,
          <>
            Led a cross-functional team of about 15 developers, QA, and UI/UX through Agile delivery under strict
            government requirements.
          </>,
          <>
            Integrated modern web applications with physical systems: digital e-signature devices, biometric kiosks,
            and smart document cabinets — closing the loop between front-office staff and hardware on the ground.
          </>,
        ],
        images: [],
      },
      {
        company: "Videyooadz",
        timeframe: "—",
        role: "Full-Stack Developer & Lead DevOps Engineer",
        achievements: [
          <>
            Built a decoupled microservices architecture for a video freelancing and learning marketplace, prioritizing
            availability and independent scaling of core domains.
          </>,
          <>
            Operated as senior cloud engineer on AWS and on-prem servers; containerized services with Docker and
            Kubernetes and automated delivery with Jenkins and GitHub Actions.
          </>,
          <>
            Delivered an integrated Learning Academy module for video production training alongside the hiring
            marketplace.
          </>,
        ],
        images: [],
      },
      {
        company: "Nexa IT Solution",
        timeframe: "—",
        role: "Lead Full-Stack & DevOps Developer",
        achievements: [
          <>
            Directed Byfluence — Ethiopia&apos;s first hybrid dropshipping and retail commerce stack (Shopify / Zendrop
            class capabilities) with a custom Print-on-Demand engine for automated customization and fulfillment.
          </>,
          <>
            Shipped the retail and POD experience with React and Node.js; reported strong uplift in user engagement
            during the engagement.
          </>,
          <>
            Designed for HIPAA-level security expectations and strong encryption for sensitive retail and transaction
            data.
          </>,
        ],
        images: [],
      },
      {
        company: "EthioReview",
        timeframe: "—",
        role: "Full-Stack Developer & Project Manager",
        achievements: [
          <>
            Delivered Ethiopia&apos;s first business testimonial platform on a microservice architecture using gRPC
            and RabbitMQ for fast, asynchronous service communication.
          </>,
          <>
            Modeled dynamic business profiles with an Entity-Attribute-Value (EAV) schema in PostgreSQL so tenants
            could define custom fields without constant schema migrations.
          </>,
          <>
            Owned analysis, system design, and delivery for a large-scale product informed by retail and services
            research in the local market.
          </>,
        ],
        images: [],
      },
      {
        company: "Derash Delivery",
        timeframe: "—",
        role: "Backend Lead Developer & DevOps Engineer",
        achievements: [
          <>
            Built backend and infrastructure for a restaurant delivery product serving the DMV (DC, Maryland, Virginia)
            area in the United States.
          </>,
          <>
            Focused on real-time order tracking and logistics under high concurrency during peak dining hours.
          </>,
        ],
        images: [],
      },
      {
        company: "Ministry of Innovation and Technology",
        timeframe: "—",
        role: "Project Lead & Software Developer",
        achievements: [
          <>
            Led cross-functional delivery of an ERP SaaS system end to end — planning, execution, and release.
          </>,
          <>
            Mentored developers and ran rigorous code reviews to keep quality and consistency high across the codebase.
          </>,
        ],
        images: [],
      },
      {
        company: "Toorax — Hotel Inventory System",
        timeframe: "Jun 2023 – Aug 2023",
        role: "Full-Stack Developer, DevOps & Project Manager",
        achievements: [
          <>
            Delivered an inventory management system for Tirar International Hotel from analysis through production.
          </>,
          <>
            Architected microservice-oriented services with Django and a Next.js frontend; deployed on-premises for low
            latency and synchronization with local hotel hardware and workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "Nefertiti Digital Marketing",
        timeframe: "Apr 2024 – Jun 2024",
        role: "SEO and Digital Marketing Engineer",
        achievements: [
          <>
            Applied technical SEO and marketing engineering to improve reach and brand visibility for client platforms.
          </>,
        ],
        images: [],
      },
      {
        company: "Driving School Information Management System",
        timeframe: "May 2023 – Sep 2023",
        role: "Project Leader & Full-Stack Developer",
        achievements: [
          <>
            Directed the full lifecycle of a specialized driving-school management platform from requirements through
            delivery.
          </>,
        ],
        images: [],
      },
      {
        company: "Rhino PLC",
        timeframe: "—",
        role: "Full-Stack Website Developer Intern",
        achievements: [
          <>
            Contributed to RESTful APIs and deployment of scalable full-stack web applications using modern frameworks.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of Gondar",
        description: (
          <>
            Bachelor&apos;s degree in <strong>Information Systems</strong>, graduated with very great distinction.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: (
          <>Primary languages for application and integration work across web, services, and data layers.</>
        ),
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "Kotlin", icon: "kotlin" },
          { name: "Python", icon: "python" },
          { name: "SQL", icon: "postgresql" },
        ],
        images: [
          {
            src: "/images/gallery/horizontal-1.jpg",
            alt: "Engineering",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Frontend",
        description: (
          <>SPA and SSR applications, component models, and portable UI patterns including Web Components where needed.</>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Web Components", icon: "javascript" },
        ],
        images: [
          {
            src: "/images/gallery/horizontal-2.jpg",
            alt: "Frontend",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend & messaging",
        description: (
          <>Service-oriented backends, event-driven flows, and high-throughput RPC between bounded contexts.</>
        ),
        tags: [
          { name: "Node.js", icon: "nodedotjs" },
          { name: "Django", icon: "django" },
          { name: "Microservices", icon: "docker" },
          { name: "gRPC", icon: "rocket" },
          { name: "RabbitMQ", icon: "rabbitmq" },
        ],
        images: [
          {
            src: "/images/gallery/horizontal-3.jpg",
            alt: "Backend",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Data",
        description: (
          <>Relational modeling including EAV for flexible tenant-defined attributes, plus document stores where they
            fit.</>
        ),
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MongoDB", icon: "mongodb" },
        ],
        images: [],
      },
      {
        title: "DevOps & cloud",
        description: (
          <>Infrastructure as code mindset, containers, orchestration, and repeatable pipelines for safe releases.</>
        ),
        tags: [
          { name: "AWS", icon: "amazon" },
          { name: "Docker", icon: "docker" },
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "Jenkins", icon: "jenkins" },
          { name: "GitHub Actions", icon: "github" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "DevOps",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Standards & compliance",
        description: (
          <>Healthcare and regulated environments: interoperability, exchange formats, and security posture.</>
        ),
        tags: [
          { name: "HL7 FHIR", icon: "document" },
          { name: "EDI", icon: "document" },
          { name: "HIPAA-oriented design", icon: "document" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Engineering notes",
  description: `Articles on architecture, health tech, data modeling, and delivery by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected systems and products — problem, stack, and outcomes`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
