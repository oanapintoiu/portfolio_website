# Oana's Portfolio Website (Deployed)

This repository contains the source code for my portfolio website, showcasing my professional portfolio, including projects, contact information, and links to social media profiles. It is designed to be visually appealing, interactive, and responsive.

## Table of Contents

[Result](#result) | [Features](#features) | [Sections](#sections) | [Technologies Used](#technologies-used) | [Setup Instructions](#setup-instructions)

## Result

![Full Website](./images/readme/portfolio.gif)

## Features

- **Responsive Design**: The website is fully responsive and adapts to different screen sizes, ensuring a seamless user experience on desktops, tablets, and mobile devices.
- **Interactive Portfolio**: The portfolio section highlights various projects with descriptions, technologies used, and links to the project repositories.
- **Smooth Scrolling**: Smooth scrolling is implemented for a better navigation experience between different sections of the website.
- **Scroll Animations**: Elements such as navbar, portfolio and contact form items are animated when they come into view, providing a dynamic feel.
- **Social Media Integration**: The website includes links to my personal LinkedIn and GitHub and freeCodeCamp profiles.
- **Contact Form**: A contact form allows visitors to send messages directly through the website.

## Sections

### Navbar

- Includes links to LinkedIn, GitHub, freeCodeCamp, and resume.
- Navigation links for Home, Portfolio, and Contact sections.
- Social media icons for quick access to profiles.

### Home

- An animated welcome text and a scroll down a button leading to the portfolio section.

### Portfolio

- Displays various projects with images, descriptions, technologies used, and links to live demos and GitHub repositories.

### Contact

- Includes a section with a brief message encouraging collaboration.
- A contact form where visitors can submit their name, email, mobile number, and a message.
- Scroll up button leading back to the home page.

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling of the webpage, including responsive design and animations.
- **JavaScript**: Interactivity, such as smooth scrolling, menu toggling, and animations.
- **Node.js**: Used for backend operations (e.g., form submission handling).
- **Express**: Framework for building and managing the server, handling routing, middleware, and static file serving.
- **Axios**: Promise-based HTTP client for making API requests.
- **Dotenv**: Loads environment variables from a .env file to manage sensitive information such as API keys.
- **Web3forms API**: Service used to handle form submissions and send form data to specified endpoints.

### External Libraries

- **Boxicons**: Icon library for social media icons and other UI elements.
- **Remixicons**: Another icon library used within the website.
- **Google Fonts**: Typography (Montserrat and Mulish fonts).
- **Font Awesosme**: Used for heart emoticon in footer.

## Setup Instructions

### Clone the Repository:

`git clone https://github.com/oanapintoiu/portfolio_website.git`
`cd portfolio_website`

### Backend Setup

1. Ensure you go to [Web3forms](https://web3forms.com/) to create your access/API key fro handling the for submission. Create a `.env` file in the `root` folder of the project with the following content:

`WEB3FORMS_API_KEY=your_web3forms_api_key`

2. Install backend dependencies either via:

`npm install`

or install individually **axios**, a promise-based HTTP client for making requests, **express**, the web framework for Node.js and **dotenv**, used to manage the environment variable .env:

`npm install axio`
`npm install express`
`npm install dotenv --save-dev`

3. Start the server:

`npm start`

### Frontend Setup

- Open `index.html` in your preferred browser to view the website locally.
