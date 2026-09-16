# Feature Blueprint: Starter Core Architecture

**Version**: 1.0.0  
**Status**: Active  
**Author**: DannFlow AI Starter  
**Target Layer**: Full Stack (Service + Types + UI)

---

## 1. Objective
Establish the baseline Next.js 16 (App Router) foundation with strict AI steering rules, decoupled service layer, type contracts, and Shadcn/UI semantic tokens.

---

## 2. Structural Requirements

### 2.1 Services (`src/services/`)
- All database queries, API interactions, and business rules must be encapsulated in async functions.
- UI components must never import database drivers or call third-party APIs directly.

### 2.2 Types (`src/types/`)
- All data passed between services and UI must be typed.
- Prohibit `any` and unconstrained record objects.

### 2.3 Inspirations (`inspirations/`)
- Drop raw HTML, CSS snippets, React components, or screenshots into `inspirations/`.
- The AI agent inspects this folder and adapts existing references instead of building from scratch.

### 2.4 UI Semantics
- Use only semantic tokens:
  - Backgrounds: `bg-background`, `bg-card`, `bg-muted`, `bg-popover`, `bg-primary`, `bg-secondary`
  - Text: `text-foreground`, `text-card-foreground`, `text-muted-foreground`, `text-primary-foreground`
  - Borders: `border-border`, `border-input`
  - Rings: `ring-ring`
  - Feedback: `text-destructive`, `bg-destructive`

---

## 3. Implementation Checklist
- [x] Next.js 16 App Router runtime initialized
- [x] Tailwind CSS + PostCSS configured with semantic variable tokens
- [x] `components.json` and Shadcn UI primitives (`Button`, `Card`, `Badge`)
- [x] `src/services/starter.service.ts` created for asynchronous data logic
- [x] `src/types/index.ts` defined with strict types
- [x] `inspirations/` folder created and preserved in Git
- [x] `AGENTS.md` rules established
- [x] `README.md` configured with AI Studio copy prompt
