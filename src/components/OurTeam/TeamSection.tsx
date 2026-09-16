import { teamMembers } from '@/data/ourTeamData'
import TeamCard from './TeamCard'

export default function TeamSection() {
  const firstRow = teamMembers.slice(0, 3)
  const secondRow = teamMembers.slice(3)

  return (
    <section className="wq-team-section" aria-labelledby="wq-team-title">
      <div className="wq-team-red-band" aria-hidden="true" />
      <div className="wq-team-container wq-team-section-inner">
        <div className="wq-team-section-heading">
          <span className="wq-eyebrow">OUR PEOPLE</span>
          <h2 id="wq-team-title">Our Amazing Team</h2>
          <span className="wq-heading-line" aria-hidden="true"><i /></span>
        </div>

        <div className="wq-team-row wq-team-row-top">
          {firstRow.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        <div className="wq-team-row wq-team-row-bottom">
          {secondRow.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
