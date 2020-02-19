import styled from 'styled-components';

export const Container = styled.div`
 
    .App{

      margin: 0px;

      background-color: #F037A5;
      background: --webkit-gradient(linear, left top, left bottom, color-stop(-60%, #F037A5), color-stop(140%, #FAE62D));
      background: linear-gradient(#F037A5 -60%, #FAE62D 140%);

      .infoContent{
        position: relative;
        display: -webkit-box;
        display: flex;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -moz-align-items: center;
        -ms-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -moz-justify-content: center;
        -ms-justify-content: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        min-height: 100vh;


        h1{

          font-size: 80px;
          font-weight: bolder;
          letter-spacing: 1px;
          line-height: 1.5;
          margin-top: 0;

        }

        h4{
          font-size: 18px;
          font-weight: 400;
          margin: .5em 0 1em;
        }

        .btnGreen{
          margin-top: 20px;
          background-color: #1aa34a;
          -webkit-box-shadow: none;
          box-shadow: none;
          text-decoration: none;
          font-size: 14px;
          font-weight: bolder;
          line-height: 1;
          border-radius: 500px;
          padding: 16px 48px 18px;
          -webkit-transition-property: background-color, border-color, color, -webkit-box-shadow, -webkit-filter;
          transition-property: background-color, border-color, color, -webkit-box-shadow, -webkit-filter;
          transition-property: background-color, border-color, color, box-shadow, filter;
          transition-property: background-color, border-color, color, box-shadow, filter, -webkit-box-shadow, -webkit-filter;
          -webkit-transition-duration: .3s;
          transition-duration: .3s;
          border-width: 0;
          letter-spacing: 2px;
          min-width: 160px;
          text-transform: uppercase;
          white-space: normal;
          color: #fff;

        }


      }

    }


`;
