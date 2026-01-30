import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Download, Loader2, CheckCircle, Image } from 'lucide-react';

const allImages = [
  '/banner.png',
  '/divider.png',
  '/frame-19840779510.svg',
  '/frame-19840779511.png',
  '/image.png',
  '/image-30.png',
  '/image0.png',
  '/image1.png',
  '/image2.png',
  '/image3.png',
  '/image4.png',
  '/image5.png',
  '/image6.png',
  '/image7.png',
  '/image8.png',
  '/layer-0-10.png',
  '/layer-20.svg',
  '/mexico-10.png',
  '/offer-badge.png',
  '/price-badge.png',
  '/resort-photo-10.png',
  '/resort-photo-11.png',
  '/resort-photo-12.png',
  '/resort-photo-20.png',
  '/resort-photo-21.png',
  '/resort-photo-22.png',
  '/resort-photo-30.png',
  '/resort-photo-31.png',
  '/resort-photo-32.png',
  '/resort-photo-33.png',
  '/resort-photo-40.png',
  '/resort-photo-41.png',
  '/resort-photo-50.png',
  '/resort-photo-51.png',
  '/link-dialog-open-lightbox4.png',
  '/link-dialog-open-lightbox5.png',
  '/link-dialog-open-lightbox6.png',
  '/link-dialog-open-lightbox7.png',
  '/link-dialog-open-lightbox12.png',
  '/link-dialog-open-lightbox13.png',
  '/link-dialog-open-lightbox14.png',
  '/link-dialog-open-lightbox15.png',
  '/section0.png',
  '/section-wrapper0.png',
  '/tag.png',
  '/trust.png',
  '/vacation-vip-full-color-horiz0.png',
  '/accomodations-hero.png',
  '/group0.svg',
  '/group1.svg',
  '/group2.svg',
  '/group3.svg',
  '/group4.svg',
  '/group5.svg',
  '/group6.svg',
  '/mask-group0.svg',
  '/mask-group1.svg',
  '/mask-group2.svg',
  '/mask-group3.svg',
  '/mask-group4.svg',
  '/mask-group5.svg',
  '/mask-group6.svg',
  '/subtract0.svg',
  '/subtract1.svg',
  '/attractions0.svg',
  '/award-star0.svg',
  '/bed0.svg',
  '/car-lock0.svg',
  '/concierge-bell0.svg',
  '/concierge-bell1.svg',
  '/deck0.svg',
  '/deck1.svg',
  '/directions-boat0.svg',
  '/exercise0.svg',
  '/golf-ball0.svg',
  '/hotel-class0.svg',
  '/kayaking0.svg',
  '/local-bar0.svg',
  '/local-mall0.svg',
  '/planet0.svg',
  '/poker-chip0.svg',
  '/pool0.svg',
  '/rest-area0.svg',
  '/tv0.svg',
  '/water0.svg',
  '/water-lux0.svg',
  '/wifi0.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-4-be-2853433-cd-627-e-5-efd-26-b-1-c-3-fada-1-eaae-ava-5-webp0.png',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-4-de-2853575-a-86629-f-1-c-31-f-4-c-2-c-210419754-ava-4-webp0.png',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-542-487-b-67-ace-3-ea-87851-c-0-d-6-f-391302-f-998-ava-1-webp0.png',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-47-f-tripadvisor-svg0.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-47-f-tripadvisor-svg1.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-47-f-tripadvisor-svg2.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg0.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg1.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg2.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg3.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg4.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg5.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg6.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg7.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg8.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg9.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg10.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg11.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg12.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg13.svg',
  '/_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg14.svg',
  '/_67-d-1-d-1794-aad-1-f-2-f-82-ae-2-d-23-flash-icon-svg0.svg',
  '/_67-d-1-d-1794-aad-1-f-2-f-82-ae-2-d-25-badge-1-svg0.svg',
  '/vector0.svg',
  '/vector1.svg',
  '/vector2.svg',
  '/vector3.svg',
  '/vector4.svg',
  '/vector5.svg',
  '/vector6.svg',
  '/vector7.svg',
  '/vector8.svg',
  '/vector9.svg',
  '/vector10.svg',
  '/vector11.svg',
  '/vector12.svg',
  '/vector13.svg',
  '/vector14.svg',
  '/vector15.svg',
  '/vector16.svg',
  '/vector17.svg',
  '/vector18.svg',
  '/vector19.svg',
  '/vector20.svg',
  '/vector21.svg',
  '/vector22.svg',
  '/vector23.svg',
  '/vector24.svg',
  '/vector25.svg',
  '/vector26.svg',
  '/vector27.svg',
  '/vector28.svg',
  '/vector29.svg',
  '/vector30.svg',
  '/vector31.svg',
  '/vector32.svg',
  '/vector33.svg',
  '/vector34.svg',
  '/vector35.svg',
  '/vector36.svg',
  '/vector37.svg',
  '/vector38.svg',
  '/vector39.svg',
  '/vector40.svg',
  '/vector41.svg',
  '/vector42.svg',
  '/vector43.svg',
  '/vector44.svg',
  '/vector45.svg',
  '/vector46.svg',
  '/vector47.svg',
  '/vector48.svg',
  '/vector49.svg',
  '/vector50.svg',
  '/vector51.svg',
  '/vector52.svg',
  '/vector53.svg',
  '/vector54.svg',
  '/vector55.svg',
  '/vector56.svg',
  '/vector57.svg',
  '/accommodations/accomodations-hero.png',
  '/accommodations/resort-photo-10.png',
  '/accommodations/resort-photo-11.png',
  '/accommodations/resort-photo-12.png',
  '/accommodations/resort-photo-20.png',
  '/accommodations/resort-photo-21.png',
  '/accommodations/resort-photo-22.png',
  '/accommodations/resort-photo-30.png',
  '/accommodations/resort-photo-31.png',
  '/accommodations/resort-photo-32.png',
  '/accommodations/resort-photo-33.png',
  '/accommodations/resort-photo-40.png',
  '/accommodations/resort-photo-41.png',
  '/accommodations/resort-photo-50.png',
  '/accommodations/resort-photo-51.png',
  '/accommodations/link-dialog-open-lightbox4.png',
  '/accommodations/link-dialog-open-lightbox5.png',
  '/accommodations/link-dialog-open-lightbox6.png',
  '/accommodations/link-dialog-open-lightbox7.png',
  '/accommodations/link-dialog-open-lightbox12.png',
  '/accommodations/link-dialog-open-lightbox13.png',
  '/accommodations/link-dialog-open-lightbox14.png',
  '/accommodations/link-dialog-open-lightbox15.png',
];

export const DownloadImagesPage: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  const downloadAllImages = async () => {
    setIsDownloading(true);
    setProgress(0);
    setCompleted(false);

    const zip = new JSZip();
    const total = allImages.length;
    let loaded = 0;

    for (const imagePath of allImages) {
      try {
        const response = await fetch(imagePath);
        if (response.ok) {
          const blob = await response.blob();
          const fileName = imagePath.startsWith('/accommodations/')
            ? `accommodations/${imagePath.split('/').pop()}`
            : imagePath.split('/').pop() || 'image';
          zip.file(fileName, blob);
        }
      } catch (error) {
        console.error(`Failed to fetch ${imagePath}:`, error);
      }
      loaded++;
      setProgress(Math.round((loaded / total) * 100));
    }

    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'all-images.zip');
    setIsDownloading(false);
    setCompleted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Image className="w-8 h-8 text-teal-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Download All Images</h1>
          <p className="text-slate-500">
            {allImages.length} images will be downloaded as a ZIP file
          </p>
        </div>

        {isDownloading && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-600">Preparing ZIP file...</span>
              <span className="text-sm font-medium text-teal-600">{progress}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-teal-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {completed && (
          <div className="mb-6 p-4 bg-green-50 rounded-lg flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-green-700">Download complete!</span>
          </div>
        )}

        <button
          onClick={downloadAllImages}
          disabled={isDownloading}
          className="w-full py-4 px-6 bg-teal-500 hover:bg-teal-600 disabled:bg-slate-300 text-white font-semibold rounded-xl flex items-center justify-center gap-3 transition-colors"
        >
          {isDownloading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Downloading...
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              Download All Images (ZIP)
            </>
          )}
        </button>

        <p className="text-center text-xs text-slate-400 mt-4">
          Click the button to download all {allImages.length} images as a single ZIP file
        </p>
      </div>
    </div>
  );
};
