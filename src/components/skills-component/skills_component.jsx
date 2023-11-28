import React from 'react'
import { Box, SkillCard, SkillsContainer } from './skills_component.css';

export default function SkillsComponent() {
    const allSkills= [
        {"name": "web", "skills": []},
        {"name": "mobile", "skills": []},
        {"name": "ai", "skills": []},
        {"name": "it", "skills": []},
        {"name": "social", "skills": []},


];
    return (
        <>
            <SkillsContainer>
                <Box choices={true}>
                    {allSkills.map((skill)=>{return(<SkillCard>{skill["name"]}</SkillCard>)})}
                </Box>
                <Box choices={true}></Box>
                <Box selected={true}></Box>
            </SkillsContainer>
        </>
    )
}
