import styled from 'styled-components'

export const SpecialtiesTitle = styled.h2`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: #231f20;
`

export const SpecialtiesList = styled.ul`
  padding: 0;
`

export const SpecialtyItem = styled.li`
  list-style-type: none;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2;
  letter-spacing: normal;
  color: #55585a;
  text-align: left;
  cursor: pointer;
  
  &:hover {
    color: #a07b4e;
    font-weight: bolder;
  }
`;