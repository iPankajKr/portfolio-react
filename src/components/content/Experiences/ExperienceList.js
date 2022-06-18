import experiences from '../../../data/experiences'
import ExperienceCard from './ExperienceCard';

const ExperienceList = () => {
    
    let Experiences = experiences;
    

    return (
        <div id="experiences" className="md:pt-[88px]">
            <h2 className="sticky top-0 z-40 py-[24px] text-sm font-bold tracking-widest uppercase md:sr-only text-white nav-bg">Experiences</h2>
            <div className="pt-[32px] pb-[40px] -my-[8px] group md:py-0">
                {Experiences.map((experience) => (
                    <ExperienceCard 
                        key={experience.id}
                        title={experience.title}
                        description={experience.description}
                        duration={experience.duration}
                        techStack={experience.techStack}
                        isCurrent={experience.isCurrent}  
                    />
                ))}
            </div>
        </div>
    )
}

export default ExperienceList