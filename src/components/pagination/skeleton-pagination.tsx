export function SkeletonPagination(props: { page: number }) {
  return (
    <div className="join">
      <button className="join-item btn btn-disabled animate-pulse">«</button>
      <span className="join-item btn animate-pulse pointer-events-none">
        Página {props.page}
      </span>
      <button className="join-item btn btn-disabled animate-pulse">»</button>
    </div>
  );
}
