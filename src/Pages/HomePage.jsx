import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJob from '../components/ViewAllJob'



const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJob />
      </div>
  )
}

export default HomePage