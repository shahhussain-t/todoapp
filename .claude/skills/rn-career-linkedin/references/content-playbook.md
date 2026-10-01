# Content Playbook — What a React Native Developer Should Post

Goal of posting while job hunting: **(1) prove you can do the job, (2) get on the radar of hiring managers/recruiters, (3) give your network a reason to refer you.** Technical posts from developers stand out on LinkedIn precisely because few developers post them.

## The 3 content lanes (pick these, stay in them ~60+ days)

| Lane | Share of posts | Purpose |
|---|---|---|
| **A. Teach (RN technical)** | ~50% | Proves skill; gets saved and shared |
| **B. Build in public (your projects/apps)** | ~30% | Proves you ship; gives recruiters something to click |
| **C. Career & lessons (job search, dev life, opinions)** | ~20% | Human connection; activates network for referrals |

## Post idea bank

### A. Teach — React Native technical
1. "5 things that made our RN app feel native" (haptics, gestures, Reanimated layout animations, blur, safe areas)
2. FlatList → FlashList/Legend List migration: before/after FPS with a screen recording
3. New Architecture explained in 6 slides (Bridge vs JSI, Fabric, TurboModules, Codegen) — carousel
4. "How I cut cold start by X%": Hermes, lazy screens, inline requires, fewer providers, image caching
5. Expo vs bare in 2026: config plugins, dev clients, prebuild, inline native modules — when you still need native code
6. Expo Router patterns: auth flows, protected routes, deep links, typed routes
7. State management decision tree: server state (TanStack Query) vs client state (Zustand/Redux Toolkit) vs local
8. Offline-first: MMKV/SQLite, sync queue, conflict resolution
9. Writing a native module (Swift/Kotlin) with Expo Modules API — the 20 lines that matter
10. EAS Build + EAS Update + OTA rollout strategy; staged rollouts and rollbacks
11. Debugging stories: memory leak from an un-removed listener; Android-only keyboard bug; iOS permission edge case
12. Testing pyramid for mobile: Jest + RNTL + Maestro/Detox — what to test where
13. Accessibility in RN: `accessibilityLabel`, roles, dynamic type, screen reader testing — with a demo
14. Animation breakdown: recreate a famous app's interaction (e.g., a card swipe) with Reanimated + Gesture Handler — video
15. Code review checklist for RN PRs (re-renders, keys, inline styles, image sizes, platform checks)
16. "React Native release X: what changes for your app" — timely posts when RN/Expo ship releases (Expo SDK 56, RN 0.8x) get relevance boosts
17. Common interview question + your crisp answer (e.g., "Why is my JS thread blocked and how do you find out?")
18. Tool tips: React Native DevTools, Flipper alternatives, Perfetto, Xcode Instruments, Android Studio profiler

### B. Build in public
1. Day 1 announcement: what you're building, why, the stack, who it's for
2. Weekly progress: screen recording of the new feature + one lesson
3. Architecture decision post: "I chose X over Y because…"
4. A bug that cost you a day + the fix
5. Shipping to App Store/Play Store: review rejection story, screenshots, ASO lessons
6. Metrics post: downloads, crash-free %, ratings, what users asked for
7. Open-source contribution: PR to a RN library, what you learned reading its code
8. Rebuilding a UI from a popular app (Dribbble/known app clone) — side-by-side video
9. "I added AI to my RN app" — on-device or API features (popular in 2026), with honest limits

### C. Career & lessons
1. Your journey: how you got into RN; what you'd tell yourself on day 1
2. Job-search transparency: numbers (applications/interviews/offers) + what changed results
3. Interview experience (no confidential details): question types, take-home, what you learned
4. "What I look for in a mobile team" / questions you ask interviewers
5. Opinion: Flutter vs RN, Expo vs bare, "Is RN still worth learning in 2026?" — back it with data (RN has many more LinkedIn job postings than Flutter in the US)
6. Lessons from a mentor/senior; appreciation post tagging them (they'll engage)
7. Meetups/conferences (React Native EU / App.js / local meetups) — photo + 3 takeaways
8. Celebrating others: share a teammate's or library author's work with your own insight added

## Templates

### Technical "how I fixed X" (text + screenshot or video)
```
[Hook: specific result] Our product list dropped frames on every scroll on Android.

[Context — 1–2 lines] 2,000 items, images, a mid-range Pixel. JS thread at 30 fps.

[What I tried / what worked — bullets]
• Measured first with React DevTools profiler → each cell re-rendered on scroll
• Memoized the row + stable callbacks with useCallback
• Swapped FlatList for FlashList and set estimatedItemSize
• Resized images server-side (they were 4x display size)

[Result with number] 30 → 58 fps. Memory down 35%.

[Lesson] Profile before you optimize — the biggest win was the images, not the list.

[Question] What's the sneakiest RN perf issue you've hit?

#reactnative #mobiledevelopment #performance
```

### Carousel outline (6–10 slides)
1. Title slide = the hook ("5 React Native performance fixes, ranked by impact")
2–8. One idea per slide: big title, 1 code snippet or diagram, 1-line takeaway
9. Summary/cheat-sheet slide (gets saved)
10. About you: "I'm X, React Native engineer. Follow for more mobile perf." + open-to-work line if relevant

### Build-in-public weekly update
```
Week 3 of building [App] in React Native.

Shipped: [feature] (video ↓)
Hardest part: [problem] — solved with [approach]
Numbers: [testers / downloads / crash-free / perf]
Next week: [goal]

Would you use this? What would you add?
```

### Job-search post (gets network to help — do it once, well)
```
I'm looking for my next React Native role.

What I bring:
• [X] years building iOS & Android apps in React Native + TypeScript
• Shipped [N] apps; [best number]
• Strong in [performance / animations / Expo + EAS / native modules]

Looking for: [title], [remote/location], [company type/domain].

Portfolio + resume in the comments.
If you know a team hiring mobile engineers, an intro would mean a lot. Reposts help too 🙏
```

## 30-day starter calendar (3 posts/week + daily commenting)

| Week | Mon/Tue | Wed/Thu | Fri |
|---|---|---|---|
| 1 | Intro/journey story (C) | "X things I learned shipping my first RN app" (A, text) | Build-in-public kickoff with screenshots (B) |
| 2 | Perf fix with before/after video (A) | Carousel: New Architecture in 6 slides (A) | Weekly build update (B) |
| 3 | Debugging story (A) | Opinion: Expo vs bare in 2026 (C/A) | Weekly build update + metric (B) |
| 4 | Carousel: RN interview Qs + answers (A) | Open-to-work post (C) | Shipping/store launch post (B) |

Repeat the cycle with new topics; review analytics monthly (impressions, profile views, followers from target companies, inbound DMs) and double down on whatever produced **profile views and recruiter messages**, not just likes.

## Commenting strategy (15–30 min/day)

- Follow 30–50 people: RN core team/maintainers, Expo, Software Mansion, Callstack, Infinite Red engineers, mobile leads at target companies, tech recruiters who hire mobile.
- Leave 3–5 comments/day of 15+ words that add something: a related experience, a counterpoint, a code tip, a question.
- Comment early on posts from bigger accounts — your comment gets seen by their audience.
- Never paste AI-generated generic comments.

## Hashtags & tagging

- 3–5 hashtags: #reactnative #mobiledevelopment #typescript #expo #iosdev #androiddev #javascript
- Tag people/companies only when they're genuinely relevant (a library you used, a mentor) — they're likely to engage.
