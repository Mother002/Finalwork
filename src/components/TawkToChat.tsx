import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: {
      onLoad?: () => void;
      maximize?: () => void;
      minimize?: () => void;
      toggle?: () => void;
      popup?: () => void;
      showWidget?: () => void;
      hideWidget?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

const TawkToChat = () => {
  useEffect(() => {
    // Initialize Tawk.to
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/6969706354ac551981db84e5/1jf1tu1ft';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      // Remove the script if component unmounts
      const tawkScript = document.querySelector('script[src*="embed.tawk.to"]');
      if (tawkScript) {
        tawkScript.remove();
      }
      // Clean up Tawk iframe elements
      const tawkElements = document.querySelectorAll('[id^="tawk"]');
      tawkElements.forEach((el) => el.remove());
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default TawkToChat;
