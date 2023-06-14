import React, { useRef } from "react";

const preview = ({ document }: any) => {
  const doc = document?.draft || document?.published;
  const slug = doc?.slug?.current;
  const previewUrl = `xxx`; // e.g. `https://preview-dbpsunbites.gatsbyjs.io/`
  const documentPreviewUrl = `${previewUrl}/${slug}`;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const refreshIFrame = () => {
    iframeRef.current!.src = iframeRef.current!.src;
  };

  return (
    <div style={{ position: `relative`, width: `100%`, height: `100%` }}>
      <iframe
        ref={iframeRef}
        title="desktop preview"
        src={documentPreviewUrl}
        frameBorder="0"
        style={{
          border: 0,
          height: `100%`,
          left: 0,
          position: `absolute`,
          top: 0,
          width: `100%`
        }}
      />
      <button
        type="button"
        onClick={refreshIFrame}
        style={{ position: `absolute`, top: 16, right: 16 }}
      >
        Refresh
      </button>
    </div>
  );
};

export default preview;
