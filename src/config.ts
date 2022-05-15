import { registerAs } from "@nestjs/config";

export type EnvironmentVariables = {
  database: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
};

export default registerAs(
  "config",
  (): EnvironmentVariables => ({
    database: {
      type: process.env.DB_TYPE,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
  })
);
