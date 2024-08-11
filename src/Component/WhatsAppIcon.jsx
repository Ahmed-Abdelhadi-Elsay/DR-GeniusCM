import { FaWhatsapp } from 'react-icons/fa'; // تأكد من تثبيت مكتبة react-icons

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/+201141452388" // قم بإدخال رقم الهاتف الخاص بك مع رمز البلد
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px', // المسافة من أسفل الشاشة
        left: '20px',  // المسافة من يسار الشاشة
        backgroundColor: '#25D366', // لون خلفية الأيقونة
        color: 'white',
        padding: '10px',
        borderRadius: '50%',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        fontSize: '29px',
        textAlign: 'center',
        height:"50px",
        width:"50px",
        zIndex: '1000',
        display:"flex"
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppIcon;
