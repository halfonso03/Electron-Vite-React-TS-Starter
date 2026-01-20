export default function SqlTest() {
  const insert = async () => {
    await window.electronAPI.addAssignee({
      firstName: 'hector',
      lastName: 'alfonso',
      email: 'hialfonso@nhac.org',
      extension: '123',
      type: 1,
    });
  };

  return (
    <div>
      <button onClick={insert}>Insert user</button>
    </div>
  );
}
