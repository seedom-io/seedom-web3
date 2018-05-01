import React from 'react';
import PropTypes from 'prop-types';

const Member = ({ member }) => {
  return (
    <div className="level-item has-text-centered">
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128">
            <img src={member.imgSrc} alt="Seedom team member" />
          </figure>
        </div>

        <div className="media-content">
          <div className="content">
            <p>
              <strong>{member.name}</strong>
              <br /> {member.title}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a href={member.linkedIn} className="level-item">
                <span className="icon is-small">
                  <i className="fab fa-linkedin" />
                </span>
              </a>
              {member.github &&
                <a href={member.github} className="level-item">
                  <span className="icon is-small">
                    <i className="fab fa-github" />
                  </span>
                </a>
              }
              {member.twitter &&
                <a href={member.twitter} className="level-item">
                  <span className="icon is-small">
                    <i className="fab fa-twitter" />
                  </span>
                </a>
              }
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
};

Member.propTypes = {
  member: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    linkedIn: PropTypes.string.isRequired,
    github: PropTypes.string,
    twitter: PropTypes.string
  }).isRequired
};

export default Member;
