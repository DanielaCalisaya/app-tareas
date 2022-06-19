# **App - Tareas**

![Portada](public/todoList.png)

## Herramientas

- Next Js

- Next auth (Login)

- React

- React icons

- Yarn

- Javascript

- Tailwind Css intregado a NextJs (Styles)

- Cypress

## Documentación

- Next.Js https://nextjs.org/

- NextAuth https://next-auth.js.org/

- Yarn https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

- Tailwind https://tailwindcss.com/

- React https://reactjs.org/

- React icons https://react-icons.github.io/react-icons/

- https://www.cypress.io/

## Ayuda memoria 

- Crear app : npx create-next-app

Correr : npm run dev

- npm i next-auth

Ruta login : http://localhost:3000/api/auth/signin

Ruta logout : http://localhost:3000/api/auth/signout

- npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

Agregue las rutas de acceso a todos los archivos de plantilla del archivo.tailwind.config.js :

 content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

@tailwind base;
@tailwind components;
@tailwind utilities;

ctrl + k -> abre el buscador de tailwind

- npm install react-icons --save

- npm install cypress --save-dev

En nuestros scripts del package.json agregar: "cypress:open": "cypress open"

Abrir nuestro entorno gráfico de Cypress con ./node_modules/.bin/cypress open

Para nuestros test, crear un archivo dentro de carpeta cypress/e2e/algun_nombre.cy.js

## Para correrlo necesitarás:

- npm intall

- npm run dev