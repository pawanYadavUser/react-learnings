const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <p>
        Copyright &copy;{" "}
        {date.getFullYear() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getDate()}
      </p>
    </footer>
  );
};

export default Footer;
