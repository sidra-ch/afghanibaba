# 🔍 Code Line Reference - Image Placements

## Quick Code Reference Guide

Find exactly where each image is placed in the code with line numbers.

---

## 📄 File: `frontend/src/app/bus/page.tsx`

### Line 1-50: Imports & Constants
```typescript
Line 1:    "use client";
Line 7:    import { ChevronDown, AlertCircle, Smartphone, ArrowDown } from "lucide-react";
Line 9:    const companies = ["همه شرکت‌ها", "افغان‌گلف", ...]
Line 10:   const afghaniCities = ["کابل", "قندهار", "هرات", ...]
```

---

## 🖼️ IMAGE PLACEMENTS BY LINE NUMBER

### 1️⃣ HERO SECTION (Lines 135-175)
```typescript
Line 130:  <main>
Line 131:  {/* Hero Section with Tabs */}
Line 132:  <div className="relative overflow-hidden">
Line 133:    <div className="absolute inset-0">
Line 135:      <img 
Line 136:        src={assetPath("/assets/img/banner-5.jpg")} 
Line 137:        alt="Bus travel hero" 
Line 138:        className="h-full w-full object-cover"
Line 139:      />
Line 140:      <div className="absolute inset-0 bg-gradient-to-r from-[#FDB713]/80 via-[#FDB713]/70 to-[#FDB713]/60"></div>
Line 141:    </div>
```
**Image**: `banner-5.jpg`  
**Purpose**: Hero background banner  
**Size**: Full width, ~400px height

---

### 2️⃣ MARKETING CARDS SECTION (Lines 275-310)

#### Card 1:
```typescript
Line 275:  <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 border border-blue-200 overflow-hidden relative">
Line 276:    <img 
Line 277:      src={assetPath("/assets/img/grid-1.jpg")} 
Line 278:      alt="Corporate travel" 
Line 279:      className="absolute inset-0 w-full h-full object-cover opacity-20"
Line 280:    />
```
**Image**: `grid-1.jpg`  
**Purpose**: Corporate travel card overlay  
**Opacity**: 20%

#### Card 2:
```typescript
Line 291:  <img 
Line 292:    src={assetPath("/assets/img/grid-2.jpg")} 
Line 293:    alt="Installment travel" 
Line 294:    className="absolute inset-0 w-full h-full object-cover opacity-20"
Line 295:  />
```
**Image**: `grid-2.jpg`  
**Purpose**: Installment travel card overlay  
**Opacity**: 20%

#### Card 3:
```typescript
Line 307:  <img 
Line 308:    src={assetPath("/assets/img/grid-3.jpg")} 
Line 309:    alt="Travel visa" 
Line 310:    className="absolute inset-0 w-full h-full object-cover opacity-20"
Line 311:  />
```
**Image**: `grid-3.jpg`  
**Purpose**: Visa travel card overlay  
**Opacity**: 20%

---

### 3️⃣ BUS RESULTS SECTION (Lines 360-410)

```typescript
Line 364:  {buses.map((bus) => (
Line 365:    <div key={bus.id} className="rounded-2xl border border-black/5 bg-white shadow-lg hover:shadow-xl transition overflow-hidden">
Line 366:      <div className="flex flex-col md:flex-row">
Line 368:        {/* Bus Image */}
Line 369:        <div className="w-full md:w-32 h-32 flex-shrink-0 overflow-hidden bg-slate-100">
Line 370:          <img 
Line 371:            src={assetPath(`/assets/img/bus0${bus.id}.png`)} 
Line 372:            alt={bus.company}
Line 373:            className="w-full h-full object-cover"
Line 374:            onError={(e) => {
Line 375:              e.currentTarget.src = assetPath("/assets/img/bus01-6af3a02d.png");
Line 376:            }}
Line 377:          />
Line 378:        </div>
```

**Image**: `bus0${bus.id}.png` (bus01.png through bus05.png)  
**Fallback**: `bus01-6af3a02d.png`  
**Size**: 128×128px  
**Purpose**: Bus thumbnail for each result  
**Position**: Left side of card

---

### 4️⃣ APP DOWNLOAD SECTION (Lines 450-470)

```typescript
Line 440:  {/* App Download Section */}
Line 441:  <div className="mx-auto max-w-6xl px-4 py-12">
Line 442:    <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden">
Line 443:      <div className="grid md:grid-cols-2 gap-8 items-center p-8">
...
Line 457:      <div className="text-center relative">
Line 458:        <img 
Line 459:          src={assetPath("/assets/img/app-mobile-travels-lg-34ce5db4.webp")} 
Line 460:          alt="Afghanibaba App"
Line 461:          className="mx-auto max-w-xs h-auto"
Line 462:        />
Line 463:      </div>
```

**Image**: `app-mobile-travels-lg-34ce5db4.webp`  
**Purpose**: Mobile app mockup  
**Size**: Max-width 384px (responsive)  
**Format**: WebP  
**Position**: Right side on desktop, below on mobile

---

### 5️⃣ FAQ SECTION (Lines 480-515)

```typescript
Line 478:  {/* FAQ Section */}
Line 479:  <div className="mx-auto max-w-6xl px-4 py-12">
Line 480:    <div className="grid md:grid-cols-3 gap-8">
...
Line 491:      {/* FAQ Image */}
Line 492:      <div className="md:col-span-1 flex items-center">
Line 493:        <div className="w-full">
Line 494:          <img 
Line 495:            src={assetPath("/assets/img/about-1.jpg")} 
Line 496:            alt="FAQ section"
Line 497:            className="w-full rounded-xl shadow-lg mb-4"
Line 498:            onError={(e) => {
Line 499:              e.currentTarget.src = assetPath("/assets/img/blog-1.jpg");
Line 500:            }}
Line 501:          />
```

**Image**: `about-1.jpg`  
**Fallback**: `blog-1.jpg`  
**Purpose**: Visual support for FAQ  
**Size**: 192px min height  
**Position**: Right column on desktop  
**Note**: Has tips box below image (lines 502-506)

---

### 6️⃣ SEO CONTENT BLOCKS (Lines 520-550)

```typescript
Line 519:  {/* SEO Content Blocks */}
Line 520:  <div className="mx-auto max-w-6xl px-4 py-12">
Line 521:    <div className="space-y-6">
Line 522:      {contentBlocks.map((block) => (
Line 523:        <div key={block.id} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
Line 524:          <div className="grid md:grid-cols-3 gap-6 p-8">
Line 526:            {/* Image */}
Line 527:            <div className="md:col-span-1">
Line 528:              <img 
Line 529:                src={assetPath(`/assets/img/grid-${block.id}.jpg`)} 
Line 530:                alt={block.title}
Line 531:                className="w-full h-48 object-cover rounded-lg"
Line 532:                onError={(e) => {
Line 533:                  e.currentTarget.src = assetPath(`/assets/img/blog-${block.id}.jpg`);
Line 534:                }}
Line 535:              />
Line 536:            </div>
```

**Image**: `grid-${block.id}.jpg` (grid-1, grid-2, grid-3, grid-4.jpg)  
**Fallback**: `blog-${block.id}.jpg`  
**Purpose**: Content block illustration  
**Size**: 100% width, 192px height  
**Position**: Left column (md:col-span-1)  
**Blocks**:
- Block 1: بلیط اتوبوس
- Block 2: خریدن بلیط اتوبوس
- Block 3: بلیط اتوبوس VIP
- Block 4: بلیط اتوبوس ارزان

---

## 📊 Line Number Summary

| Section | Start Line | End Line | Image Count |
|---------|-----------|----------|------------|
| Hero | 130 | 175 | 1 |
| Marketing Cards | 275 | 310 | 3 |
| Bus Cards | 360 | 410 | 5 (+ fallback) |
| App Download | 440 | 470 | 1 |
| FAQ | 478 | 515 | 1 (+ fallback) |
| Content Blocks | 520 | 550 | 4 (+ fallbacks) |
| **TOTAL** | **130** | **550** | **15** |

---

## 🔍 Finding Images in Code

### Search Terms
```
Hero banner:           Line 135: banner-5.jpg
Marketing overlays:    Line 277, 292, 308: grid-1,2,3.jpg
Bus thumbnails:        Line 371: bus0${bus.id}.png
Bus fallback:          Line 375: bus01-6af3a02d.png
App mockup:            Line 459: app-mobile-travels-lg-34ce5db4.webp
FAQ image:             Line 495: about-1.jpg
FAQ fallback:          Line 499: blog-1.jpg
Content images:        Line 529: grid-${block.id}.jpg
Content fallback:      Line 533: blog-${block.id}.jpg
```

---

## 🛠️ How to Modify Images

### To Change Hero Image:
```typescript
Line 136: src={assetPath("/assets/img/banner-5.jpg")}
         // Change "banner-5.jpg" to your image name
```

### To Change Marketing Cards:
```typescript
Line 277: src={assetPath("/assets/img/grid-1.jpg")}  // Corporate
Line 292: src={assetPath("/assets/img/grid-2.jpg")}  // Installment
Line 308: src={assetPath("/assets/img/grid-3.jpg")}  // Visa
```

### To Change Bus Thumbnails:
```typescript
Line 371: src={assetPath(`/assets/img/bus0${bus.id}.png`)}
         // 0 = bus01, 1 = bus02, etc. (dynamically set)
```

### To Change App Image:
```typescript
Line 459: src={assetPath("/assets/img/app-mobile-travels-lg-34ce5db4.webp")}
         // Change filename to your app mockup
```

### To Change FAQ Image:
```typescript
Line 495: src={assetPath("/assets/img/about-1.jpg")}
         // Change to your FAQ support image
```

### To Change Content Block Images:
```typescript
Line 529: src={assetPath(`/assets/img/grid-${block.id}.jpg`)}
         // Automatically uses grid-1, grid-2, grid-3, grid-4
```

---

## ✅ Code Structure

Each image follows this pattern:

```tsx
<img 
  src={assetPath("/assets/img/filename.ext")} 
  alt="description"
  className="styling-classes"
  onError={(e) => {
    e.currentTarget.src = assetPath("/assets/img/fallback.ext");
  }}
/>
```

Components:
- **src**: Image path using `assetPath()` helper
- **alt**: Accessibility text
- **className**: Tailwind CSS styling
- **onError**: Fallback image if primary fails

---

## 📁 Asset Path Structure

All images use the `assetPath()` utility:
```typescript
// This function maps to: /public/assets/img/
assetPath("/assets/img/filename.ext")
```

**Important**: Always use relative path starting with `/assets/`

---

## 🔧 Debugging by Line

If image not showing:

1. **Hero (Line 135)**: Check `banner-5.jpg` exists
   ```bash
   # Verify:
   ls /public/assets/img/ | grep banner-5
   ```

2. **Marketing (Line 277-308)**: Check `grid-1.jpg`, `grid-2.jpg`, `grid-3.jpg`
   ```bash
   # Verify:
   ls /public/assets/img/ | grep grid-
   ```

3. **Bus (Line 371)**: Check `bus01.png` through `bus05.png`
   ```bash
   # Verify:
   ls /public/assets/img/ | grep bus0
   ```

4. **App (Line 459)**: Check `app-mobile-travels-lg-34ce5db4.webp`
   ```bash
   # Verify:
   ls /public/assets/img/ | grep app-mobile
   ```

5. **FAQ (Line 495)**: Check `about-1.jpg`
   ```bash
   # Verify:
   ls /public/assets/img/ | grep about-1
   ```

6. **Content (Line 529)**: Check `grid-1.jpg` through `grid-4.jpg`
   ```bash
   # Verify:
   ls /public/assets/img/ | grep grid-[1-4]
   ```

---

## 🚀 Quick Reference

| Feature | Line | Image | Type |
|---------|------|-------|------|
| Hero | 136 | banner-5.jpg | JPG |
| Marketing 1 | 277 | grid-1.jpg | JPG |
| Marketing 2 | 292 | grid-2.jpg | JPG |
| Marketing 3 | 308 | grid-3.jpg | JPG |
| Bus | 371 | bus0X.png | PNG |
| Bus FB | 375 | bus01-6af3a02d.png | PNG |
| App | 459 | app-mobile-*.webp | WebP |
| FAQ | 495 | about-1.jpg | JPG |
| FAQ FB | 499 | blog-1.jpg | JPG |
| Content | 529 | grid-X.jpg | JPG |
| Content FB | 533 | blog-X.jpg | JPG |

---

**Last Updated**: February 13, 2026  
**File**: frontend/src/app/bus/page.tsx  
**Total Lines**: 544  
**Image References**: 15  
**Status**: ✅ Complete
