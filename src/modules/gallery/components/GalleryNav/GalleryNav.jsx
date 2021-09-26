import { useLocation } from "react-router-dom";
import { transparentize } from "polished";
import { useUserAgent } from "@oieduardorabelo/use-user-agent";

import styles from "./GalleryNav.module.scss";

import Scroller from "modules/common/components/Scroller";
import colors from "settings/colors";
import useCircularNavigation from "modules/common/hooks/useCircularNavigation";

const GalleryNav = ({ current, links, onChange }) => {
  const details = useUserAgent();
  const location = useLocation();
  const { currentItem, previousItem, nextItem } = useCircularNavigation(
    current,
    links
  );

  const slug = currentItem.name.replace(" ", "+");

  const handleClick = async (e) => {
    const { name } = currentItem;

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
    const previousLink = previousItem.path;

    onChange(previousLink);
  };

  const handleForward = () => {
    let nextLink = nextItem.path;

    onChange(nextLink);
  };

  return (
    <>
      <nav className={styles.ActorNav}>
        {currentItem.name}
        <div className={styles.Buttons}>
          <a
            href={`https://www.google.com/search?q=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.RoundedButton}
            style={{
              background: colors[currentItem.color].gradient,
              color: transparentize(0.3, colors[currentItem.color].flat),
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
            style={{ background: colors[currentItem.color].gradient }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/ChevronArrow-Icon.svg`}
              alt="Atrás"
            />
          </button>
          <button
            onClick={handleForward}
            className={styles.ArrowRight}
            style={{ background: colors[currentItem.color].gradient }}
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

export default GalleryNav;
