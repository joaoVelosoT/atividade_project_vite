import "./cardProject.css"

const CardProject = ({image, title, subTitle}) => {
    return (
        <li className="projectItem">
          <img src={image} alt="" />
          <p>
            <span className="titleProjectItem">{title}</span>
            {subTitle}
          </p>
          <button>
            Source
          </button>
        </li>
    )
}

export default CardProject