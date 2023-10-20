import React from "react";
import "../styles/components/pages/NosotrosPage.css"

const NosotrosPage = (props) => {
  return (
    <section className="holder">
      <div className="historia">
        <h2>Historia</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus alias, voluptatem vel sed at ducimus aut quisquam rerum dolorum fugit expedita rem nam maxime excepturi suscipit natus. Voluptates, magni omnis? <br /> <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quibusdam corporis magnam necessitatibus! Dolore magnam, omnis maxime voluptate, dignissimos optio distinctio aperiam a inventore, aliquid officiis nihil architecto soluta ut.</p>
      </div>
      <h2>Staff</h2>
      <div className="personas">
        <div className="persona">
          <img src="./images/persona1.webp" alt="persona 1" width="75" />
          <h5>Bill Gates</h5>
          <h6>Fundador de Microsoft</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quod ullam ratione praesentium natus rerum et eos temporibus molestias! Obcaecati ab perspiciatis veritatis labore neque quisquam adipisci deserunt esse beatae. lore</p>
        </div>

        <div className="persona">
          <img src="./images/persona 2.jpg" alt="persona 2" width="75" />
          <h5>Elon Musk</h5>
          <h6>Ceo de Tesla y SpaceX</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quod ullam ratione praesentium natus rerum et eos temporibus molestias! Obcaecati ab perspiciatis veritatis labore neque quisquam adipisci deserunt esse beatae. lore</p>
        </div>

        <div className="persona">
          <img src="./images/persona 3.jpg" alt="persona 3" width="75" />
          <h5>stephen hawking</h5>
          <h6> físico teórico, astrofísico, cosmólogo y divulgador científico</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quod ullam ratione praesentium natus rerum et eos temporibus molestias! Obcaecati ab perspiciatis veritatis labore neque quisquam adipisci deserunt esse beatae. lore</p>
        </div>

        <div className="persona">
          <img src="./images/persona 4.jpg" alt="persona 4" width="75" />
          <h5>Mark Zuckerberg</h5>
          <h6>CEO de Meta y fundador de Facebook</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quod ullam ratione praesentium natus rerum et eos temporibus molestias! Obcaecati ab perspiciatis veritatis labore neque quisquam adipisci deserunt esse beatae. lore</p>
        </div>

        <div className="persona">
          <img src="./images/persona 5.jpg" alt="persona 1" width="75" />
          <h5>Steve Jobs</h5>
          <h6>cofundador y presidente ejecutivo de Apple​​</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quod ullam ratione praesentium natus rerum et eos temporibus molestias! Obcaecati ab perspiciatis veritatis labore neque quisquam adipisci deserunt esse beatae. lore</p>
        </div>
      </div>
    </section>
  );
}

export default NosotrosPage;