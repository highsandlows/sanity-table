import config from 'config:table-maker';

export default {
  title: 'Table Row',
  name: config.rowType,
  type: 'object',
  fields: [
    {
      name: 'cells',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
