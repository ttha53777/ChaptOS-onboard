# CLAUDE.md — ChaptOS Landing Page

This is the **public marketing landing page** for ChaptOS. It is a standalone
Next.js site separate from the authenticated dashboard app. Read this file
before touching any code.

---

## What Is ChaptOS?

ChaptOS is an all-in-one operations dashboard built for **Greek and student
organizations** — fraternities, sororities, multicultural greek councils,
honor societies, student government bodies, and any chapter-based org that
runs on people, events, and accountability.

It started as the internal ops tool for Lambda Phi Epsilon (ΛΦΕ) and was
built to replace the spreadsheets, group chats, and scattered tools that most
organizations use to run day-to-day operations. The goal was a single place
where any org — regardless of size or structure — could run everything.

Everything lives in one place: members, attendance, dues, GPA, service hours,
deadlines, treasury, budget, events, social media content, and meeting notes —
plus a live activity feed and a weekly AI digest.

The flagship feature is **"Ask the Chapter"** — a tool-calling AI assistant
that answers questions about org state and can propose write actions
(e.g. "add a deadline for next Friday", "who has the worst attendance?").

### Who It's Built For

ChaptOS is designed for any student organization that manages:

- A recurring **member roster** with standing (active, new member, alumni)
- **Attendance requirements** tied to events or meetings
- **Dues and finances** collected and tracked per semester
- **Executive board or officer structure** with distinct responsibilities
- **A calendar** of mandatory and optional events
- **Social media presence** requiring content planning and posting cadence

This covers the full greek spectrum — IFC fraternities and sororities, NPHC
chapters, MGC/NMGC organizations, and professional or cultural greek-letter
orgs — as well as non-greek student orgs with similar operational needs like
student government associations, honor societies, and club sports.

---

## The App This Landing Page Is For

**Repo:** https://github.com/ttha53777/Lambdas-OPs-Dashboard  
**Stack:** Next.js 16 (App Router), TypeScript 6, React 19, Tailwind CSS 4,
Supabase (Auth + Postgres + Storage), Prisma 7, OpenAI gpt-4o

### Core Features of the Dashboard

| Feature | Description |
|---|---|
| Member Roster | Track every member: GPA, dues, service hours, attendance %, standing, and role |
| Attendance | Log mandatory events; approved excuses don't count against members |
| Dues Tracking | Mark dues paid/owed per member per semester |
| Treasury & Budget | Income/expense ledger with soft deletes; per-semester budget + allocations |
| Deadlines | Org-wide deadlines with owner assignment and status |
| Events & Social | Door revenue, expenses, headcount, theme per social event |
| Content Calendar | Social media content calendar with status (Urgent / Due Soon / Upcoming / Complete) |
| Meeting Notes | Free-form notes per calendar event with AI summarization |
| Weekly Digest | One-sentence AI recap of the week's deadlines, events, and at-risk members |
| Ask the Chapter | Tool-calling AI chat; 11 read tools + 5 write-proposal tools |
| Activity Log | Audit feed of every action across the org |

---

## Role-Based Access Control (RBAC)

ChaptOS ships with a flexible RBAC system. Every organization gets full control
over who can see what and who can do what — no one-size-fits-all permission
model.

### How It Works

Roles are defined at the **organization level**, not hardcoded into the app.
Each organization (chapter, club, team) configures its own role hierarchy and
maps permissions to those roles. A member's access is determined entirely by
the role assigned to their account within that org.

This means two different organizations running ChaptOS can have completely
different permission structures without any code changes.

### What Permissions Cover

Permissions are scoped to **resource + action** pairs. Any combination can be
toggled per role:

| Resource | Actions |
|---|---|
| Roster / Members | view, add, edit, remove |
| Attendance | view, record, approve excuses |
| Dues | view, mark paid, edit amounts |
| Treasury & Transactions | view, add income, add expense, delete |
| Budget & Allocations | view, edit |
| Deadlines | view, create, assign, close |
| Events & Calendar | view, create, edit, delete |
| Party Events | view, create, edit financials |
| Instagram / Content | view, create, update status |
| Meeting Notes | view, edit, summarize (AI) |
| AI Assistant | read queries, write proposals, confirm writes |
| Member Accounts | invite, link, deactivate |
| Org Settings | view, edit |

### Built-In Role Presets (Configurable)

ChaptOS comes with sensible defaults out of the box that any org can customize:

**Admin**
Full access to every resource and action. Typically the chapter president,
treasurer, or whoever manages the account. Can modify the role configuration
for the entire org.

**Officer**
Write access to their assigned domain (e.g. a VP of Finance gets treasury
write access; a VP of Membership gets roster write access) with read access
everywhere else. Which domains an Officer controls is configurable per org.

**Member**
Standard read access across the board. Can perform self-service actions:
log a service hour, submit an attendance excuse, update their own profile.
Cannot write to shared resources without elevated permissions.

**Observer**
Read-only access with zero footprint — hidden from all member listings,
headcounts, and attendance records. Useful for alumni, advisors, or
national org representatives who need visibility without being counted
as active members.

### Custom Roles

Orgs aren't limited to the presets. ChaptOS supports creating named custom
roles with a fully bespoke permission set. The names and permissions map to
whatever structure the org actually uses — not a generic template.

Greek org examples:
- **"Rush Chair"** — write access to the roster and events, no access to treasury
- **"Social Chair"** — full control over social events and content calendar, read-only elsewhere
- **"New Member"** — restricted read access, no write permissions until crossing a milestone
- **"Alumni Advisor"** — observer-level read access scoped only to finances and meeting notes

Non-greek student org examples:
- **"Committee Lead"** — write access to deadlines and events within their committee only
- **"Treasurer"** — full treasury and budget access, read-only on roster and attendance
- **"Secretary"** — write access to meeting notes and calendar, no financial access
- **"General Member"** — standard read access with self-service profile and excuse submission

### Why This Matters for the Landing Page

When describing RBAC on the landing page, frame it as a **selling point for
scalability and trust** — not just a settings screen. Copy angles to use:

- "Every chapter runs differently. ChaptOS lets you define exactly who can
  see and do what."
- "Fine-grained permissions mean your treasurer controls the books and
  nobody else touches them."
- "Add an alumni observer with a single toggle — they see everything,
  appear nowhere."
- "Custom roles grow with your org. Set up a Rush Chair role in minutes."

---

## Auth Model

Two-layer identity: Supabase manages Google OAuth sessions; a separate
member table holds org-specific data. A signed-in user has zero access until
their account is linked to a member row within an org. Admins pre-create rows;
new members claim theirs on first login by verifying their identity.

---

## AI Features

- **Ask the Chapter** — streaming SSE chat widget with a 10-iteration
  tool-call loop, parallel tool execution, schema-validated args, and
  write proposals that require user confirmation before touching the DB.
  AI write actions respect RBAC — the confirm step still hits the same
  API routes guarded by the same permission checks.
- **Weekly Digest** — cached one-sentence AI summary of the week.
- **Meeting Summarizer** — on-demand summary into Decisions / Action Items /
  Discussed sections; cached per content hash on the event row.
- **Eval Harness** — offline pass/fail harness grading tool selection, args,
  and final-answer substrings across hand-written cases.

---

## This Repo: The Landing Page

This is a **purely static/presentational** marketing site. No auth. No
database. No Prisma. No Supabase. No OpenAI calls.

### Goal

Sell ChaptOS to Greek and student organizations broadly — fraternities,
sororities, multicultural orgs, honor societies, student government — the same
way Origin Financial's homepage (useorigin.com) sells their app: clean
sections, strong copy, feature highlights, and a clear CTA to request access
or sign up.

The landing page should feel relevant to any chapter-based org, not just ΛΦΕ.
ΛΦΕ is the origin story, not the only audience. Lead with the universal pain
(scattered tools, no single source of truth) and let the org-specific copy
come in as examples.

### Design Direction

- **Dark theme** — deep navy or charcoal background, not black
- **Accent color** — gold (`#C9A84C` or similar) to reflect Lambda colors;
  white for body text
- **Typography** — distinctive display font for headlines; clean sans-serif
  for body; avoid Inter/Roboto/Arial
- **No purple gradients** — that's the generic AI-slop look; avoid it
- **Tone** — confident, org-aware, slightly bold; not corporate SaaS. Speak
  to exec board members and chapter presidents, not IT admins.

### Page Sections (in order)

1. **Navbar** — Logo ("ChaptOS"), nav links (Features, AI, Access), CTA button
2. **Hero** — Big headline, subheadline, primary CTA → request access
3. **Feature Grid** — Bento-style cards for each major feature area
4. **"Ask the Chapter" Showcase** — Mock chat UI showing the AI in action;
   this is the most impressive feature, give it prominence
5. **RBAC / Permissions Section** — Highlight the role system; use a visual
   like a permission matrix or role cards
6. **Stats / Social Proof** — e.g. "Track 30+ brothers · Log every event ·
   One dashboard for everything"
7. **How It Works** — 3-step: Admin sets up the chapter → Members join with
   Google → Roles assign automatically
8. **Footer CTA** — "Ready to run a tighter chapter?" + button
9. **Footer** — Links, tagline, mention of ΛΦΕ as founding org

### File Structure Convention

```
app/
  (marketing)/
    page.tsx          ← landing page (this is what we're building)
    layout.tsx        ← marketing-specific layout (no auth wrappers)
  components/
    marketing/        ← marketing-only components live here
public/
  logo.svg            ← ChaptOS logo (create a placeholder if missing)
```

### Do Not Touch

- `app/api/**` — all authenticated API routes
- `app/context/` — ChapterContext and any auth-gated state
- `lib/` — server-side utilities, Prisma, Supabase clients
- `proxy.ts` — middleware auth gate; update the matcher if needed so the
  marketing route is excluded, but don't break existing auth logic
- `prisma/` — database schema and migrations

### Middleware Note

`proxy.ts` currently auth-gates all routes. Before the landing page goes live,
the matcher must exclude the marketing path. Add something like:

```ts
export const config = {
  matcher: ['/((?!_next|static|favicon|marketing|auth|login).*)'],
};
```

---

## Copy Guidelines

The copy should speak to any Greek or student org exec board member — someone
who's currently managing their chapter out of a Google Sheets, group chat, and
a folder of PDFs. Lead with that pain, then show the solution.

- **Hero headline:** "Run your org. Not spreadsheets."
- **Hero sub:** "ChaptOS is the all-in-one operations platform for Greek and
  student organizations — manage members, attendance, dues, treasury, events,
  and more in one place."
- **Subtext under hero:** "Built for ΛΦΕ. Designed for every chapter."
- **AI section headline:** "Ask your org anything."
- **AI section sub:** "Our AI assistant answers questions about your org in
  seconds — and can propose actions you confirm before anything changes."
- **RBAC section headline:** "Your org, your rules."
- **RBAC section sub:** "Every organization runs differently. ChaptOS lets
  you define exactly who can see and do what — from Treasurer to Rush Chair
  to Alumni Advisor."
- **Footer CTA headline:** "Ready to run a tighter chapter?"
- **Footer tagline:** "ChaptOS — built by ΛΦΕ, for every org."

---

## Sample AI Chat Exchange (for the showcase mockup)

The mockup should feel like it could be from any org — use "Member" not
"Brother" so it reads universally.

```
Member:    Who has the worst attendance right now?
ChaptOS:   Marcus is at 61% — lowest in the chapter.
           He's missed 3 of the last 5 mandatory events.

Member:    How much have we spent on Social Events this semester?
ChaptOS:   $847 across 4 transactions. Your allocation for that
           category is $1,200, so you have $353 remaining.

Member:    Add a deadline: Risk Management form due next Friday.
ChaptOS:   I'll propose that — confirming: "Risk Management form"
           due Friday, May 30. Should I add it?
           [Confirm]  [Cancel]
```

---

## Commands

```bash
npm run dev       # start dev server
npm run build     # production build
npm run lint      # lint
```
