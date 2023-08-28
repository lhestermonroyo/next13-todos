'use client';

function Error({ error, reset }) {
  return (
    <div>
      <h2>Oops, something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}

export default Error;
