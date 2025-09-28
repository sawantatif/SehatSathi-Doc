# SehatSathi Doctor Dashboard

A clean, modern, and responsive doctor dashboard designed specifically for rural telemedicine systems. This dashboard is optimized for low-bandwidth usage, offline functionality, and multilingual support.

## Features

### 🏥 Core Functionality
- **Patient Queue Management**: Real-time patient requests with accept/reject functionality
- **Active Consultation**: Video call interface with live chat and DHR access
- **Prescription Generator**: Auto-suggest medicines with QR code generation
- **Appointment Scheduler**: Date/time picker with SMS confirmation
- **Digital Health Records (DHR)**: Patient history and medical records viewer
- **Medicine Shop Finder**: Integration with pharmacist stock database
- **Daily Analytics**: Patient count, medicine prescribed, follow-ups tracking

### 🌐 Multilingual Support
- **English**: Default language
- **Hindi**: हिंदी support for Indian rural areas
- **Punjabi**: ਪੰਜਾਬੀ support for Punjab region
- Dynamic language switching with persistent preferences

### 📱 Responsive Design
- **Desktop**: Full-featured layout with sidebar and context panel
- **Tablet**: Optimized layout with collapsible sidebars
- **Mobile**: Touch-friendly interface with simplified navigation

### 🔄 Offline-First Architecture
- **Service Worker**: Caches essential resources for offline use
- **Offline Indicators**: Visual status showing connection state
- **Sync Status**: Real-time sync information with last update time
- **Local Storage**: Patient data and preferences stored locally

### 🚨 Emergency Features
- **Emergency Alert Banner**: Critical case notifications
- **Urgency Tags**: Visual indicators for patient priority
- **Quick Actions**: Fast access to emergency protocols

### 🎨 Medical Theme
- **Clean Design**: White/blue/green color scheme
- **Medical Icons**: Font Awesome icons for medical actions
- **Card Layout**: Organized information in easy-to-scan cards
- **Timeline Views**: Patient history and appointment timelines

## Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Vanilla JS with modern features
- **Service Worker**: Offline functionality and caching
- **Font Awesome**: Medical and UI icons
- **Google Fonts**: Inter font family for readability

## Installation

1. Clone or download the project files
2. Ensure all files are in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `sw.js`
3. Open `index.html` in a modern web browser
4. For offline functionality, serve via HTTP server (not file://)

## Usage

### Dashboard Overview
- View patient queue with urgency indicators
- Monitor active consultations
- Generate prescriptions with QR codes
- Schedule appointments with SMS confirmation

### Patient Management
- Accept/reject patient requests
- View patient history and symptoms
- Access digital health records
- Manage consultation sessions

### Prescription System
- Auto-suggest medicines from database
- Generate QR codes for prescriptions
- Print or download prescription documents
- Track medicine inventory

### Analytics & Reporting
- Daily patient statistics
- Medicine prescription tracking
- Follow-up appointment monitoring
- Performance metrics

## Customization

### Adding New Languages
1. Add language code to `translations` object in `script.js`
2. Add language option to HTML select element
3. Update all translatable text with new keys

### Medicine Database
- Modify `medicineDatabase` array in `script.js`
- Add new medicines with name, dosage, and type
- Update auto-suggestion functionality

### Styling
- Modify CSS variables for color scheme
- Update breakpoints for responsive design
- Customize card layouts and spacing

## Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 11+
- **Edge**: 79+

## Performance Optimizations

- **Lazy Loading**: Images and non-critical resources
- **Minification**: CSS and JavaScript compression
- **Caching**: Service Worker for offline resources
- **Efficient DOM**: Minimal DOM manipulation
- **Responsive Images**: Optimized for different screen sizes

## Security Considerations

- **HTTPS Required**: For service worker functionality
- **Input Validation**: Client-side form validation
- **XSS Protection**: Sanitized user inputs
- **CORS Headers**: Proper cross-origin resource sharing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices and browsers
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For technical support or feature requests, please contact the development team or create an issue in the project repository.

---

**SehatSathi** - Bringing modern telemedicine to underserved communities with offline-first, multilingual, and low-bandwidth optimized solutions.
