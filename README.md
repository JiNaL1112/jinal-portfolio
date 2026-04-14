# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## CI/CD (GitHub Actions → Firebase Hosting)

This repo includes:

- `.github/workflows/ci.yml`: runs `npm ci`, `npm run lint`, `npm run build` on PRs and `main`
- `.github/workflows/firebase-hosting.yml`: deploys previews for PRs and deploys to **live** on `main`

### One-time Firebase setup

1. Create a Firebase project (or pick an existing one) in the Firebase console.
2. Enable **Hosting** for that project.
3. Update `.firebaserc` and replace `REPLACE_ME_FIREBASE_PROJECT_ID` with your Firebase **Project ID**.

### GitHub Secrets required

Add these repository secrets in GitHub:

- `FIREBASE_PROJECT_ID`: your Firebase **Project ID** (same value as in `.firebaserc`)
- `FIREBASE_SERVICE_ACCOUNT`: a service account JSON for Firebase deploys

To create the service account JSON:

1. In Google Cloud Console → IAM & Admin → Service Accounts: create a service account.
2. Grant it the role `Firebase Hosting Admin` (and if prompted, also `Service Account User`).
3. Create a JSON key and copy the entire JSON into the `FIREBASE_SERVICE_ACCOUNT` GitHub secret.

After that, merges to `main` will deploy to Firebase Hosting automatically.
