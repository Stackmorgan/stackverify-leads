export class StackVerifyError extends Error {
  status?: number;
  code?: string;
  details?: any;

  constructor(message: string, options?: {
    status?: number;
    code?: string;
    details?: any;
    cause?: unknown;
  }) {
    super(message, { cause: options?.cause });

    this.name = "StackVerifyError";

    this.status = options?.status;
    this.code = options?.code;
    this.details = options?.details;
  }
}