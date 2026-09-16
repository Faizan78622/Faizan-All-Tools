
    // Tools Data
    const toolCategories = [
      {
        id: 'social',
        title: 'Social Media Tools',
        icon: '📱',
        color: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
        tools: [
          { name: 'TikTok Free Views', desc: 'Get free TikTok views instantly for your videos. Boost your visibility and reach millions of users worldwide.', link: 'tiktokviews.php', badge: 'HOT', badgeType: 'hot' },
          { name: 'TikTok Likes', desc: 'Increase TikTok engagement with free likes. Improve your content performance and attract more followers.', link: 'tiktoklikes.php' },
          { name: 'TikTok Account Status', desc: 'Check the status of any TikTok account. Get real-time information about account activity.', link: 'accountstatus.php' },
          { name: 'TikTok Report', desc: 'Report TikTok accounts anonymously. Help keep the platform safe for everyone.', link: 'tiktokreport.php' },
          { name: 'TikTok Details Finder', desc: 'Get detailed information about TikTok users including analytics and insights.', link: 'tiktokdetails.php' },
          { name: 'TikTok Downloader', desc: 'Download TikTok videos without watermark. Save your favorite videos in high quality.', link: 'tiktokdowloader.php' },
          { name: 'Instagram Report', desc: 'Report Instagram accounts anonymously. Maintain a safe community environment.', link: 'instagramreport.php' },
          { name: 'Instagram Analyzer', desc: 'Analyze Instagram profiles deeply. Get insights about followers, engagement, and performance.', link: 'instaprofileview.php' },
          { name: 'WhatsApp Report', desc: 'Report WhatsApp numbers anonymously. Help combat spam and fraudulent accounts.', link: 'whatsappreport.php' },
          { name: 'WhatsApp DP Fetcher', desc: 'Get WhatsApp profile pictures easily. View profile photos of any WhatsApp number.', link: 'whatsappdpfetcher.php' },
          { name: 'Facebook Report', desc: 'Report Facebook accounts anonymously. Keep Facebook community safe and authentic.', link: 'facebookreport.php' },
          { name: 'Pinterest Downloader', desc: 'Download Pinterest videos easily. Save inspiring content in high quality.', link: 'pinterest.php' }
        ]
      },
      {
        id: 'ai',
        title: 'AI Tools',
        icon: '🤖',
        color: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
        tools: [
          { name: 'AI Image Generator', desc: 'Create stunning AI-generated images from text descriptions. Transform your ideas into visuals.', link: 'https://shadowtools.site/imagegen.php', badge: 'NEW', badgeType: 'new' },
          { name: 'Text to Image AI', desc: 'Convert text prompts into beautiful AI images with advanced AI technology.', link: 'shadowimagegen.php' },
          { name: 'Image Analyzer', desc: 'Get detailed information from images using AI. Extract text, objects, and more.', link: 'shadowanalyzeimage.php' },
          { name: 'Image Regenerator', desc: 'Regenerate and enhance images with AI. Improve quality and add new variations.', link: 'image2image.php' },
          { name: 'Face Swap', desc: 'Swap faces in photos using advanced AI. Create fun and creative content.', link: 'faceswap.php' },
          { name: 'AI Image Detector', desc: 'Detect if an image is AI-generated or real. Identify authentic content easily.', link: 'aiimagesdetecter.php' },
          { name: 'Image to Prompt', desc: 'Convert images back to text prompts. Reverse-engineer AI-generated images.', link: 'imgtoprompt.php' },
          { name: 'Image Upscaler', desc: 'Enhance and upscale image quality using AI. Make images sharper and clearer.', link: 'imageupscaler.php' },
          { name: 'Background Remover', desc: 'Remove image backgrounds instantly. Perfect for product photos and designs.', link: 'backgroundremover.php' },
          { name: 'AI Video Generation', desc: 'Generate videos from text using AI. Create engaging video content effortlessly.', link: 'shadowvediogen.php', badge: 'HOT', badgeType: 'hot' },
          { name: 'Text to Speech', desc: 'Convert text to natural speech audio. Create voiceovers and narration.', link: 'https://shadowtools.site/txttospech.php' },
          { name: 'Microsoft AI', desc: 'Access powerful Microsoft AI capabilities. Leverage enterprise-grade AI tools.', link: 'microsoftai.php' }
        ]
      },
      {
        id: 'seo',
        title: 'SEO & Web Tools',
        icon: '📊',
        color: 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)',
        tools: [
          { name: 'Shadow SEO Tool', desc: 'Powerful SEO optimization tools for improving search engine rankings and visibility.', link: 'shadowseo.php' },
          { name: 'Web Scraper', desc: 'Extract data from websites easily. Scrape text, images, and structured data.', link: 'https://shadowtools.site/webscraper.php' },
          { name: 'IP Checker', desc: 'Check IP address information. Get location, ISP, and network details.', link: 'checkip.php' },
          { name: 'IP Details Checker', desc: 'Get detailed IP geolocation info. Advanced IP analysis and mapping.', link: 'ip_details.php' },
          { name: 'Whois Checker', desc: 'Check domain whois information. Get registration and ownership details.', link: 'https://shadowtools.site/whoisdata.php' },
          { name: 'Subdomain Finder', desc: 'Find all subdomains of a domain. Comprehensive subdomain enumeration.', link: 'subdomain-finder.php' },
          { name: 'DNS Checker', desc: 'Check domain DNS records. Verify and troubleshoot DNS configuration.', link: 'domaindnschecker.php' },
          { name: 'SSL Checker', desc: 'Check SSL certificate information. Verify SSL/TLS security status.', link: 'ssl_checker.php' }
        ]
      },
      {
        id: 'utility',
        title: 'Utility Tools',
        icon: '⚙️',
        color: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
        tools: [
          { name: 'Temp Mail', desc: 'Generate temporary email addresses for privacy and testing. Disposable email service.', link: 'shadowtempmail.php' },
          { name: 'Fake SMS Generator', desc: 'Generate fake SMS for testing and pranking. Safe simulation tool.', link: 'fakesms.php' },
          { name: 'SMS Bomber', desc: 'Send multiple SMS to a number for testing purposes. Responsible usage only.', link: 'sms-bomber.php' },
          { name: 'Credit Card Generator', desc: 'Generate test credit card numbers for development and testing.', link: 'creditcard.php' },
          { name: 'CC Checker', desc: 'Validate credit card numbers using Luhn algorithm. Card verification tool.', link: 'https://shadowtools.site/ccchecker.php' },
          { name: 'QR Generator', desc: 'Generate QR codes for any text or URL. Create custom QR codes instantly.', link: 'qrgenrater.php' },
          { name: 'Translator', desc: 'Translate text between multiple languages. Accurate and fast translation.', link: 'https://shadowtools.site/translater.php' },
          { name: 'Image to URL', desc: 'Convert images to shareable URLs. Easy image hosting and sharing.', link: 'imageshare.php' }
        ]
      },
      {
        id: 'youtube',
        title: 'YouTube & Media',
        icon: '🎬',
        color: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
        tools: [
          { name: 'YouTube Searcher', desc: 'Search and play YouTube videos. Find and watch content easily.', link: 'https://shadowtools.site/youtubesearcher.php' },
          { name: 'YouTube Audio', desc: 'Listen to YouTube audio without video. Audio-only streaming.', link: 'https://shadowtools.site/musiclistner.php' },
          { name: 'YouTube Thumbnail', desc: 'Download YouTube thumbnails in high quality. Get video previews.', link: 'YtThumpnaildowloader.php' },
          { name: 'Pinterest Searcher', desc: 'Search and download Pinterest content. Discover and save inspiration.', link: 'pinterestsearcher.php' }
        ]
      },
      {
        id: 'analysis',
        title: 'Analysis Tools',
        icon: '📈',
        color: 'linear-gradient(135deg, #f59e0b 0%, #eab308 100%)',
        tools: [
          { name: 'True Caller Details', desc: 'Get phone number owner details. Identify unknown callers and numbers.', link: 'shadowdetails.php' },
          { name: 'Sales Analyzer', desc: 'Analyze e-commerce sales data. Get insights and trends for business.', link: 'Ecom.php' },
          { name: 'Luck Name Checker', desc: 'Check lucky names by numerology. Discover your lucky numbers.', link: 'Luckname.php' },
          { name: 'Future Analyzer', desc: 'Predict future outcomes using AI. Fun predictive analytics tool.', link: 'future.php' },
          { name: 'Quotex Signals', desc: 'Get trading signals for Quotex platform. Investment insights and predictions.', link: 'quotex.php' },
          { name: 'Aviator Predictor', desc: 'Predict Aviator game results. Gaming analytics and predictions.', link: 'avaitorpredictor.php' }
        ]
      },
      {
        id: 'entertainment',
        title: 'Entertainment',
        icon: '🎮',
        color: 'linear-gradient(135deg, #d946ef 0%, #ec4899 100%)',
        tools: [
          { name: 'Love Proposal', desc: 'Create love proposals for friends. Fun romantic content generator.', link: 'purposal.php' },
          { name: 'Prank Tool', desc: 'Prank your friends safely. Harmless pranking tools and jokes.', link: 'prank.php' },
          { name: 'Shadow Live TV', desc: 'Watch live TV channels online. Stream your favorite shows.', link: 'livematch.php', badge: 'LIVE', badgeType: 'live' }
        ]
      },
      {
        id: 'account',
        title: 'Account Tools',
        icon: '👤',
        color: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
        tools: [
          { name: 'Shadow Unban Tool', desc: 'Unban your accounts easily. Account recovery assistance.', link: 'shadowunban.php' },
          { name: 'Shadow Ban Tool', desc: 'Ban accounts from platforms. Moderation and reporting tool.', link: 'shadowwabantool.php' }
        ]
      },
      {
        id: 'developer',
        title: 'Developer Tools',
        icon: '💻',
        color: 'linear-gradient(135deg, #374151 0%, #111827 100%)',
        tools: [
          { name: 'GitHub Searcher', desc: 'Search GitHub profiles easily. Find developers and repositories.', link: 'https://shadowtools.site/githubsearcher.php' },
          { name: 'Free Fire Checker', desc: 'Check Free Fire player stats and rankings. Gaming statistics.', link: 'https://shadowtools.site/ffstalk.php' },
          { name: 'APK Downloader', desc: 'Download APK files directly. Safe and verified app downloads.', link: 'apk-dowloader.php' }
        ]
      },
      {
        id: 'information',
        title: 'Information Tools',
        icon: '🌍',
        color: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
        tools: [
          { name: 'Country Details', desc: 'Get detailed country information. Facts, demographics, and data.', link: 'countrydetails.php' },
          { name: 'Wikipedia Search', desc: 'Search Wikipedia articles. Access encyclopedic knowledge.', link: 'wikipediasearch.php' },
          { name: 'IMEI Details', desc: 'Get device information from IMEI number. Phone and tablet specs.', link: 'imeitodetails.php' },
          { name: 'Weather Info', desc: 'Get weather information worldwide. Accurate forecasts and updates.', link: 'weather.php' },
          { name: 'Namaz Schedule', desc: 'Get Islamic prayer times. Accurate prayer schedules.', link: 'namaztimming.php' },
          { name: 'Bill Checker', desc: 'Check your utility bills online. Monitor your expenses.', link: 'billchecker.php' },
          { name: 'Ehsaas Program', desc: 'Check Ehsaas program eligibility. Government assistance verification.', link: '8171checker.php' }
        ]
      },
      {
        id: 'religious',
        title: 'Religious',
        icon: '📖',
        color: 'linear-gradient(135deg, #d97706 0%, #92400e 100%)',
        tools: [
          { name: 'Full Quran', desc: 'Read the complete Holy Quran with translations. Digital Quran reader.', link: 'quran.php' }
        ]
      },
      {
        id: 'content',
        title: 'Content Checkers',
        icon: '🔒',
        color: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
        tools: [
          { name: '18+ Content Checker', desc: 'Check for adult content in images. AI-powered content moderation.', link: 'https://shadowtools.site/contentcheck.php' }
        ]
      },
      {
        id: 'legal',
        title: 'Legal Tools',
        icon: '⚖️',
        color: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
        tools: [
          { name: 'FIR Registration', desc: 'Register FIR complaints online. Legal complaint filing system.', link: 'shadowfir.php' }
        ]
      }
    ];

    // Render Tools
    function renderTools(categories = toolCategories) {
      const container = document.getElementById('toolsContent');
      let html = '';

      if (categories.length === 0) {
        container.innerHTML = `
          <div class="no-results">
            <div class="no-results-icon">🔍</div>
            <p>No tools found matching your search.</p>
          </div>
        `;
        return;
      }

      categories.forEach((category, index) => {
        if (category.tools.length === 0) return;

        html += `
          <section class="category-section" style="animation-delay: ${index * 0.1}s">
            <div class="category-header">
              <div class="category-icon" style="background: ${category.color};">
                ${category.icon}
              </div>
              <div class="category-info">
                <h2>${category.title}</h2>
                <p>${category.tools.length} tools available</p>
              </div>
            </div>
            <div class="tools-grid">
        `;

        category.tools.forEach((tool, toolIndex) => {
          const badgeHTML = tool.badge ? `<span class="tool-card-badge badge-${tool.badgeType}">${tool.badge}</span>` : '';

          html += `
            <a href="${tool.link}" ${tool.link.startsWith('http') ? 'target="_blank"' : ''} class="tool-card" style="animation-delay: ${(index * 0.1) + (toolIndex * 0.05)}s">
              ${badgeHTML}
              <div class="tool-card-content">
                <div class="tool-icon" style="background: ${category.color}20; color: ${category.color.replace(')', ', 1)')};">
                  ${tool.name.includes('TikTok') ? '🎵' :
                    tool.name.includes('Instagram') ? '📸' :
                    tool.name.includes('WhatsApp') ? '💬' :
                    tool.name.includes('AI') ? '🤖' :
                    tool.name.includes('YouTube') ? '▶️' :
                    tool.name.includes('Image') ? '🖼️' :
                    tool.name.includes('SEO') ? '📈' :
                    tool.name.includes('IP') ? '🌐' :
                    tool.name.includes('SMS') ? '💬' :
                    tool.name.includes('Credit') ? '💳' :
                    tool.name.includes('QR') ? '📱' :
                    tool.name.includes('Weather') ? '☀️' :
                    tool.name.includes('Quran') ? '📖' : '🔧'}
                </div>
                <h3 class="tool-name">${tool.name}</h3>
                <p class="tool-desc">${tool.desc}</p>
                <div class="tool-cta">
                  Try Now →
                </div>
              </div>
            </a>
          `;
        });

        html += `
            </div>
          </section>
        `;
      });

      container.innerHTML = html;
    }

    // Search Tools
    function searchTools() {
      const query = document.getElementById('searchInput').value.toLowerCase().trim();

      if (!query) {
        renderTools(toolCategories);
        return;
      }

      const filtered = toolCategories.map(category => ({
        ...category,
        tools: category.tools.filter(tool =>
          tool.name.toLowerCase().includes(query) ||
          tool.desc.toLowerCase().includes(query) ||
          category.title.toLowerCase().includes(query)
        )
      })).filter(category => category.tools.length > 0);

      renderTools(filtered);
    }

    // WhatsApp Overlay
    function initOverlay() {
      const hasSeenOverlay = localStorage.getItem('whatsappOverlaySeen');
      if (!hasSeenOverlay) {
        setTimeout(() => {
          document.getElementById('whatsappOverlay').classList.add('active');
        }, 1000);
      }
    }

    function closeOverlay() {
      document.getElementById('whatsappOverlay').classList.remove('active');
      localStorage.setItem('whatsappOverlaySeen', 'true');
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', function() {
      renderTools();
      initOverlay();
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  