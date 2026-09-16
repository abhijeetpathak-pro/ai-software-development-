import HeroSection from '@/app/our-team/HeroSection'
import IntroductionSection from './IntroductionSection'
import TeamSection from './TeamSection'
import AlbumSection from '@/app/our-team/AlbumSection'
import WhyWitqualisSection from '@/app/our-team/WhyWitqualisSection'
import WhyChooseUsSection from '@/app/our-team/WhyChooseUsSection'
import FAQSection from '@/app/our-team/FAQSection'
import ContactSection from '@/app/our-team/ContactSection'

export default function OurTeamPage() {
  return (
    <main className="wq-team-page">
      <HeroSection />
      <IntroductionSection />
      <TeamSection />
      <AlbumSection />
      <WhyWitqualisSection />
      <WhyChooseUsSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}
