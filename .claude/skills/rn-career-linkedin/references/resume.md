# Resume / CV — React Native Developer (ATS-safe)

## Format rules (parsers like Workday, Taleo, Greenhouse, Lever)

- **Single column**, no tables, text boxes, icons, skill bars, or photos (unless region-specific norm, e.g. parts of EU/Middle East — and even then optional).
- Standard headings: `Summary`, `Experience`, `Projects`, `Skills`, `Education`.
- Simple bullets (• or -), standard fonts, 10–11pt, 0.5–0.75" margins.
- **1 page** for < 5–7 years; **2 pages** max for senior.
- Export as PDF (text-based, not image). Name it `Firstname-Lastname-React-Native-Engineer.pdf`.
- Dates as `Mar 2023 – Present`. Location / "Remote".
- Header: Name · Title (`React Native Engineer`) · email · phone · city/remote · LinkedIn · GitHub · portfolio/app links.

## Keyword strategy

- **Mirror the job post's exact phrasing** ("React Native" not just "RN"; "TypeScript"; "CI/CD"; "unit testing"). ATS matching is often literal.
- Every important tech must appear **in an experience bullet**, not only in Skills.
- Tailor per application: swap 3–5 bullets and the summary to match the posting. Keep a master resume with all bullets.

## Summary (2–3 lines)

`React Native engineer with 4 years shipping iOS and Android apps in TypeScript. Built and maintained 5 production apps (1M+ total downloads); specialize in performance, animations, and Expo/EAS release pipelines. Looking for a senior mobile role on a product team.`

## Bullet formula

**Action verb + what + how (tech) + result (number)**. Aim for metrics in 60–70%+ of bullets. Lead each role with the strongest bullet.

Metric ideas for mobile:
- Performance: cold start time, TTI, FPS, JS thread time, memory, bundle/APK/IPA size
- Quality: crash-free sessions/users %, ANR rate, bug count, test coverage
- Delivery: release cadence, build time, PR cycle time, OTA hotfix time
- Business: downloads, MAU/DAU, ratings (3.9 → 4.6), conversion, retention, revenue
- Scope: # screens, # apps, # users, team size, # engineers mentored

Strong verbs: Built, Shipped, Launched, Migrated, Rebuilt, Reduced, Cut, Increased, Automated, Led, Designed, Architected, Integrated, Optimized, Mentored, Owned.

Example bullets:
- `Shipped a cross-platform banking app in React Native + TypeScript used by 120K customers; 4.7★ App Store rating.`
- `Migrated to the New Architecture and Hermes; cold start −38% and JS bundle −22%.`
- `Built Expo Modules (Swift/Kotlin) for biometric auth and secure storage, replacing 2 unmaintained libraries.`
- `Automated builds with EAS Build + GitHub Actions; release time from 2 days to 2 hours, weekly releases.`
- `Introduced Maestro E2E tests for 12 critical flows; production regressions −60% over two quarters.`
- `Implemented offline-first sync with SQLite + background fetch; checkout success on poor networks +18%.`
- `Mentored 3 junior developers; wrote the team's RN performance guidelines.`

Avoid: "Responsible for…", "Worked on…", "Helped with…", skill-percentage bars, long tech lists per bullet.

## Skills section (grouped, no ratings)

```
Mobile: React Native (New Architecture), Expo, EAS Build/Update, React Navigation, Expo Router, Reanimated, Gesture Handler
Languages: TypeScript, JavaScript, Swift (basic), Kotlin (basic)
State/Data: Redux Toolkit, Zustand, TanStack Query, GraphQL (Apollo), REST, MMKV, SQLite
Testing: Jest, React Native Testing Library, Maestro, Detox
Tooling: Git, GitHub Actions, Fastlane, Sentry, Firebase (Crashlytics, Analytics, FCM), App Store Connect, Google Play Console
```

## Projects section (essential for juniors / career switchers)

`AppName — React Native, Expo, Supabase | [App Store] [Play Store] [GitHub]`
- 1–2 bullets: what it does + the hardest technical thing + a number (users, rating, perf).

## Tailoring workflow (what to do when the user pastes a job post)

1. Extract: must-have skills, nice-to-haves, seniority signals, domain, exact title wording.
2. Produce a **match table**: keyword → where it appears in the resume → missing?
3. Rewrite summary with the exact title and top 3 requirements.
4. Reorder/rewrite bullets so the top 2 bullets of the latest role hit the top 2 requirements.
5. Add missing keywords only where truthful.
6. Output: tailored resume + a 3–4 sentence cover note/intro message.

## Common mistakes to flag
- No app/store links on a mobile resume (huge miss — hiring managers want to tap your app).
- Listing every library ever touched.
- No numbers.
- Generic objective statement.
- Inconsistent dates/tense; typos.
- Multi-column Canva templates that ATS scramble.
