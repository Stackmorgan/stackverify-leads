export function toFormEncoded(data: Record<string, any>) {
  const body = new URLSearchParams();

  Object.entries(data).forEach(([k, v]) => {
    if (v !== undefined && v !== null) {
      body.append(k, String(v));
    }
  });

  return body;
}