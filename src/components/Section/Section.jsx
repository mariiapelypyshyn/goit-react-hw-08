const Section = ({ children, title }) => {
  return (
    <section style={{ width: "500px", margin: "0 auto" }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;