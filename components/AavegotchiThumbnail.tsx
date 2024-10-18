import React, { useState, useEffect, useRef } from 'react';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, AAVEGOTCHI_ABI } from '../utils/constants';
import { cn } from '../lib/utils';

interface AavegotchiThumbnailProps {
  tokenId: string;
  signer: ethers.Signer | null;
  displayMode: 'thumbnail' | 'full';
}

const AavegotchiThumbnail: React.FC<AavegotchiThumbnailProps> = ({ tokenId, signer, displayMode }) => {
  const [svgUrl, setSvgUrl] = useState<string | null>(null);
  const [showLarge, setShowLarge] = useState(false);
  const [previewPosition, setPreviewPosition] = useState({ top: 0, left: 0 });
  const thumbnailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSvg = async () => {
      if (tokenId && signer) {
        const contract = new ethers.Contract(CONTRACT_ADDRESS, AAVEGOTCHI_ABI, signer);
        try {
          const svg = await contract.getAavegotchiSvg(tokenId);
          const blob = new Blob([svg], { type: 'image/svg+xml' });
          const url = URL.createObjectURL(blob);
          setSvgUrl(url);
        } catch (error) {
          console.error(`Error fetching Aavegotchi SVG for token ID ${tokenId}:`, error);
        }
      } else {
        setSvgUrl(null);
      }
    };

    fetchSvg();

    return () => {
      if (svgUrl) {
        URL.revokeObjectURL(svgUrl);
      }
    };
  }, [tokenId, signer]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const offset = 10;
    setPreviewPosition({
      top: e.clientY + offset,
      left: e.clientX + offset
    });
  };

  const thumbnailClass = displayMode === 'thumbnail' ? "w-8 h-8" : "w-12 h-12";

  return (
    <div 
      ref={thumbnailRef}
      className={cn("inline-block relative")}
      onMouseEnter={() => setShowLarge(true)}
      onMouseLeave={() => setShowLarge(false)}
      onMouseMove={handleMouseMove}
    >
      {svgUrl ? (
        <>
          <img src={svgUrl} alt={`Aavegotchi ${tokenId}`} className={cn(thumbnailClass, "object-contain")} />
          {showLarge && displayMode === 'thumbnail' && (
            <div 
              className={cn(
                "fixed z-[9999] bg-white p-2 border border-gray-300 shadow-lg",
                "pointer-events-none"
              )}
              style={{ 
                top: `${previewPosition.top}px`, 
                left: `${previewPosition.left}px` 
              }}
            >
              <img src={svgUrl} alt={`Aavegotchi ${tokenId}`} className={cn("w-32 h-32 object-contain")} />
            </div>
          )}
        </>
      ) : (
        <div className={cn(thumbnailClass, "bg-gray-200 flex items-center justify-center text-xs")}>Loading...</div>
      )}
    </div>
  );
};

export default AavegotchiThumbnail;
