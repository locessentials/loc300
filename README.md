# Loc300: Selecting a Translator

A comprehensive course website by LocEssentials covering the fundamentals of selecting qualified human translators for localization projects.

## Project Structure

```
loc300/
├── index.html              # Homepage
├── course-outline.html     # Course overview and lesson list
├── lesson-1.html          # Introduction: Selecting a Translator with Purpose
├── lesson-1.html          # Lesson 1: Human vs Automatic Translation
├── lesson-2.html          # Lesson 2: ASTM F43 Translation Labels
├── lesson-3.html          # Lesson 3: Selecting Individual Translators
├── lesson-4.html                 # Translator Selection Checklist
├── lesson-5.html                 # Agency Selection
├── lesson-6.html                 # Vendor Management Scorecard
├── conclusion.html        # Course conclusion and next steps
├── styles.css             # Main stylesheet with LocEssentials branding
├── search.js              # Client-side search functionality
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine crawler instructions
└── images/                # Directory for images
    ├── logo-tilted.png    # Tilted cap logo for header
    ├── logo-primary.png   # Primary cap logo for footer
    └── OpenSource_ClassCover.png  # Course cover image
```

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Create a new repository on GitHub (e.g., `loc300`)
2. Initialize with or without a README (you can use this one)

### Step 2: Prepare Your Local Files

```bash
# Clone the repository
git clone https://github.com/yourusername/loc300.git
cd loc300

# Copy all website files to the repository
# (Copy all HTML, CSS, JS files and the images folder)

# Create images directory if it doesn't exist
mkdir -p images
```

### Step 3: Add Your Logo Files

You'll need to create or add the following logo files to the `images/` directory:
- `logo-tilted.png` - Tilted cap logo for site header
- `logo-primary.png` - Primary cap logo for footer
- `OpenSource_ClassCover.png` - Already provided

If you don't have SVG logos yet, you can temporarily use PNG versions by updating the image references in the HTML files.

### Step 4: Push to GitHub

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: Loc300 course website"

# Push to main branch
git push origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under "Source", select `main` branch and `/ (root)` folder
4. Click **Save**
5. Your site will be published at `https://yourusername.github.io/loc300/`

### Step 6: Configure Custom Domain

To use `loc300.locessentials.com`:

1. In your repository settings under Pages, add `loc300.locessentials.com` as a custom domain
2. In your domain registrar (or DNS provider), add a CNAME record:
   - **Type**: CNAME
   - **Name**: `loc300`
   - **Value**: `yourusername.github.io`
   - **TTL**: 3600 (or your preference)
3. Wait for DNS propagation (can take up to 24 hours)
4. Enable "Enforce HTTPS" in GitHub Pages settings once DNS is configured

## SEO Optimization

The site includes:

### Meta Tags
Each page includes:
- Title tags optimized for search
- Meta descriptions (155-160 characters)
- Keyword tags for page classification
- Open Graph tags for social sharing

### Focus Keyphrases by Page:
- **Homepage**: "selecting a translator", "localization course"
- **Introduction**: "selecting a translator", "localization course"
- **Lesson 1**: "human vs machine translation", "translation selection"
- **Lesson 2**: "translation labels", "translation quality standards"
- **Lesson 3**: "translator credentials", "freelance translator selection"
- **Lesson 4**: "professional translator checklist", "translator qualifications"
- **Lesson 5**: "translation agency selection", "LSP evaluation"
- **Lesson 6**: "vendor management scorecard", "translation metrics"
- **Conclusion**: "localization learning path", "NMT courses"

### Sitemap and Robots.txt
- `sitemap.xml` lists all pages for search engine crawling
- `robots.txt` provides crawler instructions

### Accessibility
- Semantic HTML5 structure
- Alt text for all images
- ARIA labels where appropriate
- Keyboard navigation support
- Responsive design for all devices

## Customization

### Brand Colors (CSS Variables)
Located in `:root` in `styles.css`:
```css
--pink: #ef91c6;
--light-blue: #50A5E6;
--medium-blue: #2b7bb9;
--dark-blue: #1c6399;
--neon-green: #60ff6c;
--alabaster: #F5F7F9;
```

### Typography
```css
--heading-font: 'Montserrat', 'Helvetica Neue', sans-serif;
--body-font: 'Lato', 'Source Sans Pro', sans-serif;
```

To use custom fonts, add Google Fonts or other font links in the HTML `<head>`.

### Spacing
All spacing uses CSS variables for consistency:
```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 3rem;
--spacing-xl: 4rem;
```

## Features

### Search Functionality
- Client-side search with instant results
- Searches across page titles and keywords
- Dropdown results with navigation

### Responsive Design
- Mobile-first approach
- Breakpoint at 768px for tablets/mobile
- Flexible grid layouts
- Readable typography at all sizes

### Navigation
- Sticky header with search
- Previous/Next page navigation
- Breadcrumb-style progress through lessons

## Content Development

Lesson pages currently contain placeholder content. To add content:

1. Open the relevant lesson HTML file (e.g., `lesson-1.html`)
2. Replace the placeholder paragraph between the page header and page navigation
3. Add your content using semantic HTML
4. Use the existing CSS classes for consistent styling

### Recommended Content Structure:
```html
<h3>Section Heading</h3>
<p>Introductory paragraph...</p>

<h4>Subsection</h4>
<p>Content...</p>

<ul class="outcomes-list">
    <li>List item with arrow bullet</li>
</ul>
```

## License

[Specify your license here]

## Contact

**LocEssentials**  
Website: [locessentials.com](https://locessentials.com)  
Email: info@locessentials.com  
LinkedIn: [linkedin.com/company/locessentials](https://www.linkedin.com/company/locessentials/)  
YouTube: [@locessentials](https://www.youtube.com/@locessentials)

---

*Your localization thinking cap.*
