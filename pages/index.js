import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [activePhase, setActivePhase] = useState(null)
  const [completedSteps, setCompletedSteps] = useState(new Set())

  const toggleStep = (stepId) => {
    const newCompleted = new Set(completedSteps)
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId)
    } else {
      newCompleted.add(stepId)
    }
    setCompletedSteps(newCompleted)
  }

  const roadmapData = {
    phases: [
      {
        id: 'foundation',
        title: 'Phase 1: Foundation (Weeks 1-4)',
        timeline: '4 weeks',
        investment: '$500-$2,000',
        steps: [
          {
            id: 'f1',
            title: 'Market Research & Niche Selection',
            details: 'Identify your target market. Top niches: E-commerce (27% growth), SaaS companies (AI-native), Real estate (high margins), Healthcare (compliance-ready), Professional services.',
            actions: [
              'Analyze 50+ agency case studies on Clutch.co and Agency Analytics',
              'Survey 10-20 potential clients in chosen niche',
              'Study competitor pricing: $1,500-$10,000/month retainers typical',
              'Validate demand using Google Trends, LinkedIn insights, industry reports'
            ],
            resources: ['Clutch.co', 'IBISWorld Reports', 'Statista Marketing Data']
          },
          {
            id: 'f2',
            title: 'AI Tools Stack Selection',
            details: 'Build your core technology infrastructure. Essential tools: Content (ChatGPT-4, Claude, Jasper), Design (Midjourney, DALL-E, Canva AI), Analytics (Rows, Julius AI), Automation (Make.com, n8n), SEO (Surfer, Clearscope).',
            actions: [
              'Test 5-10 AI tools per category (content, design, analytics, automation)',
              'Calculate ROI: avg. 60% time savings per task',
              'Create tool comparison matrix',
              'Budget $200-500/month for essential subscriptions'
            ],
            resources: ['ChatGPT Plus ($20/mo)', 'Midjourney ($30/mo)', 'Make.com ($9-29/mo)']
          },
          {
            id: 'f3',
            title: 'Legal Structure & Compliance',
            details: 'Establish legitimate business entity. LLC recommended for liability protection. Register business name, EIN, business bank account. Budget $100-500 depending on state.',
            actions: [
              'Register LLC via ZenBusiness or LegalZoom ($0-300)',
              'Obtain EIN from IRS (free)',
              'Open business bank account',
              'Get business insurance: E&O coverage $500-1,500/year',
              'Create client contracts (use Bonsai or HelloSign templates)'
            ],
            resources: ['ZenBusiness', 'LegalZoom', 'Rocket Lawyer']
          },
          {
            id: 'f4',
            title: 'Brand Identity & Online Presence',
            details: 'Create professional brand. Domain + hosting: $50-200/year. Logo design: use AI tools or Fiverr ($25-200). Website essential for credibility.',
            actions: [
              'Register domain (Namecheap, GoDaddy)',
              'Build website: Webflow, Framer, or Next.js + Vercel',
              'Create logo with Midjourney + refine with designer',
              'Design brand kit: colors, fonts, guidelines',
              'Set up email: Google Workspace ($6/user/month)'
            ],
            resources: ['Vercel (free tier)', 'Google Workspace', 'Canva Pro']
          }
        ]
      },
      {
        id: 'service',
        title: 'Phase 2: Service Development (Weeks 5-8)',
        timeline: '4 weeks',
        investment: '$500-$1,500',
        steps: [
          {
            id: 's1',
            title: 'Core Service Packages',
            details: 'Design 3-tier pricing model. Research shows agencies with clear packages convert 3x better. Starter: $1,500-2,500/mo, Growth: $3,000-5,000/mo, Enterprise: $7,500+/mo.',
            actions: [
              'Define deliverables per tier (specific outputs)',
              'Create AI-powered workflows for each service',
              'Build service one-pagers with case projections',
              'Develop 30-60-90 day roadmaps for clients',
              'Set clear KPIs: CTR, conversion rate, ROAS targets'
            ],
            resources: ['ProfitWell pricing guides', 'Agency pricing surveys']
          },
          {
            id: 's2',
            title: 'AI Content Systems',
            details: 'Create repeatable content production pipelines. AI can produce 10x content volume at 1/5 cost. Focus: blog posts, social media, email sequences, ad copy.',
            actions: [
              'Build ChatGPT custom instructions for brand voices',
              'Create content templates library (50+ templates)',
              'Develop quality control checklist',
              'Test AI + human hybrid workflows (AI draft, human polish)',
              'Measure: target 15-20 high-quality pieces/week'
            ],
            resources: ['ChatGPT Team', 'Claude Pro', 'Jasper AI']
          },
          {
            id: 's3',
            title: 'Paid Advertising Frameworks',
            details: 'Master AI-enhanced ad campaigns. Use AI for creative testing (5-10 variations/concept), audience research, bid optimization. Meta ads, Google Ads, LinkedIn primary channels.',
            actions: [
              'Complete Meta Blueprint certification (free)',
              'Complete Google Ads certification (free)',
              'Create ad creative templates with AI',
              'Build targeting research workflows',
              'Develop reporting dashboards (Looker Studio)'
            ],
            resources: ['Meta Blueprint', 'Google Skillshop', 'Supermetrics']
          },
          {
            id: 's4',
            title: 'Analytics & Reporting',
            details: 'Build automated reporting systems. Clients expect weekly/monthly reports. Use AI for data analysis and insight generation. Focus on business outcomes, not vanity metrics.',
            actions: [
              'Create Looker Studio dashboard templates',
              'Integrate GA4, Meta Pixel, LinkedIn Insight Tag',
              'Build AI analysis prompts for data interpretation',
              'Design executive summary templates',
              'Automate report generation with Make.com'
            ],
            resources: ['Looker Studio (free)', 'Julius AI', 'Rows.com']
          }
        ]
      },
      {
        id: 'acquisition',
        title: 'Phase 3: Client Acquisition (Weeks 9-16)',
        timeline: '8 weeks',
        investment: '$1,000-$5,000',
        steps: [
          {
            id: 'a1',
            title: 'Portfolio & Case Studies',
            details: 'Social proof is critical. 85% of B2B buyers check case studies. Start with 2-3 discounted/free projects for portfolio. Show specific metrics: "Increased leads 247% in 90 days."',
            actions: [
              'Offer 2-3 projects at 50% off for testimonials',
              'Document everything: before/after, metrics, screenshots',
              'Create detailed case study pages (problem-solution-results)',
              'Get video testimonials if possible',
              'Build portfolio site section with filterable projects'
            ],
            resources: ['Notion portfolio templates', 'Loom for video']
          },
          {
            id: 'a2',
            title: 'Outbound Sales System',
            details: 'Cold outreach still works: 2-5% response rate typical. Use AI for personalization at scale. Multi-channel: email + LinkedIn + calls. Target 50-100 outreaches/week.',
            actions: [
              'Build ICP (Ideal Customer Profile) list',
              'Use Apollo.io or Hunter.io for contacts (500-1000 leads)',
              'Create AI-personalized email sequences (5-7 touches)',
              'Develop LinkedIn connection + message cadence',
              'Track with CRM: HubSpot free tier or Pipedrive',
              'Target 20-30 qualified conversations/month'
            ],
            resources: ['Apollo.io ($49/mo)', 'Instantly.ai (email)', 'HubSpot CRM']
          },
          {
            id: 'a3',
            title: 'Content Marketing & SEO',
            details: 'Publish 2-3 high-quality blog posts/week. Focus on long-tail keywords with buying intent. "How to [solution] for [niche]" format. Build authority over 6-12 months.',
            actions: [
              'Keyword research: 100+ target keywords (Ahrefs, Semrush)',
              'Create content calendar (3 months ahead)',
              'Produce AI-enhanced SEO content (2,000-3,000 words)',
              'Build backlinks: guest posts, HARO, podcasts',
              'Target 5,000-10,000 monthly visitors by month 12'
            ],
            resources: ['Surfer SEO', 'Ahrefs', 'Clearscope']
          },
          {
            id: 'a4',
            title: 'Strategic Partnerships',
            details: 'Partner with complementary agencies: web design, development, branding. Referral fees: 10-20% typical. Join agency communities and networks.',
            actions: [
              'Identify 10-15 potential partners (non-competing)',
              'Create partnership proposal/deck',
              'Join agency Slack communities (Agency Growth, Digital Agency Network)',
              'Attend virtual agency events and webinars',
              'Set up affiliate/referral program structure'
            ],
            resources: ['PartnerStack', 'Agency Growth community']
          },
          {
            id: 'a5',
            title: 'Paid Acquisition Testing',
            details: 'Test small budget paid ads for your own agency. LinkedIn ads work well for B2B (expensive: $8-15 CPC). Google Search ads for intent. Budget $500-2,000 for testing.',
            actions: [
              'Run LinkedIn lead gen campaign ($500 test)',
              'Test Google Search ads for high-intent keywords',
              'Create lead magnet (free audit, strategy template)',
              'Build landing pages with 30%+ conversion rate',
              'Track CAC: target $500-1,500 per client'
            ],
            resources: ['LinkedIn Campaign Manager', 'Google Ads', 'Unbounce']
          }
        ]
      },
      {
        id: 'scale',
        title: 'Phase 4: Scale & Operations (Months 5-12)',
        timeline: '8 months',
        investment: '$3,000-$15,000',
        steps: [
          {
            id: 'sc1',
            title: 'Team Building',
            details: 'First hires: project manager ($3-5k/mo) or virtual assistant ($500-1,500/mo). Use contractors from Upwork, Contra. Philippines/Latin America for cost efficiency.',
            actions: [
              'Document all processes before hiring (SOPs)',
              'Hire virtual assistant for admin tasks (Upwork)',
              'Find specialized contractors: writers, designers, ad specialists',
              'Use AI to manage team: project tracking, communication',
              'Build team by month 6-9 when hitting $10k+ MRR'
            ],
            resources: ['Upwork', 'Contra', 'OnlineJobs.ph']
          },
          {
            id: 'sc2',
            title: 'Process Automation',
            details: 'Automate 60-70% of repetitive tasks. Client onboarding, reporting, content distribution, social posting. ROI: save 15-20 hours/week by month 12.',
            actions: [
              'Map all recurring workflows',
              'Build Make.com/Zapier automations (20+ workflows)',
              'Implement AI chatbot for client questions',
              'Create automated social posting pipeline',
              'Set up automated invoice/payment system (Stripe + QuickBooks)'
            ],
            resources: ['Make.com', 'Zapier', 'Calendly', 'Stripe']
          },
          {
            id: 'sc3',
            title: 'Premium Service Expansion',
            details: 'Add high-ticket services: strategy consulting ($5-10k projects), AI implementation ($10-25k), marketing automation setup ($7-15k). Higher margins, less ongoing work.',
            actions: [
              'Develop consulting methodology/framework',
              'Create premium service sales collateral',
              'Position as thought leader: speaking, podcasts',
              'Target 2-3 premium projects per quarter',
              'Build case studies for premium work'
            ],
            resources: ['Calendly for booking', 'Notion for delivery']
          },
          {
            id: 'sc4',
            title: 'Financial Systems',
            details: 'Implement proper accounting. Track: MRR (Monthly Recurring Revenue), churn rate, CAC, LTV, profit margins. Target 20-40% net margins.',
            actions: [
              'Set up QuickBooks or Xero ($30-50/mo)',
              'Hire bookkeeper ($150-300/mo)',
              'Create financial dashboard (monthly review)',
              'Implement project profitability tracking',
              'Build 6-month cash reserve'
            ],
            resources: ['QuickBooks', 'Bench.co', 'ProfitWell']
          },
          {
            id: 'sc5',
            title: 'Retention & Upsells',
            details: 'Retain clients: avg. agency churn 20-30% annually. Goal: <15%. Upsell existing clients easier than new acquisition (5x cheaper).',
            actions: [
              'Implement quarterly business reviews (QBRs)',
              'Create client success playbook',
              'Develop upsell service ladder',
              'Build client community/network',
              'Track NPS (Net Promoter Score) quarterly'
            ],
            resources: ['ChurnZero', 'Vitally', 'HubSpot']
          }
        ]
      }
    ],
    marketData: {
      size: '$496B global digital marketing market (2024)',
      growth: '13.9% CAGR through 2030',
      aiImpact: 'AI tools reduce production costs by 40-60%',
      avgRevenue: '$50k-500k revenue typical in year 1-2 for successful agencies',
      successRate: '40% of agencies fail in first year (proper planning reduces risk)'
    },
    keyMetrics: {
      clientAcquisition: 'Target 3-5 clients by month 6',
      pricing: '$1,500-5,000 per client monthly retainer',
      yearOneGoal: '$50,000-150,000 revenue (3-8 clients)',
      profitMargin: '30-50% profit margins achievable',
      timeToProfit: '3-6 months to profitability typical'
    },
    criticalSuccess: [
      'Niche specialization (riches in niches - 2x higher close rates)',
      'Case studies and social proof (essential for credibility)',
      'AI efficiency (10x content output enables competitive pricing)',
      'Consistent outreach (pipeline = survival)',
      'Client retention (keeping clients cheaper than acquiring)'
    ]
  }

  return (
    <>
      <Head>
        <title>AI Digital Marketing Agency Roadmap - Complete Launch Guide</title>
        <meta name="description" content="Comprehensive research-backed plan to start and scale your AI-powered digital marketing agency online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <header className="header">
          <h1>🚀 AI Digital Marketing Agency Roadmap</h1>
          <p className="subtitle">Your research-backed path from $0 to profitable agency</p>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{roadmapData.marketData.size}</div>
              <div className="stat-label">Global Market Size</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{roadmapData.marketData.growth}</div>
              <div className="stat-label">Annual Growth Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">40-60%</div>
              <div className="stat-label">Cost Reduction w/ AI</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">3-6 mo</div>
              <div className="stat-label">Time to Profitability</div>
            </div>
          </div>
        </header>

        <section className="success-factors">
          <h2>💡 Critical Success Factors</h2>
          <div className="factors-grid">
            {roadmapData.criticalSuccess.map((factor, idx) => (
              <div key={idx} className="factor-card">
                <span className="factor-number">{idx + 1}</span>
                <p>{factor}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="roadmap">
          <h2>📋 Implementation Roadmap</h2>

          {roadmapData.phases.map((phase) => (
            <div key={phase.id} className="phase-card">
              <div
                className="phase-header"
                onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
              >
                <div>
                  <h3>{phase.title}</h3>
                  <div className="phase-meta">
                    <span className="badge">⏱ {phase.timeline}</span>
                    <span className="badge">💰 {phase.investment}</span>
                  </div>
                </div>
                <span className="toggle">{activePhase === phase.id ? '−' : '+'}</span>
              </div>

              {activePhase === phase.id && (
                <div className="phase-content">
                  {phase.steps.map((step) => (
                    <div key={step.id} className="step-card">
                      <div className="step-header">
                        <input
                          type="checkbox"
                          checked={completedSteps.has(step.id)}
                          onChange={() => toggleStep(step.id)}
                          className="checkbox"
                        />
                        <div className="step-info">
                          <h4>{step.title}</h4>
                          <p className="step-details">{step.details}</p>
                        </div>
                      </div>

                      <div className="step-actions">
                        <strong>Action Steps:</strong>
                        <ul>
                          {step.actions.map((action, idx) => (
                            <li key={idx}>{action}</li>
                          ))}
                        </ul>
                      </div>

                      {step.resources && (
                        <div className="step-resources">
                          <strong>Key Resources:</strong>
                          <div className="resource-tags">
                            {step.resources.map((resource, idx) => (
                              <span key={idx} className="resource-tag">{resource}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="financial-targets">
          <h2>🎯 Financial Targets & Metrics</h2>
          <div className="targets-grid">
            <div className="target-card">
              <h4>Client Acquisition</h4>
              <p className="target-value">{roadmapData.keyMetrics.clientAcquisition}</p>
              <p className="target-note">Focus on quality over quantity initially</p>
            </div>
            <div className="target-card">
              <h4>Pricing Strategy</h4>
              <p className="target-value">{roadmapData.keyMetrics.pricing}</p>
              <p className="target-note">Increase rates as you build portfolio</p>
            </div>
            <div className="target-card">
              <h4>Year 1 Revenue Goal</h4>
              <p className="target-value">{roadmapData.keyMetrics.yearOneGoal}</p>
              <p className="target-note">Conservative but achievable target</p>
            </div>
            <div className="target-card">
              <h4>Profit Margins</h4>
              <p className="target-value">{roadmapData.keyMetrics.profitMargin}</p>
              <p className="target-note">AI tools enable high margins</p>
            </div>
          </div>
        </section>

        <section className="tools-stack">
          <h2>🛠 Essential AI Tools Stack</h2>
          <div className="tools-category">
            <h4>Content Creation</h4>
            <p>ChatGPT-4 ($20/mo) • Claude Pro ($20/mo) • Jasper AI ($49+/mo)</p>
          </div>
          <div className="tools-category">
            <h4>Design & Visuals</h4>
            <p>Midjourney ($30/mo) • DALL-E • Canva Pro ($13/mo) • Figma (free-$12/mo)</p>
          </div>
          <div className="tools-category">
            <h4>Automation</h4>
            <p>Make.com ($9-29/mo) • Zapier ($20+/mo) • n8n (free/self-hosted)</p>
          </div>
          <div className="tools-category">
            <h4>Analytics & SEO</h4>
            <p>Surfer SEO ($89+/mo) • Ahrefs ($99+/mo) • Looker Studio (free) • Julius AI ($20/mo)</p>
          </div>
          <div className="tools-category">
            <h4>Project Management</h4>
            <p>Notion (free-$10/mo) • ClickUp (free-$9/mo) • HubSpot CRM (free)</p>
          </div>
        </section>

        <section className="next-steps">
          <h2>🎬 Start Today: Week 1 Action Plan</h2>
          <div className="action-list">
            <div className="action-item">
              <span className="action-day">Day 1-2</span>
              <p>Choose your niche + research 20 potential clients</p>
            </div>
            <div className="action-item">
              <span className="action-day">Day 3-4</span>
              <p>Sign up for essential AI tools (ChatGPT, Midjourney, Make.com)</p>
            </div>
            <div className="action-item">
              <span className="action-day">Day 5</span>
              <p>Register business entity and domain name</p>
            </div>
            <div className="action-item">
              <span className="action-day">Day 6-7</span>
              <p>Build basic website + create service packages</p>
            </div>
          </div>
          <div className="cta">
            <p><strong>Progress Tracking:</strong> {completedSteps.size} steps completed</p>
            <p className="cta-text">Click each phase above to expand and check off tasks as you complete them!</p>
          </div>
        </section>

        <footer className="footer">
          <p>💪 Remember: Consistency beats perfection. Start small, iterate, and scale.</p>
          <p className="footer-note">Market data sourced from Statista, IBISWorld, Clutch.co, and agency industry reports (2024)</p>
        </footer>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        .header {
          background: white;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        h1 {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 30px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .stat-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 25px;
          border-radius: 15px;
          text-align: center;
          color: white;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .success-factors {
          background: white;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 25px;
        }

        .factors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .factor-card {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          padding: 25px;
          border-radius: 15px;
          color: white;
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .factor-number {
          background: rgba(255,255,255,0.3);
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }

        .roadmap {
          margin-bottom: 30px;
        }

        .roadmap > h2 {
          color: white;
          margin-bottom: 20px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .phase-card {
          background: white;
          border-radius: 20px;
          margin-bottom: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .phase-header {
          padding: 30px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transition: all 0.3s;
        }

        .phase-header:hover {
          transform: translateY(-2px);
        }

        .phase-header h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .phase-meta {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .badge {
          background: rgba(255,255,255,0.2);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.9rem;
        }

        .toggle {
          font-size: 2rem;
          font-weight: bold;
        }

        .phase-content {
          padding: 30px;
          background: #f8f9fa;
        }

        .step-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 20px;
          border-left: 4px solid #667eea;
        }

        .step-header {
          display: flex;
          gap: 15px;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .checkbox {
          width: 24px;
          height: 24px;
          cursor: pointer;
          flex-shrink: 0;
          margin-top: 5px;
        }

        .step-info h4 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 10px;
        }

        .step-details {
          color: #666;
          line-height: 1.6;
        }

        .step-actions {
          margin: 20px 0;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 10px;
        }

        .step-actions strong {
          display: block;
          margin-bottom: 10px;
          color: #667eea;
        }

        .step-actions ul {
          list-style-position: inside;
          margin-left: 10px;
        }

        .step-actions li {
          color: #555;
          margin: 8px 0;
          line-height: 1.6;
        }

        .step-resources {
          margin-top: 15px;
        }

        .step-resources strong {
          display: block;
          margin-bottom: 10px;
          color: #764ba2;
        }

        .resource-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .resource-tag {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 0.85rem;
        }

        .financial-targets, .tools-stack, .next-steps {
          background: white;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .targets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .target-card {
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
          padding: 25px;
          border-radius: 15px;
          color: white;
        }

        .target-card h4 {
          font-size: 1.1rem;
          margin-bottom: 10px;
          opacity: 0.95;
        }

        .target-value {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 15px 0;
        }

        .target-note {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .tools-category {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 15px;
          border-left: 4px solid #667eea;
        }

        .tools-category h4 {
          color: #333;
          margin-bottom: 10px;
        }

        .tools-category p {
          color: #666;
          line-height: 1.8;
        }

        .action-list {
          margin: 25px 0;
        }

        .action-item {
          display: flex;
          gap: 20px;
          align-items: center;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 10px;
          margin-bottom: 15px;
        }

        .action-day {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: bold;
          white-space: nowrap;
        }

        .action-item p {
          color: #555;
          font-size: 1.1rem;
        }

        .cta {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          margin-top: 30px;
        }

        .cta p {
          font-size: 1.2rem;
          margin: 10px 0;
        }

        .cta-text {
          opacity: 0.95;
          font-size: 1rem !important;
        }

        .footer {
          background: white;
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .footer p {
          font-size: 1.2rem;
          color: #333;
          margin: 10px 0;
        }

        .footer-note {
          font-size: 0.85rem !important;
          color: #999 !important;
          margin-top: 20px !important;
        }

        @media (max-width: 768px) {
          .container {
            padding: 15px;
          }

          h1 {
            font-size: 1.8rem;
          }

          h2 {
            font-size: 1.5rem;
          }

          .header, .success-factors, .financial-targets, .tools-stack, .next-steps, .footer {
            padding: 25px;
          }

          .phase-header {
            padding: 20px;
          }

          .phase-content {
            padding: 20px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .action-item {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  )
}
