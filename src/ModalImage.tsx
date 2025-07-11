import React, { useState } from 'react';
import type { CSSProperties } from 'react';

const modalOverlayStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalImageStyle: CSSProperties = {
  maxWidth: '90%',
  maxHeight: '90%',
  borderRadius: '12px',
};

interface ModalImageProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}

const ModalImage: React.FC<ModalImageProps> = ({ src, width, height, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onClick={() => setIsOpen(true)}
        style={{ cursor: 'pointer' }}
      />

      {isOpen && (
        <div style={modalOverlayStyle} onClick={() => setIsOpen(false)}>
          <img src={src} alt={alt} style={modalImageStyle} />
        </div>
      )}
    </>
  );
};

export default ModalImage;
