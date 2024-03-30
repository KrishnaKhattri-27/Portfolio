import React from 'react'
import react from "../assets/images/react.png"
import js from "../assets/images/javascript.png"
import java from "../assets/images/java.png"
import node from "../assets/images/nodejs.png"
import next from "../assets/images/nestjs.png"
import db1 from "../assets/images/mongo-db.png"
import db2 from "../assets/images/mysql.png"
import html from "../assets/images/html.png"
import css from "../assets/images/css.png"
import git from "../assets/images/git.png"
import github from "../assets/images/github.png"
import npm from "../assets/images/npm.png"
import vs from "../assets/images/visual-studio-code.png"
import tail from "../assets/images/tailwind.png"
import boot from "../assets/images/bootstrap-framework-logo.png"
import c from "../assets/images/s.png"

const Skills = () => {
  return (
    <div className='flex flex-wrap gap-10 p-20 h-screen'>
      <img src={react} alt="" className="w-28 h-28" />
      <img src={js} alt="" className="w-28 h-28" />
      <img src={java} alt="" className="w-28 h-28" />
      <img src={node} alt="" className="w-28 h-28" />
      <img src={next} alt="" className="w-28 h-28" />
      <img src={boot} alt="" className="w-28 h-28" />
      <img src={tail} alt="" className="w-28 h-28" />
      <img src={db1} alt="" className="w-28 h-28" />
      <img src={db2} alt="" className="w-28 h-28" />
      <img src={c} alt="" className="w-28 h-28" />
      <img src={git} alt="" className="w-28 h-28" />
      <img src={github} alt="" className="w-28 h-28" />
      <img src={html} alt="" className="w-28 h-28" />
      <img src={css} alt="" className="w-28 h-28" />
      <img src={vs} alt="" className="w-28 h-28" />
      <img src={npm} alt="" className="w-28 h-28" />
    </div>
  )
}

export default Skills
