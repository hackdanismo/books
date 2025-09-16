// Server component by default. If we add interactivity, add "use client" at the top
export default function OrganisationCard({ org }) {
    return (
        <article className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition">
            <header className="mb-2">
                <h2 className="text-lg font-semibold leading-tight">{org.name}</h2>
                <p className="text-xs text-gray-500">#{org.id}</p>
            </header>

            <dl className="space-y-1 text-sm">
                <div className="flex gap-2">
                    <dt className="text-gray-500">Slug:</dt>
                    <dd className="font-mono">{org.slug}</dd>
                </div>
                <div className="flex gap-2">
                    <dt className="text-gray-500">Email:</dt>
                    <dd>{org.contactEmail}</dd>
                </div>
            </dl>
        </article>
    );
}