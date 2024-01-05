import type { $Fetch, FetchOptions } from 'ohmyfetch';

class HttpFactory {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  async call<T>(url: string, options?: FetchOptions): Promise<T> {
    return this.$fetch(url, {
      ...options,
    });
  }
}

export default HttpFactory;
