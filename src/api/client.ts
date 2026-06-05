export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly body?: unknown,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export interface ApiClientOptions {
  baseUrl?: string;
  headers?: Record<string, string>;
}

const DEFAULT_BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? '';

export const createApiClient = (options: ApiClientOptions = {}) => {
  const baseUrl = options.baseUrl ?? DEFAULT_BASE_URL;
  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const request = async <T>(
    path: string,
    init: RequestInit = {},
  ): Promise<T> => {
    const url = path.startsWith('http') ? path : `${baseUrl}${path}`;
    const response = await fetch(url, {
      ...init,
      headers: {
        ...defaultHeaders,
        ...init.headers,
      },
    });

    if (!response.ok) {
      let body: unknown;
      try {
        body = await response.json();
      } catch {
        body = undefined;
      }
      throw new ApiError(
        `Request failed: ${response.status} ${response.statusText}`,
        response.status,
        body,
      );
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return (await response.json()) as T;
  };

  return {
    get: <T>(path: string, init?: RequestInit) =>
      request<T>(path, { ...init, method: 'GET' }),
    post: <T>(path: string, body: unknown, init?: RequestInit) =>
      request<T>(path, {
        ...init,
        method: 'POST',
        body: JSON.stringify(body),
      }),
  };
};

export const apiClient = createApiClient();
