import { runSecurityScan } from '../lib/security/vulnerability-scanner'
import { IncidentResponse, IncidentSeverity } from '../lib/security/incident-response'

async function runSecurityAudit() {
  console.log('Starting security audit...')

  try {
    // Run vulnerability scan
    console.log('Running vulnerability scan...')
    const scanResults = await runSecurityScan()

    // Check for critical findings
    const criticalFindings = scanResults.findings.filter(
      f => f.severity === 'high'
    )

    if (criticalFindings.length > 0) {
      // Report critical findings as security incidents
      for (const finding of criticalFindings) {
        await IncidentResponse.reportIncident(
          IncidentSeverity.HIGH,
          `Critical Vulnerability: ${finding.title}`,
          finding.description
        )
      }
    }

    // Log summary
    console.log('\nScan Summary:')
    console.log(`High: ${scanResults.summary.high}`)
    console.log(`Medium: ${scanResults.summary.medium}`)
    console.log(`Low: ${scanResults.summary.low}`)

  } catch (error) {
    console.error('Security audit failed:', error)
    process.exit(1)
  }
}

runSecurityAudit()