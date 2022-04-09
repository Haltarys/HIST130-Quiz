/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_USERID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
