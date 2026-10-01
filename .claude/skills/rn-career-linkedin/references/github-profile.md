# GitHub Profile for Recruiters & Hiring Managers

Recruiters mostly look at **2–4 pinned repos with clean READMEs and live demos** — not the contribution graph. Technically literate reviewers skim code; everyone reads the README.

## Checklist

- **Photo + name + bio** matching LinkedIn: `React Native engineer · TypeScript · Expo · building fast mobile apps`.
- Location, website/portfolio, LinkedIn link, email (optional).
- **Profile README** (`username/username` repo), short:
  - 1 line: who you are and what you build
  - "Featured work": 2–4 projects with one-line impact + links (store / demo / repo)
  - Stack line (text, not 40 badges)
  - "Currently": learning/building + "Open to React Native roles" + contact
  - Skip: giant stat widgets, trophy walls, animated GIF banners, quotes
- **Pin 4–6 repos, best first** (most people only open the first one or two). Unpin old tutorials.
- Archive or make private broken/abandoned repos that hurt the impression.
- Real commit history (meaningful messages, small commits) — not one "initial commit" dump.

## Repo README template (case study)

```
# AppName — one-line value proposition
[App Store] [Play Store] [Demo video] [Expo link]

<screenshots / GIF row>

## Why
Problem + who it's for (2–3 lines)

## Features
- …

## Tech stack
React Native (New Architecture) · Expo SDK xx · Expo Router · TypeScript · TanStack Query · Zustand · Reanimated · Supabase · Sentry · EAS

## Architecture
Diagram + 3–5 bullets on key decisions and trade-offs

## Hard problems I solved
1. Offline sync conflicts — approach + result
2. 60fps list with 5K items — FlashList + memoization, before/after numbers

## Testing & CI
Jest + RNTL, Maestro flows, GitHub Actions + EAS Build

## Run locally
…

## What I'd do next
…
```

## Bonus signals
- Merged PRs to known RN libraries (react-native, expo, reanimated, react-navigation, etc.) — even docs/small fixes.
- Issues answered / reproductions provided in RN repos.
- A tiny npm package with real downloads.
