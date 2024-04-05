import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div className={css({ fontSize: "2xl", fontWeight: "bold", bg: 'primary.950', color: 'primary.100' })}>
      Hello 🐼!
    </div>
  );
}
