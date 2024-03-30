function Alert({status, text}) {
  return (
    <section
      className={[
        'fixed top-4 border rounded text-white right-4 w-full max-w-[calc(360px_-_(16px_*_2))] text-center px-4 py-[11px]',
        status === 'error' ? 'bg-red-600 border-red-700' : 'bg-green-600 border-green-700',
      ].join(' ')}>
      {text}
    </section>
  );
}

export default Alert;
