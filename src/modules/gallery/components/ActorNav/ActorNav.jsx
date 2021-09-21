import { useLocation } from "react-router-dom";
import { transparentize } from "polished";
import { useUserAgent } from "@oieduardorabelo/use-user-agent";

import styles from "./ActorNav.module.scss";

import Scroller from "modules/common/components/Scroller";
import colors from "settings/colors";

const ActorNav = ({ current, links, onChange }) => {
  const details = useUserAgent();
  const location = useLocation();

  // Element indexes
  const currentIndex = links.findIndex((link) => link.path === current);
  const previousIndex =
    currentIndex === 0 ? links.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % links.length;

  const slug = links[currentIndex].name.replace(" ", "+");

  const handleClick = async (e) => {
    const { name } = links[currentIndex];

    let data = {
      title: name,
      text: `Quieres saber más sobre ${name}, dale click aquí`,
      url: location.pathname,
    };
    if (navigator.canShare && navigator.canShare({ text: data.text })) {
      try {
        await navigator.share(data);
        console.log("Se ha compartido");
      } catch (err) {
        console.log("Error al compartir de forma nativa");
      }
    } else {
      console.log("Acción no permitida en PC");
    }
  };

  const handleBackward = () => {
    const previousLink = links[previousIndex].path;

    onChange(previousLink);
  };

  const handleForward = () => {
    let nextLink = links[nextIndex].path;

    onChange(nextLink);
  };

  return (
    <>
      <nav className={styles.ActorNav}>
        {links[currentIndex].name}
        <div className={styles.Buttons}>
          <a
            href={`https://www.google.com/search?q=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.RoundedButton}
            style={{
              background: colors[links[currentIndex].color].gradient,
              color: transparentize(
                0.3,
                colors[links[currentIndex].color].flat
              ),
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/Search-Icon.svg`}
              alt="Buscar en Google"
            />
          </a>
          {navigator.canShare && (
            <button className={styles.RoundedButton} onClick={handleClick}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/Share-Icon.svg`}
                alt="Compartir actor"
              />
            </button>
          )}
        </div>
      </nav>
      {details?.device.type ? (
        <Scroller current={current} links={links} onChange={onChange} />
      ) : (
        <>
          <button
            onClick={handleBackward}
            className={styles.ArrowLeft}
            style={{ background: colors[links[currentIndex].color].gradient }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
              alt="Atrás"
            />
          </button>
          <button
            onClick={handleForward}
            className={styles.ArrowRight}
            style={{ background: colors[links[currentIndex].color].gradient }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
              alt="Adelante"
            />
          </button>
        </>
      )}
    </>
  );
};

export default ActorNav;
