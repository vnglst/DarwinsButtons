import { React, ReactDOM } from "https://unpkg.com/es-react@16.8.60";
import htm from "https://unpkg.com/htm?module";

const html = htm.bind(React.createElement);

const generateStyle = ({
  fontSize,
  borderRadius,
  paddingHor,
  paddingVer,
  h,
  s,
  l,
  textR,
  textG,
  textB,
  textShadow,
  boxShadow1,
  boxShadow2,
  boxShadow3
}) => ({
  fontWeight: 900,
  fontSize: `${fontSize}px`,
  padding: `${paddingVer}em ${paddingHor}em`,
  borderRadius: `${borderRadius}em`,
  textShadow: `0 ${textShadow}px 0 rgba(0, 0, 0, 0.07)`,
  background: `hsl(${h}, ${s}%, ${l}%)`,
  border: "1px solid #011627",
  color: `rgb(${textR}, ${textG}, ${textB})`,
  boxShadow: `0px 1px ${boxShadow1}px 0px rgba(0, 0, 0, 0.2), 0px 2px ${boxShadow2}px 0px rgba(0, 0, 0, 0.14), 0px ${boxShadow3}px 1px -2px rgba(0, 0, 0, 0.12)`,
  textDecoration: "none"
});

const randomRange = (min, max) => {
  const diff = max - min;
  return Math.random() * diff + min;
};

const generateVariant = base => {
  return {
    fontSize: base.fontSize + randomRange(-5, 5),
    borderRadius: base.borderRadius + randomRange(-0.5, 0.5),
    paddingVer: base.paddingVer + randomRange(-1, 1),
    paddingHor: base.paddingHor + randomRange(-1, 1),
    h: base.h + randomRange(-40, 40),
    s: base.s + randomRange(-40, 40),
    l: base.l + randomRange(-40, 40),
    textR: base.textR + randomRange(-100, 100),
    textG: base.textG + randomRange(-100, 100),
    textB: base.textB + randomRange(-100, 100),
    textShadow: base.textShadow + randomRange(-1, 1),
    boxShadow1: base.boxShadow1 + randomRange(-5, 5),
    boxShadow2: base.boxShadow2 + randomRange(-5, 5),
    boxShadow3: base.boxShadow3 + randomRange(-5, 5)
  };
};

const Button = ({ base, onClick }) => {
  const style = generateStyle(base);
  return html`
    <button
      style=${style}
      onClick=${e => {
        e.preventDefault();
        onClick();
      }}
    >
      Click me!
    </button>
  `;
};

const App = () => {
  const [base, setBase] = React.useState({
    fontSize: 36.05357093558289,
    borderRadius: -0.593495476581037,
    paddingVer: 0.5786034737012433,
    paddingHor: 2.243450597051113,
    h: -22.152690302604096,
    s: 109.37276492437185,
    l: 76.2293000260203,
    textR: -197.43462519503603,
    textG: -51.676842568469965,
    textB: -45.56370399099363,
    textShadow: 4.1607562001386365,
    boxShadow1: 15.29065458141783,
    boxShadow2: 12.756989757280376,
    boxShadow3: 0.2278445171283936
  });

  const variants = [{ ...base }];

  for (let i = 0; i < 20; i++) {
    variants.push(generateVariant(base));
  }

  console.log("Current style: ", generateStyle(base));

  return html`
    ${variants.map(
      (v, idx) => html`<${Button} 
            base=${v} 
            key=${idx}
            onClick=${() => {
              setBase(v);
            }}>
        Click me!
      </${Button}>`
    )}
  `;
};

ReactDOM.render(
  html`
    <${App} name="Koen" />
  `,
  document.getElementById("app")
);
