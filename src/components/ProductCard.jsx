import styled from "@emotion/styled";

const ProductCard = ({ image, title, price, description, category }) => {
  return (
    <Container>
      <Card>
        <Image src={image} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Category>{category}</Category>
        <Price>${price}</Price>
      </Card>
    </Container>
  );
}

export default ProductCard;

const Price = styled.div``;
const Category = styled.div``;
const Description = styled.div``;
const Title = styled.div``;
const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Card = styled.div`
  width: 350px;
  height: 300px;
  margin: 30px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 20px 0px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
