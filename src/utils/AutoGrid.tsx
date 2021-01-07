import React from 'react';

export const AutoGrid = ({
   itemWidth,
   flexibleItems,
   className,
   children,
}: {
   itemWidth: string;
   flexibleItems?: boolean;
   className?: string;
   children: React.ReactNode;
}) => {
   return (
      <div
         className={`relative grid ${className}`}
         style={{ gridTemplateColumns: `repeat(auto-fit, ${flexibleItems ? `minmax(${itemWidth}, 1fr)` : itemWidth}` }}
      >
         {children}
         <p className="absolute bottom-0 right-4">Resize me here →</p>
      </div>
   );
};
