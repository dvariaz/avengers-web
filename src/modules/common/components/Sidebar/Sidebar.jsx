import "./Sidebar.scss";

const Sidebar = ({ position, social, scroller, lang }) => {
  return (
    <>
      <aside className={`Sidebar ${position}`}>
        {social && (
          <div className="social">
            <a
              href="https://www.youtube.com/user/MARVEL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`/assets/Icons/Social/Youtube-Icon.png`}
                alt="Visita Youtube"
              />
            </a>
            <a
              href="https://twitter.com/Avengers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`/assets/Icons/Social/Twitter-Icon.png`}
                alt="Visita Twitter"
              />
            </a>
            <a
              href="https://www.instagram.com/avengers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`/assets/Icons/Social/Instagram-Icon.png`}
                alt="Visita Instagram"
              />
            </a>
          </div>
        )}
      </aside>
      {lang && <div className="nav-language">{lang}</div>}
    </>
  );
};

export default Sidebar;
