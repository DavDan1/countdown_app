import React from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';

const CountdownTimer: React.FC = () => {
  const endDate = new Date('2024-01-26T18:00:00').getTime();

  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return <span>The tournament has started!</span>;
    } else {
      return (
        <div className='main-ctn'>
          <h1>Tekken 8 Tournament</h1>
          <p>Time left</p>
          <div className="countdown">
            <div style={{alignItems: "center"}}>{days}d</div>
            <div>{hours}h</div>
            <div>{minutes}m</div>
            <div>{seconds}s</div>
          </div>
        </div>
      );
    }
  };

  return <Countdown date={endDate} renderer={renderer} />;
};

export default CountdownTimer;
