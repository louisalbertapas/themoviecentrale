import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
  containerClass?: string;
  activeClass?: string;
  inactiveClass?: string;
  breadcrumbClass?: string;
  separatorClass?: string;
  separator?: string;
  type: string;
  label: string;
  id: string;
  title: string;
}

const Breadcrumb: React.FC<Props> = ({ containerClass, activeClass, inactiveClass, breadcrumbClass, separatorClass, separator, type, label, id, title }) => {
  return (
    <div className={containerClass}>
      <span><Link to='/'
        className={`${inactiveClass} ${breadcrumbClass}`}>
          Home
        </Link>
        <span className={separatorClass}>{separator ? separator : "|"}</span>
       <Link to={`/${type}`}
        className={`${inactiveClass} ${breadcrumbClass}`}>
         {label}
        </Link>
        <span className={separatorClass}>{separator ? separator : "|"}</span>
       <Link to={`/${type}/${id}`}
        className={`${activeClass} ${breadcrumbClass}`}>
         {title}
        </Link>
      </span>
    </div>
  )
}

export default Breadcrumb;
