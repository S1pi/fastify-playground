const sumSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['a', 'b'],
      properties: {
        a: { type: 'number' },
        b: { type: 'number' },
      },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          sum: { type: 'number' },
        },
      },
    },
  },
};

export { sumSchema };
