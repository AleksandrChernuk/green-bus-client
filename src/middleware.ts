import { i18nRouter } from "next-i18n-router";
import type { NextRequest } from "next/server";
import i18NextConfig from "@/i18next.config";

export async function middleware(request: NextRequest) {
  return i18nRouter(request, {
    locales: i18NextConfig.i18n.locales,
    defaultLocale: i18NextConfig.i18n.defaultLocale,
    localeCookie: i18NextConfig.i18n.defaultLocale,
    serverSetCookie: 'always',
  });
}

 export const config = {
   matcher: '/((?!api|static|.*\\..*|_next).*)',
 };
