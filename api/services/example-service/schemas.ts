import { z } from 'zod';

export const exampleValidator = z.object({
  data: z.object({
    field1 : z.number(),
    field2 : z.string().nullable(),
  }),
  success: z.literal(true),
});

export type ExampleResponse = z.infer<typeof exampleValidator>;
