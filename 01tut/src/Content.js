const Content = () => {
  const handleNameChanges = () => {
    const names = ["Aman", "Pawan", "Jay", "Rahul"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };
  return (
    <main>
      <p>{handleNameChanges()}</p>
    </main>
  );
};

export default Content;
