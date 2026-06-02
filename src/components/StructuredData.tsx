type JsonLdValue = Record<string, unknown> | Array<Record<string, unknown>>;

type StructuredDataProps = {
  id: string;
  data: JsonLdValue;
};

export function StructuredData({ id, data }: StructuredDataProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
