# The new ReactOS Website

[![Build Status](https://travis-ci.org/ColinFinck/web-content.svg?branch=master)](https://travis-ci.org/ColinFinck/web-content)

This repository manages the entire content of the new [ReactOS](https://reactos.org) Website.
It is powered by the [Hugo](https://gohugo.io) Static Site Generator.

Pages can be created as simple HTML or Markdown files and everyone is free to submit Pull Requests to enhance the website.
Issues are tracked at the [ReactOS JIRA](https://jira.reactos.org).

Website Subsystems written in PHP (such as GetBuilds, RosLogin, Testman, etc.) are continued to be managed in the
[ReactOS Web repository](https://github.com/reactos/web).

## Testing the website locally
1. Download Hugo 0.46 from https://gohugo.io.
2. Open a command prompt in the root of your repository checkout and type `hugo server`.
   The page is now served at http://localhost:1313 and automatically rebuilt and refreshed in the browser on local changes.

   *NOTE* - When working on the style it might be needed to use `hugo server --disableFastRender` instead. 

## Developing CSS, including JS

For having the best website, the contributors should follow some simple rules.

* Do NOT create a single CSS or Javascript file per page unless you have good reasons for doing that. For example, download page could have a special modal. This seems a good reason to include a good javascript file called `download-page-modal.js` . 
Another example. Donation page could have a special style for the navbar. But wait! The navbar is included always! Considering having one CSS for the entire website!

* [Follow HTML5 Standars](https://html.spec.whatwg.org/)! Use `<div>`, `<section>` . Do NOT use the old and buggy table-fixed tags.
   
## Helpful and useful HEX code for the website

Main color for website could be #XXXXX

