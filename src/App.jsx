import Accordian from "./components/Accordian/Accordian";
import AccordianItem from "./components/Accordian/AccordianItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordian className="accordion">
          <AccordianItem
            className="accordion-item"
            title="We have 20 years of Exp"
          >
            <article>
              <p>You cant go wrong with us!</p>
              <p>We are in the Biz!</p>
            </article>
          </AccordianItem>
          <AccordianItem
            className="accordion-item"
            title="We are working with local guides"
          >
            <article>
              <p>We are a team</p>
              <p>We are in the Best</p>
            </article>
          </AccordianItem>
        </Accordian>
      </section>
    </main>
  );
}

export default App;
