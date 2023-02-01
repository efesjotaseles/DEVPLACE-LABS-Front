import Footer from "./Footer";

export function PostList() {
  let handleUpdate = () => {
    return <></>;
  };
  let handleDelete = () => {
    return <></>;
  };

  return (
    <>
    <table className="table mb-3">
      <thead>
        <tr>
          <th>Date</th>
          <th>Title</th>
          <th>Views</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>19/3/23</td>
          <td>Primer Post</td>
          <td>5</td>
          <td>
            <div className="mb-3">
              <button onClick={() => handleUpdate()} className="btn btn-dark">
                Update
              </button>
            </div>
            <div className="mb-3">
              <button onClick={() => handleDelete()} className="btn btn-danger">
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </>
  );
}
