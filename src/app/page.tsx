import { Pagination, SkeletonPagination } from "@/components/pagination";
import Search from "@/components/search";
import { SkeletonTable, Table } from "@/components/table";
import { getItemsCount } from "@/data";
import { Suspense } from "react";

// helper to create search params type
type PageSearchParams<T extends string> = {
  [K in T]?: string;
};

type PageProps = {
  searchParams?: PageSearchParams<"term" | "page">;
};

// complete page, fetches server data
async function Page(props: PageProps) {
  const { searchParams } = props;

  const term = searchParams?.term || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getItemsCount(term);

  return (
    <>
      <div className="flex flex-col gap-4">
        <Search placeholder="Search" />

        <Table term={term} page={currentPage} />

        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </>
  );
}

// also the complete page but with skeleton loaders for
// the table and pagination
function SkeletonPage(props: { currentPage: number }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Search placeholder="Search" />

        <SkeletonTable />

        <SkeletonPagination currentPage={props.currentPage} />
      </div>
    </>
  );
}

// this is the component that will be rendered
// notice that we can access the search params from the URL
// and pass it to the page component
// and to the page skeleton component
export default function SuspensedPage(props: PageProps) {
  const currentPage = Number(props?.searchParams?.page) || 1;

  return (
    <Suspense
      key={JSON.stringify(props.searchParams)}
      fallback={<SkeletonPage currentPage={currentPage} />}
    >
      <Page {...props} />
    </Suspense>
  );
}
