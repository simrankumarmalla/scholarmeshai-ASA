import { ReactionFront } from "@/components/ui/hero-ascii-reaction-front";

export default function Demo() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      <ReactionFront className="absolute inset-0" />
      <div className="relative z-10 flex h-full w-full items-center justify-center px-8">
        <div className="flex max-w-xl flex-col items-center gap-4 text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            ns-ui / hero-ascii-reaction-front
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            The boundary is the picture.
          </h1>
          <p className="text-base text-muted-foreground">
            A Gray-Scott dish runs live under the type — a real solver, not a
            loop of noise. Only the ridge of the reaction interface is inked, so
            every front reads as a thin crawling line.
          </p>
          <button className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow">
            Read the docs
          </button>
        </div>
      </div>
    </div>
  );
}
