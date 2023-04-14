import styled from "styled-components";
import Button from "../../ui/Button";
type FooterProps = {
  isSelected: boolean;
  onToday: () => void;
  onDelete: () => void;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  alignitems: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Footer = ({ isSelected, onToday, onDelete }: FooterProps) => {
  return (
    <Container>
      <Button>Today</Button>
      {isSelected && <Button>Delete</Button>}
    </Container>
  );
};
export default Footer;
