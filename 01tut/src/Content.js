const Content = () => {
  function greeting() {
    const arr = ["pawan", "aman", "akash", "sneha", "yashika", "baishali"];
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
  return (
    <main>
      <p>{greeting()}</p>
    </main>
  );
};

export default Content;
