"use client";

import { classnames } from "@/classnames";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function Pagination(props: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { totalPages } = props;
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="join">
      <Link
        href={createPageURL(currentPage - 1)}
        className={classnames(
          "join-item btn",
          currentPage === 1 && "btn-disabled"
        )}
      >
        «
      </Link>
      <span className="join-item btn pointer-events-none">
        Página {currentPage}
      </span>
      <Link
        href={createPageURL(currentPage + 1)}
        className={classnames(
          "join-item btn",
          currentPage === totalPages && "btn-disabled"
        )}
      >
        »
      </Link>
    </div>
  );
}
