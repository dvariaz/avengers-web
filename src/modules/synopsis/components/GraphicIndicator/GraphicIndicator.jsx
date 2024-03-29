import "./GraphicIndicator.scss";

const GraphicIndicator = ({ color }) => {
  return (
    <>
      <svg id="ElementIndicator" viewBox="0 0 512 512">
        <defs>
          <radialGradient
            id="OuterGradient"
            cx="85%"
            cy="85%"
            fx="85%"
            fy="85%"
          >
            <stop offset="0.5" stopColor="black" />
            <stop offset="1" stopColor="white" />
          </radialGradient>
          <linearGradient id="InnerGradient">
            <stop offset="0.4" stopColor="black" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <mask id="InnerMask">
            <rect
              x="0"
              y="0"
              width="512"
              height="512"
              fill="url(#InnerGradient)"
            />
          </mask>
          <mask id="OuterMask">
            <rect
              x="0"
              y="0"
              width="512"
              height="512"
              fill="url(#OuterGradient)"
            />
          </mask>
        </defs>

        <g fill={color} id="Circle_Outer" mask="url(#OuterMask)">
          <path
            d="M256,36c29.7,0,58.5,5.8,85.6,17.3c26.2,11.1,49.7,26.9,69.9,47.1c20.2,20.2,36.1,43.7,47.1,69.9
                        c11.5,27.1,17.3,55.9,17.3,85.6s-5.8,58.5-17.3,85.6c-11.1,26.2-26.9,49.7-47.1,69.9c-20.2,20.2-43.7,36.1-69.9,47.1
                        C314.5,470.2,285.7,476,256,476s-58.5-5.8-85.6-17.3c-26.2-11.1-49.7-26.9-69.9-47.1c-20.2-20.2-36.1-43.7-47.1-69.9
                        C41.8,314.5,36,285.7,36,256s5.8-58.5,17.3-85.6c11.1-26.2,26.9-49.7,47.1-69.9c20.2-20.2,43.7-36.1,69.9-47.1
                        C197.5,41.8,226.3,36,256,36 M256,31C131.7,31,31,131.7,31,256s100.7,225,225,225s225-100.7,225-225S380.3,31,256,31L256,31z"
          />
        </g>
        <g fill={color} id="Circle_Inner" mask="url(#InnerMask)">
          <path
            d="M256,61c26.3,0,51.9,5.2,75.9,15.3c23.2,9.8,44.1,23.9,62,41.8s32,38.8,41.8,62c10.2,24,15.3,49.6,15.3,75.9
                        s-5.2,51.9-15.3,75.9c-9.8,23.2-23.9,44.1-41.8,62s-38.8,32-62,41.8c-24,10.2-49.6,15.3-75.9,15.3s-51.9-5.2-75.9-15.3
                        c-23.2-9.8-44.1-23.9-62-41.8s-32-38.8-41.8-62C66.2,307.9,61,282.3,61,256s5.2-51.9,15.3-75.9c9.8-23.2,23.9-44.1,41.8-62
                        s38.8-32,62-41.8C204.1,66.2,229.7,61,256,61 M256,56C145.5,56,56,145.5,56,256s89.5,200,200,200s200-89.5,200-200S366.5,56,256,56
                        L256,56z"
          />
        </g>

        <g id="Line_Left">
          <line
            stroke={color}
            strokeWidth="5"
            x1="167.4"
            y1="313.6"
            x2="428"
            y2="53"
          />
        </g>
        <g id="Line_Right">
          <line
            stroke={color}
            strokeWidth="5"
            x1="84"
            y1="459"
            x2="344.6"
            y2="198.4"
          />
        </g>
      </svg>
    </>
  );
};

export default GraphicIndicator;
