import styled from "styled-components";
import tabela from "../src/assets/image.png";
import { Briefcase, Activity, BarChart2 } from "react-feather"; // Ícones para um toque de tecnologia

// --- Styled Components ---

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f2f5; /* Light Gray - Fundo principal */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
`;

const Header = styled.header`
  background-color: #2c3e50; /* Dark Blue Gray - Cabeçalho */
  color: #ecf0f1; /* Off-white */
  padding: 20px 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 1.8em;
    font-weight: 500;
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 25px;
  }

  li a {
    color: #ecf0f1;
    text-decoration: none;
    font-weight: 400;
    font-size: 1.05em;
    transition: color 0.3s ease;

    &:hover {
      color: #3498db; /* Tech Blue - Destaque */
    }
  }
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 40px;
  display: grid;
  grid-template-columns: 2fr 1fr; /* Power BI maior que Weka */
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* Coluna única em telas menores */
  }
`;

const SectionCard = styled.section`
  background-color: #ffffff; /* White - Cartão */
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 30px;
  border-top: 5px solid ${(props) => props.color || "#3498db"}; /* Borda superior colorida */

  h2 {
    color: #2c3e50; /* Dark Blue Gray */
    margin-top: 0;
    margin-bottom: 25px;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      color: ${(props) => props.color || "#3498db"};
    }
  }

  p {
    line-height: 1.6;
    color: #555;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    background-color: #f9f9f9;
    padding: 10px 15px;
    margin-bottom: 8px;
    border-left: 4px solid #3498db;
    border-radius: 4px;
    font-size: 0.95em;
    color: #444;
  }
`;

const PowerBiIframe = styled.img`
  width: 100%;
  height: 500px; /* Altura fixa para o dashboard */
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #ecf0f1;
`;

const Footer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;
  padding: 20px;
  font-size: 0.9em;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

// --- Ícones (Exemplo, você precisaria de uma biblioteca como react-icons) ---
const ChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="9" y1="12" x2="9" y2="18"></line>
    <line x1="15" y1="6" x2="15" y2="18"></line>
  </svg>
);
const DataIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
    <polyline points="17 2 12 7 7 2"></polyline>
  </svg>
);

// --- Componente Principal ---

const App = () => {
  const powerBiEmbedUrl =
    "https://app.powerbi.com/view?r=eyJrIjoiNzQ4YTFlOTktNDBhYS00NzUyLThjYTUtYmZjZTA3MGFhZDY2IiwidCI6IjI0ODQ1MTI5LWUyNjMtNGU3NC05OTAyLTg3ODk3NTlkZTc2MiIsImMiOjl9";

  return (
    <DashboardContainer>
      <Header>
        <h1>MercadoTech - Admin Dashboard</h1>
        <Nav>
          <ul>
            <li>
              <a href="#dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#gestao">Gestão CRUD</a>
            </li>
            <li>
              <a href="#analise">Análise OLAP</a>
            </li>
            <li>
              <a href="#datamining">Data Mining</a>
            </li>
          </ul>
        </Nav>
      </Header>

      <MainContent>
        {/* Seção Power BI - OLAP */}
        <SectionCard id="analise" color="#3498db">
          {" "}
          {/* Tech Blue */}
          <h2>
            <ChartIcon />
            Análise OLAP (Power BI)
          </h2>
          <p>
            Explore as vendas e o desempenho do produto de forma
            multidimensional. Este painel exibe a quantidade de cada produto
            comprado, o preço unitário e o total arrecadado, permitindo análises
            por período, cliente ou tipo de produto.
          </p>
          <PowerBiIframe src={"../src/assets/imagea.png"}></PowerBiIframe>
          <PowerBiIframe src={"../src/assets/image.png"}></PowerBiIframe>
        </SectionCard>

        {/* Seção Data Mining - Weka */}
        <SectionCard id="datamining" color="#2ecc71">
          {" "}
          {/* Emerald Green */}
          <h2>
            <DataIcon />
            Insights de Data Mining (Weka)
          </h2>
          <p>
            Resultados da aplicação de algoritmos de Data Mining (Weka) para
            descobrir padrões e previsões. Aqui, um exemplo de "Análise de Cesta
            de Compras" usando o algoritmo Apriori.
          </p>
          <h3>Regras de Associação Encontradas:</h3>
          <ul>
            <li>
              **Regra 1:** Se (Compra: "Tablet Gamma") Então (Compra: "Fone de
              Ouvido Beta")
              <br />
              *Confiança: 85%, Suporte: 0.15*
            </li>
            <li>
              **Regra 2:** Se (Compra: "Notebook X200") Então (Compra: "Câmera
              Delta")
              <br />
              *Confiança: 70%, Suporte: 0.10*
            </li>
            <li>
              **Regra 3:** Se (Compra: "Smartphone Alpha") Então (Compra:
              "Monitor 24HD")
              <br />
              *Confiança: 60%, Suporte: 0.08*
            </li>
          </ul>
          <p>
            Essas regras ajudam a identificar produtos frequentemente comprados
            juntos, otimizando estratégias de *cross-selling* e layout da loja.
          </p>
        </SectionCard>
      </MainContent>

      <Footer>
        © {new Date().getFullYear()} MercadoTech. Todos os direitos reservados.
      </Footer>
    </DashboardContainer>
  );
};

export default App;
