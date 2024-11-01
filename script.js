'use strict'

// Flatpickr দিয়ে ডেট পিকার অ্যাক্টিভেট করা হচ্ছে
flatpickr("#datePicker", {
    dateFormat: "Y-m-d", // তারিখের ফরম্যাট
    minDate: "today", // আজকের তারিখ থেকে শুরু হবে
    maxDate: new Date().fp_incr(30), // ৩০ দিন পর পর্যন্ত তারিখ বেছে নেওয়া যাবে
});