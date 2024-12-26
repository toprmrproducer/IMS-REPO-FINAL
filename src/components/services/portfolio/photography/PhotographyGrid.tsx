import React from 'react';
import { motion } from 'framer-motion';
import { useImageModal } from '../../../../hooks/useImageModal';
import ImageModal from '../../../ui/modal/ImageModal';
import ExpandableImage from '../../../ui/ExpandableImage';

const photos = [
  {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=100&w=800",
    alt: "Professional Photography 1",
    span: "col-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=100&w=800",
    alt: "Professional Photography 2"
  },
  {
    src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=100&w=800",
    alt: "Professional Photography 3"
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=100&w=800",
    alt: "Professional Photography 4",
    span: "col-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=100&w=800",
    alt: "Professional Photography 5",
    span: "col-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=100&w=800",
    alt: "Professional Photography 6"
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=100&w=800",
    alt: "Professional Photography 7"
  }
];

export default function PhotographyGrid() {
  const { isOpen, selectedImage, openModal, closeModal } = useImageModal();

  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all duration-300 ${photo.span || ''}`}
          >
            <ExpandableImage
              src={photo.src}
              alt={photo.alt}
              className="aspect-[4/3] object-cover"
              onClick={() => openModal(photo.src, photo.alt)}
            />
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          isOpen={isOpen}
          onClose={closeModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </>
  );
}