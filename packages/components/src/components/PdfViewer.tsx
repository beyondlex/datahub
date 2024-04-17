// Core viewer
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Data } from '../types/properties';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export interface PdfViewerProps {
  data: Required<Pick<Data, 'url'>>;
  layout: boolean;
  parentClassName?: string;
}

export function PdfViewer({
  data,
  layout = false,
  parentClassName = 'h-screen',
}: PdfViewerProps) {
  const url = data.url;
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
      <div className={parentClassName}>
        <Viewer
          defaultScale={SpecialZoomLevel.PageWidth}
          fileUrl={url}
          plugins={layout ? [defaultLayoutPluginInstance] : []}
        />
      </div>
    </Worker>
  );
}
