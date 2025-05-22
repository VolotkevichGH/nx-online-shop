export interface PostgresEnvironmentVariables {
  DATABASE_HOST: string;
  DATABASE_PORT: number;
  DATABASE_NAME: string;
  DATABASE_USERNAME: string;
  DATABASE_PASSWORD: string;
}

export const getPostgresEnvironment = (): PostgresEnvironmentVariables => {
  const {
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD
  } = process.env as Record<string, string>;

  return {
    DATABASE_HOST,
    DATABASE_PORT: parseInt(DATABASE_HOST, 10) | 5432,
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD
  };
};
