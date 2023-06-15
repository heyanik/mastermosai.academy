---
sidebar_position: 5
---

# Make a project

Here's an example of a simple website using HTML, CSS, and JavaScript:

**index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>Welcome to My Website!</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#" id="home-link">Home</a></li>
        <li><a href="#" id="about-link">About</a></li>
        <li><a href="#" id="services-link">Services</a></li>
        <li><a href="#" id="contact-link">Contact</a></li>
      </ul>
    </nav>

    <main>
      <section id="about-section">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque, enim ut interdum posuere, turpis turpis congue turpis, in
          bibendum metus ligula at ante.
        </p>
      </section>

      <section id="services-section">
        <h2>Services</h2>
        <ul>
          <li>Web Design</li>
          <li>Frontend Development</li>
          <li>Backend Development</li>
        </ul>
      </section>
    </main>

    <footer>
      <p>&copy; 2023 My Website. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
```

**style.css**

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}
nav {
  background-color: #f2f2f2;
  padding: 10px;
}
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  display: inline;
  margin-right: 10px;
}
nav ul li a {
  text-decoration: none;
  color: #333;
}
main {
  padding: 20px;
}
footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}
```

**script.js**

```js
// JavaScript for adding interactivity to the website

// Get DOM elements
const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const servicesLink = document.getElementById("services-link");
const contactLink = document.getElementById("contact-link");

const aboutSection = document.getElementById("about-section");
const servicesSection = document.getElementById("services-section");

// Function to show a section and hide others
function showSection(section) {
  aboutSection.style.display = "none";
  servicesSection.style.display = "none";

  section.style.display = "block";
}

// Event listeners for navigation links
homeLink.addEventListener("click", function (event) {
  event.preventDefault();
  showSection(null);
});

aboutLink.addEventListener("click", function (event) {
  event.preventDefault();
  showSection(aboutSection);
});

servicesLink.addEventListener("click", function (event) {
  event.preventDefault();
  showSection(servicesSection);
});

contactLink.addEventListener("click", function (event) {
  alert("Contact functionality is not implemented yet.");
  event.preventDefault();
});
```
