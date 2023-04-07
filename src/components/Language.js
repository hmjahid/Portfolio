import './Language.css';

const Language = () => {
  return (
    <div className="Language" id='Language'>
    <h2 className='LanguageHeading'>Language</h2>
     <section className='LanguageSection'>
     <h2 style={{color : "ivory"}}><u>My Language Proficiency :</u></h2>
     <ul>
        <li>Bengali (Native)</li>
        <li>English (Working Proficiency)</li>
        <li>Hindi (Working Proficiency)</li>
        <li>Bahasa Melayu (Working Proficiency)</li>
      </ul>
     </section>
    </div>
  )
}

export default Language;