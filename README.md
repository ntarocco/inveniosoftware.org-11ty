# Inveniosoftware.org website

This is the official website for [InvenioSoftware.org](https://inveniosoftware.org) - the home of the Invenio digital library framework, InvenioRDM research data management platform and InvenioILS integrated library system.

## About

This website is built with [11ty (Eleventy)](https://www.11ty.dev/), a static site generator that transforms templates into HTML. The site serves as the main hub for:

- **Invenio Framework**: A flexible digital library framework for building complex digital libraries and institutional repositories
- **InvenioRDM**: A turn-key research data management platform built on Invenio
- **InvenioILS**: An integrated library system for modern libraries
- **Community**: Resources, documentation, events, and support for the Invenio ecosystem

## Requirements

- **Node.js** (v18 or higher)
- **npm**

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd inveniosoftware.org
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Development Server

Start the development server with live reloading:

```bash
npm start
```

The site will be available at `http://localhost:8080` and will automatically reload when you make changes.

### 4. Build for Production

Generate the static site for production:

```bash
npm run build
```

The built site will be in the `_site/` directory.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server with live reload |
| `npm run build` | Build site for production (includes screenshot generation) |
| `npm run debug` | Start server with detailed Eleventy debug information |

## Content Management

### Adding Blog Posts

1. Create a new markdown file in `src/blog-posts/`
2. Use the naming convention: `YYYY-MM-DD-post-title.md`
3. Add frontmatter with required fields:

```yaml
---
title: "Your Blog Post Title"
author: Author Name
date: YYYY-MM-DD
team: Invenio
permalink: "/blog/YYYY-MM-DD-post-title/"
---

Your blog content here...
```

### Adding Images

Place images in `src/assets/images/` and reference them in markdown:

```markdown
![Alt text](image-filename.png)
```

### Site Configuration

Main configuration is in `eleventy.config.js`:

- **Input**: `src/` directory
- **Output**: `_site/` directory
- **Template formats**: Markdown, Nunjucks, HTML, Liquid, JS
- **Asset copying**: Images are copied to build output

## Deployment

The site generates static HTML files that can be deployed to any web server or static hosting service:

- **Build**: `npm run build`
- **Output**: `_site/` directory contains all static files
- **Assets**: Images and CSS are processed and copied to the output

Popular deployment targets:
- GitHub Pages
- Netlify
- Vercel
- AWS S3/CloudFront
- Any static web server

## Migration Notes

This site was migrated from a Lektor-based system to 11ty, preserving:
- ✅ All 50 blog posts with complete content
- ✅ Original URL structure (`/blog/post-name/`)
- ✅ All blog images and assets
- ✅ Metadata (authors, dates, teams)
- ✅ Site navigation and structure

## Contributing

1. Make your changes in the `src/` directory
2. Test locally with `npm start`
3. Build and verify with `npm run build`
4. Submit your changes via pull request
