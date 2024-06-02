---
title: Käsediebe
url: https://kaese-diebe.netlify.app/
cover: './../../assets/houdini-charts/radar-chart.png'
description: Welcome to Käsediebe, a food blog dedicated to cooking and baking recipes. Initially created to digitize my personal recipe book, Käsediebe provides easy-to-follow recipes that you can access both online and offline on any device. The app currently features over 55 recipes and more than 150 ingredients. It includes a search function to easily find recipes or ingredients, and you can also mark your favorite recipes for quick access.
order: 3
year: 2021
---

<div class="section">

## UI

</div>

<div class="section">

## Technology

<div class="section-text">
Building Käsediebe, my food blog, required a combination of technologies and infrastructure to ensure a seamless and efficient user experience. Here's an overview of the tools and services that power the application:

To expedite the development process, I utilized [Tailwind CSS](https://tailwindcss.com/) and [daisyUI](https://daisyui.com/). These tools provided prebuilt components that allowed me to build my app efficiently without spending too much time on design details. As a static site generator, [Astro](https://astro.build/) plays a crucial role in my workflow. It enables me to quickly generate all the pages for my blog during build time, ensuring fast load times and a smooth user experience. For the interactive client-side components, I employed [SolidJS](https://www.solidjs.com/), which allows me to create dynamic elements that enhance the overall functionality of the site.

For content management, I chose [Contentful](https://www.contentful.com/), a headless CMS that as a flawless integration with Astro. This combination makes maintaining my blog effortless and straightforward. I host my application on [Netlify](https://www.netlify.com/), which provides reliable and efficient hosting services. To implement instant search functionality, I integrated [Algolia](https://www.algolia.com/). It is directly connected to my Contentful space, ensuring that whenever I publish a new recipe, Contentful triggers a webhook. This webhook updates the Algolia search index and initiates a build and deployment of my app on Netlify, keeping everything up-to-date seamlessly.

</div>
</div>
