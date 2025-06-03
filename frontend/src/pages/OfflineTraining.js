import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OfflineTrainingImg from "../assets/images/offlinetraining.jpeg";

const OfflineTraining = () => {
  const { isAuthenticated, currentUser, hasSubscription } = useAuth();
  const navigate = useNavigate();
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/subscription");
    }
  }, [isAuthenticated, navigate]);
  const handleClickHere = () => {
    if (isAuthenticated) {
      // If user is logged in, navigate to the corresponding resource
      navigate("/subscription-form");
    }
  };
  return (
    <>
      <Header />
      <div className="container-fluid py-5">
        <div className="container-fluid py-5">
          <div className="container py-5">
            <h2 className=" text-warning mb-4">
              🏫 Contemporary Scientists
            </h2>
            {/* <p className="text-center mb-5">
              Meet fellow students and educators face-to-face in your area.
            </p> */}
            {/* <div className="col-md-6 text-center training-img">
              <img src={OfflineTrainingImg} alt="Online Training" />
            </div> */}

            {/* <ul className="list-group shadow mt-4">
              <li className="list-group-item">
                <strong>May 29, 2025:</strong> STEM Workshop – Lincoln High
                School, NY
              </li>
              <li className="list-group-item">
                <strong>June 3, 2025:</strong> Project Showcase – Community
                Learning Center, LA
              </li>
            </ul> */}

            <h5 className="mt-4">1. Gene Editing & Ethics</h5>
            <div>Featured Scientists: Jennifer Doudna & Emmanuelle Charpentier (CRISPR pioneers)</div>
            <div>How to Teach It: Ethics of biotechnology, debate format on “Should we edit genes?”</div>
            <div>Classroom Activity: “Design Your Own Super Crop” project or ethical case studies</div>
            <div>Teaching Link: Biology (Genetics, Biotechnology) + Moral Science</div>
            <h5 className="mt-4">2. Exploring the Cosmos – Modern Astrophysics</h5>
            <div>Featured Scientists: Andrea Ghez (Nobel 2020 for black hole discovery), Indian astrophysicists from IUCAA</div>
            <div>Teaching Tip: Use real NASA/ISRO data to explain gravity, light years, or the speed of light</div>
            <div>Classroom Idea: “Design Your Galaxy” simulation using Stellarium or paper models</div>
            <h5 className="mt-4">3. mRNA Technology & Modern Vaccines</h5>
            <div>Featured Scientist: Katalin Karikó (mRNA vaccine pioneer, Nobel 2023)</div>
            <div>Pedagogy: Link immunology with real-world application; explain pandemic science</div>
            <div>Activity: Timeline of vaccine development + “Immune Defense” comic creation</div>
            <h5 className="mt-4">4. Artificial Intelligence & Neuroscience</h5>
            <div>Featured Scientist: Fei-Fei Li (Computer Vision & Ethics), VS Ramachandran (Indian-origin neuroscientist)</div>
            <div>Classroom Use: Create “Neural Networks with Paper” activity; ethics of AI debate</div>
            <div>Subjects: Computer science, psychology, biology</div>
            <h5 className="mt-4">5. Climate Science & Global Research</h5>
            <div>Featured Scientists: Syukuro Manabe (Climate modeling), Roxy Mathew Koll (Indian climate scientist)</div>
            <div>Teacher Focus: Use real data from NASA/IMD to plot local climate trends</div>
            <div>Student Activity: “Create Your Climate Report” from school surroundings</div>
            <h5 className="mt-4">6. Mathematics & Abstract Thinking in Real Life</h5>
            <div>Featured Scientist: Manjul Bhargava (Fields Medalist, Indian mathematician)</div>
            <div>Integration Idea: Music + Math, patterns in nature, Vedic math tricks</div>
            <div>Activity: “Find the Math in Art” challenge</div>
            <h5 className="mt-4">7. ISRO & India’s Space Innovations</h5>
            <div>Focus: Gaganyaan Mission, Chandrayaan-3, Aditya-L1</div>
            <div>Scientists: Dr. Ritu Karidhal, Dr. Mylswamy Annadurai</div>
            <div>Classroom Plan: Space tech day; simulate launch sequences or create satellite models</div>
            <div>Subject Link: Physics, Earth Science, General Knowledge</div>
            <h5 className="mt-4">8. 💡 The Intersection of Science & Society</h5>
            <div>Focus: Science communication, misinformation, and ethics</div>
            <div>Scientist Role Models: Dr. Gagandeep Kang (Virologist), Rohini Godbole (Particle Physicist)</div>
            <div>Activity: “Bust a Myth” science communication challenge</div>
            <div>Teaching Goal: Encourage evidence-based thinking and scientific skepticism</div>
          </div>
        </div>

        {isAuthenticated && !hasSubscription && (
          <div className="text-center mt-4">
            <button
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere();
              }}
            >
              Enroll in UNS for this facility
            </button>
          </div>

          //  : (
          //   <a
          //     href="https://docs.google.com/forms/d/e/1FAIpQLScDm7aodpA71cr0mAqn7uf844lpWLvsu3vkOxSNd7q7YDEszA/viewform?usp=dialog"
          //     target="_blank"
          //     rel="noopener noreferrer"
          //   >
          //     Join Now
          //   </a>
        )}
      </div>

      <Footer />
    </>
  );
};

export default OfflineTraining;
