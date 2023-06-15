---
sidebar_position: 2
---

# HTML

## HTML কি?

এইচটিএমএল হল একটি মার্কআপ ভাষা যা একটি ওয়েব পৃষ্ঠার মধ্যে কাঠামো এবং উপাদানগুলিকে সংজ্ঞায়িত করতে ট্যাগ ব্যবহার করে। এটি উপাদান বা ট্যাগের একটি সিরিজ নিয়ে গঠিত, প্রতিটি একটি নির্দিষ্ট উদ্দেশ্য পরিবেশন করে। এই ট্যাগগুলি অ্যাঙ্গেল ব্র্যাকেটে (< >) আবদ্ধ থাকে এবং কীভাবে বিষয়বস্তু প্রদর্শন করতে হয় সে বিষয়ে ওয়েব ব্রাউজারকে নির্দেশনা প্রদান করে।

## একটি HTML উপাদানের শারীরস্থান

একটি Html উপাদান বিভিন্ন অংশ নিয়ে গঠিত:

- **ওপেনিং ট্যাগ**: এটি একটি উপাদানের প্রারম্ভিক বিন্দু এবং এটি কোণ বন্ধনীতে আবদ্ধ। এটি উপাদানের শুরুকে সংজ্ঞায়িত করে এবং অতিরিক্ত তথ্য নির্দিষ্ট করার জন্য প্রায়ই গুণাবলী বহন করে।
- **সামগ্রী**: বিষয়বস্তু উপাদানের মধ্যে প্রকৃত পাঠ্য বা মিডিয়াকে বোঝায়। এটি খোলার এবং সমাপ্তি ট্যাগের মধ্যে স্থাপন করা হয়।
- **ক্লোজিং ট্যাগ**: এটি একটি উপাদানের শেষ চিহ্নিত করে এবং এটি কোণ বন্ধনীতেও আবদ্ধ। এটি ওপেনিং ট্যাগের মতো, কিন্তু ট্যাগের নামের আগে একটি ফরোয়ার্ড স্ল্যাশ (/) সহ।
- **উদাহরণ**: এখানে একটি মৌলিক HTML উপাদানের উদাহরণ, অনুচ্ছেদ উপাদান:
  ```html
  <p>This is a paragraph.</p>
  ```

## প্রয়োজনীয় HTML ট্যাগ

HTML আপনার বিষয়বস্তু গঠনের জন্য বিভিন্ন ট্যাগ অফার করে। আপনাকে শুরু করার জন্য এখানে কিছু প্রয়োজনীয় ট্যাগ রয়েছে:

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

## একটি সাধারণ HTML পৃষ্ঠা তৈরি করা

স্ক্র্যাচ থেকে একটি সাধারণ HTML পৃষ্ঠা তৈরি করা যাক:

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
