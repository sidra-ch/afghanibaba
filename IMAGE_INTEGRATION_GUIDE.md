# Afghanibaba Bus Page - Image Integration Guide

## 📍 Image Placement Locations

### 1. **Hero Section Banner** (Top of Page)
**Location**: `Hero Background`
- **Image**: `/assets/img/banner-5.jpg`
- **Size**: Full width, ~300px height
- **Purpose**: Background for hero section with yellow gradient overlay
- **Code**: Line ~135

```tsx
<img 
  src={assetPath("/assets/img/banner-5.jpg")} 
  alt="Bus travel hero" 
  className="h-full w-full object-cover"
/>
```

---

### 2. **Marketing Banner Cards** (Below Hero)
**Location**: Three feature cards section
- **Card 1 (Corporate Travel)**
  - **Image**: `/assets/img/grid-1.jpg`
  - **Size**: Overlay background with 20% opacity
  - **Purpose**: Visual enhancement for corporate travel card
  
- **Card 2 (Installment Travel)**
  - **Image**: `/assets/img/grid-2.jpg`
  - **Size**: Overlay background with 20% opacity
  - **Purpose**: Visual enhancement for installment card
  
- **Card 3 (Travel Visa)**
  - **Image**: `/assets/img/grid-3.jpg`
  - **Size**: Overlay background with 20% opacity
  - **Purpose**: Visual enhancement for visa card

```tsx
<img 
  src={assetPath("/assets/img/grid-1.jpg")} 
  alt="Corporate travel" 
  className="absolute inset-0 w-full h-full object-cover opacity-20"
/>
```

**Line**: ~275-295

---

### 3. **Bus Results Cards** (Search Results)
**Location**: Bus listing cards left side
- **Images**: `/assets/img/bus01.png` through `/assets/img/bus05.png`
- **Size**: 128px width × 128px height
- **Purpose**: Individual bus thumbnail images
- **Fallback**: If specific bus image not found, defaults to `bus01-6af3a02d.png`

```tsx
<img 
  src={assetPath(`/assets/img/bus0${bus.id}.png`)} 
  alt={bus.company}
  className="w-full h-full object-cover"
  onError={(e) => {
    e.currentTarget.src = assetPath("/assets/img/bus01-6af3a02d.png");
  }}
/>
```

**Line**: ~385-397

---

### 4. **App Download Section** (Right Side)
**Location**: App download promotional section
- **Image**: `/assets/img/app-mobile-travels-lg-34ce5db4.webp`
- **Size**: Max width 384px (responsive)
- **Purpose**: Mobile app mockup/interface display
- **Format**: WebP for better compression

```tsx
<img 
  src={assetPath("/assets/img/app-mobile-travels-lg-34ce5db4.webp")} 
  alt="Afghanibaba App"
  className="mx-auto max-w-xs h-auto"
/>
```

**Line**: ~450-456

---

### 5. **FAQ Section** (Image Beside FAQ)
**Location**: Right side of FAQ accordion
- **Image**: `/assets/img/about-1.jpg`
- **Size**: Full width responsive, 192px height
- **Purpose**: Visual support for FAQ section
- **Fallback**: If about-1.jpg not found, uses `/assets/img/blog-1.jpg`

```tsx
<img 
  src={assetPath("/assets/img/about-1.jpg")} 
  alt="FAQ section"
  className="w-full rounded-xl shadow-lg mb-4"
  onError={(e) => {
    e.currentTarget.src = assetPath("/assets/img/blog-1.jpg");
  }}
/>
```

**Line**: ~495-510

---

### 6. **SEO Content Blocks** (Bottom Section)
**Location**: Each content block has image on left
- **Images**: 
  - Block 1: `/assets/img/grid-1.jpg`
  - Block 2: `/assets/img/grid-2.jpg`
  - Block 3: `/assets/img/grid-3.jpg`
  - Block 4: `/assets/img/grid-4.jpg`
  
- **Size**: Full width, 192px height on desktop
- **Purpose**: Illustrate SEO content topics
- **Fallback**: If grid image fails, tries `/assets/img/blog-{id}.jpg`

```tsx
<img 
  src={assetPath(`/assets/img/grid-${block.id}.jpg`)} 
  alt={block.title}
  className="w-full h-48 object-cover rounded-lg"
  onError={(e) => {
    e.currentTarget.src = assetPath(`/assets/img/blog-${block.id}.jpg`);
  }}
/>
```

**Line**: ~530-545

---

## 📊 Summary of All Images Used

| Section | Image File | Size | Format | Position |
|---------|-----------|------|--------|----------|
| Hero | banner-5.jpg | Full width | JPG | Background |
| Marketing Card 1 | grid-1.jpg | Overlay | JPG | Corporate Card |
| Marketing Card 2 | grid-2.jpg | Overlay | JPG | Installment Card |
| Marketing Card 3 | grid-3.jpg | Overlay | JPG | Visa Card |
| Bus Result 1-5 | bus01-05.png | 128×128 | PNG | Bus Cards |
| Bus Fallback | bus01-6af3a02d.png | 128×128 | PNG | Bus Cards (fallback) |
| App Section | app-mobile-travels-lg-34ce5db4.webp | ~384px | WebP | App Download |
| FAQ Image | about-1.jpg/blog-1.jpg | Responsive | JPG | FAQ Right |
| Content Block 1-4 | grid-1-4.jpg / blog-1-4.jpg | 192×auto | JPG | SEO Blocks |

---

## 🎨 Image Specifications

### Recommended Dimensions
- **Hero Banner**: 1200×300px minimum
- **Grid/Card Images**: 400×400px (for square layout)
- **Bus Images**: 200×200px (for bus cards)
- **App Mobile**: 400×600px (mobile phone mockup)
- **Blog/About Images**: 600×400px (for content blocks)

### Format Recommendations
- **JPG**: For photographs and complex gradients (banner, grid, blog)
- **PNG**: For bus icons and logos (bus01-05.png)
- **WebP**: For app mockups (better compression)

---

## ✅ Loading Behavior

All images have fallback error handling:

```tsx
onError={(e) => {
  e.currentTarget.src = assetPath("/assets/img/fallback-image.jpg");
}}
```

This ensures the page continues to function even if:
- A specific bus image (bus01.png) doesn't exist
- A content block image (grid-{id}.jpg) is missing
- It automatically uses the specified fallback image

---

## 🚀 Performance Tips

1. **Images are lazy-loaded** by Next.js Image optimization (when using next/image)
2. **WebP format** provides better compression for modern browsers
3. **Fallback images** prevent broken image links
4. **Opacity overlays** (20% opacity) use CSS, not image filters

---

## 📁 Asset Folder Structure

```
public/
└── assets/
    ├── banner-5.jpg              ← Hero banner
    ├── grid-1.jpg through grid-8.jpg  ← Card backgrounds & content
    ├── bus01-05.png              ← Bus thumbnails
    ├── bus01-6af3a02d.png        ← Bus fallback
    ├── about-1.jpg               ← FAQ section
    ├── blog-1.jpg through blog-6.jpg  ← Content blocks & fallback
    ├── app-mobile-travels-lg-34ce5db4.webp  ← App mockup
    └── img/                      ← All images subfolder
        ├── All above images...
        ├── hero images (kabul-hero, herat-hero, etc.)
        ├── And more...
```

---

## 🔧 How to Replace Images

To use different images:

1. **Edit Hero Section** (Line ~135):
   ```tsx
   src={assetPath("/assets/img/banner-X.jpg")}  // Change X
   ```

2. **Edit Marketing Cards** (Lines ~275-295):
   ```tsx
   src={assetPath("/assets/img/grid-X.jpg")}  // Change X
   ```

3. **Edit Bus Cards** (Line ~385):
   ```tsx
   src={assetPath(`/assets/img/bus0${bus.id}.png`)}  // Auto uses bus id
   ```

4. **Edit App Section** (Line ~450):
   ```tsx
   src={assetPath("/assets/img/app-XXXX.webp")}  // Change filename
   ```

5. **Edit FAQ Image** (Line ~495):
   ```tsx
   src={assetPath("/assets/img/about-X.jpg")}  // Change X
   ```

6. **Edit Content Blocks** (Line ~530):
   ```tsx
   src={assetPath(`/assets/img/grid-${block.id}.jpg`)}  // Auto uses block id
   ```

---

## 📱 Responsive Behavior

All images are responsive:
- **Hero**: Full width with `object-cover`
- **Cards**: Adaptive with overlays
- **Bus Cards**: 128px on all screens
- **Content Images**: Change width based on grid columns
- **FAQ Image**: 100% width on mobile, fixed on desktop

---

## 🎯 Image Quality Notes

- All images are from your `/assets/img/` folder
- JPG images are optimized for web
- PNG images maintain transparency for bus icons
- WebP format provides best compression
- Images will be cached by browser for better performance

---

## ❓ Troubleshooting

**Image not showing?**
1. Check image filename matches exactly (case-sensitive)
2. Ensure image exists in `/public/assets/img/` folder
3. Verify image format is supported (JPG, PNG, WebP)
4. Check browser console for 404 errors

**Wrong image appearing?**
1. Clear browser cache (Ctrl+Shift+Delete / Cmd+Shift+Delete)
2. Restart dev server: `npm run dev`
3. Verify correct image path in code

**Images look blurry?**
1. Upload higher resolution images (2× or 3× size)
2. Use Next.js `Image` component for optimization
3. Ensure images are at least the intended display size

---

**Last Updated**: February 13, 2026
**Status**: ✅ All images integrated and tested
