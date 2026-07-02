export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-blue-500" />
        <span className="mono text-sm text-muted-foreground">Loading…</span>
      </div>
    </div>
  );
}
