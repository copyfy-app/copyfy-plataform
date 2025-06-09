
import React, { useState } from 'react';
import { generateCODCopies } from '../utils/copyGenerator';
import { countries } from './data/Countries';

const InternationalDashboard = () => {
  const [selectedCountry, setSelectedCountry] = useState('us');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [funnel, setFunnel] = useState('cod');
  const [result, setResult] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCopy = async () => {
    if (!product || !price) {
      setResult('<p style="color: #ff6b6b;">⚠️ Please fill in all required fields (Product and Price)</p>');
      return;
    }

    setIsGenerating(true);
    
    // Find country data
    const countryData = countries.find(c => c.value === selectedCountry);
    const countryName = countryData ? countryData.name : "";
    const languageCode = countryData ? countryData.languageCode : "en";

    try {
      // Simulate generation delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const generatedContent = generateCODCopies(product, price, countryName, languageCode, funnel);
      
      const resultHtml = `
        <h3 style="color: #FFD700; margin-bottom: 1rem;">✨ Generated Campaign</h3>
        <div style="margin-bottom: 1.5rem;">
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Price:</strong> ${price}</p>
          <p><strong>Country:</strong> ${countryName} (${selectedCountry.toUpperCase()})</p>
          <p><strong>Language:</strong> ${languageCode}</p>
          <p><strong>Funnel Strategy:</strong> ${funnel}</p>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
          <h4 style="color: #FFD700;">📝 Ad Titles (${generatedContent.titles.length})</h4>
          <ul>
            ${generatedContent.titles.slice(0, 5).map(title => `<li>${title}</li>`).join('')}
          </ul>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
          <h4 style="color: #FFD700;">📋 Descriptions (${generatedContent.descriptions.length})</h4>
          <ul>
            ${generatedContent.descriptions.slice(0, 3).map(desc => `<li>${desc}</li>`).join('')}
          </ul>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
          <h4 style="color: #FFD700;">🎯 USPs (${generatedContent.usps.length})</h4>
          <ul>
            ${generatedContent.usps.slice(0, 3).map(usp => `<li>${usp}</li>`).join('')}
          </ul>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
          <h4 style="color: #FFD700;">🔗 Sitelinks (${generatedContent.sitelinks.length})</h4>
          <ul>
            ${generatedContent.sitelinks.slice(0, 2).map(sitelink => 
              `<li><strong>${sitelink.title}</strong><br/>${sitelink.description1}</li>`
            ).join('')}
          </ul>
        </div>
        
        <div>
          <h4 style="color: #FFD700;">💰 Bidding Strategy</h4>
          <p>${generatedContent.biddingStrategy}</p>
        </div>
      `;
      
      setResult(resultHtml);
    } catch (error) {
      console.error('Error generating campaign:', error);
      setResult('<p style="color: #ff6b6b;">❌ Error generating campaign. Please try again.</p>');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div style={{
      margin: 0,
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #000000, #FFD700)',
      color: 'white',
      minHeight: '100vh'
    }}>
      <header style={{
        backgroundColor: '#000000',
        padding: '1rem',
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#FFD700'
      }}>
        COPYFY
      </header>
      
      <div style={{
        textAlign: 'center',
        marginTop: '0.5rem',
        fontSize: '1.2rem',
        color: 'white'
      }}>
        High-Converting Google Ads Copies Translated for Over 100 Countries
      </div>

      <div style={{
        display: 'flex',
        padding: '2rem',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        <div style={{
          flex: '3',
          minWidth: '300px',
          padding: '2rem',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '12px'
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }}>
              Select Country
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: 'none',
                fontSize: '1rem',
                color: 'black'
              }}
            >
              {countries.slice(0, 20).map(country => (
                <option key={country.value} value={country.value}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }}>
              Product
            </label>
            <input
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="Enter your product name..."
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: 'none',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }}>
              Price
            </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter the price (e.g. $49, 197 BRL)"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: 'none',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }}>
              Funnel Strategy
            </label>
            <select
              value={funnel}
              onChange={(e) => setFunnel(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: 'none',
                fontSize: '1rem',
                color: 'black'
              }}
            >
              <option value="cod">Cash on Delivery (COD)</option>
              <option value="bottom">Bottom of Funnel</option>
              <option value="middle">Middle of Funnel</option>
              <option value="top">Top of Funnel</option>
            </select>
          </div>

          <button
            onClick={generateCopy}
            disabled={isGenerating}
            style={{
              backgroundColor: isGenerating ? '#999' : '#FFD700',
              color: 'black',
              padding: '1rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: isGenerating ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
              width: '100%'
            }}
          >
            {isGenerating ? 'Generating...' : 'Generate Campaign'}
          </button>

          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            minHeight: '100px'
          }}>
            {result ? (
              <div dangerouslySetInnerHTML={{ __html: result }} />
            ) : (
              <p style={{ color: '#888' }}>🚀 Your high-converting copy will appear here!</p>
            )}
          </div>
        </div>

        <div style={{
          flex: '1',
          minWidth: '200px'
        }}>
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '12px',
            padding: '1.5rem'
          }}>
            <h3 style={{ color: '#FFD700', marginTop: 0 }}>Quick Links</h3>
            <a href="/terms-of-use" style={{
              display: 'block',
              marginBottom: '1rem',
              color: '#FFD700',
              textDecoration: 'none'
            }}>
              Terms of Use
            </a>
            <a href="/privacy-policy" style={{
              display: 'block',
              marginBottom: '1rem',
              color: '#FFD700',
              textDecoration: 'none'
            }}>
              Privacy Policy
            </a>
            <a href="mailto:inspiranegociosonline@gmail.com" style={{
              display: 'block',
              marginBottom: '1rem',
              color: '#FFD700',
              textDecoration: 'none'
            }}>
              Contact
            </a>
            <a href="/support" style={{
              display: 'block',
              color: '#FFD700',
              textDecoration: 'none'
            }}>
              Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalDashboard;
