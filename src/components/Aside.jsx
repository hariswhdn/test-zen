import Button from '../components/Button';
import Field from '../components/Field';

function Aside({onSubmit, onReset}) {
  return (
    <aside className={['flex flex-col gap-y-4', 'lg:max-xl:max-w-[calc(360px_-_(16px_*_2))] max-xl:w-full'].join(' ')}>
      <section
        className={[
          'flex flex-col border rounded bg-white overflow-hidden',
          'dark:border-slate-600 dark:bg-slate-800',
        ].join(' ')}>
        <section
          className={[
            'flex gap-x-2 bg-blue-600 border-b text-white border-blue-700 px-4 py-3',
            'dark:bg-blue-900 dark:border-blue-800 dark:text-slate-200',
          ].join(' ')}>
          <span className="material-icons-outlined drop-shadow">checklist</span>
          <p className="font-bold text-base drop-shadow">Form</p>
        </section>
        <section className="p-4 flex flex-col">
          <form action="?" name="create" onSubmit={(e) => onSubmit(e)} className="flex flex-col items-start gap-y-4">
            <input name="id" type="hidden" />
            <section className="flex flex-col w-full gap-y-2">
              <Field label="Name" name="name" required={true} />
              <Field label="Email" type="email" name="email" required={true} />
              <Field label="Phone" type="number" name="phone" required={true} />
              <Field label="Address" type="textarea" name="address" rows={1} />
            </section>
            <section className="flex gap-x-4">
              <Button
                icon="history"
                text="Reset"
                className={[
                  'bg-yellow-600 border-yellow-700 text-white',
                  'dark:bg-yellow-900 dark:border-yellow-800 dark:text-slate-200',
                ].join(' ')}
                onClick={() => onReset()}
              />
              <Button type="submit" icon="save" text="Submit" />
            </section>
          </form>
        </section>
      </section>
    </aside>
  );
}

export default Aside;
