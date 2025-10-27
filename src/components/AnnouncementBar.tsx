import React from "react";

type Props = {
  children?: React.ReactNode;
  fullWidth?: boolean; // true => full-bleed black strip; false => black box constrained to max width
};

const AnnouncementBar: React.FC<Props> = ({ children, fullWidth = false }) => {
  const content = (
    <div className="max-w-7xl mx-auto px-4">
      {children ?? "Australia's leading manufacturer in private label entertaining foods"}
    </div>
  );

  if (fullWidth) {
    return (
      <div className="bg-black text-white text-center text-sm py-2">
        {content}
      </div>
    );
  }

  // constrained / boxed variant
  return (
    <div className="w-full py-2">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-black text-white text-center text-sm py-2 rounded-sm">
          {children ?? "Australia's leading manufacturer in private label entertaining foods"}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;