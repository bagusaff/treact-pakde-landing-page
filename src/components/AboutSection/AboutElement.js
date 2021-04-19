import styled from "styled-components";
export const AboutContainer = styled.div`
  width: 100%;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  /* @media screen and (max-width:768px){
        margin-bottom:50px;
    } */
`;

export const Wrapper = styled.div`
  max-width: 1140px;
  margin: auto;
  display: flex;
  padding: 5rem 0rem;
`;

export const Left = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center; /* center items vertically, in this case */
  h1 {
    font-weight: 600;
    font-size: 2.2rem;
    margin-bottom: 30px;
    color: #305474;
    border-bottom: 2px solid #ffa833;
    transform: rotate(0.16deg);
  }
  strong {
    font-weight: 600;
    font-size: 2.7rem;
  }
  h2 {
    font-weight: 600;
    font-size: 1.2rem;
    color: #000;
  }
  p {
    font-weight: 400;
    font-size: 1rem;
    color: #000;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    padding-top: 20px;
    order: 2;
    h1,
    strong {
      font-size: 1.3rem;
    }
    h2 {
      font-size: 1rem;
    }
    p {
      padding-top: 5px;
      font-size: 0.7rem;
    }
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-top: 10px;
    font-weight: 600;
    font-size: 1.2rem;
    color: #000;
  }
  h3 {
    color: #a1a1a1;
    font-weight: 600;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    order: 1;
    h2 {
      font-size: 1rem;
    }
    h3 {
      font-size: 0.6rem;
    }
  }
`;

export const BtnWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #fff;
  color: #000;
  text-decoration: none;
  white-space: nowrap;
  padding: 10px 27px;
  outline: none;
  width: 100%;
  font-weight: 500;
  text-align: center;
  border: 1px solid #ffa833;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 400px) {
    margin-bottom: 20px;
    font-size: 0.7rem;
  }
`;

export const SocialBtnLink = styled.a`
  border-radius: 50px;
  margin-right: 5px;
  background: ${(props) => props.background || "#000"};
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  padding: 5px 12px;
  outline: none;
  width: 100%;
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
    border-radius: 20%;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Img = styled.img`
  max-width: 80%;
  height: auto;
  @media screen and (max-width: 768px) {
    max-width: 50%;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;
