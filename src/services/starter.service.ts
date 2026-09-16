import type { FeatureBlueprint, StarterFeature, StarterMetric, StarterStatus } from '@/src/types';

/**
 * Starter Service
 * 
 * Handles all business logic, queries, and system status calculations.
 * UI components must consume data via this service layer rather than
 * implementing inline data operations.
 */

export async function getStarterFeatures(): Promise<StarterFeature[]> {
  // Simulating async resolution (e.g. database query or file resolution)
  return [
    {
      id: 'app-router',
      title: 'Next.js 16 App Router',
      description: 'Native Server Components by default with async/await data fetching pipelines.',
      category: 'core',
      status: 'active',
    },
    {
      id: 'shadcn-ui',
      title: 'Shadcn/UI Design Primitives',
      description: 'Strict semantic token enforcement (bg-background, text-foreground) with zero hardcoded colors.',
      category: 'ui',
      status: 'active',
    },
    {
      id: 'service-layer',
      title: 'Decoupled Service Layer',
      description: 'All business logic and database queries isolated strictly inside src/services/.',
      category: 'architecture',
      status: 'active',
    },
    {
      id: 'inspirations-vault',
      title: 'Inspirations Reference Vault',
      description: 'Root inspirations/ folder explicitly tracked in git for reference designs and components.',
      category: 'ai-steering',
      status: 'active',
    },
    {
      id: 'agents-steering',
      title: 'AGENTS.md Steering Rules',
      description: 'Deterministic guardrails for AI coding sessions, Vibe Coding, and DannFlow parity.',
      category: 'ai-steering',
      status: 'active',
    },
    {
      id: 'feature-blueprints',
      title: 'Feature Blueprints Registry',
      description: 'Spec-first blueprints stored in src/prompts/features/ before feature execution.',
      category: 'architecture',
      status: 'active',
    },
  ];
}

export async function getStarterMetrics(): Promise<StarterMetric[]> {
  return [
    {
      label: 'Next.js Version',
      value: '16.3',
      description: 'Latest App Router runtime',
    },
    {
      label: 'Rendering Model',
      value: 'RSC Default',
      description: 'Zero client bundle by default',
    },
    {
      label: 'UI System',
      value: 'Shadcn / Tailwind',
      description: 'Semantic CSS tokens only',
    },
    {
      label: 'Architecture',
      value: 'Vibe Decoupled',
      description: 'Services + Types + Blueprints',
    },
  ];
}

export async function getFeatureBlueprints(): Promise<FeatureBlueprint[]> {
  return [
    {
      id: 'blueprint-starter',
      name: 'Starter Architecture Blueprint',
      version: '1.0.0',
      summary: 'Initial starter blueprint demonstrating the Vibe Coding architecture contract.',
      architecturalLayer: 'service',
      targetPath: 'src/prompts/features/starter-blueprint.md',
    },
  ];
}

export async function getStarterStatus(): Promise<StarterStatus> {
  const [features, metrics, blueprints] = await Promise.all([
    getStarterFeatures(),
    getStarterMetrics(),
    getFeatureBlueprints(),
  ]);

  return {
    framework: 'Next.js 16 (App Router)',
    router: 'App Router (RSC)',
    mode: 'Vibe Coding & AI-Native',
    initialized: true,
    activeBlueprintsCount: blueprints.length,
    servicesReadyCount: 1,
    serverTimestamp: new Date().toISOString(),
    features,
    metrics,
  };
}
