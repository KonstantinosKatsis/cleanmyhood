import { useState, useRef, useEffect } from "react";
import {
    FacebookShareButton,
    FacebookMessengerShareButton,
    WhatsappShareButton,
    EmailShareButton,
    ViberShareButton,
    TwitterShareButton,
} from "react-share";

export function SharePopup() {
    const [open, setOpen] = useState(false);
    const popupRef = useRef(null);
    const shareUrl = window.location.href;
    const title = "Check this out!";

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block" ref={popupRef}>
            <button
                onClick={() => setOpen(!open)}
                className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md shadow-sm"
            >
                Share
            </button>

            {open && (
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="flex flex-col py-4 text-sm text-gray-700">
                        <FacebookShareButton
                            url={shareUrl}
                            quote={title}
                            hashtag="#cleanmyhood"
                            className="hover:bg-gray-100 text-left"
                        >
                            Share to Facebook
                        </FacebookShareButton>

                        <FacebookMessengerShareButton
                            url={shareUrl}
                            quote={title}
                            className="hover:bg-gray-100 text-left"
                        >
                            Send in Messenger
                        </FacebookMessengerShareButton>

                        <WhatsappShareButton
                            url={shareUrl}
                            title={title}
                            className="hover:bg-gray-100 text-left"
                        >
                            Send in WhatsApp
                        </WhatsappShareButton>

                        <TwitterShareButton
                            url={shareUrl}
                            title={title}
                            hashtag="#cleanmyhood"
                            className="hover:bg-gray-100 text-left"
                        >
                            Send in Twitter
                        </TwitterShareButton>

                        <ViberShareButton
                            url={shareUrl}
                            title={title}
                            className="hover:bg-gray-100 text-left"
                        >
                            Send in Viber
                        </ViberShareButton>

                        <EmailShareButton
                            url={shareUrl}
                            subject={title}
                            body={`Check this out: ${shareUrl}`}
                            className="hover:bg-gray-100 text-left"
                        >
                            Share via Email
                        </EmailShareButton>
                    </div>
                </div>
            )}
        </div>
    );
}
