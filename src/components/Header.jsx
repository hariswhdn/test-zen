import Navbar from './Navbar';

function Header({dark, setDark}) {
  const breadcrumb = [
    {
      url: '#',
      name: 'Dashboard',
    },
    {
      url: '/',
      name: 'Manage users',
    },
  ];

  return (
    <header className="flex flex-col">
      <Navbar dark={dark} setDark={() => setDark()} />
      <ul
        className={[
          'flex gap-x-1 py-2.5 px-4',
          '[&>li:last-child>span]:hidden [&>li:last-child>a]:pointer-events-none',
        ].join(' ')}>
        {breadcrumb.map((o, i) => (
          <li key={i} className="flex gap-x-1">
            <a href={o.url}>{o.name}</a>
            <span className="material-icons-outlined !text-[20px]">chevron_right</span>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
