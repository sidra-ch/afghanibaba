# 🖼️ Image Integration Verification Checklist

## ✅ Quick Verification Guide

Use this checklist to verify all images are displaying correctly on the bus page.

---

## 📍 Visual Checklist - Top to Bottom

### 1. Hero Section ✓
- [ ] Page loads without errors
- [ ] Yellow banner visible at top
- [ ] Heading text visible with white color
- [ ] Tab buttons appear on banner
- [ ] Search form visible and functional
- **Image**: `banner-5.jpg` with yellow overlay

---

### 2. Marketing Cards (3 Cards) ✓
- [ ] Three cards visible in a row (desktop) or stacked (mobile)
- [ ] Card 1 (Blue): 🏢 تراول کارپوریتی
- [ ] Card 2 (Green): 📅 سفر با اقساط  
- [ ] Card 3 (Purple): ✈️ ویزا تراول
- [ ] Text is readable despite background images
- **Images**: `grid-1.jpg`, `grid-2.jpg`, `grid-3.jpg` (20% opacity overlays)

---

### 3. Bus Search Results ✓
- [ ] Filters sidebar visible on left
- [ ] Bus list on right with multiple cards
- [ ] Each bus card has image on left (128×128px)
- [ ] Bus image shows company/bus type thumbnail
- [ ] Bus details visible: company, departure, duration, arrival, price
- [ ] "انتخاب" button visible and clickable
- **Images**: `bus01.png` through `bus05.png` (or fallback `bus01-6af3a02d.png`)

### Specific Bus Card Elements ✓
- [ ] Bus 1: Has bus image thumbnail
- [ ] Bus 2: Has bus image thumbnail
- [ ] Bus 3: Has bus image thumbnail
- [ ] Bus 4: Has bus image thumbnail
- [ ] Bus 5: Has bus image thumbnail
- [ ] Bus 6: Has bus image thumbnail

---

### 4. App Download Section ✓
- [ ] Dark background (slate gradient)
- [ ] Left side: "اپلیکیشن افغانی‌بابا" text
- [ ] Left side: Description paragraph
- [ ] Left side: Two buttons (Android + iOS)
- [ ] Right side: Mobile phone mockup image
- [ ] Image is visible and not broken
- **Image**: `app-mobile-travels-lg-34ce5db4.webp`

---

### 5. FAQ Section ✓
- [ ] FAQ title "سوالات متداول" visible
- [ ] Left side: 6 expandable FAQ items
- [ ] Right side: Image visible (192px height min)
- [ ] Right side: Yellow tips/info box below image
- [ ] Click on FAQ items to expand/collapse
- [ ] ChevronDown icon rotates on expand
- **Image**: `about-1.jpg` (fallback: `blog-1.jpg`)

### FAQ Items ✓
- [ ] Item 1: "آیا خریدن بلیط اتوبوس برای کودکان زیر ۲ سال اجباری است؟"
- [ ] Item 2: "چگونه بلیط اتوبوس را در افغانی‌بابا رزرو کنم؟"
- [ ] Item 3: "چگونه می‌توانم در مورد بلیط اتوبوس افغانی‌بابا اطلاع حاصل کنم؟"
- [ ] Item 4: "آیا می‌توان بعد از خریدن بلیط، صندلی را تغییر داد؟"
- [ ] Item 5: "چگونه می‌توانم بلیط اتوبوس را در افغانی‌بابا استرجاع کنم؟"
- [ ] Item 6: "وزن مجاز چمدان برای هر مسافر در سفر اتوبوس چقدر است؟"

---

### 6. SEO Content Blocks ✓
- [ ] Block 1: "بلیط اتوبوس" with image on left
- [ ] Block 1: Image is `grid-1.jpg`
- [ ] Block 1: Text description visible
- [ ] Block 1: "بیشتر بخوانید" button visible

- [ ] Block 2: "خریدن بلیط اتوبوس" with image on left
- [ ] Block 2: Image is `grid-2.jpg`
- [ ] Block 2: Text description visible
- [ ] Block 2: "بیشتر بخوانید" button visible

- [ ] Block 3: "بلیط اتوبوس VIP" with image on left
- [ ] Block 3: Image is `grid-3.jpg`
- [ ] Block 3: Text description visible
- [ ] Block 3: "بیشتر بخوانید" button visible

- [ ] Block 4: "بلیط اتوبوس ارزان" with image on left
- [ ] Block 4: Image is `grid-4.jpg`
- [ ] Block 4: Text description visible
- [ ] Block 4: "بیشتر بخوانید" button visible

---

### 7. Footer ✓
- [ ] Footer visible at bottom
- [ ] Company info and links
- [ ] City links section (Kabul to Herat, etc.)
- [ ] Contact phone: ۰۲۰ - ۲۵۰۰۰۰۰ (updated)
- [ ] Copyright text visible

---

## 📱 Responsive Testing

### Desktop (1200px+) ✓
- [ ] Hero banner full width
- [ ] Marketing cards in 3-column layout
- [ ] Bus cards horizontal layout (image + info)
- [ ] FAQ: 2-column (FAQ left, image right)
- [ ] Content blocks: 3-column (image left, content 2-column right)

### Tablet (768px-1024px) ✓
- [ ] Hero banner full width
- [ ] Marketing cards in 2-column layout
- [ ] Bus cards adapt / side-by-side
- [ ] FAQ: Stacked or 2-column
- [ ] Content blocks: Stacked or responsive

### Mobile (<768px) ✓
- [ ] Hero banner full width
- [ ] Marketing cards stacked vertically
- [ ] Bus cards: Image on top, info below
- [ ] FAQ: Stacked vertically
- [ ] Content blocks: Image on top, text below
- [ ] All text readable
- [ ] No horizontal scroll

---

## 🔍 Image Quality Checks

### Image Display ✓
- [ ] No broken image icons (🖼️)
- [ ] No 404 errors in console
- [ ] Images load within 2 seconds
- [ ] Images are crisp (not blurry)
- [ ] Colors are accurate (yellow, blue, green, purple)

### Image Dimensions ✓
- [ ] Hero image scales properly
- [ ] Marketing card images fit perfectly
- [ ] Bus thumbnails are square (128×128px)
- [ ] App mockup is appropriate size
- [ ] Content block images scale responsively
- [ ] No stretched or distorted images

### Image Overlays ✓
- [ ] Marketing card images have 20% opacity
- [ ] Text readable over images
- [ ] Gradient overlays visible where applied
- [ ] Rounded corners applied to images

---

## 🔧 Functionality Checks

### Interactive Elements ✓
- [ ] FAQ expand/collapse works
- [ ] Content block "بیشتر بخوانید" works
- [ ] Bus card buttons clickable
- [ ] Form inputs functional
- [ ] Tab switching works
- [ ] Filter sidebar functional

### Error Handling ✓
- [ ] If bus image missing, fallback appears
- [ ] If FAQ image missing, fallback appears
- [ ] Page doesn't break with missing images
- [ ] Console shows reasonable errors only

---

## 📊 Performance Checks

### Page Load ✓
- [ ] Page loads in < 3 seconds
- [ ] No layout shift while loading
- [ ] Lighthouse Performance > 80
- [ ] No excessive memory usage

### Browser Compatibility ✓
- [ ] Chrome: ✓ Works
- [ ] Firefox: ✓ Works
- [ ] Safari: ✓ Works
- [ ] Edge: ✓ Works
- [ ] Mobile Safari: ✓ Works
- [ ] Mobile Chrome: ✓ Works

---

## 🎨 Visual Design Checks

### Colors ✓
- [ ] Yellow (#FDB713) buttons prominent
- [ ] White text on dark backgrounds
- [ ] Blue gradient for corporate card
- [ ] Green gradient for installment card
- [ ] Purple gradient for visa card
- [ ] Dark theme for app section

### Layout ✓
- [ ] All sections properly aligned
- [ ] Consistent padding/margins
- [ ] Text alignment correct (RTL)
- [ ] Spacing looks balanced
- [ ] No overlapping elements

### Typography ✓
- [ ] Persian text displays correctly
- [ ] Font weights appropriate
- [ ] Text sizes readable
- [ ] Line heights good
- [ ] No text overflow

---

## 🔗 Link & Navigation Checks

### Internal Links ✓
- [ ] "جستجو" button works
- [ ] Bus "انتخاب" links to `/bus-info`
- [ ] Navbar links functional
- [ ] Footer links functional

### Image Paths ✓
- [ ] All image paths use `assetPath()`
- [ ] No hardcoded paths
- [ ] Fallback images configured
- [ ] Paths match actual files

---

## 📋 Final Verification

### Code Quality ✓
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] No console warnings
- [ ] All imports resolved
- [ ] No broken dependencies

### Assets ✓
- [ ] All images exist in `/public/assets/img/`
- [ ] No 404 errors for images
- [ ] File sizes reasonable
- [ ] No duplicate images

### Documentation ✓
- [ ] IMAGE_INTEGRATION_GUIDE.md exists
- [ ] IMAGE_PLACEMENT_MAP.md exists
- [ ] IMAGE_INTEGRATION_SUMMARY.md exists
- [ ] This checklist complete

---

## ✅ Sign-Off

**Date Checked**: _______________

**Checked By**: _______________

**All Items Verified**: _______________

**Status**: 
- [ ] ✅ PASS - All images displaying correctly
- [ ] ⚠️ PARTIAL - Some images missing fallbacks
- [ ] ❌ FAIL - Multiple issues found

**Notes**:
```
_________________________________________________
_________________________________________________
_________________________________________________
```

---

## 📞 If Issues Found

1. **Image not showing?**
   - Check file exists: `/public/assets/img/filename.ext`
   - Verify exact filename (case-sensitive)
   - Check browser console for 404

2. **Wrong image size?**
   - Upload larger version (2× or 3×)
   - Check CSS classes for sizing

3. **Performance slow?**
   - Optimize images (ImageOptim, TinyPNG)
   - Use WebP format where possible
   - Lazy-load images if needed

4. **Layout broken?**
   - Check responsive breakpoints
   - Verify grid classes
   - Test on actual device

---

**Last Updated**: February 13, 2026  
**Status**: Ready for Production ✅
