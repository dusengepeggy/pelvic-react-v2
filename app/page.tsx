import Navbar from "../components/navBar";
import HeroSection from "../components/hero-section";
import ExerciseSection from "../components/exercise-section";
import VideoSection from "../components/video-section";
import TestimonialSection from "../components/testimonial-section";
import EducationSection from "../components/education-section";
import AssessmentSection from "../components/assessment-section";
import ConferenceSection from "../components/conference-section";
import OrganizationsSection from "../components/organizations-section";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-4">
        <HeroSection />
        <ExerciseSection />
        <VideoSection />
        <TestimonialSection />
        <EducationSection />
        <AssessmentSection />
        <ConferenceSection />
        <OrganizationsSection />
      </div>

      <Footer />
    </div>
  );
}
