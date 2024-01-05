import HttpFactory from '../../factory';
import { type ExampleResponse, exampleValidator } from './schemas';
import type { ExampleBody, ExampleParams } from './types';

class ExampleService extends HttpFactory {
  async exampleRequest(params: ExampleParams, body: ExampleBody) {
    const response = await this.call<ExampleResponse>('/example', {
      method : 'post',
      body,
      query  : params,
    });

    return exampleValidator.parse(response);
  }
}

export default ExampleService;
