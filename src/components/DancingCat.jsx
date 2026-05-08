import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

export default function DancingCat({ isPlaying, speed }) {
  const speedMap = { slow: '2s', normal: '1s', fast: '0.5s' };
  const duration = speedMap[speed] || '1s';

  const catStyle = {
    animationDuration: duration,
    animationPlayState: isPlaying ? 'running' : 'paused',
  };

  return (
    <div className="cat-stage">
      <div className="music-note note-1" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>♪</div>
      <div className="music-note note-2" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>♫</div>
      <div className="music-note note-3" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>♩</div>
      <div className="music-note note-4" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>♬</div>

      <div className="cat-wrapper" style={catStyle}>
        <img
          src={catSvg}
          alt="춤추는 고양이"
          className="cat-image"
          style={catStyle}
        />
      </div>

      <div className="dance-floor">
        <div className="spotlight" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}></div>
      </div>
    </div>
  );
}
