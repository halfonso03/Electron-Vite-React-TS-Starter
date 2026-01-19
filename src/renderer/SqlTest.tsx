export default function SqlTest() {
  const insert = async () => {
    await window.electronAPI.insertUser({
      name: 'hector',
      email: 'hialfonso@nhac.org',
    });
  };

  return (
    <div>
      <button onClick={insert}>Insert user</button>
    </div>
  );
}
