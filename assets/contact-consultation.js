(function () {
  'use strict';

  const WHATSAPP_PHONE = '85284939175';
  const WHATSAPP_MESSAGE = '您好，我想登記ParkSilicon 示範單位預約。 【來源：ParkSilicon 官網】';

  function getWhatsAppUrl() {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  }

  function initializeWhatsAppLinks(root = document) {
    const url = getWhatsAppUrl();
    root.querySelectorAll('[data-ps-whatsapp]').forEach((link) => {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
  }

  // Expose one shared API so future WhatsApp buttons use the same message source.
  window.ParkSiliconContact = Object.freeze({
    getWhatsAppUrl,
    initializeWhatsAppLinks
  });

  initializeWhatsAppLinks();
})();
