import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const koreaTime = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Seoul',
      });
      const koreaDate = new Date(koreaTime);
      const futureDate = new Date(koreaDate); // 한국 시간을 기준으로 설정합니다.
      futureDate.setHours(18); // 18시로 설정합니다.
      futureDate.setMinutes(23); // 23분으로 설정합니다.
      futureDate.setSeconds(0); // 0초로 설정합니다.

      if (futureDate < koreaDate) {
        futureDate.setDate(futureDate.getDate() + 1); // 이미 지났으면 내일로 설정합니다.
      }

      const difference = (futureDate.getTime() - koreaDate.getTime()) / 1000; // 초 단위로 변환

      if (difference > 0) {
        const minutes = Math.floor(difference / 60); // 분 계산
        const seconds = Math.floor(difference % 60); // 초 계산

        if (minutes === 0 && seconds === 0) {
          clearInterval(interval);
          setTimeRemaining('안녕...');
        } else {
          setTimeRemaining(`${minutes}분 ${seconds}초 남음`);
        }
      } else {
        clearInterval(interval); // 타이머가 끝나면 interval을 정지합니다.
        setTimeRemaining('이벤트 종료'); // 이벤트 종료 메시지를 보여줍니다.
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>차승용의 시간</h1>
      <h2>18:23까지 남은 시간:</h2>
      {timeRemaining ? <p>{timeRemaining}</p> : 'loading...'}
    </div>
  );
};

export default CountdownTimer;
