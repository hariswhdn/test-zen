function Button({type = 'button', text, icon, onClick = () => {}, className}) {
  return (
    <button
      type={type}
      className={[
        'flex bg-blue-600 border-blue-700 border rounded text-white font-bold gap-x-1.5 py-[7px] px-3',
        'dark:bg-blue-900 dark:border-blue-800 dark:text-slate-200',
        className,
      ].join(' ')}
      onClick={() => onClick()}>
      {icon ? <span className="material-icons-outlined drop-shadow !text-[20px]">{icon}</span> : <></>}
      <p>{text}</p>
    </button>
  );
}

export default Button;
