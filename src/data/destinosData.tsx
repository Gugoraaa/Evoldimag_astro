import RD from  "../assets/img/paises/rd.webp"
import Portugal from  "../assets/img/paises/portugal.webp"
import Chile from  "../assets/img/paises/chile.webp"
import Colombia from  "../assets/img/paises/colombia.webp"
import España from  "../assets/img/paises/espana.webp"
import Ecuador from  "../assets/img/paises/ecuador.webp"
import Mexico from  "../assets/img/paises/mexico.webp"


type Country = {
  name: string;
  title: string;
  image: any;
  content: React.ReactNode;
};


export const countries: Country[] = [
  {
    name: 'RD',
    title: '¡Gracias, República Dominicana!',
    image: RD.src,
    content: (
      <>
        <p>
          A la <span className="font-bold">tierra de la alegría y el ritmo</span>, gracias por recibirme en una
          conferencia que siempre llevaré en mi corazón.
        </p>
        <p>
          Su <span className="font-bold">energía, entusiasmo y amor</span> por la odontología digital fueron{' '}
          <span className="italic">inspiradores</span>. Muy bellas playas y bella gente.
        </p>
      </>
    ),
  },
  {
    name: 'PORTUGAL',
    title: '¡Obrigado de coração, Portugal!',
    image: Portugal.src,
    content: (
      <>
        <p>
        Gracias por darme la oportunidad de estar frente a una audiencia tan 
        <span className="font-bold text-white"> apasionada y cálida</span> en una conferencia que marcó mi camino.
       </p>
      <p>
        ¡Siempre llevaré conmigo el <span className="font-bold italic text-white">sabor de un pastel de nata</span> y la calidez de su gente!
      </p>
      </>
    ),
  },
  {
    name: 'CHILE',
    title: '¡Gracias, Chile!',
    image: Chile.src,
    content: (
      <>
        <p>
        A la <span className="font-bold text-white">tierra de los paisajes infinitos y la calidez de su gente</span>, gracias por darme
        la oportunidad de compartir conocimientos con ustedes.
      </p>
      <p>
        ¡Nunca olvidaré las <span className="italic text-white">conversaciones inspiradoras</span> con un buen vino!
      </p>
      </>
    ),
  },
  {
    name: 'COLOMBIA',
    title: '¡Gracias, Colombia!',
    image: Colombia.src,
    content: (
      <>
        <p>
          A la <span className="font-bold text-white">tierra del café más delicioso del mundo</span> y la tremenda bandeja paisa,
          mil gracias por recibirme con los brazos abiertos.
        </p>
        <p>
          Su <span className="italic font-bold text-white">calidez, alegría y pasión por aprender</span> me dejaron marcado.
        </p>
      </>
    ),
  },
  {
    name: 'ESPAÑA',
    title: '¡Gracias, España!',
    image: España.src,
    content: (
      <>
        <p>
        Gracias por recibirme como en casa y compartir conmigo su 
        <span className="font-bold text-white"> pasión por la innovación en odontología</span>.
      </p>
      <p>
        ¡Cada curso fue una <span className="italic font-bold text-white">experiencia inolvidable</span>, especialmente acompañado de unas tapas y una buena paella valenciana!
      </p>
      </>
    ),
  },
  {
    name: 'ECUADOR',
    title: '¡Gracias, Ecuador!',
    image: Ecuador.src,
    content: (
      <>
        <p>
          Gracias mis <span className="font-bold text-white">ñaños</span> por ser parte de esta aventura. La
          <span className="font-bold text-white"> riqueza cultural</span> y el entusiasmo de su gente hacen que cada visita sea inolvidable.
        </p>
        <p>
          ¡Nada como disfrutar de un <span className="italic font-bold text-white">buen ceviche ecuatoriano</span> o una empanada verde mientras compartimos conocimientos!
        </p>
      </>
    ),
  },
  {
    name: 'MEXICO',
    title: '¡Gracias, México!',
    image: Mexico.src,
    content: (
      <>
        <p>
          A mi <span className="font-bold text-white">tierra querida</span>, gracias por permitirme compartir lo mejor de la odontología digital.
        </p>
        <p>
          Aquí fue donde todo comenzó, y llevar el conocimiento a cada rincón de este <span className="font-bold text-white">hermoso país</span> ha sido un honor.
        </p>
      </>
    ),
  },
];