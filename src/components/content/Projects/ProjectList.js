import projects from '../../../data/projects'
import ProjectCard from './ProjectCard';

const ProjectList = () => {
    
    let Projects = projects;
    

    return (
        <div id="projects" className="md:pt-[88px] md:-mt-[96px]">
            <h2 className="sticky top-0 z-40 py-[24px] text-sm font-bold tracking-widest uppercase md:sr-only text-white nav-bg">Projects</h2>
            <div className="pt-[32px] pb-[40px] -my-[8px] group md:py-0">
                {Projects.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        language={project.language}
                        tags={project.tags}
                        url={project.url}  
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectList