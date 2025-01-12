---
title: Deploying an Astro.js site on a vps
excerpt: Deploying an Astro.js site on a vps using docker, docker-compose, github actions, watchtower, and traefik
publishDate: 'Jan 11 2025'
tags:
  - astro.js
  - docker
  - ci/cd
  - deployment
seo:
  image:
    src: '/post-1.jpg'
    alt: Rocketship taking off for deployment
---

![Rocketship taking off for deployment](/post-1.jpg)

## Preparing Your Astro.js Site for Deployment
1. **Integrate Node:** This adapter allows Astro to deploy your on-demand rendered routes to Node targets. If you’re using Astro as a static site builder, you don’t need an adapter such as node. Run the following command in your terminal:
  ```bash
  npx astro add node
  ```
  source: https://docs.astro.build/en/guides/integrations-guide/node/
  
2. **Build Your Site:** Before deploying your site, you need to build it for production. Run the following command in your terminal:

   ```bash
   npm run build
   ```

   This command compiles your site into static assets and server-rendered files (if applicable) in the `dist/` directory.

2. **Test the Build Locally:** Verify that your build works as expected by using the `preview` command:

   ```bash
   npm run preview
   ```

   This starts a local server to test your production build.
3. **Create the Dockerfile:** Create the a similar dockerfile as the one below with `site` being the main direcotry with the astro.js project:

   ```dockerfile
    # Use the official Golang image as the base image
    FROM node:20-alpine

    # Set the working directory
    WORKDIR /app

    # Copy go mod file
    COPY ./site .

    # Download all dependencies
    RUN npm install

    # Build the application
    RUN npm run build

    CMD ["node", "./dist/server/entry.mjs"]
   ```

4. **Create the Docker Compose file:** Create a similar docker-compose.yml file:

   ```docker-compose.yml

   ```
   - Traefik is being used as a reverse proxy to hide ip address and expose application using domain name
   - (OPTIONAL) Watchtower is being used to poll the public github main repository to automate deployments

5. **Create .env file:** Create a .env file to hold secrets and to set host and port for prodution deployment:

   ```.env
   HOST=0.0.0.0
   POST=8080
   ```
   Astro uses the environment variables names `HOST` and `PORT`, so be sure to use these to expose the correct host and port that match your dockerfile and docker-compose.yml

## Configuring Your Astro.js Project for Production

1. **Optimize Performance:**

   - Enable image optimization if your hosting platform supports it.
   - Use Astro.js’s built-in tools like `@astrojs/image` to handle responsive images.

2. **Handle 404, 500 pages:**

   You can handle 400 and 500 pages by creating `src/pages/404.astro' and 'src/pages/500.astro'
   source: https://docs.astro.build/en/basics/astro-pages/

## Debugging Common Issues

1. **Build Failures:**

   - Double-check your Astro.js configuration in `astro.config.mjs`.
   - Ensure all necessary dependencies are installed.

2. **Missing Assets:**

   - Verify that your `public/` folder contains all required static assets.
   - Check your hosting platform's build settings to ensure the `dist/` directory is being served.

3. **Broken Links or Routes:**

   - Test your site thoroughly before deployment.
   - If using dynamic routes, confirm they are supported by your hosting platform.

