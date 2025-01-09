---
title: URL Shortener
authors:
  - name: Damon Diaz
    link: https://damondiaz.xyz
    image: https://github.com/imfing.png
tags:
  - golang
  - alpine.js
  - tailwind
excludeSearch: false
image: "/images/example.webp"
githubRepo: "https://github.com/github/rsvpHub"
---

A minimal, self-hosted RSVP system built with Go, Tailwind CSS, and Alpine.js
<!--more-->
## Overview

When planning my baby shower, I needed a simple RSVP system. Instead of using existing solutions, I decided to build my own minimal version as a side project. This gave me complete control over the features while keeping it lightweight and efficient.

## Tech Stack

- **Backend**: Go (Golang)
  - Less memory footprint for vps deployments
  - Chosen for its simplicity and excellent performance
  - Built-in HTTP server capabilities
  - Easy deployment with single binary
  - Minimal dependencies

- **Frontend**: 
  - Tailwind CSS for utility-first styling
  - Alpine.js for minimal JavaScript interactivity
  - HTML templates with Go's template package

## Key Features

- Simple RSVP form with guest details
- Mobile-responsive design
- Admin dashboard for guest list management

## Technical Implementation

- Used Go's standard library for routing and handling HTTP requests
- Implemented server-side validation for form submissions
- Stored data in memory for simplicity and portability, only for one time use so for my use case it was fine
- Utilized Alpine.js for dynamic form validation and UI updates
- Designed with Tailwind CSS for a clean, modern interface

## Learnings

- Practiced keeping dependencies minimal
- Balanced between features and simplicity
- Gained experience with Alpine.js for lightweight interactivity
- Improved understanding of Go's templating system