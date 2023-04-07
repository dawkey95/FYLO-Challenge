# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./public/images/Screenshot.png)

### Links

- Solution URL: [Github - Fylo](https://github.com/dawkey95/FYLO-Challenge)

- Live Site URL: [Fylo Challenge](https://dakeyse-fylo-challenge.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Astro](https://astro.build/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

This project looked straight forward and I was able to get a lot of the layouts done effeciently, however, the project came to a stand still when it came down to the interactivity of hover states. Being new to Tailwind CSS I had to fgure out that if a button for example had a gradient background color:

```js
.signup-btn {
  @apply bg-gradient-to-br from-gradient1-0 to-gradient1-1;
}
```

I couldn't just add a hover state to the button like this:

```js
.signup-btn {
  @apply bg-gradient-to-br from-gradient1-0 to-gradient1-1 hover:bg-accent-cyan;
}
```

Instead I had to do the following:

```js
.signup-btn {
  @apply bg-gradient-to-br from-gradient1-0 to-gradient1-1 hover:from-[#8ADAE3] hover:to-[#8ADAE3]
}
```

By doing a hover:from and a hover:to I was able to change the background color of the button when hovered over. This was a great learning experience for me as I was able to learn how to use Tailwind CSS to its full potential.

### Continued development

In future projects I want continue developing my ability to reseach problems and find solutions. I also want to continue to improve my CSS skills as I am noticing where my strengths and weaknesses are lying.

## Author

- Website - [DK Coding](https://dk-personal.netlify.app/)
- Frontend Mentor - [@dawkey95](https://www.frontendmentor.io/profile/dawkey95)
- Twitter - [@dawidkeyser95](https://twitter.com/dawidkeyser95)

# FYLO-Challenge
