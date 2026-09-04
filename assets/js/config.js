// BEZ Studio public browser configuration.
// Firebase web config is designed to be visible in frontend code. Security comes from Firebase rules.
export const BEZ_CONFIG = {
  supportEmail: "support@example.com",
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }
};
export const FIREBASE_ENABLED = Boolean(BEZ_CONFIG.firebase.apiKey && BEZ_CONFIG.firebase.projectId);
