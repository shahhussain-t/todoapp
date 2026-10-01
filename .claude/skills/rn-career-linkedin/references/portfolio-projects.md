# Portfolio Projects for a React Native Job Search

Hiring managers want evidence you can **ship a production-quality mobile app**, not another tutorial clone. 2 polished, demo-able projects beat 10 half-finished ones.

## What makes an RN project "hireable"

- **Installable:** on App Store / Play Store, or at minimum a TestFlight / internal testing link, APK, or Expo dev link + a 60–90s demo video.
- **Real-world concerns handled:** auth, loading/empty/error states, offline behavior, deep links, push notifications, forms + validation, accessibility, dark mode, i18n.
- **Production engineering:** TypeScript strict, tests (unit + 1–2 E2E flows with Maestro/Detox), CI (GitHub Actions/EAS), error tracking (Sentry), analytics, OTA updates, env configs.
- **2026-relevant stack:** New Architecture (default now — legacy is removed in recent RN/Expo), Expo + Expo Router or React Navigation, EAS Build/Update, Reanimated, FlashList, TanStack Query, Zustand/RTK, MMKV/SQLite.
- **Case-study README:** problem → solution → architecture diagram → key decisions → challenges → results/metrics → screenshots/GIF → how to run.
- **At least one "hard thing":** a native module, a complex gesture/animation, offline sync, real-time, background tasks, performance work with measured results.

## Project ideas ranked by hiring signal

### Tier 1 — strongest signal
1. **Offline-first app with sync** (e.g., field notes / expense tracker / habit tracker): SQLite or WatermelonDB, background sync, conflict resolution, optimistic UI. Shows architecture thinking.
2. **Real-time app** (chat, live delivery tracker, collaborative list): WebSockets/Supabase Realtime/Firebase, push notifications, presence, image upload. Shows full-stack mobile.
3. **Native-capability app**: BLE / camera + ML (barcode, OCR) / health data / maps with geofencing / widgets. Write at least one custom Expo Module in Swift/Kotlin. Biggest differentiator — many RN devs can't go native.
4. **Domain clone with depth** in your target industry: fintech (charts, biometric login, secure storage), e-commerce (cart, Stripe, deep-linked product pages), health, travel. Pick the domain of the companies you're applying to.

### Tier 2 — good supporting pieces
5. **Animation/interaction showcase**: recreate 5 well-known app interactions with Reanimated + Gesture Handler; publish as a demo app + video series (great LinkedIn content).
6. **Performance case study**: take an open-source RN app, profile it, fix issues, document before/after numbers.
7. **Open-source contribution / library**: a small, useful RN library (hook, component, Expo config plugin) on npm, or merged PRs to popular RN libs.
8. **AI-powered feature app** (popular in 2026): voice notes → summaries, receipt scanning, on-device model — handle streaming, latency, cost, privacy honestly.

### Avoid as headline projects
- Todo/weather/calculator apps without a twist, tutorial copies, "Netflix clone" UI-only projects with no backend or tests.
  (A todo app can work *if* it's offline-first, synced, tested, and shipped — then it's tier 1.)

## Turning a project into job-search assets (reuse everything)

| Asset | Where it goes |
|---|---|
| Store link / demo video | LinkedIn Featured, resume Projects, GitHub README |
| Case-study README | GitHub pinned repo, linked from LinkedIn |
| 3–6 build-in-public posts | LinkedIn content lane B |
| 1 carousel on the hardest problem | LinkedIn lane A |
| 2 resume bullets with numbers | Resume |
| A 2-minute "walk me through it" story | Interviews (STAR format) |

## 6–8 week build plan (part-time)

- Week 1: scope (3 core features), designs (Figma or a UI kit), tech decisions doc, repo + CI + Sentry + EAS set up. Post: kickoff.
- Weeks 2–4: core features, tests as you go. Post weekly progress videos.
- Week 5: the "hard thing" (native module / offline sync / animation). Post: deep-dive.
- Week 6: polish — a11y, dark mode, error states, perf profiling. Post: perf before/after.
- Week 7: store submission, screenshots, privacy policy. Post: launch.
- Week 8: README case study, demo video, add to LinkedIn Featured + resume.
