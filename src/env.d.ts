/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare global {
    interface Window {
      dataLayer: any[];
      gtag: (...args: any[]) => void;
    }
  }
  
  export {};
  
