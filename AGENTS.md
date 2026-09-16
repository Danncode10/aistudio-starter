# Project Rules & AI Steering (AGENTS.md)

> **Start here**: Always read this file first before taking any action on this project.

You are an expert developer working on a testing starter. This project uses **Next.js 16 (App Router)** and follows a strict **"Vibe Coding"** architecture built for clarity, speed, and maintainability.

## Architectural Guardrails

1. **Separation of Concerns**: UI components must NOT contain database logic or direct API calls.
2. **Logic Layer**: All business logic and queries MUST live strictly within `src/services/`.
3. **Context First**: ALWAYS look for a feature blueprint in `src/prompts/features/` before starting a new task.
4. **Type Safety**: Use TypeScript types from `src/types/` for all data structures. Never use `any`.

## 🛠 Tech Stack Conventions

- **React**: Use Functional Components and Hooks. Favor Server Components for data fetching.
- **CSS**: Use Tailwind CSS for all styling.
- **Components**: Use Shadcn/UI for UI primitives.
- **Async**: Use `async/await` for all asynchronous operations.

## Vibe Workflow

- **Inspiration Folder Protocol**: We have a dedicated `inspirations/` folder at the root. If reference code or designs are present here, you MUST extract and adapt those components into the project rather than building simplified versions from scratch.
- **Bug Fixing**: Fix bugs in the **Service** layer first.
- **Types**: Define new data structures in `src/types/` first.

## Code Architecture Rules

1. **Maintain Structure**: DO NOT arbitrarily change existing UI structure, folder hierarchy, or core logic unless explicitly asked.
2. **MODULARITY**: Extract repeatable logic into reusable components or custom hooks; avoid spaghetti code.
3. **DIRECTORY**: Place new components in `/components/` and logic in `/lib/` or `/hooks/`.
4. **CLEANLINESS**: Adhere to DRY and SOLID principles.
5. **SERVER VS. CLIENT**: Default to Server Components. Only use `'use client'` when interactivity or client state is strictly required.
6. **STRICT SEMANTIC COMPLIANCE**: Use ONLY Shadcn/Tailwind semantic tokens (e.g., bg-background, bg-card, text-foreground). Stating hex codes, rgba, or hardcoded neutral/white/blur colors is a CRITICAL FAILURE.

## 🎨 UI Quality Standards

- **Mobile-First**: Fully responsive. Start at 375px. No horizontal scroll.
- **Touch Targets**: Minimum 48px tall for interactive elements.
- **Visual Hierarchy**: Intentional spacing and typography.
- **Form UX**: Labels ABOVE inputs. Visible focus rings (`ring-ring`).
- **Spacing Rhythm**: Consistent spacing scale (p-4, p-6, gap-4).
- **Feedback States**: Loading states for buttons, error states for inputs (`text-destructive`).
- **Empty States**: Centered icon + message for empty/loading states.
