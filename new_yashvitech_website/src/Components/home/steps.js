import React from 'react';

const NoomoHeroFull = () => {
  return (
    <section
      style={{
        width: '100%',
        height: '100vh',
        background: 'radial-gradient(circle at top left, #f3e7ff, #fbeaff, #e0f1ff, #ffece6, #ffffff)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5vw',
        boxSizing: 'border-box',
      }}
    >
      {/* Left Side Big Text */}
      <div style={{
        fontSize: '4rem',
        fontWeight: '800',
        lineHeight: 1.1,
        color: '#000',
        flex: '1',
      }}>
        <div>GREAT WORK</div>
        <div>CAN'T HAPPEN</div>
        <div>
          WITHOUT <span style={{ color: 'rgba(0,0,0,0.1)' }}>TEAM.</span>
        </div>
      </div>

      {/* Right Side Paragraph */}
      <div style={{
        flex: '1',
        paddingLeft: '5vw',
        fontSize: '1rem',
        color: '#333',
        lineHeight: 1.6,
        maxWidth: '500px',
      }}>
        <p>
          When working with us, you get the value of working with founders.
          Building strong relationships with our clients is at the heart of our approach.
        </p>
        <p>
          We take the time to understand your unique needs and create tailored
          design solutions to help you make an impact.
        </p>
      </div>
    </section>
  );
};

export default NoomoHeroFull;
