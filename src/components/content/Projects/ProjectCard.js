const ProjectCard = ({title, description, language, tags, url}) => {
  return (
    <article className="my-[8px] transition bg-bgGray md:group-hover:opacity-50 md:hover:!opacity-100 md:hover:scale-[1.1]">
        <a className="block p-[40px]" href={url} target="_blank" rel="noopener noreferrer">
          <p className="text-xs font-light tracking-widest uppercase text-white">{language}</p>
          <h2 className="mt-[10px] text-lg font-semibold leading-tight text-white">{title}</h2>
          <p className="mt-[8px]">
              {description}
          </p>
        <div className="mt-[20px] uppercase text-xs overflow-x-auto overflow-hidden no-scrollbar overflow-fade">
          {tags.map((tag) => <span className="border px-2 m-[5px] whitespace-nowrap">{tag}</span>)}
          </div>
        </a>
    </article>
  )
}

export default ProjectCard