This is a limited reference for Markdown. Markdown is a markup (confusing, I know) syntax for annotating plain text such that it can be converted later to rich text (or in this case, html), and since this reference is itself written in Markdown, it can be converted automatically to a styled HTML document. For a more comprehensive Markdown cheatsheet, checkout https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

# Reference

Here is some normal text. A paragraph, even!

## Headings

`#`s (octothorps) before a line makes text a header.

## The more #'s, the smaller the header.

### Even smaller...

###### Quite small

Question: What's the smallest header we can have?


Note: Some headings automatically have a horizontal rule after them, can you figure out which ones?

To insert horizontal rules, enter 3 or more hyphens, asterisks, or underscores.

---
***
___

## Styling Text

*Surrounding text with asterisks renders it in italics*

**Surrounding text with two asterisks renders it in bold**

***Surrounding text with three asterisks renders it in bold and italics***

~~Surrounding text with tildes (squigglies) renders it with a strikethrough.~~

Sometimes you want to embed some *stylized text* right into **your paragraph.** Pretty cool, right!

## Lists

Asterisks can be used to define unordered lists

* Item
* Item
* Another item

So can plus symbols

+ Item
+ Item
+ One more item

...and minus symbols too

- Item
- Item
- One last item

Ordered lists can be created using the format: #.

1. Item one
2. Item two
3. Item three

And of course, lists can have sublists

1. Item one
2. Item two
3. Item three
  1.Sub-item
  2.Sub-item
4. Item four

## Code Snippets

Backticks are used to denote code blocks

 ```javascript
 var variable = 'hello';
 ```

 And they can be used `console.log('Hello world!')` in-line as well.

Links and Embedded Images
---

[I'm a link to a web page! Click here for a more comprehensive list of markdown features](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

![This is the alt text in an embedded photo from the internet!](https://i.imgur.com/81qyN1y.jpg)

![This is how you embed local photos!](profile.png)
