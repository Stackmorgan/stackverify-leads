import { toFormEncoded } from "./utils";
import { StackVerifyError } from "./errors";

export interface SubmitFormOptions {
  formId: string;
  data: Record<string, any>;
  baseUrl?: string;
  timeout?: number;
  fetch?: typeof fetch;
}

export async function submitForm({
  formId,
  data,
  baseUrl = "https://stackverify.site",
  timeout = 10000,
  fetch: fetchImpl = fetch
}: SubmitFormOptions) {
  const controller = new AbortController();

  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetchImpl(
      `${baseUrl}/api/f/${formId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: toFormEncoded(data),
        signal: controller.signal
      }
    );

    clearTimeout(timer);

    const text = await response.text();

    let dataResponse: any;
    try {
      dataResponse = JSON.parse(text);
    } catch {
      dataResponse = text;
    }

    if (!response.ok) {
      throw new StackVerifyError(
        dataResponse?.message ||
        `Submission failed (${response.status})`
      );
    }

    return dataResponse;
  } catch (err: any) {
    clearTimeout(timer);

    if (err.name === "AbortError") {
      throw new StackVerifyError("Request timeout");
    }

    throw err;
  }
}