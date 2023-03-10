export const DatabaseUtils = {
  parseConnectionString: (connectionString: string) => {
    const parsed = connectionString.split(';').reduce((acc, cur) => {
      const [key, value] = cur.split('=');
      return { ...acc, [key]: value };
    }, {});

    return {
      host: parsed['Data Source'],
      database: parsed['Initial Catalog'],
      user: parsed['User ID'],
      password: parsed['Password'],
    };
  },
};
