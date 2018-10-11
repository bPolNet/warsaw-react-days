import styled from 'styled-components'

const Container = styled.div`{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}`

const Input = styled.input`{
    display: flex;
    width: 500px;
    height: 40px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 10px 10px 10px 100px;
    transition: all 0.1s ease-out;
}`

const Button = styled.button`{
  display: flex;
  width: 500px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid lightgray;
  border-radius: 3px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  text-align: center;
  padding: 10px 10px 10px 100px;
  background-color: #f6dc3b;

  :hover {
  background-color: #4CAF50;
  color: yellow;
  }
}`

export {
  Container,
  Input,
  Button
}
