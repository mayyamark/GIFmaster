interface User {
  avatar_url: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
}

interface ImageCommon {
  url: string;
  width: string;
  height: string;
}

interface ImageWithSize extends ImageCommon {
  size: string;
}

interface ImageWithMP4 {
  mp4: string;
  mp4_size: string;
}

interface ImageWithWebp {
  webp: string;
  webp_size: string;
}

interface Images {
  fixed_height: ImageWithSize & ImageWithMP4 & ImageWithWebp;
  fixed_height_still: ImageCommon;
  fixed_height_downsampled: ImageWithSize & ImageWithWebp;
  fixed_width: ImageWithSize & ImageWithMP4 & ImageWithWebp;
  fixed_width_still: ImageCommon;
  fixed_width_downsampled: ImageWithSize & ImageWithWebp;
  fixed_height_small: ImageWithSize & ImageWithWebp;
  fixed_height_small_still: ImageCommon;
  fixed_width_small: ImageWithSize & ImageWithWebp;
  fixed_width_small_still: ImageCommon;
  downsized: ImageWithSize;
  downsized_still: ImageWithSize;
  downsized_large: ImageWithSize;
  downsized_medium: ImageWithSize;
  downsized_small: ImageWithMP4 & {
    width: string;
    height: string;
  };
  original: ImageWithMP4 &
    ImageWithWebp & {
      width: string;
      height: string;
      size: string;
      frames: string;
      url: string;
    };
  original_still: ImageCommon;
  looping: {
    mp4: string;
  };
  preview: ImageWithMP4 & ImageWithWebp;
  preview_gif: ImageCommon;
}

export interface GIFObject {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  content_url: string;
  user: User;
  source_tld: string;
  source_post_url: string;
  update_datetime: string;
  create_datetime: string;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  title: string;
}
