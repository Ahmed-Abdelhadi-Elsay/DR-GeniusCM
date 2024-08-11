import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar";
import FooterTop from "../Component/FooterTop";
import Footer from "../Component/Footer";
import { useSpring, motion, useScroll } from "framer-motion";
import WhatsAppIcon from "../Component/WhatsAppIcon"; // تأكد من المسار الصحيح

export default function MainLayout() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 30 });
    const location = useLocation();

    // تحديد ما إذا كان المسار الحالي هو صفحة التسجيل أو صفحة الاختبار
    const isSignupPage = location.pathname === "/signup";
    const isQuizPage = location.pathname === "/quiz";

    return (
        <>
            {/* إظهار شريط التمرير فقط إذا لم يكن في صفحة التسجيل أو الاختبار */}
            {!isSignupPage && !isQuizPage && (
                <motion.div
                    style={{
                        scaleX,
                        transformOrigin: "0%",
                        height: "5px",
                        backgroundColor: "#00a5a5",
                        position: "fixed",
                        top: "76px",
                        left: 0,
                        right: 0,
                        zIndex: 5,
                    }}
                />
            )}
            {/* إظهار Navbar فقط إذا لم يكن في صفحة التسجيل */}
            {!isSignupPage}
            <Outlet />
            {/* إظهار FooterTop و Footer فقط إذا لم يكن في صفحة التسجيل أو الاختبار */}
            {!isSignupPage && !isQuizPage && (
                <>
                    <Navbar />
                    <FooterTop />
                    <Footer />
                    <WhatsAppIcon />
                </>
            )}
        </>
    );
}
