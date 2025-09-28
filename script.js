// Global variables
let currentLanguage = 'en';
let isOnline = navigator.onLine;
let notificationCount = 3;
let currentSection = 'dashboard';

// Translation data
const translations = {
    en: {
        doctor_name: "Dr. Rajesh Kumar",
        general_practitioner: "General Practitioner",
        notifications: "Notifications",
        mark_all_read: "Mark all read",
        emergency_patient: "Emergency patient request - High fever",
        low_stock_paracetamol: "Low stock: Paracetamol (5 remaining)",
        appointment_reminder: "Appointment reminder: Patient John Doe at 2:00 PM",
        dashboard: "Dashboard",
        patient_queue: "Patient Queue",
        digital_health_records: "Digital Health Records",
        appointment_management: "Appointment Management",
        medicine_shop_finder: "Medicine Shop Finder",
        daily_analytics: "Daily Analytics",
        dashboard_overview: "Dashboard Overview",
        last_sync: "Last sync: 2 min ago",
        urgent: "URGENT",
        normal: "NORMAL",
        join_consultation: "Join Consultation",
        active_consultation: "Active Consultation",
        video_call_placeholder: "Video call will appear here",
        live_chat: "Live Chat",
        prescription_generator: "Prescription Generator",
        patient_name: "Patient Name",
        medicines: "Medicines",
        dosage: "Dosage",
        generate_prescription: "Generate Prescription",
        next_appointment: "Next Appointment Scheduler",
        date_time: "Date & Time",
        phone_number: "Phone Number",
        schedule_appointment: "Schedule Appointment",
        quick_patient_history: "Quick Patient History",
        nearest_pharmacy_stock: "Nearest Pharmacy Stock",
        ai_assistant_suggestions: "AI Assistant Suggestions",
        prescription_qr_code: "Prescription QR Code",
        qr_code_will_appear_here: "QR Code will appear here",
        print_prescription: "Print Prescription",
        download_qr: "Download QR"
    },
    hi: {
        doctor_name: "डॉ. राजेश कुमार",
        general_practitioner: "सामान्य चिकित्सक",
        notifications: "सूचनाएं",
        mark_all_read: "सभी पढ़े गए चिह्नित करें",
        emergency_patient: "आपातकालीन रोगी अनुरोध - तेज बुखार",
        low_stock_paracetamol: "कम स्टॉक: पैरासिटामोल (5 बचे)",
        appointment_reminder: "अपॉइंटमेंट रिमाइंडर: रोगी जॉन डो 2:00 बजे",
        dashboard: "डैशबोर्ड",
        patient_queue: "रोगी कतार",
        digital_health_records: "डिजिटल स्वास्थ्य रिकॉर्ड",
        appointment_management: "अपॉइंटमेंट प्रबंधन",
        medicine_shop_finder: "दवा की दुकान खोजक",
        daily_analytics: "दैनिक विश्लेषण",
        dashboard_overview: "डैशबोर्ड अवलोकन",
        last_sync: "अंतिम सिंक: 2 मिनट पहले",
        urgent: "तत्काल",
        normal: "सामान्य",
        join_consultation: "परामर्श में शामिल हों",
        active_consultation: "सक्रिय परामर्श",
        video_call_placeholder: "वीडियो कॉल यहाँ दिखाई देगी",
        live_chat: "लाइव चैट",
        prescription_generator: "प्रिस्क्रिप्शन जेनरेटर",
        patient_name: "रोगी का नाम",
        medicines: "दवाएं",
        dosage: "खुराक",
        generate_prescription: "प्रिस्क्रिप्शन जेनरेट करें",
        next_appointment: "अगला अपॉइंटमेंट शेड्यूलर",
        date_time: "दिनांक और समय",
        phone_number: "फोन नंबर",
        schedule_appointment: "अपॉइंटमेंट शेड्यूल करें",
        quick_patient_history: "त्वरित रोगी इतिहास",
        nearest_pharmacy_stock: "निकटतम फार्मेसी स्टॉक",
        ai_assistant_suggestions: "AI सहायक सुझाव",
        prescription_qr_code: "प्रिस्क्रिप्शन QR कोड",
        qr_code_will_appear_here: "QR कोड यहाँ दिखाई देगा",
        print_prescription: "प्रिस्क्रिप्शन प्रिंट करें",
        download_qr: "QR डाउनलोड करें"
    },
    pa: {
        doctor_name: "ਡਾ. ਰਾਜੇਸ਼ ਕੁਮਾਰ",
        general_practitioner: "ਆਮ ਡਾਕਟਰ",
        notifications: "ਸੂਚਨਾਵਾਂ",
        mark_all_read: "ਸਾਰੇ ਪੜ੍ਹੇ ਗਏ ਚਿੰਨ੍ਹਿਤ ਕਰੋ",
        emergency_patient: "ਐਮਰਜੈਂਸੀ ਮਰੀਜ਼ ਦੀ ਬੇਨਤੀ - ਤੇਜ਼ ਬੁਖ਼ਾਰ",
        low_stock_paracetamol: "ਕਮ ਸਟਾਕ: ਪੈਰਾਸੀਟਾਮੋਲ (5 ਬਾਕੀ)",
        appointment_reminder: "ਅਪਾਇੰਟਮੈਂਟ ਰਿਮਾਈਂਡਰ: ਮਰੀਜ਼ ਜੌਨ ਡੋ 2:00 ਵਜੇ",
        dashboard: "ਡੈਸ਼ਬੋਰਡ",
        patient_queue: "ਮਰੀਜ਼ ਕਤਾਰ",
        digital_health_records: "ਡਿਜੀਟਲ ਸਿਹਤ ਰਿਕਾਰਡ",
        appointment_management: "ਅਪਾਇੰਟਮੈਂਟ ਪ੍ਰਬੰਧਨ",
        medicine_shop_finder: "ਦਵਾਈ ਦੀ ਦੁਕਾਨ ਖੋਜਕ",
        daily_analytics: "ਰੋਜ਼ਾਨਾ ਵਿਸ਼ਲੇਸ਼ਣ",
        dashboard_overview: "ਡੈਸ਼ਬੋਰਡ ਜਾਣਕਾਰੀ",
        last_sync: "ਆਖਰੀ ਸਿੰਕ: 2 ਮਿੰਟ ਪਹਿਲਾਂ",
        urgent: "ਤੁਰੰਤ",
        normal: "ਸਾਧਾਰਣ",
        join_consultation: "ਸਲਾਹ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ",
        active_consultation: "ਸਰਗਰਮ ਸਲਾਹ",
        video_call_placeholder: "ਵੀਡੀਓ ਕਾਲ ਇੱਥੇ ਦਿਖਾਈ ਦੇਵੇਗੀ",
        live_chat: "ਲਾਈਵ ਚੈਟ",
        prescription_generator: "ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ ਜਨਰੇਟਰ",
        patient_name: "ਮਰੀਜ਼ ਦਾ ਨਾਮ",
        medicines: "ਦਵਾਈਆਂ",
        dosage: "ਖੁਰਾਕ",
        generate_prescription: "ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ ਜਨਰੇਟ ਕਰੋ",
        next_appointment: "ਅਗਲਾ ਅਪਾਇੰਟਮੈਂਟ ਸ਼ੈਡਿਊਲਰ",
        date_time: "ਤਾਰੀਖ ਅਤੇ ਸਮਾਂ",
        phone_number: "ਫੋਨ ਨੰਬਰ",
        schedule_appointment: "ਅਪਾਇੰਟਮੈਂਟ ਸ਼ੈਡਿਊਲ ਕਰੋ",
        quick_patient_history: "ਤੁਰੰਤ ਮਰੀਜ਼ ਇਤਿਹਾਸ",
        nearest_pharmacy_stock: "ਨਜ਼ਦੀਕੀ ਫਾਰਮੇਸੀ ਸਟਾਕ",
        ai_assistant_suggestions: "AI ਸਹਾਇਕ ਸੁਝਾਅ",
        prescription_qr_code: "ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ QR ਕੋਡ",
        qr_code_will_appear_here: "QR ਕੋਡ ਇੱਥੇ ਦਿਖਾਈ ਦੇਵੇਗਾ",
        print_prescription: "ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ ਪ੍ਰਿੰਟ ਕਰੋ",
        download_qr: "QR ਡਾਊਨਲੋਡ ਕਰੋ"
    }
};

// Medicine database for auto-suggestions
const medicineDatabase = [
    { name: "Paracetamol", dosage: "500mg", type: "Pain Relief" },
    { name: "Ibuprofen", dosage: "400mg", type: "Anti-inflammatory" },
    { name: "Amoxicillin", dosage: "250mg", type: "Antibiotic" },
    { name: "Cough Syrup", dosage: "5ml", type: "Cough Relief" },
    { name: "Cetirizine", dosage: "10mg", type: "Antihistamine" },
    { name: "Omeprazole", dosage: "20mg", type: "Antacid" },
    { name: "Metformin", dosage: "500mg", type: "Diabetes" },
    { name: "Amlodipine", dosage: "5mg", type: "Blood Pressure" }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    updateOfflineStatus();
    startSyncIndicator();
});

// Initialize application
function initializeApp() {
    // Set initial language
    changeLanguage();
    
    // Show dashboard by default
    showSection('dashboard');
    
    // Initialize medicine suggestions
    initializeMedicineSuggestions();
    
    // Start periodic updates
    setInterval(updateSyncStatus, 30000); // Update every 30 seconds
    setInterval(checkEmergencyCases, 60000); // Check for emergencies every minute
}

// Setup event listeners
function setupEventListeners() {
    // Online/offline status
    window.addEventListener('online', updateOfflineStatus);
    window.addEventListener('offline', updateOfflineStatus);
    
    // Chat input
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Medicine input
    const medicineInput = document.getElementById('medicineInput');
    if (medicineInput) {
        medicineInput.addEventListener('blur', function() {
            setTimeout(() => {
                hideMedicineSuggestions();
            }, 200);
        });
    }
    
    // Close notification dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const dropdown = document.getElementById('notificationDropdown');
        const bell = document.querySelector('.notification-bell');
        
        if (!bell.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
}

// Language change functionality
function changeLanguage() {
    const select = document.getElementById('languageSelect');
    currentLanguage = select.value;
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Store language preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// Section navigation
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update sidebar active state
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    
    const activeMenuItem = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (activeMenuItem) {
        activeMenuItem.classList.add('active');
    }
    
    currentSection = sectionName;
}

// Notification management
function toggleNotifications() {
    const dropdown = document.getElementById('notificationDropdown');
    dropdown.classList.toggle('show');
}

function markAllRead() {
    notificationCount = 0;
    document.getElementById('notificationCount').textContent = '0';
    document.getElementById('notificationCount').style.display = 'none';
    
    // Hide notification dropdown
    document.getElementById('notificationDropdown').classList.remove('show');
    
    // Update notification items
    const notificationItems = document.querySelectorAll('.notification-item');
    notificationItems.forEach(item => {
        item.style.opacity = '0.6';
    });
}

// Patient management
function acceptPatient(patientId) {
    // Simulate accepting patient
    console.log(`Accepting patient: ${patientId}`);
    
    // Update UI
    const patientItem = document.querySelector(`[onclick*="${patientId}"]`).closest('.patient-item');
    if (patientItem) {
        patientItem.style.background = '#f0f9ff';
        patientItem.style.borderColor = '#3b82f6';
    }
    
    // Show success message
    showToast('Patient accepted successfully', 'success');
    
    // Update queue count
    updateQueueCount(-1);
}

function rejectPatient(patientId) {
    // Simulate rejecting patient
    console.log(`Rejecting patient: ${patientId}`);
    
    // Remove patient from queue
    const patientItem = document.querySelector(`[onclick*="${patientId}"]`).closest('.patient-item');
    if (patientItem) {
        patientItem.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            patientItem.remove();
        }, 300);
    }
    
    // Show message
    showToast('Patient removed from queue', 'info');
    
    // Update queue count
    updateQueueCount(-1);
}

function updateQueueCount(change) {
    const queueCount = document.querySelector('.queue-count');
    if (queueCount) {
        let currentCount = parseInt(queueCount.textContent) || 0;
        currentCount += change;
        queueCount.textContent = currentCount;
        
        if (currentCount === 0) {
            queueCount.style.display = 'none';
        } else {
            queueCount.style.display = 'inline-block';
        }
    }
}

// Consultation management
function toggleMute() {
    const muteBtn = document.querySelector('.btn-mute');
    const icon = muteBtn.querySelector('i');
    
    if (icon.classList.contains('fa-microphone')) {
        icon.classList.remove('fa-microphone');
        icon.classList.add('fa-microphone-slash');
        muteBtn.style.background = '#fef2f2';
        muteBtn.style.color = '#ef4444';
    } else {
        icon.classList.remove('fa-microphone-slash');
        icon.classList.add('fa-microphone');
        muteBtn.style.background = '#f3f4f6';
        muteBtn.style.color = '#6b7280';
    }
}

function toggleVideo() {
    const videoBtn = document.querySelector('.btn-video');
    const icon = videoBtn.querySelector('i');
    
    if (icon.classList.contains('fa-video')) {
        icon.classList.remove('fa-video');
        icon.classList.add('fa-video-slash');
        videoBtn.style.background = '#fef2f2';
        videoBtn.style.color = '#ef4444';
    } else {
        icon.classList.remove('fa-video-slash');
        icon.classList.add('fa-video');
        videoBtn.style.background = '#dbeafe';
        videoBtn.style.color = '#3b82f6';
    }
}

function endCall() {
    // Simulate ending call
    console.log('Ending consultation call');
    
    // Show confirmation
    if (confirm('Are you sure you want to end the consultation?')) {
        showToast('Consultation ended', 'info');
        
        // Reset call controls
        const muteBtn = document.querySelector('.btn-mute');
        const videoBtn = document.querySelector('.btn-video');
        
        muteBtn.querySelector('i').className = 'fas fa-microphone';
        muteBtn.style.background = '#f3f4f6';
        muteBtn.style.color = '#6b7280';
        
        videoBtn.querySelector('i').className = 'fas fa-video';
        videoBtn.style.background = '#dbeafe';
        videoBtn.style.color = '#3b82f6';
    }
}

// Chat functionality
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (message) {
        // Add message to chat
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message doctor';
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        
        // Clear input
        chatInput.value = '';
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Simulate patient response
        setTimeout(() => {
            const responseDiv = document.createElement('div');
            responseDiv.className = 'message patient';
            responseDiv.textContent = 'Thank you doctor, I understand.';
            chatMessages.appendChild(responseDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 2000);
    }
}

// Medicine suggestions
function initializeMedicineSuggestions() {
    const medicineInput = document.getElementById('medicineInput');
    if (medicineInput) {
        medicineInput.addEventListener('input', searchMedicines);
    }
}

function searchMedicines() {
    const input = document.getElementById('medicineInput');
    const query = input.value.toLowerCase();
    const suggestions = document.getElementById('medicineSuggestions');
    
    if (query.length < 2) {
        hideMedicineSuggestions();
        return;
    }
    
    const filteredMedicines = medicineDatabase.filter(medicine => 
        medicine.name.toLowerCase().includes(query)
    );
    
    if (filteredMedicines.length > 0) {
        showMedicineSuggestions(filteredMedicines);
    } else {
        hideMedicineSuggestions();
    }
}

function showMedicineSuggestions(medicines) {
    const suggestions = document.getElementById('medicineSuggestions');
    suggestions.innerHTML = '';
    
    medicines.forEach(medicine => {
        const div = document.createElement('div');
        div.className = 'medicine-suggestion';
        div.innerHTML = `
            <strong>${medicine.name}</strong>
            <span style="color: #6b7280; font-size: 12px;">${medicine.dosage} - ${medicine.type}</span>
        `;
        div.addEventListener('click', () => {
            document.getElementById('medicineInput').value = medicine.name;
            hideMedicineSuggestions();
        });
        suggestions.appendChild(div);
    });
    
    suggestions.style.display = 'block';
}

function hideMedicineSuggestions() {
    const suggestions = document.getElementById('medicineSuggestions');
    suggestions.style.display = 'none';
}

// Prescription generation
function generatePrescription() {
    const patientName = document.getElementById('patientName').value;
    const medicine = document.getElementById('medicineInput').value;
    const dosage = document.getElementById('dosage').value;
    
    if (!patientName || !medicine || !dosage) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    // Update QR modal content
    document.getElementById('qrPatientName').textContent = patientName;
    document.getElementById('qrMedicines').textContent = medicine;
    document.getElementById('qrDosage').textContent = dosage;
    
    // Show QR modal
    document.getElementById('qrModal').classList.add('show');
    
    // Clear form
    document.getElementById('patientName').value = '';
    document.getElementById('medicineInput').value = '';
    document.getElementById('dosage').value = '';
    
    showToast('Prescription generated successfully', 'success');
}

function closeQRModal() {
    document.getElementById('qrModal').classList.remove('show');
}

function printPrescription() {
    // Simulate printing
    console.log('Printing prescription...');
    showToast('Prescription sent to printer', 'success');
}

function downloadQR() {
    // Simulate QR code download
    console.log('Downloading QR code...');
    showToast('QR code downloaded', 'success');
}

// Appointment scheduling
function scheduleAppointment() {
    const patientName = document.getElementById('appointmentPatient').value;
    const dateTime = document.getElementById('appointmentDateTime').value;
    const phone = document.getElementById('appointmentPhone').value;
    
    if (!patientName || !dateTime || !phone) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    // Simulate scheduling
    console.log('Scheduling appointment:', { patientName, dateTime, phone });
    
    // Show success message
    showToast('Appointment scheduled successfully. SMS confirmation sent.', 'success');
    
    // Clear form
    document.getElementById('appointmentPatient').value = '';
    document.getElementById('appointmentDateTime').value = '';
    document.getElementById('appointmentPhone').value = '';
}

// Emergency management
function closeEmergency() {
    document.getElementById('emergencyBanner').style.display = 'none';
}

function checkEmergencyCases() {
    // Simulate emergency case detection
    if (Math.random() < 0.1) { // 10% chance
        showEmergencyAlert();
    }
}

function showEmergencyAlert() {
    const banner = document.getElementById('emergencyBanner');
    banner.style.display = 'block';
    
    // Auto-hide after 30 seconds
    setTimeout(() => {
        banner.style.display = 'none';
    }, 30000);
}

// Offline/Online status
function updateOfflineStatus() {
    isOnline = navigator.onLine;
    const indicator = document.getElementById('offlineIndicator');
    const icon = indicator.querySelector('i');
    const text = indicator.querySelector('span');
    
    if (isOnline) {
        icon.className = 'fas fa-wifi';
        text.textContent = 'Online';
        indicator.className = 'offline-indicator';
    } else {
        icon.className = 'fas fa-wifi-slash';
        text.textContent = 'Offline';
        indicator.className = 'offline-indicator offline';
    }
}

// Sync status
function startSyncIndicator() {
    const syncIcon = document.getElementById('syncIcon');
    if (syncIcon) {
        syncIcon.style.animation = 'spin 2s linear infinite';
    }
}

function updateSyncStatus() {
    const syncStatus = document.querySelector('.sync-status span');
    if (syncStatus) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        syncStatus.textContent = `Last sync: ${timeString}`;
    }
}

// Utility functions
function showToast(message, type = 'info') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    // Style the toast
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#059669' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 2000;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add to DOM
    document.body.appendChild(toast);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Load saved language preference
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        document.getElementById('languageSelect').value = savedLanguage;
        changeLanguage();
    }
});

// Patient Queue Functions
function filterByUrgency() {
    const filter = document.getElementById('urgencyFilter').value;
    const rows = document.querySelectorAll('.patient-row');
    
    rows.forEach(row => {
        if (filter === 'all' || row.classList.contains(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function sortQueue() {
    const sortBy = document.getElementById('sortFilter').value;
    const tbody = document.getElementById('queueTableBody');
    const rows = Array.from(tbody.querySelectorAll('.patient-row'));
    
    rows.sort((a, b) => {
        switch (sortBy) {
            case 'urgency':
                const urgencyOrder = { 'critical': 3, 'moderate': 2, 'normal': 1 };
                return urgencyOrder[b.className.split(' ')[1]] - urgencyOrder[a.className.split(' ')[1]];
            case 'waiting':
                const timeA = parseInt(a.querySelector('.time-elapsed').textContent);
                const timeB = parseInt(b.querySelector('.time-elapsed').textContent);
                return timeB - timeA;
            case 'name':
                const nameA = a.querySelector('.patient-name').textContent;
                const nameB = b.querySelector('.patient-name').textContent;
                return nameA.localeCompare(nameB);
            default:
                return 0;
        }
    });
    
    rows.forEach(row => tbody.appendChild(row));
}

function acceptPatientQueue(patientId) {
    console.log(`Accepting patient: ${patientId}`);
    showToast('Patient consultation started', 'success');
    // Remove patient from queue
    const row = document.querySelector(`[onclick*="${patientId}"]`).closest('.patient-row');
    if (row) {
        row.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => row.remove(), 300);
    }
    updateQueueCount(-1);
}

function rejectPatientQueue(patientId) {
    console.log(`Rejecting patient: ${patientId}`);
    showToast('Patient removed from queue', 'info');
    // Remove patient from queue
    const row = document.querySelector(`[onclick*="${patientId}"]`).closest('.patient-row');
    if (row) {
        row.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => row.remove(), 300);
    }
    updateQueueCount(-1);
}

function callPatient(patientId) {
    console.log(`Calling patient: ${patientId}`);
    showToast('Initiating call...', 'info');
}

function viewNewPatient() {
    document.getElementById('newPatientNotification').style.display = 'none';
    showSection('patient-queue');
}

// DHR Functions
function searchPatients() {
    const query = document.getElementById('patientSearch').value.toLowerCase();
    if (query.length < 2) {
        document.getElementById('patientProfileCard').style.display = 'none';
        document.getElementById('dhrTabs').style.display = 'none';
        return;
    }
    
    // Simulate search
    if (query.includes('priya') || query.includes('p001')) {
        document.getElementById('patientProfileCard').style.display = 'block';
        document.getElementById('dhrTabs').style.display = 'block';
        showToast('Patient found', 'success');
    } else {
        showToast('No patient found', 'error');
    }
}

function showDHRTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName + 'Tab').classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

function viewConsultationDetails(consultationId) {
    console.log(`Viewing consultation: ${consultationId}`);
    showToast('Opening consultation details...', 'info');
}

function viewLabReport(reportId) {
    console.log(`Viewing lab report: ${reportId}`);
    showToast('Opening lab report...', 'info');
}

function viewPrescriptionQR(prescriptionId) {
    console.log(`Viewing prescription QR: ${prescriptionId}`);
    showToast('Opening prescription QR...', 'info');
}

function printPrescription(prescriptionId) {
    console.log(`Printing prescription: ${prescriptionId}`);
    showToast('Prescription sent to printer', 'success');
}

function downloadLabReport(reportId) {
    console.log(`Downloading lab report: ${reportId}`);
    showToast('Lab report downloaded', 'success');
}

function viewScan(scanId) {
    console.log(`Viewing scan: ${scanId}`);
    showToast('Opening scan viewer...', 'info');
}

function downloadScan(scanId) {
    console.log(`Downloading scan: ${scanId}`);
    showToast('Scan downloaded', 'success');
}

function uploadRecord() {
    console.log('Uploading record...');
    showToast('Record upload initiated', 'info');
}

function downloadRecord() {
    console.log('Downloading record...');
    showToast('Record download initiated', 'info');
}

// Appointment Management Functions
function toggleAppointmentView(view) {
    const calendar = document.getElementById('appointmentCalendar');
    const list = document.getElementById('appointmentList');
    const buttons = document.querySelectorAll('.toggle-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (view === 'calendar') {
        calendar.style.display = 'block';
        list.style.display = 'none';
        generateCalendar();
    } else {
        calendar.style.display = 'none';
        list.style.display = 'block';
    }
}

function generateCalendar() {
    const grid = document.getElementById('calendarGrid');
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Generate calendar days
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    grid.innerHTML = '';
    
    // Add day headers
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
        const header = document.createElement('div');
        header.className = 'calendar-day-header';
        header.textContent = day;
        header.style.fontWeight = '600';
        header.style.background = '#f8fafc';
        grid.appendChild(header);
    });
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDay; i++) {
        const empty = document.createElement('div');
        empty.className = 'calendar-day';
        grid.appendChild(empty);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        if (day === today.getDate()) {
            dayElement.classList.add('today');
        }
        
        // Add appointments (simulate)
        if (day === 15 || day === 20) {
            dayElement.classList.add('has-appointment');
        }
        
        grid.appendChild(dayElement);
    }
}

function changeMonth(direction) {
    // Update month display
    const monthElement = document.getElementById('currentMonth');
    const currentMonth = monthElement.textContent;
    // This would update the month in a real implementation
    generateCalendar();
}

function filterAppointments() {
    const dateFilter = document.getElementById('dateFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;
    const rows = document.querySelectorAll('.appointment-row');
    
    rows.forEach(row => {
        let showRow = true;
        
        // Filter by status
        if (statusFilter !== 'all') {
            const status = row.querySelector('.status-badge').textContent.toLowerCase();
            if (status !== statusFilter) {
                showRow = false;
            }
        }
        
        row.style.display = showRow ? '' : 'none';
    });
}

function confirmAppointment(appointmentId) {
    console.log(`Confirming appointment: ${appointmentId}`);
    showToast('Appointment confirmed. SMS sent to patient.', 'success');
    
    // Update status
    const row = document.querySelector(`[onclick*="${appointmentId}"]`).closest('.appointment-row');
    const statusBadge = row.querySelector('.status-badge');
    statusBadge.textContent = 'Confirmed';
    statusBadge.className = 'status-badge confirmed';
}

function rescheduleAppointment(appointmentId) {
    console.log(`Rescheduling appointment: ${appointmentId}`);
    showToast('Opening reschedule dialog...', 'info');
}

function cancelAppointment(appointmentId) {
    console.log(`Cancelling appointment: ${appointmentId}`);
    if (confirm('Are you sure you want to cancel this appointment?')) {
        showToast('Appointment cancelled', 'info');
        
        // Update status
        const row = document.querySelector(`[onclick*="${appointmentId}"]`).closest('.appointment-row');
        const statusBadge = row.querySelector('.status-badge');
        statusBadge.textContent = 'Cancelled';
        statusBadge.className = 'status-badge cancelled';
    }
}

function acceptAISuggestion() {
    console.log('Accepting AI suggestion');
    showToast('AI suggestion accepted. Appointment scheduled.', 'success');
}

function dismissAISuggestion() {
    console.log('Dismissing AI suggestion');
    const suggestion = document.querySelector('.ai-scheduling-suggestion');
    suggestion.style.display = 'none';
}

// Medicine Shop Finder Functions
function searchMedicines() {
    const query = document.getElementById('medicineSearch').value.toLowerCase();
    const results = document.getElementById('medicineResults');
    
    if (query.length < 2) {
        results.style.display = 'none';
        return;
    }
    
    results.style.display = 'block';
    showToast(`Searching for: ${query}`, 'info');
}

function allocatePharmacy(pharmacyId) {
    console.log(`Allocating pharmacy: ${pharmacyId}`);
    showToast('Pharmacy allocated to patient prescription', 'success');
}

function callPharmacy(pharmacyId) {
    console.log(`Calling pharmacy: ${pharmacyId}`);
    showToast('Initiating call to pharmacy...', 'info');
}

// Analytics Functions
function exportAnalytics() {
    console.log('Exporting analytics data...');
    showToast('Analytics data exported successfully', 'success');
}

function changeChartPeriod(period) {
    const buttons = document.querySelectorAll('.chart-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    console.log(`Changing chart period to: ${period}`);
    showToast(`Chart updated for ${period}`, 'info');
}

// Initialize calendar on page load
document.addEventListener('DOMContentLoaded', function() {
    // Generate initial calendar
    if (document.getElementById('appointmentCalendar')) {
        generateCalendar();
    }
});

// Service Worker registration for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
