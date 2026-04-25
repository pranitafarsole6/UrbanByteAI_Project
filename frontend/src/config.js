export const API_BASE_URL = 'https://urbanbyteai-backend-utwh.onrender.com';

fetch(`${API_BASE_URL}/api/scan/upload`, {
  method: "POST",
  body: formData
});