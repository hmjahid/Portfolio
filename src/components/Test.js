import './Test.css';

const Test = () => {
  return (
    <div className="Test" id='Test'>

        {/** <h2 className='TestHeading'>Tests</h2> */}

        <section className='TestSection'>
        <h2 style={{color: "white", fontSize: "32px"}}><u>Tests</u> :</h2>
        <h3>EF Standard English Test (EF SET)</h3>
        <h4> * March 2023 *</h4>
        <a href="https://www.efset.org/"><h5>EFSET.ORG</h5></a>
        <a href="https://drive.google.com/file/d/1txIpOu4HFfcycx7qCpgkpZTdh7Ww9F8A/view" target="_blank"><button>Show Test Result</button></a>
        </section>
    </div>
  )
}

export default Test;