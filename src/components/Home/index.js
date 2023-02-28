import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <div>
      <Header />
      <div className="bgContainer">
        <h1 className="heading">Find The Job That Fits Your Life</h1>
        <p className="paragraph">
          Millions of people are searching for jobs,salary,information,company
          reviews.Find the job that fits your ablities and potential.
        </p>
        <Link to="/jobs">
          <button className="button" type="button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Home
