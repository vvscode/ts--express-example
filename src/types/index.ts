import 'express-session';

declare module 'express-session' {
  interface Session {
    isAdmin?: boolean
  }
}