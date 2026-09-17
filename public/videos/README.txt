Put your hero background video here as:

  hero-video.mp4   (required)
  hero-video.webm  (optional — smaller file size, used first if present)

The Hero section (src/components/hero-video-background.tsx) already
points at these two file names, so no code changes are needed once you
add the file — just drop it in and it will play automatically. It shows
public/images/hero-poster.jpg as an instant still frame while the video
streams in, so replace that poster too if you replace the video (grab a
frame with: ffmpeg -i hero-video.mp4 -vf "select=eq(n\,30)" -vframes 1 -q:v 6 hero-poster.jpg).

Recommended specs for a smooth, fast-loading background:
  - Length: 10-15 seconds, looping seamlessly (no hard cut/jump at loop point)
  - Resolution: 1920x1080 is plenty — this plays as a background element
    behind a dark gradient overlay, so anything higher just adds weight
    with no visible benefit
  - Frame rate: 30fps (60fps roughly doubles file size for a background
    loop nobody consciously notices the smoothness of)
  - Format: H.264 MP4, no audio track (it plays muted)
  - File size: aim for 2-5 MB. This is very achievable at CRF 26-30
    without any visible quality loss once the overlay is applied — the
    current clip is ~3 MB at 1920x1080/30fps/CRF 30.

You can compress a video for free with:
  - HandBrake (desktop app, handbrake.fr)
  - https://www.freeconvert.com/video-compressor
  - ffmpeg: ffmpeg -i input.mov -vf "scale=1920:-2,fps=30" -c:v libx264 -preset slow -crf 28 -an -movflags +faststart hero-video.mp4

---

Put your "How It Works" section background video here as:

  how-it-works-bg.mp4   (required)

The How It Works section (src/components/how-it-works-video-background.tsx)
already points at this file name, so no code changes are needed once you
add it — just drop it in and it will play automatically. A poster image
(public/images/how-it-works-bg.jpg) is already in place as the fallback
shown before the video loads, so the section won't ever show a blank box.
This section also lazy-loads: the video isn't fetched at all until the
visitor scrolls near it, so it never competes with the Hero video for
bandwidth on first page load — no extra setup needed, that's automatic.

Same recommended specs as above apply (2-5 MB, not 17+ MB — a background
video ships far more data than it needs to at default export settings
from most phones/cameras, so always run it through the compression step
above before dropping it in).
