# My Portfolio

This is a personal portfolio website built using **React**. The portfolio showcases my skills, projects, extra-curricular activities, and contact information. It's designed with a modern, responsive layout and smooth user experience.

## Demo

[Link to Portfolio](https://sedulousn.github.io/my-portfolio/)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)
- [License](#license)

## Overview

This portfolio was created to display my skills and projects in an interactive and visually appealing way. The website contains the following sections:
- **Home**: A welcome page with an introduction.
- **About**: Information about me, including education and goals.
- **Skills**: A categorized section showcasing my coding languages, frameworks, and tools.
- **Projects**: A carousel of projects, each with a description, tech stack, and GitHub link.
- **Extra Curriculum**: My sports activities, Coursera certificates, and posts of responsibility.
- **Contact**: A contact form with form submission handled by **Formspree**.

## Features

- **Responsive Design**: Adapts to different screen sizes (desktop, tablet, mobile).
- **Smooth Scroll Navigation**: Easy navigation between sections with smooth scrolling.
- **Interactive Skill Blocks**: Skills are categorized and have hover effects to indicate proficiency.
- **Dynamic Project Cards**: Projects are displayed with images, descriptions, and GitHub links. Users can navigate through the projects using arrow buttons.
- **Formspree Integration**: Contact form submission using Formspree, with a success message displayed after submission.
- **Mobile-Friendly Navbar**: A hamburger menu appears for mobile screens.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS3**: Custom styling for the entire portfolio.
- **React Icons**: Icons for skills and navigation.
- **Formspree**: Form submission service for the contact form.

## Installation

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-portfolio-repo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-portfolio-repo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The website will be available at `http://localhost:3000`.

Here’s a step-by-step guide to running the portfolio, including the folder structure and how the files fit together.

### 1. **Initial Setup with Create React App**:
1. Run the following command in your terminal to create a new React app:
   ```bash
   npx create-react-app my-portfolio
   cd my-portfolio
   ```

2. After the app is created, you will have the following folder structure:
   ```
   my-portfolio/
   ├── node_modules/
   ├── public/
   ├── src/
   │   ├── App.css
   │   ├── App.js
   │   ├── index.css
   │   ├── index.js
   └── package.json
   ```

### 2. **Adding Your Portfolio Components**:
Now, you will add the different React components (`Header`, `About`, `Projects`, `Skills`, `Education`, `Contact`) into the `src` folder.

1. **Create a `components` folder** inside `src`:
   ```bash
   mkdir src/components
   ```

2. Inside the `components` folder, create individual files for each component:
   ```bash
   touch src/components/Header.js
   touch src/components/About.js
   touch src/components/Projects.js
   touch src/components/Skills.js
   touch src/components/Education.js
   touch src/components/Contact.js
   ```

3. Copy the code I provided earlier for each component into its corresponding file.

### 3. **Modifying the `App.js` File**:
You will now modify the default `App.js` to include the newly created components. Replace the contents of `src/App.js` with the following:

```jsx
// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
```

### 4. **Adding CSS for Styling**:
You can add custom CSS to `src/App.css` to style your components. Here’s a simple example of what your `App.css` might look like:

```css
/* App.css */
.App {
  font-family: Arial, sans-serif;
  color: #333;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

header h1 {
  margin: 0;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin: 0 10px;
}

section {
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #ddd;
}

.project-card {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  transition: all 0.3s ease-in-out;
}

.project-card:hover {
  transform: scale(1.05);
}
```

You can expand and refine the styling based on your design preferences.

### 5. **Folder Structure**:
After adding everything, your folder structure should look like this:

```
my-portfolio/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Education.js
│   │   └── Contact.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
└── package.json
```

### 6. **Running the Portfolio Locally**:
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the app:
   ```bash
   npm start
   ```

Your portfolio should now be running locally at `http://localhost:3000`. 

To deploy using GitHub Pages:
1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Usage

- Modify the content in the `src` directory to customize your portfolio.
- Replace the placeholders for your projects, skills, and other personal details.
- Update the **Formspree endpoint** in `Contact.js` with your own Formspree form ID.

## Contact

Feel free to reach out if you have any questions or feedback:

- **Email**: nksgbc12@gmail.com
- **GitHub**: [SedulousN](https://github.com/SedulousN)
- **LinkedIn**: [Nitin Kumar Singh](https://www.linkedin.com/in/nitin-kumar-singh-2670b4264)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

