const { IframeWrapper } = require("./style");

const VideoEmbed = ({ embedId,height="560" }) => (
  <IframeWrapper>
    <iframe
      width="853"
      height={height}
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1&enablejsapi=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      autoPlay={true}
    />
  </IframeWrapper>
);
export default VideoEmbed;