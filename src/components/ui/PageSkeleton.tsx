export function HeroSkeleton() {
  return (
    <section id="home" className="section-padding min-h-[calc(100vh-80px)] overflow-hidden">
      <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
        {/* TEXT */}
        <div className="order-2 animate-pulse lg:order-1">
          <div className="h-10 w-36 rounded-full bg-line" />

          <div className="mt-6 h-12 max-w-xl rounded-2xl bg-line sm:h-14 lg:h-16" />
          <div className="mt-3 h-12 max-w-lg rounded-2xl bg-line sm:h-14 lg:h-16" />

          <div className="mt-5 h-5 max-w-xl rounded-full bg-line" />
          <div className="mt-3 h-5 max-w-lg rounded-full bg-line" />
          <div className="mt-3 h-5 max-w-md rounded-full bg-line" />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="h-12 w-full rounded-2xl bg-line sm:w-40" />
            <div className="h-12 w-full rounded-2xl bg-line sm:w-36" />
            <div className="h-12 w-full rounded-2xl bg-line sm:w-32" />
          </div>

          <div className="relative mt-5 flex max-w-md items-center gap-4 rounded-3xl border border-line bg-white p-3 shadow-sm">
            <div className="absolute -right-2 -top-2 h-6 w-20 rounded-full bg-line" />

            <div className="h-16 w-16 shrink-0 rounded-2xl bg-line" />

            <div className="min-w-0 flex-1">
              <div className="h-4 w-3/4 rounded-full bg-line" />

              <div className="mt-3 flex items-center gap-2">
                <div className="h-3 w-16 rounded-full bg-line" />
                <div className="h-4 w-20 rounded-full bg-line" />
              </div>

              <div className="mt-3 h-3 w-full rounded-full bg-line" />
            </div>
          </div>

          <div className="mt-1 h-6 w-44 rounded-full bg-line" />

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm"
              >
                <div className="h-5 w-5 rounded-full bg-line" />
                <div className="h-4 flex-1 rounded-full bg-line" />
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative order-1 animate-pulse lg:order-2">
        <div className="absolute -inset-6 rounded-[2rem] bg-wheat/45 blur-2xl" />

        <div className="aspect-[16/9] w-full rounded-[2rem] bg-line" />
        </div>
      </div>
    </section>
  );
}