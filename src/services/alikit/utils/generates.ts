export function generateProductURLFromId(id: string) {
  if (!id) return "";
  return `https://pt.aliexpress.com/item/${id}.html`;
}

export function generateProductVideoLink(videoUid: string, videoId: string | number) {
  if (!videoId || !videoUid) return "";
  return `https://video.aliexpress-media.com/play/u/ae_sg_item/${videoUid}/p/1/e/6/t/10301/${videoId}.mp4`;
}
