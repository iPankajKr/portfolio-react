import skills from '../../../data/skills'
import SkillCard from './SkillCard';

import { IconName } from "react-icons/si";

const SkillList = () => {
    
    let Skills = skills;
    

    return (
        <div id="skills" className="md:pt-[88px]">
            <h2 className="sticky top-0 z-40 py-[24px] text-sm font-bold tracking-widest uppercase md:sr-only text-white nav-bg">Skills</h2>
            <div className="flex flex-wrap pt-8 pb-[40px] -my-1 md:-m-1 group md:py-0">
                {Skills.map((skill) => (
                    <SkillCard 
                        key={skill.id}
                        name={skill.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default SkillList