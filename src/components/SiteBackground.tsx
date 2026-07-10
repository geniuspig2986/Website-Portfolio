// Fixed atmospheric backdrop shared by every page — a soft cyan glow upper
// right and a faint indigo wash lower left (same gradients the hero used).
// pointer-events-none and z-0: page content must sit in a positioned layer
// above it (relative z-10), and any canvas over it must be transparent.
export default function SiteBackground() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_42%,rgba(8,145,178,0.08),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_68%_42%,rgba(34,211,238,0.07),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_85%,rgba(99,102,241,0.05),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_12%_85%,rgba(129,140,248,0.05),transparent_50%)]" />
        </div>
    );
}
