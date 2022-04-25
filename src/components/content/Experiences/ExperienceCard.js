const ExperienceCard = ({title, description, duration, techStack, isHireCard}) => {
    return (
      <article className={`my-[20px] transition ${isHireCard ? 'bg-[#2c2c3c] border' : 'bg-bgGray'} md:group-hover:opacity-50 md:hover:!opacity-100 md:hover:scale-[1.1]`}>
          <div className="block p-[40px]">
            <p className="text-xs font-light tracking-widest uppercase text-white">{duration}</p>
            <h2 className="mt-[10px] text-lg font-semibold leading-tight text-white">{title}</h2>
            <p className="mt-[8px]">
                {description}
            </p>
            {isHireCard && <button onClick={() => window.location.href = 'mailto:contactpankajkr@gmail.com'} className="bg-white text-bgGray py-[5px] px-3 mt-5 text-xs uppercase tracking-wider font-bold">Hire Me</button>}
          <div className="mt-[20px] uppercase text-xs overflow-x-auto overflow-hidden no-scrollbar overflow-fade">
            {!isHireCard && techStack.map((item) => <span className="border px-2 mr-[10px] whitespace-nowrap">{item}</span>)}
            </div>
          </div>
      </article>
    )
  }
  
  export default ExperienceCard