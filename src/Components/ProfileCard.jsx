import { useEffect, useState } from 'react'

function ProfileCard({ name, bio, longBio, skills, status }) {
  const [likes, setLikes] = useState(0)
  const [showMore, setShowMore] = useState(false)
  const initials = name.slice(0, 1).toUpperCase()

  useEffect(() => {
    document.title = `${name} - ${likes} likes`
  }, [name, likes])

  return (
    <section className="profile-card">
      <div className="card-head">
        <div className="avatar" aria-hidden="true">
          {initials}
        </div>
        <div>
          <p className="badge">Developer Profile</p>
          <h2 className="profile-name">{name}</h2>
        </div>
      </div>

      <p className="bio">{bio}</p>

      <p className="status">
        <span className="status-dot" aria-hidden="true" />
        Status: {status || 'No status yet'}
      </p>

      <div className="actions">
        <button type="button" className="like-btn" onClick={() => setLikes((prevLikes) => prevLikes + 1)}>
          <span aria-hidden="true">&hearts;</span> Like
        </button>
        <p className="likes-count">{likes} likes</p>
        <button type="button" className="toggle-btn" onClick={() => setShowMore((prevShowMore) => !prevShowMore)}>
          {showMore ? 'Show less' : 'Show more'}
        </button>
      </div>

      {showMore && <p className="bio long-bio">{longBio}</p>}

      <h3>Skills</h3>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li className="skill-item" key={skill.id}>
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProfileCard
