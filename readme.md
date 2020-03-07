# Next.js Runtime Config Example

## 0. Setup

1. `npm i`

In `next.config.js` an `API_URL` `publicRuntimeConfig` variable is being set using the `process.env.API_URL` value.

## 1. Dev mode

NOTE: the `dev` script in `package.json` is setting a "DEV" version of the `API_URL` variable.

1. `npm run dev`
2. Load http://localhost:3000/
3. Click "Link to another page" (which uses `next/link`)

You will see the https://example.com/DEV/api URL being used. If you reload the page to get a SSR, it is the same URL.

## 2. Production Build and Start

NOTE: The `build` script in `package.json` is setting a "BUILD" version of the `API_URL` variable.

1. `npm run build`
2. `npm start`
3. Load http://localhost:3000/
4. Click "Link to another page" (which uses `next/link`)

You will see the https://example.com/BUILD/api URL being used. However, if you reload the page to get a SSR, the value is undefined.

## 3. Production Build with Customized Start

NOTE: The `build` script in `package.json` is setting a "BUILD" version of the `API_URL` variable but the `start` script is not.

1. `npm run build`
2. `API_URL=https://example.com/DEPLOYMENT/api npm start`
3. Load http://localhost:3000/
4. Click "Link to another page" (which uses `next/link`)

You will see the "BUILD" URL being used. However, if you reload the page to get a SSR, it is showing the "DEPLOYMENT" URL.

That is, the client-side rendered version uses the build `process.env.API_URL` value while the SSR uses the current value.

## 4. Production Build with Customized Start and `getInitialProps` on Index Page

NOTE: `pages/index.js` has not had a `getInitialProps` set.

1. In `pages/index.js` uncomment the `getInitialProps` function.
2. `npm run build`
3. `API_URL=https://example.com/DEPLOYMENT/api npm start`
4. Load http://localhost:3000/
5. Click "Link to another page" (which uses `next/link`)

You will see the "DEPLOYMENT" URL being used. If you reload the page to get a SSR, it is also showing the "DEPLOYMENT" URL.

## 5. Production Build and Start and `getInitialProps` on Index Page

NOTE: `pages/index.js` has not had a `getInitialProps` set.

1. In `pages/index.js` uncomment the `getInitialProps` function.
2. `npm run build`
3. `npm start` (NOTE we are not setting API_URL this time)
4. Load http://localhost:3000/
5. Click "Link to another page" (which uses `next/link`)

You will see the URL is undefined. If you reload the page, it remains undefined.
