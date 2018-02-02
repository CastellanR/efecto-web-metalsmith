import $ from 'jquery-slim';

const texts = [
  {
    title: 'ESTRATEGIA SEO INICIAL',
    text: `
      Aumenta el 50% de tus ventas al aparecer en los primeros 3 lugares de los
      resultados de búsqueda en el momento exacto en que tus potenciales clientes
      buscan lo que vos ofreces construyendo una…
    `,
    showed: false
  },
  {
    title: 'EMBUDOS DE CONVERSIÓN EFICIENTES',
    text: `
      Logra resultados (Ventas) reales dentro de tu web basando el diseño en el
      comportamiento y las decisiones concretas y medibles de los usuarios, en base al
      conocimiento del publico esperado planteando…
    `,
    showed: false
  },
  {
    title: 'DISEÑOS CREATIVOS Y MODERNOS',
    text: `
      El diseño genera el 60% de la intención de compra ya que mediante él comunicamos
      el concepto y el posicionamiento de nuestro negocio y despertamos emociones
      positivas en nuestros usuarios creando…
    `,
    showed: false
  },
  {
    title: 'PAGINAS RESPONSIVE',
    text: `
      La tendencia multicanal y multiplataforma es esencial para lograr los resultados
      y cumplir con nuestros objetivos de negocios. En los últimos años el 70% de las
      visitas se producen a través del celular y por ello diseñamos…
    `,
    showed: false
  },
  {
    title: 'CODIGO LIMPIO',
    text: `
      La programación de un sitio o página web es fundamental para que los motores de
      Google entiendan y elijan mostrarnos primero en sus resultados, por eso
      trabajamos una estructura web basada en …
    `,
    showed: false
  },
  {
    title: 'POSICIONAMIENTO EFECTIVO',
    text: `
      El concepto de una marca y su decisión de posicionamiento debe comunicarse de
      manera eficiente en todos los puntos de venta y es por eso que construimos
      paginas web creativas y funcionales que aseguran un…
    `,
    showed: false
  }
];

const renderItem = ({title, text}) => `
  <p>${text}</p>
  <h4 class="item-title">${title}</h4>
`;

const randomElement = (arr, ignoreIndex = null) => {
  let index;

  do {
    index = Math.floor(Math.random() * arr.length);
  } while(ignoreIndex && ignoreIndex === index);

  const element = arr[index];

  return [index, element];
};

const randomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);

const replaceItemsContentFactory = (item1, item2) => {
  let index1, index2, text1, text2;

  return [
    () => {
      if(!item1.is(':hover')) {
        [index1, text1] = randomElement(texts, index2);
        item1.html(renderItem(text1));
      }
    },
    () => {
      if(!item2.is(':hover')) {
        [index2, text2] = randomElement(texts, index1);
        item2.html(renderItem(text2));
      }
    }
  ];
};

const randomExecution = (fn) => {
  const randomTime = randomNumber(3000, 6000);

  setTimeout(() => {
    fn();
    randomExecution(fn);
  }, randomTime);
};

export function init() {
  const item1 = $('#services .container #item1');
  const item2 = $('#services .container #item2');

  const [replaceContentFromItem1, replaceContentFromItem2] = replaceItemsContentFactory(item1, item2);

  replaceContentFromItem1();
  replaceContentFromItem2();

  randomExecution(replaceContentFromItem1);
  randomExecution(replaceContentFromItem2);
}
