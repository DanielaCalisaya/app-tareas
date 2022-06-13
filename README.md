# App - Tareas

## Herramientas

- Instalación Tailwind Css intregado a NextJs:

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

Agregue las rutas de acceso a todos los archivos de plantilla del archivo.tailwind.config.js :

 content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

@tailwind base;
@tailwind components;
@tailwind utilities;

- React icons

## Documentación

Yarn https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

Next.Js https://nextjs.org/

https://tailwindcss.com/

## Ayuda memoria 

Crear app : npx create-next-app

Correr : npm run dev

Descarga libreria : npm i next-auth

Ruta login : http://localhost:3000/api/auth/signin

Ruta logout : http://localhost:3000/api/auth/signout