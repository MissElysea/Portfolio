# Elysea's Portfolio

## Overview

This portfolio showcases projects that I've developed over my software engineering career. It serves as a visual representation of my skills and capabilities in web development. The portfolio will be regularly updated with new projects as they are completed.

## Technologies Used

Create React App for bootstrapping the React application.

SCSS for styling and layout.

## Installation

Clone the repository:

```
git clone https://github.com/MissElysea/portfolio
```

## Navigate to the project directory:

```
cd your-repo
``` 

## Install dependencies:

```
npm install
```

## Usage

To start the development server and view the portfolio:

```
npm start
```

The portfolio will be accessible at https://misselysea.github.io/about.

## Adding Projects

To add new projects, follow these steps:

1. Open Portfolio.js:

```
src/components/Portfolio.js
```

2. Add a new img element with the desired image URL and associated website link:

```
<div className={styles.projectItem}>
  <img
    src="https://example.com/project-image.jpg"
    alt="Project Name"
    className={styles.projectImage}
    onClick={() => handleEnterClick('https://example.com')}
  />
</div>
```

3. Replace https://example.com/project-image.jpg with the actual image URL and https://example.com with the project's website link.