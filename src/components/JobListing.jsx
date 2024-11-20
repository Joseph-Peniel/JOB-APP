import PropTypes from 'prop-types';
import { useState } from 'react';
import {FaMapMarker} from 'react-icons/fa'
import { Link } from 'react-router-dom'; 


const JobListing = ({ job }) => {
  const [showFullDes, setShowFullDes] = useState(false);

  let des = job.description;
// to reduce the number words displayed in description
  if (!showFullDes) {
    des = des.substring(0,90) + '...'
  }
  return (
    <div className="bg-white rounded-xl shadow-md relative">
          <div className="p-4">
            <div className="mb-6">
              <div className="text-gray-600 my-2">{job.type}</div>
              <h3 className="text-xl font-bold">{job.title}</h3>
            </div>

            <div className="mb-5">{des}
            </div>

            <button 
            onClick={()=>setShowFullDes(prevState =>!prevState)} 
            className="text-indigo-500 mb-5 hover:text-indigo-600">
            {showFullDes ? 'See less' : 'Read more'}
            </button>

            <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

            <div className="border border-gray-100 mb-5"></div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
              <div className="text-orange-700 mb-3">
                <FaMapMarker className='inline text-lg mb-1 mr-1'/>
                {job.location}
              </div>
              <Link
                to={`/job/${job.id}`} className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
              >
               Read More
              </Link>
                    </div>
          </div>
        </div>
  )
}

JobListing.propTypes = {
  job: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    salary: PropTypes.number,
    location: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired
};

export default JobListing