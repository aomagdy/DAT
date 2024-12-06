const https = require('https');
const fs = require('fs');
const path = require('path');

const SECURITY_ADVISORIES_URL = 'https://registry.npmjs.org/-/npm/v1/security/advisories';
const UPDATE_CHECK_INTERVAL = 7 * 24 * 60 * 60 * 1000; // 7 days

async function checkForUpdates() {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8')
  );

  const lastCheckFile = path.join(process.cwd(), '.last-update-check');
  
  try {
    const stats = fs.statSync(lastCheckFile);
    const timeSinceLastCheck = Date.now() - stats.mtime.getTime();
    
    if (timeSinceLastCheck < UPDATE_CHECK_INTERVAL) {
      return;
    }
  } catch (error) {
    // File doesn't exist, continue with check
  }

  console.log('\nChecking for package updates and security advisories...');

  // Check for security advisories
  const dependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies
  };

  for (const [pkg, version] of Object.entries(dependencies)) {
    try {
      const response = await new Promise((resolve, reject) => {
        https.get(`${SECURITY_ADVISORIES_URL}/${pkg}`, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(JSON.parse(data)));
          res.on('error', reject);
        });
      });

      if (response.advisories?.length > 0) {
        console.warn(`⚠️  Security advisory for ${pkg}:`, response.advisories[0].title);
      }
    } catch (error) {
      // Continue checking other packages
    }
  }

  // Update last check timestamp
  fs.writeFileSync(lastCheckFile, new Date().toISOString());
  
  console.log('\nRun `npm run update-check` to see available updates');
  console.log('Run `npm run update-deps` to update all dependencies\n');
}

checkForUpdates().catch(console.error);