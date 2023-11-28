import styled from 'styled-components';

export const SkillsContainer = styled.div`
width:100%;
border:1px solid lightgray;
border-radius:16px;
margin:4px;
display: flex;
justify-content:space-around;
align-items:center;
`;

export const Box = styled.div`
height:150px;
overflow:auto;
background-color: lightgray;
border-radius:8px;
${({choices})=>choices &&`width:22%; height:300px;`}
${({selected})=>selected &&`width:45%`}
`;

export const SkillCard =styled.div`

`;
export const SkillBadge =styled.div`

`;
