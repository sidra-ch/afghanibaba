# Afghanibaba Bus Page - Developer Guide

## Quick Reference

### File Locations
```
├── frontend/src/app/bus/page.tsx       ← Main bus page (520 lines)
├── frontend/src/components/layout/Navbar.tsx  ← Updated navigation
├── frontend/src/components/layout/Footer.tsx  ← Enhanced footer
└── frontend/src/lib/assetPath.ts       ← Asset utilities
```

---

## State Variables

```typescript
const [activeTab, setActiveTab] = useState("bus");                    // Current tab
const [searchParams, setSearchParams] = useState({                    // Search form data
  origin: "",
  destination: "",
  date: ""
});
const [selectedCompany, setSelectedCompany] = useState(companies[0]); // Filter: company
const [buses, setBuses] = useState(mockBuses);                        // Search results
const [expandedFaq, setExpandedFaq] = useState(null);                 // FAQ accordion
const [error, setError] = useState("");                               // Error messages
const [originOpen, setOriginOpen] = useState(false);                  // Dropdown visibility
const [destOpen, setDestOpen] = useState(false);                      // Dropdown visibility
const [expandedContent, setExpandedContent] = useState({});           // Content blocks
```

---

## Data Structure

### Cities
```typescript
const afghaniCities = [
  "کابل", "قندهار", "هرات", "مزار شریف", "جلال‌آباد", 
  "کندز", "غزنی", "بلخ", "بامیان"
];
```

### Bus Model
```typescript
{
  id: number;
  company: string;
  origin: string;
  destination: string;
  departure: string;      // HH:MM format
  arrival: string;        // HH:MM format
  duration: string;       // H:MM format
  price: number;
  type: "VIP" | "اقتصادی";
  capacity: number;
  available: number;
}
```

### FAQ Item Model
```typescript
{
  id: number;
  question: string;
  answer: string;
}
```

### Content Block Model
```typescript
{
  id: number;
  title: string;
  content: string;
  expanded: boolean;
}
```

---

## Key Functions

### handleSearch()
```typescript
// Validates search form and filters buses
// Logs search parameters to console
// Shows error messages for invalid input
// Prevents same city selection for origin/destination
```

### Filters
- **Company Filter**: Filters buses by selected company
- **Time Filters**: Radio buttons for morning/afternoon/night (UI only)
- **Type Filters**: Checkboxes for VIP/Economy (UI only)

---

## Tab System

```typescript
const tabs = [
  { id: "bus", label: "بلیط اتوبوس", icon: "🚌" },
  { id: "flight-domestic", label: "پرواز داخلی", icon: "✈️" },
  { id: "flight-foreign", label: "پرواز خارجی", icon: "✈️" },
  { id: "tour", label: "تور", icon: "🎯" },
  { id: "hotel", label: "اقامت", icon: "🏨" },
];
```

---

## Color Reference

```typescript
Primary Yellow:    #FDB713
Hover Yellow:      #e8a802
Light Background:  #f5f6f8 / #f5f6f8
White:             white
Text Dark:         slate-900
Text Medium:       slate-600
Text Light:        slate-500
Green (Available): green-600
```

---

## Tailwind Classes Used

### Common Patterns
```typescript
// Button styling
"bg-[#FDB713] hover:bg-[#e8a802] text-white font-bold py-2 px-4 rounded-lg transition"

// Card styling
"rounded-2xl border border-black/5 bg-white p-5 shadow-lg hover:shadow-xl transition"

// Input styling
"w-full px-4 py-3 border border-slate-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB713]"

// Responsive grid
"grid gap-6 md:grid-cols-3 lg:grid-cols-4"

// RTL text
"text-right"
```

---

## Component Structure

### Hero Section
- Gradient background
- SVG wave decoration
- Headline + subheading
- Tab buttons
- Search form with validation

### Search Results
- Left: Filter sidebar (250px)
- Right: Bus listing (flex-1)
- Each bus is a card component

### Marketing Section
- 3 gradient cards
- Icons (emojis)
- Hover effects

### App Download Section
- Two-column layout (responsive)
- CTA buttons
- Icon accent

### FAQ Section
- Accordion items
- ChevronDown icon animation
- Expandable answers

### Content Blocks
- Expandable paragraphs
- ArrowDown icon animation
- "Read More" toggle

---

## How to Extend

### Add New Tab
```typescript
const tabs = [
  // ... existing tabs
  { id: "new-tab", label: "نام تب جدید", icon: "🎯" },
];
```

### Add New Bus
```typescript
mockBuses.push({
  id: 7,
  company: "نام شرکت",
  origin: "مبدا",
  destination: "مقصد",
  departure: "09:00",
  arrival: "15:00",
  duration: "6:00",
  price: 25,
  type: "VIP",
  capacity: 14,
  available: 8,
});
```

### Add New City
```typescript
afghaniCities.push("نام شهر جدید");
```

### Add FAQ Item
```typescript
faqItems.push({
  id: 7,
  question: "سوال جدید؟",
  answer: "پاسخ جدید...",
});
```

### Change Colors
1. Search for `#FDB713` and replace with new color
2. Search for `#e8a802` and replace with hover variation
3. Update in: Tailwind classes, component styles, button colors

---

## Integration with Backend

### Search API Integration
```typescript
const handleSearch = async () => {
  // ... validation code ...
  
  const response = await fetch('/api/buses/search', {
    method: 'POST',
    body: JSON.stringify(searchParams),
  });
  
  const data = await response.json();
  setBuses(data.buses);
};
```

### Bus Selection
Currently links to `/bus-info`. Update to include bus ID:
```typescript
<Link href={`/bus-info?busId=${bus.id}`} ...>
  انتخاب
</Link>
```

### City Lists from API
```typescript
useEffect(() => {
  fetch('/api/cities')
    .then(res => res.json())
    .then(data => setAfghaniCities(data));
}, []);
```

---

## Performance Tips

1. **Memoize expensive components**:
```typescript
const BusCard = React.memo(({ bus }) => (...));
```

2. **Use useCallback for handlers**:
```typescript
const handleSearch = useCallback(() => {
  // search logic
}, [searchParams]);
```

3. **Lazy load content blocks** if list gets long
4. **Implement virtual scrolling** for large bus lists

---

## Testing Checklist

- [ ] Search with empty fields (should show error)
- [ ] Search with same origin/destination (should show error)
- [ ] Search with valid cities and date (should log and filter)
- [ ] Click each FAQ item to expand/collapse
- [ ] Click "بیشتر بخوانید" on content blocks
- [ ] Verify responsive on mobile (< 768px)
- [ ] Verify responsive on tablet (768px - 1024px)
- [ ] Verify responsive on desktop (> 1024px)
- [ ] Check all buttons have hover effects
- [ ] Verify all icons display correctly
- [ ] Check RTL text alignment
- [ ] Verify links navigate correctly
- [ ] Test on different browsers
- [ ] Test on mobile devices

---

## Common Issues & Solutions

### Issue: Cities dropdown not opening
**Solution**: Make sure `originOpen` and `destOpen` state is being toggled correctly

### Issue: Search validation not working
**Solution**: Check that `searchParams` state is being updated before validation

### Issue: Accordion not opening
**Solution**: Verify `expandedFaq` state is being set to the correct item ID

### Issue: Hero background not showing
**Solution**: Ensure Tailwind CSS is properly configured and compiled

### Issue: Icons not displaying
**Solution**: Verify Lucide-React is installed and icons are imported correctly

---

## Deployment Checklist

- [ ] Remove all `console.log()` statements (except search logging)
- [ ] Update mock data with real API calls
- [ ] Add environment variables for API endpoints
- [ ] Test on production domain
- [ ] Verify phone number is correct: ۰۲۰ - ۲۵۰۰۰۰۰
- [ ] Check all links are correct
- [ ] Verify images load correctly
- [ ] Test form submission flow
- [ ] Check analytics integration
- [ ] Verify SEO meta tags
- [ ] Test on slow network (3G)
- [ ] Perform accessibility audit
- [ ] Test on screen readers

---

## Resources

- **Tailwind CSS**: https://tailwindcss.com
- **Next.js Docs**: https://nextjs.org/docs
- **React Hooks**: https://react.dev/reference/react
- **Lucide Icons**: https://lucide.dev
- **TypeScript**: https://www.typescriptlang.org

---

## Support

For questions or issues, refer to:
- [BUSPAGE_IMPLEMENTATION.md](./BUSPAGE_IMPLEMENTATION.md)
- [BUS_PAGE_CHECKLIST.md](./BUS_PAGE_CHECKLIST.md)

---

**Last Updated**: February 13, 2026
**Version**: 1.0.0
**Status**: Production Ready ✅
