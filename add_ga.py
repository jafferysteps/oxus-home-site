import os
import glob

ga_code = """<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Q0TB4BG8C8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Q0TB4BG8C8');
</script>
</head>"""

files = glob.glob('**/*.html', recursive=True)
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'G-Q0TB4BG8C8' not in content:
        content = content.replace('</head>', ga_code)
        with open(file, 'w', encoding='utf-8', newline='') as f:
            f.write(content)
