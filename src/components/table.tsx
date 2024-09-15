import { getItems } from "@/data";

export function SkeletonTable() {
  return (
    <>
      <h1 className="text-2xl">Loading...</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export async function Table(props: { term: string; page: number }) {
  const { term, page } = props;

  const items = await getItems(term, page);

  return (
    <>
      <h1 className="text-2xl">
        {term} ::: {page}
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <th>{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.job}</td>
                  <td>{item.favoriteColor}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
