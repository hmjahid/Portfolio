import './Language.css';

const Language = () => {
  return (
    <div className="Language" id='Language'>

    {/** <h2 className='LanguageHeading'>Languages</h2> */}

     <section className='LanguageSection'>
     <h2 style={{color : "ivory", fontSize: "32px"}}><u>My Language Proficiency</u> :</h2>
     <div className='LanguageDetails'>
        <ul>
            <li>Bengali (Native)</li>
            <li>English (Working Proficiency)</li>
            <li>Hindi (Working Proficiency)</li>
            <li>Bahasa Melayu (Working Proficiency)</li>
          </ul>
      </div>
     </section>
    </div>
  )
}

export default Language;