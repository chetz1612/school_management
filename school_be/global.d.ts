declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_NAME: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_HOST: string;
      PORT: string;
      DB_DIALECT: string;
      TOKEN_SECRET_KEY: string;
    }
  }
}

export {}