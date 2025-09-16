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
  const organisations = await getOrganisations();

  return (
    <main role="main" className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Organisations</h1>

      {organisations.length === 0 ? (
        <p>No organisations found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {organisations.map((org) => (
            <OrganisationCard key={org.id} org={org} />
          ))}
        </div>
      )}
    </main>
  );
}
