import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function JobDetailPage() {
  const [job, setJob] = useState({})
  const { id } = useParams();

  useEffect(() => {
    async function fetchJobDetails() {
      const resp = await fetch(BACKEND_URL + "jobs/" + id);
      const json = await resp.json()
      console.log({json})
      setJob(json);
    }

    fetchJobDetails()
  }, [])

  if (!job.title) return <h1>Loading!</h1>

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
    </div>
  );
}
