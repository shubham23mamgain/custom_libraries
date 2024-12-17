/* eslint-disable react/prop-types */

import styled from "styled-components";
import DrawSvg from "./DrawSvg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
`;

const Title = styled.h1`
font-size:36px,
text-transform: capitalize;
display:flex;
justify-content:center;
align-items:center;
margin: 1rem auto;
border-bottom : 2px solid black
width:fit-content;


`;

const Container = styled.div`
  width: 70%;
  height: 200vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightblue;

  & > *:nth-of-type(2n + 1) {
    justify-content: start;

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
    }

    p {
      border-radius: 40px 0 40px 0;
    }
  }

  & > *:nth-of-type(2n) {
    justify-content: end;

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }

    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid black;
`;

const Box = styled.p`
  height: fit-content;
  background-color: white;
  color: red;
  padding: 1rem;
  position: relative;
  border: 1px solid green;
`;

const Text = styled.span`
  display: block;
  font-size: 36;
  text-transform: capitalize;
  color: red;

  font-weight: 400;
  margin: 0.5rem 0;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 36;
  text-transform: capitalize;
  color: black;
`;

const TimelineItem = ({ title, text }) => {
  return (
    <Item>
      <ItemContainer>
        <Box>
          <Subtitle>{title} </Subtitle>
          <Text>{text}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  return (
    <Section>
      <Title> Timeline </Title>

      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>

        <Items>
          <Item>&nbsp;</Item>
          <TimelineItem
            title="Day 1"
            text="Day Detils dsfdsfmmdsf dskjfhsldkjfsf kjdhsfkjdshf kjdsfhkjsdf"
          />

          <TimelineItem
            title="Day 1"
            text="Day Detils dsfdsfmmdsf dskjfhsldkjfsf kjdhsfkjdshf kjdsfhkjsdf"
          />

          <TimelineItem
            title="Day 1"
            text="Day Detils dsfdsfmmdsf dskjfhsldkjfsf kjdhsfkjdshf kjdsfhkjsdf"
          />

          <TimelineItem
            title="Day 1"
            text="Day Detils dsfdsfmmdsf dskjfhsldkjfsf kjdhsfkjdshf kjdsfhkjsdf"
          />

          <Item>&nbsp;</Item>
          <Item>&nbsp;</Item>
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
