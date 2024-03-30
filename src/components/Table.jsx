import {useEffect, useState} from 'react';

function Table({data, userEdit, userDelete}) {
  const [tableData, setTableData] = useState([]);
  const [init, setInit] = useState(false);

  useEffect(() => {
    // setUsers(data);
    console.log('data', data);
    if (!init) {
      setInit(true);
    }
  }, []);

  useEffect(() => {
    // console.log('data', data);
    if (init) {
      console.log('data', data);
      setTableData(data);
    }
  }, [init]);

  return (
    <div className={['border overflow-x-auto rounded flex flex-col', 'dark:border-slate-600'].join(' ')}>
      <table
        className={[
          'w-full min-w-[654px]',
          '[&>tbody>tr:nth-child(odd)]:bg-gray-100',
          'dark:[&>tbody>tr:nth-child(odd)]:bg-slate-700',
          '[&>thead>tr]:border-b [&>*>tr]:border-gray-200',
          'dark:[&>*>tr]:border-slate-600',
          '[&>thead>tr>th:not(:first-child):not(:last-child)]:text-left',
          '[&>tbody>tr:not(:last-child)]:border-b [&>tbody>tr:not(:last-child)]:border-gray-200',
          'dark:[&>tbody>tr:not(:last-child)]:border-slate-600',
          '[&>*>tr>*]:px-3 [&>*>tr>*]:py-2',
          '[&>*>tr>*:not(:last-child)]:border-r [&>*>tr>*:not(:last-child)]:border-gray-200',
          'dark:[&>*>tr>*:not(:last-child)]:border-slate-600',
        ].join(' ')}>
        <thead>
          <tr>
            <th className="w-[1%]" onClick={() => {}}>
              No.
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th className="w-[1%]">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((o, i) => (
            <tr key={o.id}>
              <td>{i + 1}</td>
              <td>{o.name}</td>
              <td>{o.email}</td>
              <td>{o.phone}</td>
              <td>{o.address}</td>
              <td>
                <div className="flex gap-x-4">
                  <button type="button" className="flex" onClick={() => userEdit(o.id)}>
                    <span
                      className={['text-yellow-600 material-icons-outlined !text-[20px]', 'dark:text-yellow-700'].join(
                        ' '
                      )}>
                      edit
                    </span>
                  </button>
                  <button type="button" className="flex" onClick={() => userDelete(o.id)}>
                    <span
                      className={['text-red-600 material-icons-outlined !text-[20px]', 'dark:text-red-700'].join(' ')}>
                      delete
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
