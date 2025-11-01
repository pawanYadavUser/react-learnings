const Content1 = () => {
  function handleContentData() {
    const array = ["Nezuko", "Tanjiro", "Zenitsu", "Inosuke"];
    const randomIndex = Math.floor(Math.random() * 4);
    return array[randomIndex];
  }
  return (
    <main>
      <p>{handleContentData()}</p>
    </main>
  );
};

export default Content1;
