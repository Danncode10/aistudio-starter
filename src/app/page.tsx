import Link from "next/link";
import { 
  FolderGit2, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  FileCode, 
  Terminal, 
  ArrowRight,
  Database,
  Compass
} from "lucide-react";
import { getStarterStatus } from "@/src/services/starter.service";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { CopyPromptButton } from "@/src/components/copy-prompt-button";

export default async function HomePage() {
  const status = await getStarterStatus();

  const starterPrompt = `Please clone the repository [INSERT_YOUR_GITHUB_REPO_URL_HERE].
Once cloned, run rm -rf .git in the root directory so we start with a brand new git repository. 
Review the folder structure, read the rules in AGENTS.md, and let me know when you are ready to begin coding.`;

  return (
    <main className="min-h-screen bg-background text-foreground p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <header className="space-y-4 border-b border-border pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  Next.js 16 App Router
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Vibe Coding Ready
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                AI Studio Next.js Starter
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right text-xs text-muted-foreground hidden sm:block">
                <div>Environment: Google AI Studio</div>
                <div>Runtime: Node.js 22 + Next.js 16</div>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground text-base max-w-3xl leading-relaxed">
            A high-velocity boilerplate optimized for rapid prototyping and AI-native steering
            in Google AI Studio before integrating into DannFlow projects.
          </p>
        </header>

        {/* Runtime Metrics Grid */}
        <section aria-labelledby="metrics-heading" className="space-y-4">
          <h2 id="metrics-heading" className="text-lg font-semibold tracking-tight text-foreground">
            System State & Architecture
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {status.metrics.map((metric) => (
              <Card key={metric.label} className="bg-card border-border">
                <CardHeader className="p-4 pb-1">
                  <CardDescription className="text-xs text-muted-foreground">
                    {metric.label}
                  </CardDescription>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {metric.value}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-1 text-xs text-muted-foreground">
                  {metric.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Copy Prompt Banner Card */}
        <Card className="border-border bg-card shadow-sm">
          <CardHeader className="p-6">
            <div className="flex items-center gap-2 text-primary mb-1">
              <Terminal className="h-5 w-5" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Quick Start Protocol
              </span>
            </div>
            <CardTitle className="text-xl text-foreground">
              Bootstrapping Prompt for AI Studio
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Copy and paste this instruction when initializing a new AI Studio workspace session.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-4">
            <div className="rounded-lg bg-muted p-4 font-mono text-xs text-foreground border border-border overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {starterPrompt}
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-xs text-muted-foreground">
                Matches the verbatim specification defined in <code className="text-foreground">README.md</code>.
              </span>
              <CopyPromptButton promptText={starterPrompt} />
            </div>
          </CardContent>
        </Card>

        {/* Key Architectural Directory Map */}
        <section aria-labelledby="directory-map-heading" className="space-y-4">
          <h2 id="directory-map-heading" className="text-lg font-semibold tracking-tight text-foreground">
            Core Structural Layout
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border bg-card">
              <CardHeader className="p-6 pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <Database className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>src/services/</span>
                  </div>
                  <Badge variant="outline" className="text-[10px]">Logic Layer</Badge>
                </div>
                <CardDescription className="text-xs text-muted-foreground mt-1">
                  All business logic, server actions, and database queries live strictly here. UI components are decoupled.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-xs text-muted-foreground font-mono">
                starter.service.ts (Async service pattern with zero UI bleed)
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="p-6 pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <FileCode className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>src/types/</span>
                  </div>
                  <Badge variant="outline" className="text-[10px]">Type Safety</Badge>
                </div>
                <CardDescription className="text-xs text-muted-foreground mt-1">
                  Centralized TypeScript schemas and interfaces. Strictly typed data structures with zero any.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-xs text-muted-foreground font-mono">
                index.ts (Type contracts for features, metrics, status)
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="p-6 pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <Compass className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>src/prompts/features/</span>
                  </div>
                  <Badge variant="outline" className="text-[10px]">Context First</Badge>
                </div>
                <CardDescription className="text-xs text-muted-foreground mt-1">
                  Feature blueprints and task specifications consulted before beginning implementation.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-xs text-muted-foreground font-mono">
                starter-blueprint.md (Specification reference template)
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="p-6 pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <FolderGit2 className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>inspirations/</span>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">Git Tracked</Badge>
                </div>
                <CardDescription className="text-xs text-muted-foreground mt-1">
                  Root reference vault explicitly NOT in .gitignore. Used to drop designs and snippets for AI context.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-xs text-muted-foreground font-mono">
                README.md (Preserved in version control for prompt grounding)
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Feature Grid */}
        <section aria-labelledby="features-heading" className="space-y-4">
          <h2 id="features-heading" className="text-lg font-semibold tracking-tight text-foreground">
            Enforced Guardrails & Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {status.features.map((feature) => (
              <Card key={feature.id} className="border-border bg-card">
                <CardHeader className="p-5 pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-[10px] capitalize">
                      {feature.category}
                    </Badge>
                    <span className="flex h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>Next.js 16 App Router · DannFlow Vibe Coding Boilerplate</div>
          <div>All guardrails governed by <code className="text-foreground">AGENTS.md</code></div>
        </footer>
      </div>
    </main>
  );
}
