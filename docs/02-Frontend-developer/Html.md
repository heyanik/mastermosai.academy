---
sidebar_position: 2
---

# HTML

## What is HTML?

HTML is a markup language that uses tags to define the structure and elements within a web page. It consists of a series of elements or tags, each serving a specific purpose. These tags are enclosed in angle brackets (< >) and provide instructions to the web browser on how to display the content.

## Anatomy of an HTML Element

An HTML element is composed of several parts:

- **Opening Tag**: This is the starting point of an element and is enclosed in angle brackets. It defines the beginning of the element and often carries attributes to specify additional information.
- **Content**: The content refers to the actual text or media within the element. It is placed between the opening and closing tags.
- **Closing Tag**: This marks the end of an element and is also enclosed in angle brackets. It is similar to the opening tag, but with a forward slash (/) before the tag name.
- **Example**: Here's an example of a basic HTML element, the paragraph element:
  ```html
  <p>This is a paragraph.</p>
  ```

## Essential HTML Tags

HTML offers a variety of tags to structure your content. Here are some essential tags to get you started:

```html
<html>
  : The root element that wraps the entire HTML document.
</html>
```

```html
<head>
  : Contains meta-information about the webpage, such as the title and links to
  external stylesheets.
</head>
```

```html
<body>
  : Encloses the visible content of the webpage.
</body>
```

```html
<h1>
  ,
  <h2>
    ,
    <h3>
      ,
      <h4>
        ,
        <h5>
          ,
          <h6>: Heading tags to define different levels of headings.</h6>
        </h5>
      </h4>
    </h3>
  </h2>
</h1>
```

```html
<p>: Represents a paragraph of text.</p>
```

```html
<a>: Creates a hyperlink, allowing users to navigate to other web pages.</a>
```

```html
<img />: Embeds an image within the webpage.
```

```html
<ul>
  and
  <li>: Creates an unordered (bulleted) list and list items, respectively.</li>
</ul>
```

```html
<ol>
  and
  <li>: Creates an ordered (numbered) list and list items, respectively.</li>
</ol>
```

## Building a Simple HTML Page

Let's create a simple HTML page from scratch:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to My First Web Page!</h1>
    <p>This is a paragraph of text.</p>
    <img src="image.jpg" alt="Description of the image" />
    <a href="https://www.example.com">Click here</a> to visit Example.com.
  </body>
</html>
```

## Learning Resources
