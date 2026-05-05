# SEO Setup Guide — Towfiqul Islam Portfolio

## ফাইলগুলো কোথায় রাখবেন

নিচের প্রতিটি ফাইল আপনার প্রজেক্টের নির্দিষ্ট জায়গায় **replace** করুন:

| এই ফাইলটি নিন            | এখানে রাখুন (আপনার প্রজেক্টে)                          |
|--------------------------|--------------------------------------------------------|
| `src/app/layout.js`      | `src/app/layout.js` → পুরনোটা replace করুন            |
| `src/app/page.jsx`       | `src/app/page.jsx` → পুরনোটা replace করুন             |
| `src/app/sitemap.js`     | `src/app/sitemap.js` → **নতুন ফাইল** (আগে ছিল না)    |
| `src/app/robots.js`      | `src/app/robots.js` → **নতুন ফাইল** (আগে ছিল না)     |
| `next.config.mjs`        | `next.config.mjs` → পুরনোটা replace করুন              |
| `src/app/navLinks/about/page.jsx`    | replace করুন |
| `src/app/navLinks/contact/page.jsx`  | replace করুন |
| `src/app/navLinks/education/page.jsx`| replace করুন |
| `src/app/navLinks/projects/page.jsx` | replace করুন |
| `src/app/navLinks/projects/layout.jsx` | **নতুন ফাইল** — এই ফোল্ডারে নতুন করে তৈরি করুন |
| `src/app/navLinks/skills/page.jsx`   | replace করুন |
| `src/app/navLinks/training/page.jsx` | replace করুন |

---

## ⚠️ গুরুত্বপূর্ণ — ৩টি কাজ করতেই হবে

### ১. আপনার আসল domain URL বসান

সব ফাইলে `https://towfiqul-islam.vercel.app` লেখা আছে।
এটি আপনার actual deployed URL দিয়ে replace করুন।

**যদি Vercel-এ deploy করেন** এবং URL ঠিক এটাই হয়, তাহলে কিছু করতে হবে না।

---

### ২. OG Image (og-image.png) তৈরি করুন

`public/` ফোল্ডারে **`og-image.png`** নামে একটি ছবি রাখুন।
- Size: **1200 × 630 px**
- এতে আপনার নাম, designation এবং একটি সুন্দর background দিন
- Canva দিয়ে সহজেই বানাতে পারবেন

এই ছবিটি Google, Facebook, LinkedIn-এ শেয়ার করলে দেখাবে।

---

### ৩. Google Search Console Verification

`src/app/layout.js` এ এই লাইনটি আছে:
```js
verification: {
  google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
},
```

**Steps:**
1. https://search.google.com/search-console → এ যান
2. আপনার site add করুন
3. HTML tag verification code টি copy করুন
4. `YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` এর জায়গায় বসান
5. Deploy করার পর Search Console থেকে verify করুন
6. তারপর Sitemap submit করুন: `https://your-domain.com/sitemap.xml`

---

## কী কী SEO করা হয়েছে

### ✅ Metadata (Title + Description)
প্রতিটি পেজে আলাদা আলাদা title ও description সেট করা হয়েছে।
Google "Towfiqul Islam" search করলে এগুলো দেখাবে।

### ✅ JSON-LD Structured Data (Homepage)
Google-কে clearly বলা হয়েছে:
- আপনার নাম: Towfiqul Islam
- আপনার পেশা: Full Stack MERN Developer
- আপনার skills, social links ইত্যাদি

এটি Google-এর rich result-এ আপনার নাম সরাসরি দেখাতে সাহায্য করে।

### ✅ Open Graph + Twitter Cards
Facebook, LinkedIn, X (Twitter)-এ শেয়ার করলে সুন্দর preview দেখাবে।

### ✅ Sitemap (sitemap.xml)
`/sitemap.xml` — Google কে সব পেজের লিস্ট দেওয়া হয়েছে।

### ✅ robots.txt
`/robots.txt` — Google কে বলা হয়েছে সব পেজ index করতে।

### ✅ Canonical URLs
Duplicate content problem এড়ানোর জন্য।

### ✅ Alt text উন্নত
About পেজে ছবির alt text: "Towfiqul Islam" → "Towfiqul Islam — MERN Stack Developer"

---

## GitHub & LinkedIn (Extra — খুব জরুরি)

Google ranking-এ backlink অনেক গুরুত্বপূর্ণ।

1. **GitHub profile** → Bio-তে আপনার portfolio URL যোগ করুন
2. **LinkedIn profile** → Website section-এ portfolio URL যোগ করুন
3. **README.md** → GitHub-এর main repo-তে portfolio link রাখুন

এই ৩টি করলে Google আপনার নাম search করলে portfolio অনেক দ্রুত উপরে আসবে।

---

## কতদিনে Google-এ দেখাবে?

| পদক্ষেপ | সময় |
|---------|------|
| Deploy + Search Console verify | ১-৩ দিন |
| Google index করবে | ৩-৭ দিন |
| "Towfiqul Islam" search-এ আসবে | ১-৪ সপ্তাহ |
| Top position পেতে | ১-৩ মাস |

> নাম দিয়ে search করলে সাধারণত অনেক দ্রুত rank হয়, কারণ competition কম থাকে।
