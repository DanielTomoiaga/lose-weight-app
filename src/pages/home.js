import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <img src="Logo.png" className="logo-header"></img>
      <div className="hero-page">
        <h1>
          <span>Lose weigt</span>{" "}
          <span className="first-span">or lose money</span> <br />
          este singura aplicație care te poate <br />
          motiva, pe bune, să slăbești.
        </h1>
        <a href="#concept">
          <button className="hero-btn">Afla cum functioneaza</button>
        </a>
      </div>
      <div className="details">
        <h1>Ideea</h1>

        <p>
          Cercetatorii englezi au descoperit ca, de cele mai multe ori, oamenii
          sunt motivati sa faca schimbari in ceea ce priveste stilul de viata
          si, in special, greutatea corporala, doar atunci cand incep sa isi
          piarda sanatatea. <br />
          Pentru ca dorim sa te ajutam sa pierzi in greutate, dar fara sa-ti
          pierzi sanatatea, am decis sa cream aceasta aplicatie care
          functioneaza pe un principiu similar celui descris mai sus. Insa in
          loc sa iti pierzi sanatatea, vei pierde bani in functie de cat de
          consecvent esti sau nu cu obiectivul tau de a slabi.
        </p>
        <a>
          <h1 id="concept" className="howItsWork">
            Cum functioneaza
          </h1>
        </a>
        <p>
          ➧ Ne furnizezi parametrii tai fizici.
          <br /> ➧ Pe baza acestor parametrii calculam greutatea ta ideala si
          timpul necesar ca sa ajungi acolo.
          <br /> ➧ Alegi alte obiective care te pot ajuta sa iti atingi
          obiectivul principal.
          <br /> ➧ Alegi suma de bani pe care o vei pierde propoartional cu
          fiecare zi in care nu ti-ai atins obiectivele daca se va intampla
          acest lucru.
          <br /> ➧ Primesti un calendar corespunzator zilelor necesare pentru
          atingerea obiectivelor.
          <br /> ➧ Bifezi fiecare zi in care ti-ai atins obiectivul si iti
          monitorizezi evolutia greutatii.
        </p>
        <Link className="start-btn" to="/forms">
          Incepe
        </Link>
        <Link className="btn-to-dashboard" to="/dashboard">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
