import { useEffect } from "react";
import styled from "styled-components";
import { ButtonGroup } from "./components/ButtonGroup";
import { Day } from "./components/Day";
import { getDayString } from "./utils/helpers";
import useLocalStorage from "./utils/hooks";

// toggle Button Text

export default function App() {
  const [dates, setDates] = useLocalStorage("workDates", [
    { day: getDayString() },
  ]);

  useEffect(() => {
    document.title = "Timestamp App";
  }, []);

  if (!dates) return "Something went wrong";

  return (
    <>
      <main>
        <Day dates={dates}></Day>
      </main>
      <footer>
        <StyledNav>
          <ButtonGroup setDates={setDates}></ButtonGroup>
        </StyledNav>
      </footer>
    </>
  );
}

const StyledNav = styled.nav`
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
