# ITx COLLECTIVE - Brand Guidelines

## Brand Overview

ITx Collective is a peer-to-peer ecosystem designed for CIOs, CTOs, and IT leaders. The brand identity emphasizes professional excellence, technological sophistication, and community collaboration. The visual language combines modern tech aesthetics with executive-level polish.

---

## 1. Brand Identity

### Brand Name
- **Primary:** ITx COLLECTIVE
- **Short Form:** ITx
- **Tagline:** "A peer-to-peer ecosystem of CIOs, CTOs, and IT leaders to share knowledge and build their professional networks."
- **Powered By:** SINC

### Brand Personality
- **Professional:** Executive-level, credible, authoritative
- **Technical:** Modern, sophisticated, data-driven
- **Collaborative:** Community-focused, peer-to-peer, inclusive
- **Premium:** High-quality, refined, exclusive

---

## 2. Logo & Typography

### Logo Usage
- **Primary Logo:** "ITx" where "IT" is in white and "x" is in brand purple (#4B0BE8)
- **Full Brand:** "ITx COLLECTIVE" where "COLLECTIVE" is in white
- **All Caps:** Logo text must always be uppercase
- **Font Weight:** Bold (700-900)
- **Minimum Size:** 40px height for digital, 0.5 inches for print
- **Clear Space:** Minimum padding of 16px on all sides

### Logo Variations
```
Primary:    ITx COLLECTIVE
Secondary:  ITx
Icon Only:  x (in brand purple)
```

### Typography System

#### Heading Hierarchy
```css
H1 (Hero Title):
  - Font Size: 96px (6xl) - 144px (9xl)
  - Font Weight: 700-900 (Bold/Black)
  - Line Height: 1.0
  - Letter Spacing: 0
  - Color: White with accent purple
  - Use Case: Primary hero sections

H2 (Section Headers):
  - Font Size: 36px (4xl) - 48px (5xl)
  - Font Weight: 700 (Bold)
  - Line Height: 1.1
  - Letter Spacing: 0
  - Color: White
  - Use Case: Major section titles

H3 (Subsection Headers):
  - Font Size: 24px (2xl) - 30px (3xl)
  - Font Weight: 700 (Bold)
  - Line Height: 1.2
  - Letter Spacing: 0
  - Color: White or Brand Purple
  - Use Case: Card headers, subsection titles

H4 (Component Titles):
  - Font Size: 18px (lg) - 20px (xl)
  - Font Weight: 600-700 (Semibold/Bold)
  - Line Height: 1.2
  - Letter Spacing: 0
  - Color: White
  - Use Case: Card titles, list items
```

#### Body Text
```css
Large Body:
  - Font Size: 18px (lg)
  - Font Weight: 400 (Regular)
  - Line Height: 1.5 (150%)
  - Color: White (#FFFFFF)
  - Use Case: Hero descriptions, prominent content

Regular Body:
  - Font Size: 16px (base)
  - Font Weight: 400 (Regular)
  - Line Height: 1.5 (150%)
  - Color: White (#FFFFFF) or rgba(255, 255, 255, 0.70)
  - Use Case: Standard paragraph text

Small Body:
  - Font Size: 14px (sm)
  - Font Weight: 400-500 (Regular/Medium)
  - Line Height: 1.4
  - Color: rgba(255, 255, 255, 0.60)
  - Use Case: Supporting text, metadata

Tiny/Caption:
  - Font Size: 12px (xs)
  - Font Weight: 500-700 (Medium/Bold)
  - Line Height: 1.3
  - Letter Spacing: 0.05em (wider)
  - Text Transform: Uppercase
  - Color: rgba(75, 11, 232, 1) or rgba(255, 255, 255, 0.40)
  - Use Case: Labels, tags, micro-copy
```

#### Font Weights
- **Black (900):** Hero titles only
- **Bold (700):** Headings, CTAs, emphasis
- **Semibold (600):** Subheadings, buttons
- **Medium (500):** Labels, emphasized body text
- **Regular (400):** Body text, descriptions

---

## 3. Color System

### Primary Colors

#### Brand Purple
```css
Primary:       #4B0BE8  /* rgb(75, 11, 232) */
Primary Hover: #3A0BB8  /* rgb(58, 11, 184) */
Primary Dark:  #3A08BA  /* rgb(58, 8, 186) */
```
**Usage:** CTAs, accents, links, highlights, brand marks

#### Black & White
```css
Pure Black:    #000000  /* Background base */
Pure White:    #FFFFFF  /* Primary text */
```

### Secondary Colors

#### Grays & Neutral Tones
```css
Slate 900:     #0f172a  /* Dark backgrounds, cards */
Slate 800:     #1e293b  /* Form text, dark elements */
Gray 800:      #1f2937  /* Borders, dividers */
Gray 600:      #4b5563  /* Secondary text */
Gray 500:      #6b7280  /* Muted text */
Gray 400:      #9ca3af  /* Placeholder text */
Gray 300:      #d1d5db  /* Light text on dark */
Gray 200:      #e5e7eb  /* Subtle borders */
Gray 100:      #f3f4f6  /* Light backgrounds */
```

#### Transparency Layers (on Black)
```css
White 90%:     rgba(255, 255, 255, 0.90)  /* High emphasis text */
White 70%:     rgba(255, 255, 255, 0.70)  /* Body text */
White 60%:     rgba(255, 255, 255, 0.60)  /* Secondary text */
White 50%:     rgba(255, 255, 255, 0.50)  /* Deemphasized text */
White 40%:     rgba(255, 255, 255, 0.40)  /* Subtle text, captions */
White 30%:     rgba(255, 255, 255, 0.30)  /* Inactive elements */
White 20%:     rgba(255, 255, 255, 0.20)  /* Borders, dividers */
White 10%:     rgba(255, 255, 255, 0.10)  /* Subtle backgrounds */
White 5%:      rgba(255, 255, 255, 0.05)  /* Card backgrounds */
```

#### Purple Transparency Layers (on Black)
```css
Purple 50%:    rgba(75, 11, 232, 0.50)  /* Border emphasis */
Purple 30%:    rgba(75, 11, 232, 0.30)  /* Active borders */
Purple 20%:    rgba(75, 11, 232, 0.20)  /* Hover states */
Purple 10%:    rgba(75, 11, 232, 0.10)  /* Selected backgrounds */
Purple 8%:     rgba(75, 11, 232, 0.08)  /* Grid lines */
Purple 5%:     rgba(75, 11, 232, 0.05)  /* Subtle overlays */
Purple 3%:     rgba(75, 11, 232, 0.03)  /* Ambient backgrounds */
```

### Utility Colors

#### Status Colors
```css
Success:       #10b981  /* Green - confirmations */
Warning:       #f59e0b  /* Amber - alerts */
Error:         #ef4444  /* Red - errors */
Info:          #3b82f6  /* Blue - information */
```

### Color Usage Guidelines

#### Backgrounds
- **Primary Background:** Pure black (#000000)
- **Card Backgrounds:** rgba(255, 255, 255, 0.05)
- **Elevated Cards:** rgba(255, 255, 255, 0.10)
- **Modal Overlays:** rgba(0, 0, 0, 0.80) with backdrop blur

#### Text Hierarchy
- **Primary Text:** White (#FFFFFF)
- **Secondary Text:** rgba(255, 255, 255, 0.70)
- **Tertiary Text:** rgba(255, 255, 255, 0.50)
- **Disabled Text:** rgba(255, 255, 255, 0.30)

#### Interactive Elements
- **Default State:** Brand purple or white/10 background
- **Hover State:** Lighter shade or white/20 background
- **Active State:** Darker shade or purple/10 background
- **Focus Ring:** 2px brand purple with offset

---

## 4. Background Patterns & Effects

### Grid Patterns

#### Hexagonal Grid (itx-grid-background)
- **Base Color:** Pure black (#000000)
- **Pattern Colors:** Purple at 3-5% opacity
- **Pattern Size:** 80x140px hexagons
- **Use Case:** Hero sections, large backgrounds
- **Animation:** Subtle pulse (8s duration)

#### Minimal Grid (itx-subtle-grid)
- **Grid Lines:** Purple at 6-10% opacity
- **Grid Size:** 100x100px
- **Connection Points:** Radial gradients at intersections
- **Animation:** Pulsing connection points (12s duration)
- **Use Case:** Section backgrounds, content areas

### Gradient Overlays

#### Radial Gradients
```css
Hero Gradient:
  radial-gradient(ellipse at top left, rgba(75, 11, 232, 0.05) 0%, transparent 50%),
  radial-gradient(ellipse at bottom right, rgba(75, 11, 232, 0.03) 0%, transparent 50%)

Dark Overlay:
  linear-gradient(to right, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.50))
```

### Glass Effects
```css
Background: rgba(255, 255, 255, 0.05)
Border: 1px solid rgba(255, 255, 255, 0.10)
Backdrop Filter: blur(8px) (when supported)
```

---

## 5. Spacing System

### 8px Base Grid
All spacing follows an 8px base unit for consistency and alignment.

```
2px   = 0.125rem = xs
4px   = 0.25rem  = sm
8px   = 0.5rem   = base
12px  = 0.75rem  =
16px  = 1rem     = md
20px  = 1.25rem  =
24px  = 1.5rem   = lg
32px  = 2rem     = xl
40px  = 2.5rem   = 2xl
48px  = 3rem     = 3xl
64px  = 4rem     = 4xl
80px  = 5rem     = 5xl
96px  = 6rem     = 6xl
128px = 8rem     = 8xl
```

### Component Spacing

#### Section Padding
```css
Vertical:   80px (5rem) - 128px (8rem)
Horizontal: 24px (1.5rem) - 64px (4rem)
Mobile:     48px (3rem) vertical, 16px (1rem) horizontal
```

#### Container Max-Width
```css
Standard:   1280px (max-w-7xl)
Narrow:     1024px (max-w-6xl)
Wide:       1536px (max-w-screen-2xl)
```

#### Card Padding
```css
Large:      32px (2rem)
Standard:   24px (1.5rem)
Compact:    16px (1rem)
```

#### Element Gaps
```css
Tight:      8px (0.5rem)
Standard:   16px (1rem)
Comfortable: 24px (1.5rem)
Loose:      32px (2rem)
```

---

## 6. Border & Radius System

### Border Widths
```css
Hairline:   1px
Standard:   2px
Emphasis:   3px
Heavy:      4px
```

### Border Radius
```css
Sharp:      0px (none)
Subtle:     4px (sm)
Standard:   6px (base) - 8px (md)
Rounded:    12px (lg)
Extra Round: 16px (xl)
Pill:       9999px (full)
```

### Border Colors
```css
Subtle:     rgba(255, 255, 255, 0.10)
Standard:   rgba(255, 255, 255, 0.20)
Emphasis:   rgba(75, 11, 232, 0.30)
Active:     rgba(75, 11, 232, 0.50)
```

---

## 7. Components

### Buttons

#### Primary CTA Button
```css
Background: #4B0BE8
Background Hover: #3A0BB8
Text Color: White (#FFFFFF)
Font Weight: 600-700 (Semibold/Bold)
Text Transform: Uppercase
Letter Spacing: 0.05em (wider)
Border Radius: 8px (lg)
Padding: 12px 32px (default), 16px 32px (lg)
Shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5)
Shadow Hover: 0 20px 25px -5px rgba(0, 0, 0, 0.5)
Transform Hover: scale(1.05)
Transition: all 300ms ease
```

#### Secondary Button
```css
Background: rgba(255, 255, 255, 0.10)
Background Hover: rgba(255, 255, 255, 0.20)
Text Color: White (#FFFFFF)
Border: 2px solid rgba(255, 255, 255, 0.20)
Border Hover: rgba(75, 11, 232, 0.50)
```

#### Ghost Button
```css
Background: Transparent
Background Hover: rgba(255, 255, 255, 0.05)
Text Color: rgba(255, 255, 255, 0.70)
Text Hover: White (#FFFFFF)
```

### Cards

#### Standard Card
```css
Background: rgba(255, 255, 255, 0.05)
Border: 1px solid rgba(255, 255, 255, 0.10)
Border Hover: rgba(255, 255, 255, 0.20)
Border Radius: 8px (lg) - 12px (xl)
Padding: 24px - 32px
Shadow: None or subtle
Transition: border 200ms, transform 300ms
```

#### Selected/Active Card
```css
Background: rgba(75, 11, 232, 0.10)
Border: 1px solid rgba(75, 11, 232, 0.50)
```

#### Elevated Card
```css
Background: rgba(255, 255, 255, 0.10)
Shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3)
Shadow Hover: 0 10px 15px -3px rgba(0, 0, 0, 0.4)
```

### Navigation

#### Top Navigation Bar
```css
Background: Black (#000000)
Border Bottom: 1px solid rgba(128, 128, 128, 0.5)
Height: 64px (h-16)
Position: Fixed, z-50
```

#### Navigation Links
```css
Font Size: 14px (sm)
Font Weight: 500 (Medium)
Text Transform: Uppercase
Letter Spacing: 0.05em
Color: rgba(209, 213, 217, 1) (gray-300)
Color Hover: #4B0BE8
Transition: color 200ms
```

### Forms

#### Input Fields
```css
Background: #f8fafc (slate-50) or rgba(255, 255, 255, 0.05)
Border: 2px solid #e2e8f0 (slate-200)
Border Focus: #4B0BE8
Border Radius: 6px
Padding: 10px - 12px
Text Color: #1e293b (slate-800) or white
Transition: border 200ms
```

#### HubSpot Form Styling
```css
Form Background: White (#FFFFFF) with padding 20px
Label Color: #1e293b (slate-800)
Label Weight: 500 (Medium)
Input Background: #f8fafc (slate-50)
Input Border: 2px solid #e2e8f0
Input Focus Border: #4B0BE8
Button Background: #4B0BE8
Button Hover: #3A08BA
```

### Icons
- **Library:** Lucide React
- **Default Size:** 20px (w-5 h-5)
- **Large Size:** 24px (w-6 h-6)
- **Accent Color:** Brand purple (#4B0BE8)
- **Default Color:** White or rgba(255, 255, 255, 0.70)

---

## 8. Layout Patterns

### Grid Systems

#### Two-Column Layout
```css
Grid: 1 column (mobile), 2 columns (lg: 1024px+)
Gap: 48px (3rem) - 64px (4rem)
Use Case: Content + sidebar, features, event listings
```

#### Three-Column Layout
```css
Grid: 1 column (mobile), 2 columns (md: 768px+), 3 columns (lg: 1024px+)
Gap: 24px (1.5rem) - 32px (2rem)
Use Case: Feature grids, card grids
```

#### Hero Layout
```css
Min Height: 100vh
Content Position: Left-aligned with max-width 50%
Vertical Alignment: Centered
Background: Video or image with dark overlay
```

### Breakpoints
```css
sm:  640px  (Mobile Large)
md:  768px  (Tablet)
lg:  1024px (Desktop)
xl:  1280px (Desktop Large)
2xl: 1536px (Desktop XL)
```

### Container Strategy
- **Full Width Sections:** Background extends full width
- **Content Container:** max-w-7xl (1280px) with horizontal padding
- **Narrow Content:** max-w-6xl (1024px) for text-heavy sections

---

## 9. Animation & Interactions

### Transition Timing
```css
Fast:     150ms - 200ms (color changes, borders)
Standard: 300ms (transforms, shadows)
Slow:     500ms - 800ms (page transitions, complex animations)
```

### Easing Functions
```css
Default:  ease (standard transitions)
Smooth:   ease-in-out (hover states)
Bounce:   cubic-bezier (entrances, emphasis)
```

### Hover States
- **Scale:** 1.02 - 1.05 (subtle to prominent)
- **Opacity:** 0.7 - 1.0
- **Shadow:** Increase shadow intensity
- **Border:** Change color or increase width
- **Color:** Shift to hover variant

### Loading States
- **Skeleton:** Background rgba(255, 255, 255, 0.10) with pulse animation
- **Spinner:** 2px border, brand purple with transparent top
- **Animation:** rotate 1s linear infinite

### Micro-Interactions
- **Button Press:** Scale down to 0.95
- **Card Hover:** Lift with shadow increase
- **Link Hover:** Color transition + optional underline
- **Icon Hover:** Subtle rotate or scale

---

## 10. Accessibility Standards

### Color Contrast
- **Text on Black:** White (#FFFFFF) = 21:1 ratio (AAA)
- **Purple on Black:** #4B0BE8 = 4.8:1 ratio (AA)
- **Gray Text:** rgba(255, 255, 255, 0.70) = 12:1 (AAA)
- **Minimum:** 4.5:1 for normal text, 3:1 for large text

### Focus States
- **Focus Ring:** 2px solid brand purple
- **Focus Ring Offset:** 2px
- **Visible on all interactive elements**

### Interactive Element Sizing
- **Minimum Touch Target:** 44x44px (mobile)
- **Minimum Click Target:** 24x24px (desktop)
- **Button Padding:** Ensures adequate size

### Screen Reader Support
- **Alt Text:** All images must have descriptive alt text
- **ARIA Labels:** Use for icon-only buttons
- **Semantic HTML:** Proper heading hierarchy
- **Skip Links:** Provide navigation bypass

---

## 11. Voice & Tone

### Brand Voice
- **Professional:** Executive-level language, avoiding jargon
- **Confident:** Authoritative but not arrogant
- **Collaborative:** Emphasize community and peer-to-peer
- **Innovative:** Forward-thinking, technology-focused

### Writing Style
- **Headlines:** Bold, direct, action-oriented
- **Body Copy:** Clear, concise, benefit-focused
- **CTAs:** Action verbs, uppercase, imperative mood
- **Microcopy:** Helpful, informative, concise

### Terminology
- **Community Terms:** Collective, Guild, Backbone, Kernel
- **Target Audience:** CIOs, CTOs, IT Leaders, Technology Executives
- **Event Types:** Forums, Briefings, Sessions
- **Content:** Knowledge, Insights, Resources

---

## 12. Imagery Guidelines

### Photography Style
- **Subjects:** Professional technology leaders in meeting settings
- **Tone:** Professional, modern, collaborative
- **Composition:** Clean, uncluttered, focused
- **Lighting:** Well-lit, natural or professional lighting
- **Color Treatment:** Natural colors with slight desaturation

### Video Background
- **Style:** Subtle motion, technology-focused
- **Overlay:** Dark gradient (rgba(0, 0, 0, 0.90) to rgba(0, 0, 0, 0.50))
- **Use Case:** Hero sections, impactful moments
- **Fallback:** Static image with similar treatment

### Icons
- **Style:** Line icons from Lucide React
- **Weight:** 2px stroke
- **Color:** Brand purple or white
- **Size:** 20px - 24px standard

---

## 13. Content Sections

### Hero Section
```
- Full viewport height (min-h-screen)
- Video or large image background
- Dark overlay for text readability
- Large, bold typography (96px - 144px)
- Clear CTA button
- Brief value proposition (18px body text)
```

### Feature Sections
```
- Black background with optional grid pattern
- Section header (48px) with optional label (12px uppercase)
- Grid layout (2-3 columns)
- Cards with icons and descriptions
- Consistent spacing (80px - 128px vertical padding)
```

### Event Listings
```
- Two-column layout (list + details)
- Card-based design with hover states
- Active selection indication (purple border + background)
- Date, location, and event type metadata
- Integrated registration forms
```

### Content Sections
```
- White text on black background
- Clear visual hierarchy
- Generous white space
- Supporting images or icons
- Logical content flow
```

---

## 14. Do's and Don'ts

### Do's
✓ Use pure black backgrounds with white or light gray text
✓ Maintain consistent spacing using the 8px grid
✓ Use brand purple sparingly for emphasis and CTAs
✓ Keep typography hierarchy clear and consistent
✓ Ensure adequate color contrast for accessibility
✓ Use uppercase for labels, tags, and CTAs
✓ Apply subtle animations and transitions
✓ Use grid patterns for visual interest
✓ Maintain professional, executive-level tone
✓ Test on multiple devices and screen sizes

### Don'ts
✗ Don't use purple, indigo, or violet hues other than brand purple
✗ Don't overuse brand purple - it loses impact
✗ Don't use busy or distracting backgrounds
✗ Don't mix multiple font families
✗ Don't ignore accessibility standards
✗ Don't use low-contrast color combinations
✗ Don't create inconsistent spacing
✗ Don't animate excessively or distractingly
✗ Don't use casual or overly technical language
✗ Don't deviate from established patterns

---

## 15. Brand Applications

### Digital Applications
- **Website:** Primary brand experience
- **Email Campaigns:** Simplified color palette, web-safe fonts
- **Social Media:** Branded graphics with logo and purple accent
- **Presentations:** Black backgrounds, white text, purple accents

### Print Applications (If Needed)
- **Business Cards:** Black background, white text, purple logo
- **Event Materials:** Consistent with digital brand
- **Signage:** High contrast for readability

---

## 16. Maintenance & Updates

### Version Control
- **Current Version:** 1.0
- **Last Updated:** 2025-09-30
- **Review Cycle:** Quarterly or as needed

### Change Process
1. Propose changes with rationale
2. Review impact on existing implementations
3. Update guidelines document
4. Communicate changes to team
5. Update component library and codebase

### Questions & Support
For questions about brand implementation or to propose changes, contact the brand team or refer to the design system documentation.

---

## Quick Reference

### Essential Colors
```
Brand Purple:  #4B0BE8
Hover Purple:  #3A0BB8
Pure Black:    #000000
Pure White:    #FFFFFF
Text Gray:     rgba(255, 255, 255, 0.70)
```

### Essential Typography
```
Hero:          96px - 144px, Bold
Section:       36px - 48px, Bold
Subsection:    24px - 30px, Bold
Body:          16px - 18px, Regular
Caption:       12px, Bold, Uppercase
```

### Essential Spacing
```
Section Padding:  80px - 128px
Card Padding:     24px - 32px
Element Gap:      16px - 24px
Border Radius:    8px - 12px
```

### Essential Components
```
Primary Button:   Purple background, white text, uppercase
Card:             White/5% background, white/10% border
Grid Pattern:     itx-grid-background or itx-subtle-grid
Navigation:       Fixed top, black background, 64px height
```

---

**End of Brand Guidelines**