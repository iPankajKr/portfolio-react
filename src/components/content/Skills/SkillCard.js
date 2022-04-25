const SkillCard = ({name}) => {
    return (
      <article className="flex-none w-full my-1 md:m-1 md:w-[240px] md:min-h-[240px] lg:w-[320px] lg:min-h-[0px] text-white">
          <div className="flex flex-col justify-between w-full h-full p-10 transition min-h-inherit bg-bgGray md:group-hover:opacity-50 md:hover:!opacity-100 md:hover:scale-[1.1]">
            {name}
          </div>
      </article>
    )
  }
  
  export default SkillCard