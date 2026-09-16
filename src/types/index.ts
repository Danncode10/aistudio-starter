/**
 * Core type definitions for the Next.js 16 Starter
 * strictly enforced across the Vibe Coding architecture.
 */

export interface StarterFeature {
  id: string;
  title: string;
  description: string;
  category: 'core' | 'architecture' | 'ai-steering' | 'ui';
  status: 'active' | 'ready' | 'planned';
}

export interface FeatureBlueprint {
  id: string;
  name: string;
  version: string;
  summary: string;
  architecturalLayer: 'service' | 'ui' | 'prompt';
  targetPath: string;
}

export interface StarterMetric {
  label: string;
  value: string | number;
  description: string;
}

export interface StarterStatus {
  framework: string;
  router: string;
  mode: string;
  initialized: boolean;
  activeBlueprintsCount: number;
  servicesReadyCount: number;
  serverTimestamp: string;
  features: StarterFeature[];
  metrics: StarterMetric[];
}
