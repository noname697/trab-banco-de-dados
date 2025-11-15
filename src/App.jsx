import styled from "styled-components";

const darkBackground = "#1a202c";
const boxBackground = "#2d3748";
const primaryBlue = "#4299e1";
const hoverBlue = "#3182ce";
const lightText = "#cbd5e0";
const titleBlue = "#63b3ed";

const GlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${darkBackground};
  font-family: "Arial, sans-serif";
`;

const LoginBox = styled.div`
  background-color: ${boxBackground};
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); /* Sombra mais escura para tema escuro */
  width: 350px;
  text-align: center;
`;

const Title = styled.h2`
  font-family: sans-serif;
  color: ${titleBlue};
  margin-bottom: 30px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 12px 10px;
  border-radius: 5px;
  border: 1px solid ${primaryBlue};
  background-color: ${boxBackground};
  color: ${lightText};
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: ${titleBlue};
    box-shadow: 0 0 0 1px ${titleBlue};
  }
`;

const Button = styled.button`
  font-family: sans-serif;
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: none;
  background-color: ${primaryBlue};
  color: white;
  font-size: 18px;
  font-weight: 100;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${hoverBlue};
  }

  ${InputGroup}:last-of-type & {
    margin-top: 10px;
  }
`;

function App() {
  return (
    <GlobalContainer>
      <LoginBox>
        <Title>Login</Title>

        <InputGroup>
          <Input type="text" placeholder="Username" />
        </InputGroup>

        <InputGroup>
          <Input type="password" placeholder="Password" />
        </InputGroup>

        <Button>Entrar</Button>
      </LoginBox>
    </GlobalContainer>
  );
}

export default App;
