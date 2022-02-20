import React ,{useRef }from 'react';
import jsPDF from 'jspdf';
import QuotationList from '../containers/qotationList';
import html2canvas from "html2canvas";

const ExportPdfComponent = (props) => {



      return (
        <div>
          <button className="btn btn-primary"  onClick={props.printDocument}>Print to PDF!</button>
        </div>
      );
}
 
export default ExportPdfComponent;