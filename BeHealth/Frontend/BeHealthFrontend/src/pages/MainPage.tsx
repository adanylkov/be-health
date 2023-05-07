import { PrimaryButton } from "../components/ui/PrimaryButton"
import "./MainPage.css"
import DoctorImage from "../assets/images/doctorWithCircleBackgound.png"
import SampleDoctor1 from "../assets/images/Specialist 1.png"
import SampleDoctor2 from "../assets/images/Specialist 2.png"
import SampleDoctor3 from "../assets/images/Specialist 3.png"
import Medicover from "../assets/images/medicover.png"
import Scanmed from "../assets/images/scanmed.png"
import Zdziecko from "../assets/images/zdziecko.png"
import BenefitsDoctor from "../assets/images/benefitsDoctor.png"
import { BsCheckLg } from "react-icons/bs"
import dermatolog from "../assets/images/specializacje/dermatolog.png"
import gastrolog from "../assets/images/specializacje/gastrolog.png"
import ginekolog from "../assets/images/specializacje/ginekolog.png"
import hematolog from "../assets/images/specializacje/hematolog.png"
import hepatolog from "../assets/images/specializacje/hepatolog.png"
import kardiolog from "../assets/images/specializacje/kardiolog.png"
import laryngolog from "../assets/images/specializacje/laryngolog.png"
import neurolog from "../assets/images/specializacje/neurolog.png"

const PartnersBadge = () => {
  return (
    <div className="partners--badge">
      <div className="partners--badge-color"></div>
      <img src={Medicover} alt="" />
      <img src={Scanmed} alt="" />
      <img src={Zdziecko} alt="" />
    </div>
  )
}

const DoctorsBadge = () => {
  return (
    <div className="doctors--badge">
      <div className="doctor-images">
        <img src={SampleDoctor1} alt="" />
        <img src={SampleDoctor2} alt="" />
        <img src={SampleDoctor3} alt="" />
        <p><b>20+</b><br />Specialists</p>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <>
      <section id="about--section" className="split">
        <div className="section--left">
          <h1 className="section--title">Znajdź lekarza<br />& zarezerwuj online</h1>
          <p className="section--text">Szybki i łatwy dostęp do opieki zdrowotnej na wyciągnięcie ręki</p>
          <PrimaryButton style={{ marginBlockStart: 40 }}><p style={{ color: "white", marginInline: 70, marginBlock: 5 }}>Zarezerwuj wizytę</p></PrimaryButton>
          <PartnersBadge />
        </div>
        <div className="section--right">
          <img id="doctor--image" src={DoctorImage} alt="Male doctor looks at camera and smiles" />
          <DoctorsBadge />
        </div>
      </section>
    </>
  )
}

const BenefitsBadge = () => {
  return (
    <div className="benefits--badge">
      <h3>Zalety</h3>
      <div className="benefits--badge-item">
        <div className="text">
          <h4 className="benefit--item-title">Współpracujemy tylko z najlepszymi</h4>
          <p className="benefit--item-text">Nasi lekarze są regularnie kontrolowani pod kątem wiedzy i umiejętności, a także stale podnoszą swoje kwalifikacje.</p>
        </div>
        <p className="benefit--number">01</p>
      </div>
      <div className="benefits--badge-item">
        <div className="text">
          <h4 className="benefit--item-title">Pacjenci otrzymują usługę bezpłatnie</h4>
          <p className="benefit--item-text">Pacjenci mogą korzystać z naszych usług bez dodatkowych kosztów</p>
        </div>
        <p className="benefit--number">02</p>
      </div>
    </div>
  )
}

const Benefits = () => {
  return (
    <section id="benefits--section" className="split">
      <div className="section--left">
        <img src={BenefitsDoctor} />
        <BenefitsBadge />
      </div>
      <div className="section--right">
        <p className="benefits--green-badge">Dlaczego my</p>
        <h1 className="section--title">Jesteśmy <span className="purple">liderami</span><br /> na rynku ochrony <br /> zdrowia</h1>
        <ul>
          <li><BsCheckLg />Przyjęcie w dogodnym czasie</li>
          <li><BsCheckLg />Konto osobowe</li>
          <li><BsCheckLg />Ubezpieczenie dla dzieci i dorosłych</li>
          <li><BsCheckLg />Wysoko wykwalifikowani specjaliści</li>
        </ul>
        <PrimaryButton style={{ marginBlockStart: 30 }}>Dowiedz się więcej</PrimaryButton>
      </div>
    </section>
  )
}

const SpecialistGrid = () => {
  return (
    <div className="specialist--grid">
      <SpecialistBadge image={dermatolog} />
      <SpecialistBadge image={gastrolog} />
      <SpecialistBadge image={ginekolog} />
      <SpecialistBadge image={hematolog} />
      <SpecialistBadge image={hepatolog} />
      <SpecialistBadge image={kardiolog} />
      <SpecialistBadge image={laryngolog} />
      <SpecialistBadge image={neurolog} />
    </div>
  )
}

const SpecialistBadge = (props: { image: string }) => {
  return (
    <div className="specialist--badge">
      <img src={props.image} alt="" />
    </div>
  )
}

const Specialists = () => {
  return (
    <section id="specialists--section">
      <h1 className="section--title">Najczęściej wybierane<br />kierunki</h1>
      <p className="section--text">Nasz serwis współpracuje z lekarzami z różnych specjalności, dzięki <br /> czemu jesteśmy w stanie zaoferować szerokie spektrum usług <br /> medycznych.</p>
      <SpecialistGrid />
    </section>
  )
}

const ReviewsBadge = (props: { text: string, author: string, primary: boolean }) => {
  return (
    <div className={`reviews--badge ${props.primary ? 'primary' : ''}`}>
      <p className="review--text">{props.text}</p>
      <b><p className="review--author">{props.author}</p></b>
    </div>
  )
}

const ReviewsGrid = () => {
  return (
    <div className="reviews--grid">
      <ReviewsBadge text="Byłam bardzo zadowolona z wizyty u pana doktora. Okazał się bardzo miły i profesjonalny, a jego diagnoza była trafna i skuteczna. Na pewno polecę go swoim znajomym i z chęcią skorzystam z jego usług ponownie" author="Idalia Ada" primary={false} />
      <ReviewsBadge text="Dr Maryna Wanessa to wspaniały lekarz, zawsze jest bardzo cierpliwy i uważnie słucha moich obaw i pytań.  Jestem bardzo zadowolona z opieki, jaką otrzymałam od dr Maryny Wanessy i polecam ją każdemu, kto szuka dobrego lekarza." author="Zuzanna Zbigniew" primary={true} />
      <ReviewsBadge text="Odwiedziłam Panią doktor Janinę Karolinę i byłam zachwycona profesjonalizmem i empatią. Dzięki jej poradzie udało mi się szybko wyleczyć dolegliwość. Polecam Panią doktor jako wspaniałego specjalistę i cudowną osobę" author="Zuzanna Zbigniew" primary={false} />
    </div>
  )
}

const Reviews = () => {
  return (
    <section id="reviews--section">
      <h1 className="section--title">Przed wizytą, zapoznaj się z <br /> <span className="purple">opiniami</span> innych pacjentów.</h1>
      <ReviewsGrid />
    </section>
  )
}

export const MainPage = () => {
  return (
    <main className="main--page">
      <About />
      <Benefits />
      <Specialists />
      <Reviews />
    </main>
  )
}
