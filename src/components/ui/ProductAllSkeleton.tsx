export function ProductAllSkeleton() {
  return (
    <section className="min-h-screen overflow-hidden bg-cream py-10 sm:py-12">
      <div className="container-custom">
        {/* BACK */}
        <div className="mb-6 h-11 w-32 overflow-hidden rounded-full bg-line">
          <div className="skeleton-shimmer h-full w-full" />
        </div>

        {/* HEADER */}
        <div className="max-w-xl">
          <div className="h-9 w-32 overflow-hidden rounded-full bg-line">
            <div className="skeleton-shimmer h-full w-full" />
          </div>

          <div className="mt-4 h-12 w-full max-w-lg overflow-hidden rounded-2xl bg-line">
            <div className="skeleton-shimmer h-full w-full" />
          </div>

          <div className="mt-4 h-4 w-full max-w-md overflow-hidden rounded-full bg-line">
            <div className="skeleton-shimmer h-full w-full" />
          </div>

          <div className="mt-2 h-4 w-5/6 max-w-sm overflow-hidden rounded-full bg-line">
            <div className="skeleton-shimmer h-full w-full" />
          </div>
        </div>

        {/* SEARCH */}
        <div className="mt-6 h-14 max-w-xl overflow-hidden rounded-2xl bg-line">
          <div className="skeleton-shimmer h-full w-full" />
        </div>

        {/* GRID */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white p-5 shadow-sm"
            >
              <div className="h-48 overflow-hidden rounded-2xl bg-line">
                <div className="skeleton-shimmer h-full w-full" />
              </div>

              <div className="mt-5">
                <div className="h-5 w-2/3 overflow-hidden rounded-full bg-line">
                  <div className="skeleton-shimmer h-full w-full" />
                </div>

                <div className="mt-3 h-4 w-full overflow-hidden rounded-full bg-line">
                  <div className="skeleton-shimmer h-full w-full" />
                </div>

                <div className="mt-2 h-4 w-4/5 overflow-hidden rounded-full bg-line">
                  <div className="skeleton-shimmer h-full w-full" />
                </div>

                <div className="mt-5 h-11 overflow-hidden rounded-2xl bg-line">
                  <div className="skeleton-shimmer h-full w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}