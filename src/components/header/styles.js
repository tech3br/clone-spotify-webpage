import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 50%;
  margin: 0 auto;
  position: fixed;
  margin: 0 auto;
  padding: 0 15px;
  z-index: 3;
  right: 0;
  left: 0;

  @media (min-width: 1200px){
  .content {
    max-width: 1170px;

  }}

  

  .content{

    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 15px; 
    
    
    .headerLeft{

      position: relative;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
      z-index: 1;

      span{
        font-size: 26px;
        font-weight: 800;
        text-shadow: none;
        display: inline-block;
        color: #fff;
      }
    }    
  }
`;
