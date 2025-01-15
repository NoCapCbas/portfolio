---
title: Setting Up an Astro.js Default Theme
excerpt: Learn how to quickly set up a default theme in Astro.js to kickstart your website development journey with this powerful, modern framework.
publishDate: 'January 12 2025'
tags:
  - Astro.js
  - Web development
isFeatured: true
seo:
  image:
    src: '/post-2.jpg'
    alt: Half open laptop on a desk
---

![Half open laptop on a desk](/post-2.jpg)

Setting up a default theme in Astro.js is an excellent way to start building your website with this cutting-edge framework. In this guide, we'll walk you through the process step-by-step, making it easy to get up and running with Astro.js and a prebuilt theme.

## 1. Install Astro.js

Before setting up a theme, ensure you have Astro.js installed on your local machine. If you haven't already:

- **Install Node.js:** Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org).
- **Install Astro:** Run the following command to install the Astro.js CLI globally:
  ```bash
  npm create astro@latest
  ```

## 2. Choose a Default Theme

Astro.js offers a variety of starter themes to help you get started quickly. These themes cover different use cases like blogs, portfolios, and documentation sites. Visit the [Astro Themes Showcase](https://astro.build/themes/) to explore available options.

## 3. Initialize a New Project with a Theme

Once you've chosen a theme, you can initialize your Astro.js project with the selected theme using the CLI. For example:

```bash
npm create astro@latest my-astro-site --template <theme-name>
```

Replace `<theme-name>` with the name of the theme you want to use. For example, to start with the "Blog" theme:

```bash
npm create astro@latest my-astro-site --template blog
```

This will create a new directory named `my-astro-site` with all the necessary files for the chosen theme.

## 4. Install Dependencies

Navigate to your project directory and install the required dependencies:

```bash
cd my-astro-site
npm install
```

## 5. Run the Development Server

Start the development server to preview your new Astro.js site:

```bash
npm run dev
```

Your site will be available at `http://localhost:3000`. Open it in your browser to see the default theme in action.

## 6. Customize Your Theme

Astro.js themes are designed to be flexible and easy to customize. You can:

- **Update Content:** Modify the content files in the `src/content` folder.
- **Change Styles:** Edit the CSS or Tailwind files in the `src/styles` folder.
- **Add Components:** Create new components or modify existing ones in the `src/components` folder.

## 7. Build and Deploy

When you're ready to deploy your site, build the static files:

```bash
npm run build
```

Deploy the contents of the `dist/` folder to your preferred hosting platform, such as Vercel, Netlify, or GitHub Pages.

## Conclusion

Setting up a default theme in Astro.js is a straightforward process that gets you started quickly while providing plenty of room for customization. By following these steps, you'll have a functional and visually appealing site up and running in no time. Start exploring and make your Astro.js site truly your own!
