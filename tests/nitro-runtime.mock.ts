export function defineEventHandler<T>(handler: T): T {
  return handler
}

export function setResponseHeaders(
  event: { headers?: Record<string, string> },
  headers: Record<string, string>,
): void {
  event.headers = {
    ...event.headers,
    ...headers,
  }
}
