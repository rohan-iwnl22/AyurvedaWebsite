import HeroSection from '../components/Hero/HeroSection';
import WelcomeSection from '../components/Welcome/WelcomeSection';
import VisionSection from '../components/Vision/VisionSection';
import TreatmentsSection from '../components/Treatments/TreatmentsSection';
import BookingForm from '../components/Booking/BookingForm';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <VisionSection />
      <TreatmentsSection />
      <BookingForm />
    </main>
  );
}
