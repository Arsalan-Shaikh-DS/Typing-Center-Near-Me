/**
 * Hero background video.
 *
 * Drop your clip in at these paths (see README below for exact steps):
 *   public/videos/hero-video.mp4   (required)
 *   public/videos/hero-video.webm  (optional, smaller/better compression)
 *
 * `poster` shows a still frame (public/images/hero-poster.jpg) instantly,
 * so visitors never see a blank box while the video is still downloading —
 * the video quietly swaps in on top once it's ready to play.
 */
export function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-video.webm" type="video/webm" />
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Neutral darkening only — no green color cast — so the white text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/60" />
    </div>
  );
}
