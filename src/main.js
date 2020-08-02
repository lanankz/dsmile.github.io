*{ margin : 0; }

body,html {
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden; 
}

a {
  text-decoration: none;
}

.container {
  display: flex;
  flex-direction: column;
  position : relative;
  height: 100vh;
  background: #E6E7E8;
}

.background {
  position: absolute;
  top : 0;
  width: 100vw;
  height : auto;
  z-index: 0;
}

.hello {
  z-index: 1;
  padding: 36px 24px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  font-size : 32px;
  color : #011627;
  display: flex;
  flex-direction: column;
}

.hello__ask {
  font-size : 18px;
  color : #8B959C;
  font-weight: normal;
  margin-top : 2px;
}

.container__button {
  position: absolute;
  bottom : 0;
  width: 100vw;
  height : 214px;
  display: flex;
  flex-direction: column;
  padding: 24px;
}

.button {
  position : relative;
  display: flex;
  align-items: center;
  width: calc(100vw - 48px);
  height : 60px;
  margin-bottom : 12px;
  background : #fff;
  border-radius: 4px;
  box-shadow: 
  0 20px 30px -15px rgba(0,0,0,0.2),
  0 40px 40px -20px rgba(0,0,0,0.15),
  0 70px 50px -30px rgba(0,0,0,0.1),
  0 40px 60px -5px rgba(203,14,40,0.1);
  opacity : 0;
  will-change : transform, opacity;
}

.button__icon {
  padding : 0 12px;
}

.button__content {
  display : flex;
  flex-direction: column;
}

.content__name {
  color : #011627;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
}

.content__info {
  color : #31D2F7;
  font-family: 'Source Sans Pro', sans-serif;
  margin : 2px;
  font-size : 12px;
}

.arrow__icon {
  position : absolute;
  right : 9px;
  opacity : .8;
}

@keyframes reveal {
  from { 
    transform: translate3d(0,90px,0);
    opacity: 0;
  }
  to { 
    transform: translate3d(0,0,0);
    opacity: 1;
  }
}
