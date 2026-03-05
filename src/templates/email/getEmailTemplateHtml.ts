import { EMAIL, EMAIL_DEFAULT } from '@/constants';

export type EmailTemplateProps = {
  headline?: string;
  body?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  footerLine?: string;
  unsubscribeUrl?: string;
  previewText?: string;
};

/**
 * Returns a full HTML string for a soft, responsive email template (table-based, inline styles).
 * Use with any email API (Resend, Nodemailer, etc.).
 */
export function getEmailTemplateHtml(props: EmailTemplateProps = {}): string {
  const {
    headline = EMAIL_DEFAULT.headline,
    body = EMAIL_DEFAULT.body,
    ctaLabel = EMAIL_DEFAULT.ctaLabel,
    ctaUrl = EMAIL_DEFAULT.ctaUrl,
    footerLine = EMAIL_DEFAULT.footerLine,
    unsubscribeUrl,
    previewText = headline,
  } = props;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${EMAIL.brandName}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style type="text/css">
    @media only screen and (max-width: 620px) {
      .wrapper { width: 100% !important; max-width: 100% !important; }
      .inner { padding-left: 20px !important; padding-right: 20px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <div style="display:none; max-height:0; overflow:hidden;">${previewText}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 16px;">
        <table role="presentation" class="wrapper" width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:600px; width:100%; background-color:#ffffff; border-radius:12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
          <tr>
            <td class="inner" style="padding: 48px 40px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding-bottom: 32px;">
                    <span style="font-size: 22px; font-weight: 600; color: #0a0a0f;">${EMAIL.brandName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 24px;">
                    <h1 style="margin:0; font-size: 24px; font-weight: 600; line-height: 1.35; color: #0a0a0f;">${headline}</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 32px;">
                    <p style="margin:0; font-size: 16px; line-height: 1.6; color: #4a4a5a;">${body}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="${ctaUrl}" style="display: inline-block; padding: 14px 28px; background-color: ${EMAIL.brandColor}; color: #ffffff; font-size: 16px; font-weight: 500; text-decoration: none; border-radius: 100px;">${ctaLabel}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 40px 32px; border-top: 1px solid #eaeaea;">
              <p style="margin:0 0 8px; font-size: 12px; line-height: 1.5; color: #7a7994;">${footerLine}</p>
              ${unsubscribeUrl ? `<p style="margin:0; font-size: 12px;"><a href="${unsubscribeUrl}" style="color: ${EMAIL.brandColor}; text-decoration: underline;">${EMAIL_DEFAULT.unsubscribeLabel}</a></p>` : ''}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
