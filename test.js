const https = require('https');
https.get('https://whatsapp.flowmintautomations.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log("HTML retrieved, length:", data.length);
    const styleMatch = data.match(/<style[^>]*>([\s\S]*?)<\/style>/);
    if (styleMatch) {
      console.log('--- STYLES ---');
      console.log(styleMatch[1].substring(0, 1000));
    }
  });
});
