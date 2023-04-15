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
  background-color: whitesmoke;
  padding: 10px 30px;
  border-top: 1px solid;
  border-color: lavender;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Footer = ({ isSelected, onToday, onDelete }: FooterProps) => {
  return (
    <Container>
      <Button onClick={onToday}>Today</Button>
      {isSelected && <Button onClick={onDelete}>Delete</Button>}
    </Container>
  );
};
export default Footer;
