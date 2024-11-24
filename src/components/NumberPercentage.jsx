import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
export default function NumberPercentage() {
    const paragraphStyles = {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: '16px',
        lineHeight: '16px',
        color: '#2e3482',
        marginBottom:'8px',
      };
      const paragraphStyles2 = {
        fontSize: '90px',
        lineHeight: '90px',
        fontWeight: '600',
        fontFamily: 'Sora, sans-serif',
        letterSpacing: '0',
        color: '#031b4e',
        textTransform: 'none',
        fontStyle: 'normal',
      };
      const iconStyle = "font-flaticon font-normal leading-custom text-custom text-[#2e3482]";
    return(
        <div className="mt-[50px] mb-[50px]">
            <div className="md:flex justify-between sm:flex-col md:flex-row">
                <div className="flex-1 text-center p-4">
                <p style={paragraphStyles}><i className="fas fa-users mr-2"></i>First Level Acceptance</p>
                    <p style={paragraphStyles2}>88<sup>+</sup></p>
                </div>
                <div className="flex-1 text-center p-4">
                <p style={paragraphStyles}>
                    <i className={`fas fa-check-circle text-green-500 mr-2 ${iconStyle}`}>
                    </i>
                    Provider Served
                </p>
                    <p style={paragraphStyles2}>700<sup>+</sup></p>
                </div>
                <div className="flex-1 text-center p-4">
                    <p style={paragraphStyles}>  <i className="fas fa-hand-holding-heart text-gray-500 mr-2"></i>Revenue Increase</p>
                    <p style={paragraphStyles2}>20%</p>
                </div>
            </div>
        </div>
    );
}