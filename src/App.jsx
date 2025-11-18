import styled from "styled-components";
import tabela from "../src/assets/image.png";
import { Briefcase, Activity, BarChart2 } from "react-feather"; // Ícones para um toque de tecnologia

// --- Styled Components ---

const DarkBlueTheme = styled.div`
  min-height: 100vh;
  background-color: #0d111c; /* Fundo Principal - Escuro (quase preto azulado) */
  color: #c9d1d9; /* Cor do Texto Principal */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #1f6feb; /* Linha de destaque azul vibrante */
  padding-bottom: 15px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #58a6ff; /* Azul claro para o título */
  font-weight: 700;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PowerBIContainer = styled.div`
  flex-grow: 1;
  background-color: #161b22; /* Fundo do container do Power BI - Escuro mais suave */
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(88, 166, 255, 0.2); /* Sombra azul para efeito tecnológico */
  padding: 20px;
  min-height: 600px; /* Altura mínima para o dashboard */
  overflow: hidden; /* Garante que o conteúdo não vaze */
`;

const DashboardTitle = styled.h2`
  font-size: 1.8em;
  color: #c9d1d9;
  margin-bottom: 15px;
  border-left: 4px solid #1f6feb;
  padding-left: 10px;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const MetricCard = styled.div`
  background-color: #1f2735; /* Fundo dos cards de métricas */
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #1f6feb80; /* Borda sutil azul */
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(88, 166, 255, 0.4);
  }
`;

const MetricValue = styled.p`
  font-size: 2.2em;
  font-weight: 600;
  color: #79c0ff; /* Azul para destaque do valor */
  margin: 5px 0 0;
`;

const MetricLabel = styled.p`
  font-size: 0.9em;
  color: #8b949e;
  margin: 0;
`;

// Placeholder para o componente de embed do Power BI (onde o iframe real seria colocado)
const PowerBIEmbed = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  color: #4a7dff; /* Texto do placeholder */
  font-size: 1.2em;
  background-color: #0d111c; /* Fundo interno do embed */
  border-radius: 6px;
  /* Simula a área do dashboard real */
`;

// --- Componente Principal ---

const App = () => {
  return (
    <DarkBlueTheme>
      <Header>
        <Title>
          <BarChart2 size={32} />
          Dashboard de Mercado (Power BI)
        </Title>
        <p>Atualizado em: {new Date().toLocaleDateString("pt-BR")}</p>
      </Header>

      {/* Seção de Métricas Chave */}
      <MetricsGrid>
        <MetricCard>
          <Briefcase size={24} color="#79c0ff" />
          <MetricValue>R$ 20.488,34</MetricValue>
          <MetricLabel>Vendas no Mês</MetricLabel>
        </MetricCard>
        <MetricCard>
          <Activity size={24} color="#79c0ff" />
          <MetricValue>18</MetricValue>
          <MetricLabel>Compras</MetricLabel>
        </MetricCard>
        <MetricCard>
          <BarChart2 size={24} color="#79c0ff" />
          <MetricValue>3</MetricValue>
          <MetricLabel>Notebook X200 Vendidos</MetricLabel>
        </MetricCard>
      </MetricsGrid>

      <PowerBIContainer>
        <DashboardTitle>Análise Detalhada do Mercado</DashboardTitle>
        <PowerBIEmbed>
          <img src={tabela} style={{ width: "100%", height: "100%" }} />
        </PowerBIEmbed>
      </PowerBIContainer>
    </DarkBlueTheme>
  );
};

export default App;
