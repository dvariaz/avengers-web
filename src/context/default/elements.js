import colors from "../../settings/colors";

const elements = [
    {
        id: "general",
        name: ["general", "bbfffbb"],
        color: colors.ghost,
        synopsis:
            "Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado. Si Thanos logra reunir las seis gemas del infinito: poder, tiempo, alma, realidad, mente y espacio, nadie podrá detenerlo.",
        history:
            "Después de haber adquirido la Gema del Poder que había quedado bajo custodia de los Nova Corps en el planeta Xandar, el malvado titán intergaláctico Thanos, intercepta la nave espacial que transportaba a los sobrevivientes de la destrucción de Asgard y la ataca.",
        image: {
            src: "Items/General/Item.png",
            size: "large",
            effect: "Items/General/Effect.png",
        },
        background: "Items/General/Background.jpg",
    },
    {
        id: "guantelete",
        name: ["guantelete", "bbbbfffbbb"],
        color: colors.fireEngine,
        synopsis:
            "Es un poderoso guante creado por Eitri para canalizar el poder de las seis Gemas del Infinito.",
        history:
            "Debido a que tanto Loki como Ronan le fallaron en su intento de encontrar y recuperar las Gemas del Infinito, Thanos decidió buscar las gemas por sí mismo. Thanos obligó a los Enanos de Nidavellir a construir el Guantelete del Infinito para él en su misión de obtener todas las Gemas del Infinito. Una vez que lo hicieron, el Titán Loco procedió a exterminar a toda la raza de los Enanos. Solo el herrero Eitri se salvó.",
        image: {
            src: "Items/Gauntlet/Item.png",
            size: "large",
            effect: "Items/Gauntlet/Effect.png",
        },
        background: "Items/Gauntlet/Background.jpg",
    },
    {
        id: "espacio",
        name: ["espacio", "bbbfbbb"],
        color: colors.neonBlue,
        synopsis:
            "Es el remanente de una singularidad que precede al mismo universo, el cual representa el elemento del Espacio.",
        history:
            "Como corresponde a su nombre, la Gema del Espacio adquirió el dominio sobre la estructura del espacio y el poder de teletransportar a sus usuarios a cualquier parte del universo.",
        image: {
            src: "Items/SpaceGem/Item.png",
            size: "small",
            effect: "Items/SpaceGem/Effect.png",
        },
        background: "Items/SpaceGem/Background.jpg",
    },
    {
        id: "realidad",
        name: ["realidad", "bbbfffff"],
        color: colors.torchRed,
        synopsis:
            "También conocida como Éter es una Gema del Infinito, el remanente de una singularidad que ha existido desde antes de que comenzara el universo. Siendo una antigua y poderosa fuerza catastrófica, el Éter tiene el potencial de alterar la realidad y transformar al universo entero.",
        history:
            "Esta gema es única ya que, en su forma de Éter, podía manifestarse como un líquido viscoso rojo oscuro, aunque su forma primordial era la de una gema sólida, igual a las otras cinco. Los Elfos Oscuros trataron en dos ocasiones de transformar el universo usando el Éter. Tras derrotar definitivamente a los Elfos, los Asgardianos entregaron la gema al Coleccionista, quien la mantuvo en su museo en Knowhere.",
        image: {
            src: "Items/RealityGem/Item.png",
            size: "small",
            effect: "Items/RealityGem/Effect.png",
        },
        background: "Items/RealityGem/Background.jpg",
    },
    {
        id: "poder",
        name: ["poder", "bbfff"],
        color: colors.darkViolet,
        synopsis:
            "Representa el tejido del Poder. Almacenada en el interior del Orbe, desde 2014 estuvo en la bóveda de los Nova Corps ",
        history:
            "Se encontraba en poder de los Celestiales, que la utilizaban para destruir planetas enteros. Otros intentaron usar su poder, pero no pudieron controlarlo. Los Guardianes intentaron vender la Gema a El Coleccionista, pero Ronan se interpuso en su camino. Star-Lord y compañía se unieron para dominar el poder y mataron a Ronan. Después, la Gema fue entregada a Nova Corps.",
        image: {
            src: "Items/PowerGem/Item.png",
            size: "small",
            effect: "Items/PowerGem/Effect.png",
        },
        background: "Items/PowerGem/Background.jpg",
    },
    {
        id: "mente",
        name: ["mente", "bbfff"],
        color: colors.goldenPoppy,
        synopsis:
            "Es el residuo de una singularidad que precede al mismo universo, la cual rige sobre el tejido de la Mente. La Gema de la Mente se encontraba en poder de Thanos hasta que se la entregó a Loki para que recuperara el Tesseracto en vengadores. Escondida en su cetro, le permitía manejar la mente de los humanos.",
        history:
            "Fue anteriormente empleada por Loki en el interior del Cetro, quien lo recibió como un obsequio de Thanos durante la Invasión Chitauri. Después de la Batalla de Nueva York, el Cetro fue confiscado por S.H.I.E.L.D., pero más tarde robada por von Strucker, quien le ordenó a sus científicos que la usaran para darle poderes extraordinarios a los gemelos Wanda y Pietro Maximoff. La Gema acabo siendo utilizada por los Vengadores para crear a Vision, que utilizaba su energía para conformar su personalidad.",
        image: {
            src: "Items/MindGem/Item.png",
            size: "small",
            effect: "Items/MindGem/Effect.png",
        },
        background: "Items/MindGem/Background.jpg",
    },
    {
        id: "tiempo",
        name: ["tiempo", "bbffbb"],
        color: colors.limeGreen,
        synopsis:
            "Es el residuo de una singularidad que precede al mismo universo, el cual representa el tejido del Tiempo. Tiene control total sobre el tiempo, con la posibilidad de viajar a través de las eras, al pasado, presente y futuro. Su poseedor adquiere también la capacidad, además de viajar, de ver y manipular el flujo del tiempo a voluntad, congelándolo, acelerándolo o retrocediéndolo.",
        history:
            "Ha sido utilizada por la humanidad para proteger la Tierra del demonio Dormammu. Encontrada por el hechicero Agamotto, la escondió en un dispositivo llamado el Ojo de Agamotto, que fue estudiado por Doctor Strange, que la utilizó para combatir a Kaecilius y encerrar a Dormammu en un bucle temporal infinito.",
        image: {
            src: "Items/TimeGem/Item.png",
            size: "small",
            effect: "Items/TimeGem/Effect.png",
        },
        background: "Items/TimeGem/Background.jpg",
    },
    {
        id: "alma",
        name: ["alma", "ffbb"],
        color: colors.gamboge,
        synopsis:
            "Tiene la capacidad de manipular tu alma, la esencia de quién eres. se alimenta de almas y otorga al portador el poder de robar, dominar, manipular o alterar las almas de los seres vivos o muertos, logrando alterar la personalidad de los seres o incluso absorbiendo al interior de la gema el alma cualquier ser vivo.",
        history:
            "Su ubicación es desconocida hasta el momento. Algunos dicen que es la fuente de poder de Wakanda, y otros dicen que esta ubicada en algun lugar secreto de Asgard.",
        image: {
            src: "Items/SoulGem/Item.png",
            size: "small",
            effect: "Items/SoulGem/Effect.png",
        },
        background: "Items/SoulGem/Background.jpg",
    },
];

export default elements;
