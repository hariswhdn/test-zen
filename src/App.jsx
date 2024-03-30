import {useState, useEffect} from 'react';
import Alert from './components/Alert';
import Header from './components/Header';
import Aside from './components/Aside';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  const [init, setInit] = useState(false);
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (!init) {
      setInit(true);
    }
  }, []);

  useEffect(() => {
    if (init) {
      setUsers([
        {
          id: 1,
          name: 'John Doe',
          email: 'doe.john@gmail.com2',
          phone: '081234567893',
          address: 'Jakarta, 12345',
        },
        {
          id: 2,
          name: 'Mamat Alkatiri',
          email: 'alkatiri.mamat@gmail.com3',
          phone: '08123456789',
          address: 'Bandung, 23451',
        },
        {
          id: 3,
          name: 'Abdur Arsyad',
          email: 'arsyad.abdur@gmail.com4',
          phone: '08234567891',
          address: 'Medan, 34512',
        },
        {
          id: 4,
          name: 'Babe Cabita',
          email: 'cabita.babe@gmail.com5',
          phone: '08345678912',
          address: 'Bogor, 45123',
        },
        {
          id: 5,
          name: 'Bintang Bete',
          email: 'bete.bintang@gmail.com1',
          phone: '08456789123',
          address: 'Depok, 51234',
        },
      ]);
    }
  }, [init]);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = parseInt(formData.get('id') || 0);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone').replace(/\D+/g, '');
    const address = formData.get('address');
    const idxName = users.map((o) => o.name.toLowerCase()).indexOf(name.toLowerCase());
    if (idxName === -1 || users?.[idxName]?.id === id) {
      const idxEmail = users.map((o) => o.email.toLowerCase()).indexOf(email.toLowerCase());
      if (idxEmail === -1 || users?.[idxEmail]?.id === id) {
        const idxPhone = users.map((o) => o.phone).indexOf(phone);
        if (idxPhone === -1 || users?.[idxPhone]?.id === id) {
          const obj = {
            id: id || Math.max(...users.map((o) => o.id)) + 1,
            name: name,
            email: email,
            phone: phone,
            address: address,
          };
          setUsers((v) => (id > 0 ? v.map((o) => (o.id === id ? obj : o)) : [...v, obj]));
          setAlert({
            text: `Success, ${name} has been ${id > 0 ? 'updated' : 'registered'}`,
            status: 'success',
          });
          e.target.elements['id'].value = '';
          e.target.reset();
        } else {
          setAlert({
            text: `Failed, ${phone} already been registered`,
            status: 'error',
          });
        }
      } else {
        setAlert({
          text: `Failed, ${email} already been registered`,
          status: 'error',
        });
      }
    } else {
      setAlert({
        text: `Failed, ${name} already been registered`,
        status: 'error',
      });
    }
    return false;
  };

  const onReset = () => {
    const form = document.forms['create'];
    form.elements['id'].value = '';
    form.reset();
  };

  const userEdit = (id) => {
    const idx = users.map((o) => o.id).indexOf(id);
    if (idx > -1) {
      const form = document.forms['create'];
      form.elements['id'].value = users[idx].id;
      form.elements['name'].value = users[idx].name;
      form.elements['email'].value = users[idx].email;
      form.elements['phone'].value = users[idx].phone;
      form.elements['address'].value = users[idx].address;
    }
  };

  const userDelete = (id) => {
    const idx = users.map((o) => o.id).indexOf(id);
    if (idx > -1) {
      setUsers((v) => v.filter((o) => o.id !== id));
      setAlert({
        text: `Success, ${users[idx].name} has been removed`,
        status: 'success',
      });
    }
  };

  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => setAlert(null), 2500);
      return () => clearTimeout(timeout);
    }
  }, [alert]);

  const [dark, setDark] = useState(false);

  return (
    <section
      className={[
        'text-sm relative divide-y min-w-[360px] min-h-dvh bg-white text-slate-600 flex flex-col w-full mx-auto',
        'dark:divide-slate-600',
        'dark:bg-slate-800 dark:text-slate-300',
        dark ? 'dark' : '',
      ].join(' ')}>
      {alert ? <Alert status={alert.status} text={alert.text} /> : <></>}
      <Header dark={dark} setDark={() => setDark(!dark)} />
      <section
        className={[
          'min-h-[calc(100dvh_-_138px)] items-start gap-4 p-4',
          'xl:grid xl:grid-cols-3',
          'max-xl:flex',
          'max-lg:flex-col',
        ].join(' ')}>
        <Aside onSubmit={(e) => onSubmit(e)} onReset={() => onReset()} />
        <main
          className={[
            'relative gap-y-4 flex-col flex p-4 border rounded overflow-hidden',
            'dark:border-slate-600',
            'xl:col-span-2',
            'max-xl:w-full lg:max-xl:max-w-[calc(100%_-_((360px_-_(16px_*_2))_+_16px))]',
          ].join(' ')}>
          <div
            className={[
              'relative -mt-4 -ml-4 flex gap-x-2 text-white w-[calc(100%_+_(16px_*_2))] bg-blue-600 border-b border-blue-700 px-4 py-3',
              'dark:bg-blue-900 dark:border-blue-800 dark:text-slate-200',
            ].join(' ')}>
            <span className="material-icons-outlined drop-shadow">table_chart</span>
            <p className="font-bold text-base drop-shadow">Tables</p>
          </div>
          <Table data={users} userEdit={(v) => userEdit(v)} userDelete={(v) => userDelete(v)} />
        </main>
      </section>
      <Footer />
    </section>
  );
}

export default App;
