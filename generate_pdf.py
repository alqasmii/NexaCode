#!/usr/bin/env python3
"""
PDF Generator for NexaCode Articles of Association
Converts the markdown document to a professional PDF format
"""

import markdown
import os
from datetime import datetime

def create_html_template(content):
    """Create professional HTML template with styling"""
    return f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NexaCode Digital Services Company - Articles of Association</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        
        body {{
            font-family: 'Inter', Arial, sans-serif;
            font-size: 11px;
            line-height: 1.6;
            color: #333;
            background: #fff;
            margin: 0;
            padding: 0;
        }}
        
        .container {{
            max-width: 8.5in;
            margin: 0 auto;
            padding: 1in;
            background: white;
        }}
        
        /* Header Styling */
        .document-header {{
            text-align: center;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 30px;
            margin-bottom: 40px;
        }}
        
        .company-name {{
            font-size: 28px;
            font-weight: 700;
            color: #1e40af;
            margin-bottom: 10px;
            letter-spacing: 1px;
        }}
        
        .document-title {{
            font-size: 24px;
            font-weight: 600;
            color: #374151;
            margin-bottom: 20px;
        }}
        
        .document-info {{
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #2563eb;
            margin: 20px 0;
        }}
        
        .document-info p {{
            margin: 5px 0;
            font-weight: 500;
        }}
        
        /* Table of Contents */
        .toc {{
            background: #f1f5f9;
            padding: 30px;
            border-radius: 10px;
            margin: 30px 0;
            border: 1px solid #e2e8f0;
        }}
        
        .toc h2 {{
            color: #1e40af;
            font-size: 20px;
            margin-bottom: 20px;
            text-align: center;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 10px;
        }}
        
        .toc ol {{
            list-style: none;
            counter-reset: section;
            padding-left: 0;
        }}
        
        .toc li {{
            counter-increment: section;
            margin: 8px 0;
            padding-left: 30px;
            position: relative;
        }}
        
        .toc li:before {{
            content: counter(section) ".";
            position: absolute;
            left: 0;
            font-weight: 600;
            color: #2563eb;
        }}
        
        .toc a {{
            color: #374151;
            text-decoration: none;
            border-bottom: 1px dotted #94a3b8;
        }}
        
        .toc a:hover {{
            color: #2563eb;
            border-bottom-color: #2563eb;
        }}
        
        /* Headings */
        h1 {{
            font-size: 24px;
            font-weight: 700;
            color: #1e40af;
            margin: 40px 0 20px 0;
            padding: 15px 0;
            border-bottom: 2px solid #2563eb;
            counter-reset: subsection;
        }}
        
        h2 {{
            font-size: 20px;
            font-weight: 600;
            color: #374151;
            margin: 30px 0 15px 0;
            padding: 10px 0;
            border-bottom: 1px solid #e5e7eb;
            counter-increment: subsection;
        }}
        
        h3 {{
            font-size: 16px;
            font-weight: 600;
            color: #4b5563;
            margin: 25px 0 12px 0;
        }}
        
        h4 {{
            font-size: 14px;
            font-weight: 600;
            color: #6b7280;
            margin: 20px 0 10px 0;
        }}
        
        /* Paragraphs and Text */
        p {{
            margin: 12px 0;
            text-align: justify;
            hyphens: auto;
        }}
        
        /* Lists */
        ul, ol {{
            margin: 12px 0;
            padding-left: 25px;
        }}
        
        li {{
            margin: 6px 0;
        }}
        
        /* Special Sections */
        .article-section {{
            background: #fefefe;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 25px;
            margin: 25px 0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }}
        
        .subsection {{
            background: #f9fafb;
            border-left: 4px solid #10b981;
            padding: 20px;
            margin: 20px 0;
        }}
        
        .subsection h4 {{
            color: #059669;
            margin-top: 0;
        }}
        
        /* Code and Technical Content */
        code {{
            background: #f1f5f9;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 10px;
            color: #1e40af;
        }}
        
        pre {{
            background: #f8fafc;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
            overflow-x: auto;
            font-size: 10px;
        }}
        
        /* Tables */
        table {{
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }}
        
        th, td {{
            padding: 12px;
            text-align: left;
            border: 1px solid #e5e7eb;
        }}
        
        th {{
            background: #f1f5f9;
            font-weight: 600;
            color: #374151;
        }}
        
        tr:nth-child(even) {{
            background: #f9fafb;
        }}
        
        /* Emphasis and Strong */
        strong {{
            font-weight: 600;
            color: #1f2937;
        }}
        
        em {{
            font-style: italic;
            color: #4b5563;
        }}
        
        /* Blockquotes */
        blockquote {{
            border-left: 4px solid #3b82f6;
            padding: 15px 20px;
            margin: 20px 0;
            background: #eff6ff;
            font-style: italic;
            color: #1e40af;
        }}
        
        /* Footer and Signatures */
        .signature-section {{
            margin-top: 60px;
            padding: 30px 0;
            border-top: 2px solid #e5e7eb;
        }}
        
        .signature-line {{
            margin: 30px 0;
            border-bottom: 1px solid #9ca3af;
            padding-bottom: 5px;
            width: 300px;
        }}
        
        .document-footer {{
            background: #f8fafc;
            padding: 20px;
            margin-top: 40px;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
            font-size: 10px;
            color: #6b7280;
        }}
        
        /* Print Specific Styles */
        @media print {{
            body {{
                font-size: 10px;
                line-height: 1.4;
            }}
            
            .container {{
                padding: 0.5in;
            }}
            
            h1 {{
                page-break-before: always;
                font-size: 18px;
            }}
            
            h1:first-of-type {{
                page-break-before: avoid;
            }}
            
            h2, h3 {{
                page-break-after: avoid;
            }}
            
            .article-section {{
                page-break-inside: avoid;
            }}
            
            .toc {{
                page-break-after: always;
            }}
        }}
        
        /* Page Numbers for Print */
        @page {{
            margin: 1in;
            @bottom-right {{
                content: "Page " counter(page) " of " counter(pages);
                font-size: 9px;
                color: #6b7280;
            }}
            
            @top-center {{
                content: "NexaCode Digital Services Company - Articles of Association";
                font-size: 9px;
                color: #6b7280;
            }}
        }}
        
        /* Highlighting for Important Sections */
        .important {{
            background: #fef3c7;
            border: 1px solid #f59e0b;
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
        }}
        
        .important::before {{
            content: "⚠️ Important: ";
            font-weight: 600;
            color: #d97706;
        }}
        
        /* Definition Lists */
        dl {{
            margin: 15px 0;
        }}
        
        dt {{
            font-weight: 600;
            color: #1f2937;
            margin: 10px 0 5px 0;
        }}
        
        dd {{
            margin: 0 0 10px 20px;
            color: #4b5563;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="document-header">
            <h1 class="company-name">NEXACODE DIGITAL SERVICES COMPANY</h1>
            <h2 class="document-title">ARTICLES OF ASSOCIATION</h2>
            <div class="document-info">
                <p><strong>Document Type:</strong> Articles of Association</p>
                <p><strong>Company:</strong> NexaCode Digital Services Company</p>
                <p><strong>Date Prepared:</strong> {datetime.now().strftime('%B %d, %Y')}</p>
                <p><strong>Status:</strong> Draft for Review and Approval</p>
                <p><strong>Version:</strong> 1.0</p>
            </div>
        </div>
        
        {content}
        
        <div class="document-footer">
            <p><strong>Document Information:</strong></p>
            <p>This document constitutes the Articles of Association for NexaCode Digital Services Company, a comprehensive digital services provider specializing in technology solutions, IT consulting, software development, and digital platform management.</p>
            <p><strong>Legal Notice:</strong> This document should be reviewed by qualified legal counsel before adoption and may require modification to comply with specific jurisdictional requirements.</p>
            <p><strong>Generated:</strong> {datetime.now().strftime('%B %d, %Y at %I:%M %p')}</p>
        </div>
    </div>
</body>
</html>
"""

def convert_to_pdf():
    """Convert markdown to PDF"""
    try:
        # Read the markdown file
        with open('ARTICLES_OF_ASSOCIATION.md', 'r', encoding='utf-8') as f:
            markdown_content = f.read()
        
        # Convert markdown to HTML
        md = markdown.Markdown(extensions=['toc', 'tables', 'fenced_code'])
        html_content = md.convert(markdown_content)
        
        # Create styled HTML
        styled_html = create_html_template(html_content)
        
        # Save HTML file (for debugging)
        with open('ARTICLES_OF_ASSOCIATION.html', 'w', encoding='utf-8') as f:
            f.write(styled_html)
        
        # Try to convert to PDF using weasyprint
        try:
            from weasyprint import HTML, CSS
            from weasyprint.text.fonts import FontConfiguration
            
            font_config = FontConfiguration()
            
            html_doc = HTML(string=styled_html)
            css = CSS(string='''
                @page {
                    size: A4;
                    margin: 1in;
                    @bottom-right {
                        content: "Page " counter(page);
                    }
                }
            ''', font_config=font_config)
            
            html_doc.write_pdf('NexaCode_Articles_of_Association.pdf', stylesheets=[css], font_config=font_config)
            print("✅ PDF successfully created: NexaCode_Articles_of_Association.pdf")
            
        except ImportError:
            print("⚠️ WeasyPrint not available, creating HTML version only")
            print("📄 HTML version created: ARTICLES_OF_ASSOCIATION.html")
            print("💡 You can open this in a browser and print to PDF")
            
    except Exception as e:
        print(f"❌ Error creating PDF: {str(e)}")
        print("📝 Creating basic HTML version...")
        
        # Fallback: create basic HTML
        try:
            with open('ARTICLES_OF_ASSOCIATION.md', 'r', encoding='utf-8') as f:
                markdown_content = f.read()
            
            md = markdown.Markdown()
            html_content = md.convert(markdown_content)
            styled_html = create_html_template(html_content)
            
            with open('ARTICLES_OF_ASSOCIATION.html', 'w', encoding='utf-8') as f:
                f.write(styled_html)
            
            print("✅ HTML version created successfully!")
            print("💡 Open ARTICLES_OF_ASSOCIATION.html in your browser and use Print > Save as PDF")
            
        except Exception as fallback_error:
            print(f"❌ Fallback failed: {str(fallback_error)}")

if __name__ == "__main__":
    print("🏢 NexaCode Articles of Association - PDF Generator")
    print("=" * 50)
    convert_to_pdf()
    print("=" * 50)
    print("✨ Process completed!")