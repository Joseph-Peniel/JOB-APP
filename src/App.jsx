import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import JobsPage from "./Pages/JobsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import JobPage, { jobLoader } from "./Pages/JobPage";
import AddJob from "./Pages/AddJob";
import EditJobPage from "./Pages/EditJobPage";

const App = () => {
  // to new add Job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    console.log(newJob);
    return;
  };
  
  // delete job
  const deleteJob = async (id) => {
    try {
      const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete job.");
      console.log(`Job with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting job:", error);
    }
    console.log('delete', id)
    
  }

  // Update Job
  const updateJob  = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    // console.log(job);
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route path="/job/:id" element={<JobPage deleteJob={deleteJob}  />}  loader={jobLoader} />
        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />}  loader={jobLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
