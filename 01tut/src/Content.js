// const Content = () => {
//   function handleNameChanges() {
//     const names = ["Aman", "Pawan", "Jay", "Rahul"];
//     const int = Math.floor(Math.random() * 4);
//     return names[int];
//   }
//   return (
//     <main>
//       <p>{handleNameChanges()}</p>
//     </main>
//   );
// };

// export default Content;

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
