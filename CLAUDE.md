# WiseWorkout — Claude Code Instructions

## Project overview

This is the UI mockup project for WiseWorkout, a mobile fitness app
(FYP-26-S2-15, CSIT321, SIM-UOW). All screens are standalone HTML files
simulating an iPhone 14 Pro (390x844px). The 7 existing screens in this
folder are the source of truth for all design decisions.

## Critical rule

NEVER invent new colours, fonts, card styles, or layout patterns.
ALWAYS read an existing HTML file first and copy its exact CSS before
building any new screen. The existing files are the design system.

## File naming convention

All screen files: `S-XX-ScreenName.html`
Admin screens: `A-XX-ScreenName.html`
Business partner screens: `S-37/38/39` (same S prefix, they are screens S37–S39)
Prototype navigator: `index.html` in root folder

## Colour system (exact hex values — do not deviate)

- Page background: #F7F8FF
- Card surface: #FFFFFF
- Elevated card: #EEF0FB
- Primary periwinkle blue: #6C7EE8 (buttons, active nav, rings, charts)
- Primary dark: #2D3A8C (headings)
- Lavender base: #9B84E8 (WiseCoach avatar, accents)
- Lavender background: #F0EEFE (WiseCoach cards, chat bubbles)
- Lavender text: #7B5CB8 (WiseCoach labels)
- WiseCoach body text: #5B3F9E
- Teal base: #4BB8CC (streaks, badges, achievements, cardio)
- Teal background: #E0F4F8
- Body text: #3D3D5C
- Secondary text: #8A8A9E
- Border: #C8C8D8
- Light fill: #E6EAFE (selected chips, ring track)

## Phone frame spec

- Outer shell: width 390px height 844px, background #0A0A12
- Inner screen: background #F7F8FF, border-radius 44px
- Dynamic island: 118x33px centred at top
- Status bar: 9:41, signal bars, battery icon

## Bottom navigation bar (5 tabs)

Tabs in order: "Bottom nav now has 5 tabs: Home(house icon) / Plans(dumbbell icon) / Coach (star icon)/ Club (Group icon)/ Progress(bar chart icon). Profile is no longer a tab — it is a modal overlay accessed by tapping the avatar in the top bar."

- Active tab: icon + label in #6C7EE8
- Inactive: icon + label in #8A8A9E
- Background: white, top border 0.5px #E8EAF8
- Height: 84px including safe area padding

## Card specs

- Border radius: 16px
- Border: 0.5px solid #C8C8D8
- Background: #FFFFFF
- Shadow: 0 2px 8px rgba(45,58,140,0.06)

## WiseCoach card spec

- Background: #F0EEFE
- Left accent bar: 3px solid #9B84E8
- Avatar: 28px circle #9B84E8, white sparkle/plus icon
- Label: 'WiseCoach' #7B5CB8 bold 12px
- Message text: #5B3F9E 14px line-height 1.6

## Button spec

- Primary: background #6C7EE8, white text, border-radius 14px,
  height 52px, full width
- Outline: white background, #6C7EE8 border and text, same radius
- Disabled: #C8C8D8 background, #8A8A9E text

## Status pills

- Completed: #E0F4F8 background, #1A7A8C text
- Today/Active: #E6EAFE background, #2D3A8C text
- Upcoming: #F2F2F7 background, #8A8A9E text

## Complete screen inventory — all 47 screens

### Batch 1 — Auth and onboarding start (S00–S05)

| ID  | File                             | Route                   |
| --- | -------------------------------- | ----------------------- |
| S00 | S-00-Splash.html                 | /splash                 |
| S01 | S-01-Onboarding-Walkthrough.html | /welcome                |
| S02 | S-02-Login.html                  | /login                  |
| S03 | S-03-Register.html               | /register               |
| S04 | S-04-Password-Reset.html         | /forgot-password        |
| S05 | S-05-Onboarding-Body-Health.html | /onboarding/body-health |

### Batch 2 — Onboarding completion and Home (S06–S09)

| ID  | File                             | Route                   |
| --- | -------------------------------- | ----------------------- |
| S06 | S-06-Onboarding-Goals.html       | /onboarding/goals       |
| S07 | S-07-Onboarding-Plan-Result.html | /onboarding/plan-result |
| S08 | S-08-Health-Declaration.html     | /health-declaration     |
| S09 | S-09-Home.html                   | /tabs/home              |

### Batch 3 — Plans hub and plan management (S10–S16)

| ID  | File                            | Route           |
| --- | ------------------------------- | --------------- |
| S10 | S-10-Plans-Hub.html             | /tabs/plans     |
| S11 | S-11-Build-Custom-Routine.html  | /plans/build    |
| S12 | S-12-Explore-Plan-Catalog.html  | /plans/explore  |
| S13 | S-13-Plan-Detail.html           | /plans/:planId  |
| S14 | S-14-Plan-Match.html            | /plans/match    |
| S15 | S-15-My-Plans-Library.html      | /plans/my-plans |
| S16 | S-16-Tracked-Plan-Schedule.html | /plans/tracked  |

### Batch 4 — Gym and cardio sessions (S17–S24)

| ID  | File                              | Route                   |
| --- | --------------------------------- | ----------------------- |
| S17 | S-17-Gym-Session-Active.html      | /session/gym/:id        |
| S18 | S-18-Exercise-Demo.html           | /exercise/:id           |
| S19 | S-19-Post-Gym-Summary.html        | /session/gym/summary    |
| S20 | S-20-Cardio-Setup.html            | /session/cardio/setup   |
| S21 | S-21-Live-Outdoor-GPS-Cardio.html | /session/cardio/live    |
| S22 | S-22-Indoor-Cardio-Logging.html   | /session/cardio/indoor  |
| S23 | S-23-Post-Cardio-Summary.html     | /session/cardio/summary |
| S24 | S-24-Manual-Activity-Log.html     | /manual-log             |

### Batch 5 — Coach tab (S25–S27)

| ID  | File                           | Route                    |
| --- | ------------------------------ | ------------------------ |
| S25 | S-25-Coach-Chat.html           | /tabs/coach              |
| S26 | S-26-Find-A-Professional.html  | /coach/professionals     |
| S27 | S-27-Professional-Profile.html | /coach/professionals/:id |

### Batch 6 — Club tab (S28–S31)

| ID  | File                             | Route                  |
| --- | -------------------------------- | ---------------------- |
| S28 | S-28-Club-Tab.html               | /tabs/club             |
| S29 | S-29-Add-Friends.html            | /club/add-friends      |
| S30 | S-30-Challenge-Detail.html       | /club/challenges/:id   |
| S31 | S-31-Create-Squad-Challenge.html | /club/create-challenge |

### Batch 7 — Progress tab and profile (S32–S36)

| ID  | File                              | Route                    |
| --- | --------------------------------- | ------------------------ |
| S32 | S-32-Progress-Tab.html            | /tabs/progress           |
| S33 | S-33-Activity-Detail.html         | /progress/activity/:id   |
| S34 | S-34-Profile-Overlay.html         | /profile                 |
| S35 | S-35-Settings.html                | /settings                |
| S36 | S-36-Health-Profile-Settings.html | /settings/health-profile |

### Batch 8 — Business partner (S37–S39)

| ID  | File                            | Route                  |
| --- | ------------------------------- | ---------------------- |
| S37 | S-37-BP-Registration.html       | /professional/register |
| S38 | S-38-BP-Status.html             | /professional/status   |
| S39 | S-39-BP-Profile-Management.html | /professional/profile  |

### Batch 9 — Admin web dashboard (A01–A07)

| ID  | File                       | Route                    |
| --- | -------------------------- | ------------------------ |
| A01 | A-01-Admin-Login.html      | /admin/login             |
| A02 | A-02-Admin-Dashboard.html  | /admin                   |
| A03 | A-03-Admin-Users.html      | /admin/users             |
| A04 | A-04-Admin-BP-Queue.html   | /admin/business-partners |
| A05 | A-05-Admin-Content.html    | /admin/content           |
| A06 | A-06-Admin-Challenges.html | /admin/challenges        |
| A07 | A-07-Admin-Analytics.html  | /admin/analytics         |

### Final

- index.html — prototype navigator linking all 47 screens, organised by batch

## Admin dashboard note

A-XX screens are DESKTOP web layout — NOT mobile phone frames.
Full-width 1440px canvas, left sidebar 240px, main content area.
Same colour palette applies.

## New design system additions (vs previous brief)

### Premium gold colour

- #F59E0B — premium badges, upgrade prompts, Upgrade button background

### Premium gate component

Bottom sheet triggered when Free user taps a Premium feature. Contains:
gold crown icon, feature name bold, 1-line value prop, Upgrade button #F59E0B,
'Continue free' text link.

### Free quota banner

Slim banner above WiseCoach input bar for Free users:
'X messages remaining this month. Upgrade for unlimited.' + Upgrade link right-aligned.
Hidden when user is Premium.

## Navigation connection map (key flows)

Auth: S00→S01→S02/S03→S05→S06→S07→S08/S09
Home S09: avatar→S34 | '+' FAB→S24 | WiseCoach card→S25 | Start→S17/S20
Plans S10: Build→S11 | Explore→S12 | Match→S14 | Schedule→S16 | Start→S17/S20
Session: S17→S18→S17 | S17→S19→S09 | S20→S21→S23→S09 | S20→S22→S23→S09
Coach S25: →S26→S27
Club S28: →S29 | →S30 | →S31
Progress S32: Activities→S33 | Weight→sheet
Profile S34: slides up from any tab avatar tap | →S35→S36 | Logout→S02
BP: S02→S37→S38→S39
Admin: A01→A02→A03/A04/A05/A06/A07

## Reference documents

- WiseWorkout_Updated_Design_Brief.pdf — full 47-screen specs (current source of truth)
- Project_Proposal.pdf — feature details and requirements

REVISED UX RULES (from Hevy/NRC/Strava research — apply to all relevant screens): ONBOARDING: Three steps only. Step 1 = health connection FIRST then body fields. Step 2 = 8 questions one per screen with large selectable cards. Step 3 = permission priming cards. No plan setup in onboarding — deferred to Plans tab. ROUTINE BUILDER S11: Exact Hevy model — single scrollable screen, exercise cards with drag handle + thumbnail + 5-column set table (SET/PREV/KG/REPS/tick) + rest timer pill + 3-dot menu. INFO button on every exercise opens Exercise Detail Sheet modal. + Add Cardio footer button opens cardio modal with activity type, optional target, effort level. EXPLORE S12:
Filter bar first (Level/Goal/Equipment/Sport), Featured 3-card scroll, Gym and Running category sections, Plan cards show coach/source name + brief description. Plan Detail S13 has 11 NRC sections. CARDIO RECORDING: S20 opens as BOTTOM SHEET. Last activity pre-selected. Settings row below cards. Countdown on START tap. S23b Save Activity screen before post-summary — auto-title, effort, privacy. CHALLENGES S28/S30/S31: Badge artwork as hero on ALL challenge cards. S30 detail = NRC 11 sections. S31 Create Challenge = 7 steps, 4 goal types, multi-activity chips, privacy toggle, auto-squad at 3+ participants. PROGRESS S32: Three big bar charts (calories/cardio/gym each with toggle buttons) then 8 collapsible sections in Hevy toggle pattern (muscle donut, strength level, per-exercise chart, best
efforts, HR trend, calendar, body measurements, badges).
