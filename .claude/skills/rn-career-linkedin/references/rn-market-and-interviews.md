# React Native Market (2026) & Interview Prep

## Market snapshot (verify versions at time of use — they change fast)
- React Native has substantially more LinkedIn job postings than Flutter in the US, while demand for **production-grade** RN devs outpaces supply.
- The **New Architecture is mandatory**: legacy architecture removed (RN 0.82+/0.83, Expo SDK 55). Hermes is the default engine (Hermes V1 default in RN 0.84).
- Expo is the default way to start apps; Expo SDK 56 (May 2026) ships RN 0.85 + React 19.2; Expo Router forked React Navigation internals; inline native modules and Expo UI are new.
- ~90% of State of React Native survey respondents use RN professionally.
- Job posts increasingly assume React fundamentals and ask for: New Architecture (Fabric, TurboModules, JSI), Hermes + profiling, navigation & auth flows, Expo managed **and** bare/native knowledge, EAS Build/Submit/Update CI/CD, native module integration.
- Differentiators: native code (Swift/Kotlin), performance, animations, testing, release engineering, AI features in apps.

## Skills checklist by level

**Junior:** React + hooks, TypeScript basics, core components, Flexbox, navigation, API calls, forms, AsyncStorage/MMKV, Expo, publishing basics, Git.

**Mid:** state management (server vs client), lists performance (FlashList, memo), Reanimated basics, push notifications, deep links, auth, testing (Jest/RNTL), CI with EAS, Sentry, platform differences, accessibility.

**Senior:** New Architecture internals, native modules (Expo Modules API / TurboModules), profiling (Hermes profiler, Perfetto, Instruments), startup optimization, app architecture/monorepos, offline-first, OTA strategy & rollback, release management, security (secure storage, cert pinning, obfuscation), mentoring, cross-team product decisions.

## Common interview topics & crisp answer seeds

1. **Old bridge vs JSI/New Architecture?** Bridge: async JSON serialization across threads. JSI: C++ interface so JS holds references to native objects and calls them directly (sync possible). Fabric = new renderer (concurrent React features, synchronous layout when needed). TurboModules = lazily-loaded, type-safe native modules via Codegen.
2. **Threads in RN?** JS thread, UI/main thread, background (layout/Yoga in Fabric). Jank = JS thread blocked (or UI thread overloaded).
3. **Why is my list slow?** Re-renders, inline functions/objects, missing keys, heavy images, no `getItemLayout`/size estimates → FlashList, memo, image sizing/caching, profiler first.
4. **Reanimated vs Animated?** Reanimated worklets run on the UI thread → smooth even if JS is busy; shared values; gesture-driven animations with Gesture Handler.
5. **Startup optimization?** Hermes, fewer providers on boot, lazy screens, inline requires, defer non-critical work, smaller bundle, splash strategy, measure TTI.
6. **State management choice?** Server state → TanStack Query (caching, retries); global client state → Zustand/RTK; local → useState/useReducer. Avoid putting server data in Redux by default.
7. **Expo vs bare?** Expo (prebuild + config plugins + dev clients) covers almost everything now; custom native via Expo Modules; "ejecting" is rarely needed. Know EAS Build/Submit/Update.
8. **OTA updates — what can/can't be updated?** JS/assets yes; native code changes need a store release; runtime versions; staged rollout + rollback; store policy compliance.
9. **Security:** Keychain/Keystore (expo-secure-store), never store secrets in the bundle, cert pinning, jailbreak/root detection trade-offs, token refresh.
10. **Testing strategy:** unit (Jest), component (RNTL), E2E (Maestro/Detox) for critical flows; mock native modules.
11. **Memory leaks:** un-removed listeners/subscriptions, timers, large images, closures in long-lived stores; find via profilers.
12. **Platform differences:** permissions, keyboard handling, back button, shadows/elevation, fonts, safe areas.

## Practical rounds
- **Take-home / live build:** a small app (list + detail + search + API). Graders look for: TypeScript, clean folder structure, loading/error/empty states, tests, README with decisions & trade-offs, no over-engineering.
- **System design (mobile):** design a chat/feed/offline-notes app — cover data model, caching, sync, pagination, push, image pipeline, analytics, release strategy, observability.
- **Behavioral (STAR):** prepare 6 stories — hardest bug, perf win, conflict, failure/lesson, leadership/mentoring, shipping under deadline. Reuse your LinkedIn posts' stories.

## Questions to ask them
- How do you ship? (release cadence, OTA, QA process)
- Expo or bare? On New Architecture yet?
- How much native work does the team do?
- How is mobile performance measured and owned?
- What does success look like in the first 90 days?
