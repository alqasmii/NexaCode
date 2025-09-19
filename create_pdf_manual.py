import os
import subprocess
import webbrowser
from pathlib import Path

def create_pdf_instructions():
    """Create instructions for manual PDF generation"""
    
    html_file = Path("ARTICLES_OF_ASSOCIATION.html").absolute()
    
    instructions = f"""
# PDF Generation Instructions

## Method 1: Browser-based PDF Generation (Recommended)

1. Open the HTML file in your browser:
   - File location: {html_file}
   - Double-click the file or copy this path to your browser

2. Print to PDF:
   - Press Ctrl+P (Windows) or Cmd+P (Mac)
   - Select "Save as PDF" as destination
   - Choose these settings for best results:
     * Paper size: A4
     * Margins: Default
     * Scale: 100%
     * Include background graphics: Yes
   - Save as: "NexaCode_Articles_of_Association.pdf"

## Method 2: Professional PDF Generation

If you have Microsoft Edge or Chrome:
1. Right-click on ARTICLES_OF_ASSOCIATION.html
2. Choose "Open with" → "Microsoft Edge" or "Google Chrome"
3. Press Ctrl+P
4. Select "Save as PDF"
5. Click "More settings" and ensure:
   - Headers and footers: On
   - Background graphics: On
6. Click "Save"

## File Information

- Original markdown file: ARTICLES_OF_ASSOCIATION.md
- HTML version: ARTICLES_OF_ASSOCIATION.html
- Target PDF: NexaCode_Articles_of_Association.pdf

The HTML file is professionally styled and will create a high-quality PDF
with proper formatting, page breaks, and professional appearance.

## Document Contents

The Articles of Association includes:
- Company structure and objectives
- Service portfolio (14 major categories)
- Governance and management framework
- Financial management procedures
- Legal compliance and data protection
- Customer rights and service standards
- Intellectual property provisions
- Dispute resolution procedures

Total length: ~8,000 words across 14 major sections
"""
    
    with open("PDF_GENERATION_INSTRUCTIONS.txt", "w", encoding="utf-8") as f:
        f.write(instructions)
    
    print("📋 Instructions created: PDF_GENERATION_INSTRUCTIONS.txt")
    
    # Automatically open the HTML file in default browser
    try:
        webbrowser.open(f"file://{html_file}")
        print("🌐 HTML file opened in your default browser")
        print("💡 Use Ctrl+P to print and save as PDF")
    except Exception as e:
        print(f"Could not auto-open browser: {e}")
        print(f"Please manually open: {html_file}")

if __name__ == "__main__":
    create_pdf_instructions()