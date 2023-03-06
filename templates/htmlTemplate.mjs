

export default function renderHTML(content, css) {
  return `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="https://admirable-pegasus-a42d6b.netlify.app/transformations/fdst-web/rds.css" />
    <script src="https://admirable-pegasus-a42d6b.netlify.app/transformations/fdst-web/rds-icon.js"></script>
    <style>
      ${css}
    </style>
    <style>

      html, body {
        font-size: 16px;
        margin: 0; padding: 0;
        background-color: var( --rds-color-primary-5 );
        color: var( --rds-color-grey-2 );
      }

      .markdown-body {
        font: var( --rds-type-text );
      }

      .markdown-body h2 {
        font: var( --rds-type-text-8 );
        margin-top: calc( var( --rds-spacing-2 ) + var( --rds-spacing-0-6 ));
        margin-bottom: var( --rds-spacing-1 );
        padding: 0;
      }

      .header {
        background-color: var( --color-header );
        color: var( --color-header-text );
        font-size: 1.4em;
        height: 140px;
        display: flex;
        justify-content: center;
      }

        .header-content {
          display: flex;
          justify-content: start;
          align-items: center;
          width: 100%;
        }

        .markdown-content,
        .header-content {
          padding-left: 80px;
          padding-right: 80px;
          max-width: 1000px;
          margin: 0 auto;
          font-size: 16px;
        }

        .markdown-content {
          padding-top: 40px;
          padding-bottom: 80px;
        }

        .markdown-content img {
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        }

      @media (max-width:768px) {
        .markdown-content,
        .header-content {
          padding-left: 40px;
          padding-right: 40px;
          font-size: 14px;
        }
        .markdown-content {
          padding-top: 30px;
          padding-bottom: 40px;
        }
      }
      @media (max-width:500px) {
        .markdown-content, .header-content {
          font-size: 12px;
        }
        .markdown-content {
          padding-top: 20px;
          padding-bottom: 30px;
        }
      }


      @media (prefers-color-scheme: dark) {
        .markdown-body {
          color-scheme: dark;
          --color-prettylights-syntax-comment: #8b949e;
          --color-prettylights-syntax-constant: #79c0ff;
          --color-prettylights-syntax-entity: #d2a8ff;
          --color-prettylights-syntax-storage-modifier-import: #c9d1d9;
          --color-prettylights-syntax-entity-tag: #7ee787;
          --color-prettylights-syntax-keyword: #ff7b72;
          --color-prettylights-syntax-string: #a5d6ff;
          --color-prettylights-syntax-variable: #ffa657;
          --color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
          --color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
          --color-prettylights-syntax-invalid-illegal-bg: #8e1519;
          --color-prettylights-syntax-carriage-return-text: #f0f6fc;
          --color-prettylights-syntax-carriage-return-bg: #b62324;
          --color-prettylights-syntax-string-regexp: #7ee787;
          --color-prettylights-syntax-markup-list: #f2cc60;
          --color-prettylights-syntax-markup-heading: #1f6feb;
          --color-prettylights-syntax-markup-italic: #c9d1d9;
          --color-prettylights-syntax-markup-bold: #c9d1d9;
          --color-prettylights-syntax-markup-deleted-text: #ffdcd7;
          --color-prettylights-syntax-markup-deleted-bg: #67060c;
          --color-prettylights-syntax-markup-inserted-text: #aff5b4;
          --color-prettylights-syntax-markup-inserted-bg: #033a16;
          --color-prettylights-syntax-markup-changed-text: #ffdfb6;
          --color-prettylights-syntax-markup-changed-bg: #5a1e02;
          --color-prettylights-syntax-markup-ignored-text: #c9d1d9;
          --color-prettylights-syntax-markup-ignored-bg: #1158c7;
          --color-prettylights-syntax-meta-diff-range: #d2a8ff;
          --color-prettylights-syntax-brackethighlighter-angle: #8b949e;
          --color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;
          --color-prettylights-syntax-constant-other-reference-link: #a5d6ff;

          --color-fg-default: var( --rds-color-grey-9 );
          --color-fg-muted: var( --rds-color-grey-8 );
          --color-fg-subtle: var( --rds-color-grey-7 );
          --color-canvas-default: var( --rds-color-grey-0 );
          --color-canvas-subtle: var( --rds-color-grey-1 );
          --color-border-default: var( --rds-color-grey-2 );
          --color-border-muted: var( --rds-color-grey-4 );
          --color-neutral-muted: var( --rds-color-grey-5 );
          --color-accent-fg: var( --rds-color-primary-5 );
          --color-accent-emphasis: var( --rds-color-primary-5 );
          --color-attention-subtle: var( --rds-color-primary-1 );
          --color-danger-fg: var( --rds-color-primary-1 );

          --color-header: var( --rds-color-primary-5 );
          --color-header-text: var( --rds-color-grey-10 );
        }
      }
      
      @media (prefers-color-scheme: light) {
        .markdown-body {
          color-scheme: light;
          --color-prettylights-syntax-comment: #6e7781;
          --color-prettylights-syntax-constant: #0550ae;
          --color-prettylights-syntax-entity: #8250df;
          --color-prettylights-syntax-storage-modifier-import: #24292f;
          --color-prettylights-syntax-entity-tag: #116329;
          --color-prettylights-syntax-keyword: #cf222e;
          --color-prettylights-syntax-string: #0a3069;
          --color-prettylights-syntax-variable: #953800;
          --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
          --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
          --color-prettylights-syntax-invalid-illegal-bg: #82071e;
          --color-prettylights-syntax-carriage-return-text: #f6f8fa;
          --color-prettylights-syntax-carriage-return-bg: #cf222e;
          --color-prettylights-syntax-string-regexp: #116329;
          --color-prettylights-syntax-markup-list: #3b2300;
          --color-prettylights-syntax-markup-heading: #0550ae;
          --color-prettylights-syntax-markup-italic: #24292f;
          --color-prettylights-syntax-markup-bold: #24292f;
          --color-prettylights-syntax-markup-deleted-text: #82071e;
          --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
          --color-prettylights-syntax-markup-inserted-text: #116329;
          --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
          --color-prettylights-syntax-markup-changed-text: #953800;
          --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
          --color-prettylights-syntax-markup-ignored-text: #eaeef2;
          --color-prettylights-syntax-markup-ignored-bg: #0550ae;
          --color-prettylights-syntax-meta-diff-range: #8250df;
          --color-prettylights-syntax-brackethighlighter-angle: #57606a;
          --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
          --color-prettylights-syntax-constant-other-reference-link: #0a3069;

          --color-fg-default: var( --rds-color-grey-2 );
          --color-fg-muted: var( --rds-color-grey-4 );
          --color-fg-subtle: var( --rds-color-grey-3 );
          --color-canvas-default: var( --rds-color-grey-10 );
          --color-canvas-subtle: var( --rds-color-grey-95 );
          --color-border-default: var( --rds-color-grey-8 );
          --color-border-muted: var( --rds-color-grey-6 );
          --color-neutral-muted: var( --rds-color-grey-5 );
          --color-accent-fg: var( --rds-color-primary-5 );
          --color-accent-emphasis: var( --rds-color-primary-5 );
          --color-attention-subtle: var( --rds-color-primary-9 );
          --color-danger-fg: var( --rds-color-primary-9 );

          --color-header: var( --rds-color-primary-5 );
          --color-header-text: var( --rds-color-grey-10 );
        }
      }
    </style>
  </head>
  <body class="markdown-body">
      <div class="header">
        <div class="header-content">
          <rds-icon icon="contentful-content-type-widget"
            style="width: 40px; height: 40px;"></rds-icon>
          <svg xmlns="http://www.w3.org/2000/svg"
            style="margin-right: 20px;"
            viewBox="0 0 640 512"
            width="40px" height="40px"
            fill="#fff">
            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path d="M144 64C138.6 64 133.2 64.39 128 65.13V464C128 472.8 120.8 480 112 480C103.2 480 96 472.8 96 464V74.78C58.16 92.75 32 131.3 32 176V464C32 472.8 24.84 480 16 480C7.164 480 0 472.8 0 464V176C0 96.47 64.47 32 144 32H150.6C196.8 32 240.2 54.2 267.3 91.69L392.7 265.4C417.5 299.7 457.2 320 499.6 320H512C565 320 608 277 608 224V218.1C608 178.1 581.1 143.6 544 132.1V255.1C544 264.8 536.8 271.1 528 271.1C519.2 271.1 512 264.8 512 255.1V128.1C489.5 128.9 467.6 134.9 448 145.5V240C448 248.8 440.8 256 432 256C423.2 256 416 248.8 416 240V168.1L394.6 187.1C388 193.8 377.9 193.2 372 186.6C366.2 180 366.8 169.9 373.4 164L399.8 140.6C432.1 111.9 473.8 96 517 96C584.9 96 640 151.1 640 218.1V464C640 472.8 632.8 480 624 480C615.2 480 608 472.8 608 464V308.7C584.5 335.2 550.2 352 512 352V464C512 472.8 504.8 480 496 480C487.2 480 480 472.8 480 464V350.8C457.2 348.1 435.4 340.6 416 329.1V464C416 472.8 408.8 480 400 480C391.2 480 384 472.8 384 464V304.3C377.8 298.1 372 291.4 366.8 284.1L319.1 219.3V464C319.1 472.8 312.8 480 303.1 480C295.2 480 287.1 472.8 287.1 464V175L241.3 110.4C236.3 103.4 230.4 97.03 223.1 91.44V464C223.1 472.8 216.8 480 207.1 480C199.2 480 191.1 472.8 191.1 464V71.95C178.1 66.77 164.9 64 150.6 64L144 64z"/>
          </svg>  
          <div style="font-size: 1.5em;">Contentful Content Type</div>
        </div>
      </div>
      <div class="markdown-content">
        ${content}
      </div>
  </body>
</html>`;
}