import Accordian from "./components/Accordian/Accordian";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordian className="accordion">
          <Accordian.Item
            id="experience"
            className="accordion-item"
            title="We have 20 years of Exp"
          >
            <article>
              <p>You cant go wrong with us!</p>
              <p>We are in the Biz!</p>
            </article>
          </Accordian.Item>
          <Accordian.Item
            id="local-guides"
            className="accordion-item"
            title="We are working with local guides"
          >
            <article>
              <p>We are a team</p>
              <p>We are in the Best</p>
            </article>
          </Accordian.Item>
        </Accordian>
      </section>
    </main>
  );
}

export default App;
