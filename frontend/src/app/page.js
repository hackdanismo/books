import OrganisationCard from "@/components/organisation-card";

// if prefer ISR instead of always-fresh data, comment the next line and add:
// export const revalidate = 60;
export const dynamic = "force-dynamic"; // equivalent to { cache: "no-store" }

async function getOrganisations() {
  const res = await fetch(`${process.env.API_BASE_URL}/organisations`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.error("Failed to fetch organisations:", res.status);
    throw new Error("Failed to fetch organisations");
  }
  return res.json();
}

export default async function Home() {
  let organisations = await getOrganisations();

  // Sort by createdAt descending (latest first)
  organisations = organisations.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  // Take only the latest 4
  const latestOrgs = organisations.slice(0, 4);

  return (
    <main role="main" className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Organisations</h1>

      <h2>Recently Added</h2>

      {latestOrgs.length === 0 ? (
        <p>No organisations found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {latestOrgs.map((org) => (
            <OrganisationCard key={org.id} org={org} />
          ))}
        </div>
      )}
    </main>
  );
}
