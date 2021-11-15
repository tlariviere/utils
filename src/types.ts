import type express from "express";

// ===========================================================================
// Optional
// ===========================================================================

export type Optional<T> = T | null;

// ===========================================================================
// Request
// ===========================================================================

export interface ReqBody {
  [key: string]: string | undefined;
}

export interface ReqCookies {
  [key: string]: string | undefined;
}

export interface Request extends express.Request {
  cookies: ReqCookies;
  body: ReqBody;
}

export interface AsyncRequestHandler {
  (
    req: Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void>;
}
