function Field({label, name, type = 'text', required, rows}) {
  return (
    <label className="flex flex-col gap-y-1.5">
      <p className="font-bold">{label}</p>
      {type === 'textarea' ? (
        <textarea
          className={['px-4 border resize-none py-[9px] rounded', 'dark:bg-slate-800 dark:border-slate-600'].join(' ')}
          name={name}
          placeholder={`Enter ${label.toLowerCase()}`}
          rows={rows}
          spellCheck={false}
          autoComplete="off"
          required={required}
        />
      ) : (
        <input
          type={type}
          className={['px-4 border py-[9px] rounded', 'dark:bg-slate-800 dark:border-slate-600'].join(' ')}
          name={name}
          placeholder={`Enter ${label.toLowerCase()}`}
          spellCheck={false}
          autoComplete="off"
          required={required}
        />
      )}
    </label>
  );
}

export default Field;
