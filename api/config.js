// Vercel Serverless Function to serve environment variables securely
module.exports = (req, res) => {
  const env = {
    HERO_IMAGE: process.env.HERO_IMAGE || 'images/hero.jpg',
    PHOTO_1: process.env.PHOTO_1 || 'images/photo-1-smile.jpg',
    PHOTO_2: process.env.PHOTO_2 || 'images/photo-2-head-on-hand.jpg',
    PHOTO_3: process.env.PHOTO_3 || 'images/photo-3-thinking-face.jpg',
    PHOTO_4: process.env.PHOTO_4 || 'images/photo-4-peace-sign.jpg',
    PHOTO_5: process.env.PHOTO_5 || 'images/photo-5-pout-detected.jpg',
    PHOTO_6: process.env.PHOTO_6 || 'images/photo-6-goth-princess.jpg',
    PHOTO_7: process.env.PHOTO_7 || 'images/photo-7-poking-cheek.jpg',
    PHOTO_8: process.env.PHOTO_8 || 'images/photo-8-pout-closeup.jpg',
    PHOTO_9: process.env.PHOTO_9 || 'images/photo-9-telling-me.jpg',
    PHOTO_10: process.env.PHOTO_10 || 'images/photo-10-mirror-selfie.jpg',
    PHOTO_11: process.env.PHOTO_11 || 'images/photo-11-sleeves.jpg',
    PHOTO_12: process.env.PHOTO_12 || 'images/photo-12-bathroom-runway.jpg'
  };

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200).json(env);
};
