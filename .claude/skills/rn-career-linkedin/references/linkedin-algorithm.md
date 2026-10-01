# How the LinkedIn Feed Works (2026) — and What It Means for You

Caveat: LinkedIn doesn't publish weights. The numbers below come from 2026 practitioner studies and marketing analyses (see sources.md). Treat them as **directional**, not laws. The underlying principles have been stable for years.

## The model

In 2026 LinkedIn's feed ranking is driven by a large AI model widely referred to as **"360Brew"**. Instead of counting likes, it reads the post and the author's profile and asks roughly:
1. **Is the author credible on this topic?** (profile ↔ post alignment)
2. **Is this relevant to this viewer?** (their network, interests, past engagement)
3. **Do people engage deeply?** (dwell time, substantive comments, saves, shares)
4. **Is it consistent?** Authority builds after roughly **60 days of posting in the same 2–3 topics**.

Implication for a React Native developer: headline/About say "React Native / mobile", and ~80% of posts are about RN, mobile engineering, or your job-search journey *as a mobile dev*. Random motivational quotes or politics dilute reach.

## Signals, strongest first

| Signal | What it means | Do |
|---|---|---|
| **Dwell time** | ~30s+ of reading is a strong positive | Story-driven text, carousels (documents get the longest dwell), code walkthroughs |
| **Substantive comments** | Comments matter ~2x likes; 15+ word comments weigh much more than "Great post!" | End with a real question; reply to every comment within the first hour |
| **Saves & reposts with thoughts** | Signals "useful reference" | Checklists, cheat sheets, "how I fixed X" |
| **Early engagement ("golden hour")** | First 60–90 min decide wider distribution | Post when your audience is online; stay around to reply |
| **Profile-topic match** | Off-niche posts get structurally less reach | Stay in your lanes |

## What hurts reach

- **External links in the post body** (reported drops up to ~60%). Put the link in the first comment, or use a document/video instead and say "link in comments".
- **Posting twice within a few hours** — the second post cannibalizes the first. Max 1 per day.
- **Engagement pods / automated comments** — detected via reciprocal patterns; reported reach drops of 45–97% and possible restrictions. LinkedIn also added a "Seems like AI slop" report option.
- **Generic AI-sounding text** — down-ranked and ignored. Use specific numbers, screenshots, personal stories.
- **Editing within the first ~10 min**, tagging people who don't engage, hashtag stuffing (use 3–5 max), engagement bait ("comment YES").
- **Stock photos** perform worse than real photos/screenshots.

## Format ranking (for developers)

1. **Document/PDF carousel** (6–10 slides) — longest dwell; great for "5 RN performance fixes", architecture diagrams.
2. **Native video / screen recording** (30–90s) — perfect for mobile: show the animation, the before/after jank.
3. **Text + a real image** (screenshot, photo of you at a meetup, profiler trace).
4. **Text-only story** — strong if the hook is good.
5. **Polls** — cheap reach but low credibility; use rarely and with a real question.
6. **Articles/newsletters** — lower feed reach; good for SEO and Featured.

## Timing & frequency

- **3–5 posts/week, consistent**. Three posts every week beats seven in one week then silence.
- Best windows: **Tue–Thu, ~8–10 am and ~12–2 pm in your target audience's time zone** (if targeting US remote roles from another region, schedule for US morning).
- Spend **15–30 min/day commenting** on others' posts (RN core contributors, Expo/Software Mansion/Callstack engineers, mobile leads and recruiters at target companies). Do this especially in the 30 min before and after you post.

## Hooks (first ~200 chars before "see more")

Patterns that work:
1. **Specific counterintuitive claim:** "FlatList wasn't our performance problem. Our `keyExtractor` was."
2. **Specific number:** "Our Android cold start went from 4.1s to 1.9s. 5 changes, ranked by impact:"
3. **Challenge an assumption:** "You don't need to eject from Expo for native code anymore."
4. **Story with tension:** "Friday 6 pm. Crash rate 8%. The release was already at 100% rollout."
5. **Job-search honesty:** "I sent 120 applications as a React Native dev. 3 interviews. Then I changed one thing."

Formatting: hook on its own line, 1–2 line paragraphs, white space, simple bullets (•, →), no wall of text, 150–300 words for text posts (up to ~1,300 chars is fine if it's a story).
